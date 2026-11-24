// Zero-dependency production server for the ProbCapital marketing site
// when hosted outside Vercel (Coolify/Contabo). Replicates the behavior
// that vercel.json + the api/ functions provided on Vercel:
//   - static SPA from packages/web/dist with SPA fallback
//   - security headers from vercel.json
//   - GET /api/quotes/:symbol  -> Yahoo Finance chart proxy (was a rewrite)
//   - POST /api/contact        -> api/contact.js handler (unchanged)
//   - sensitive paths (/.env, /.git, ...) -> api/notfound.js joke 404
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const DIST = process.env.DIST_DIR || join(ROOT, "packages", "web", "dist");
const PORT = Number(process.env.PORT || 3000);

const HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Access-Control-Allow-Origin": "https://www.probcapital.com",
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self' 'sha256-e5Dzbpl0o4QxAAPhpah9vQKIKxpaHFeLXzgrzLQBmJE=' 'sha256-gwxJoQCBUt09GIrGVjxtmss4qQSsj0bjjUB9amNts9s=' https://collector.onedollarstats.com; style-src 'self' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: blob: https:; connect-src 'self' https://collector.onedollarstats.com https://ipapi.co https://app.probcapital.com; frame-src 'self'; worker-src 'self' blob:; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'",
};

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
};

// Minimal Vercel-style res shim for the api/ handlers.
function shimRes(res) {
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (obj) => {
    if (!res.hasHeader("Content-Type")) res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(obj));
    return res;
  };
  res.send = (body) => {
    res.end(body);
    return res;
  };
  return res;
}

let contactHandler = null;
let notfoundHandler = null;
try {
  contactHandler = (await import("../api/contact.js")).default;
} catch (e) {
  console.error("[server] contact handler unavailable:", e.message);
}
try {
  notfoundHandler = (await import("../api/notfound.js")).default;
} catch (e) {
  console.error("[server] notfound handler unavailable:", e.message);
}

const SENSITIVE = /^\/(?:\.env(?:\..*)?|\.git(?:\/.*)?|\.svn(?:\/.*)?|\.hg(?:\/.*)?|\.DS_Store)$/;

function serveFile(res, filePath, cacheControl) {
  const ext = extname(filePath).toLowerCase();
  res.setHeader("Content-Type", MIME[ext] || "application/octet-stream");
  if (cacheControl) res.setHeader("Cache-Control", cacheControl);
  createReadStream(filePath).pipe(res);
}

const server = createServer(async (req, res) => {
  for (const [k, v] of Object.entries(HEADERS)) res.setHeader(k, v);
  const url = new URL(req.url, "http://localhost");
  const path = decodeURIComponent(url.pathname);

  try {
    if (SENSITIVE.test(path)) {
      if (notfoundHandler) return await notfoundHandler(req, shimRes(res));
      res.statusCode = 404;
      return res.end("Not Found");
    }

    if (path === "/api/notfound") {
      if (notfoundHandler) return await notfoundHandler(req, shimRes(res));
      res.statusCode = 404;
      return res.end("Not Found");
    }

    if (path === "/api/contact") {
      if (!contactHandler) {
        res.statusCode = 501;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify({ ok: false, reason: "not_configured" }));
      }
      return await contactHandler(req, shimRes(res));
    }

    const quotesMatch = path.match(/^\/api\/quotes\/([A-Za-z0-9.^=_-]+)$/);
    if (quotesMatch) {
      const symbol = quotesMatch[1];
      const interval = url.searchParams.get("interval") || "1d";
      const range = url.searchParams.get("range") || "2d";
      const upstream = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=${encodeURIComponent(interval)}&range=${encodeURIComponent(range)}`;
      try {
        const r = await fetch(upstream, { headers: { "User-Agent": "Mozilla/5.0" } });
        res.statusCode = r.status;
        res.setHeader("Content-Type", r.headers.get("content-type") || "application/json");
        res.end(Buffer.from(await r.arrayBuffer()));
      } catch {
        res.statusCode = 502;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "upstream_unavailable" }));
      }
      return;
    }

    if (path.startsWith("/api/")) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify({ error: "not_found" }));
    }

    if (req.method !== "GET" && req.method !== "HEAD") {
      res.statusCode = 405;
      return res.end("Method Not Allowed");
    }

    // vercel.json rewrite: /security.txt -> /.well-known/security.txt
    const effectivePath = path === "/security.txt" ? "/.well-known/security.txt" : path;

    const safePath = normalize(effectivePath).replace(/^(\.\.[/\\])+/, "");
    const filePath = join(DIST, safePath);
    if (filePath.startsWith(DIST) && existsSync(filePath) && statSync(filePath).isFile()) {
      const cache = safePath.startsWith("/assets/")
        ? "public, max-age=31536000, immutable"
        : safePath.endsWith("index.html")
          ? "no-cache"
          : "public, max-age=3600";
      return serveFile(res, filePath, cache);
    }

    // SPA fallback
    const indexPath = join(DIST, "index.html");
    if (existsSync(indexPath)) return serveFile(res, indexPath, "no-cache");
    res.statusCode = 404;
    return res.end("Not Found");
  } catch (e) {
    console.error("[server] error:", e);
    if (!res.headersSent) res.statusCode = 500;
    return res.end("Internal Server Error");
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`[server] probcapital-site listening on ${PORT}, dist=${DIST}`);
});
