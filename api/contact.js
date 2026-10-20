// POST /api/contact — probcapital.com "Send a Message" form endpoint.
//
// Validates the submission, rate-limits per IP (best effort, in-memory)
// and forwards the message to the team Telegram chat («Штаб»).
// Required env vars: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID.
// No storage, no other side effects; message bodies are never logged.

const RATE_LIMIT = 5; // submissions per IP per window
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const TELEGRAM_TIMEOUT_MS = 10_000;
const TELEGRAM_MAX_TEXT = 4000; // safely under Telegram's 4096-char limit

const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_SUBJECT = 200;
const MAX_MESSAGE = 5000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// ip -> array of submission timestamps (ms). Module scope = per-instance,
// which is fine for a naive best-effort limit on serverless.
const hitsByIp = new Map();

function clientIp(req) {
  // x-real-ip is set by Vercel's edge and cannot be spoofed by the client.
  // Fallback: the LAST x-forwarded-for entry (appended by the platform);
  // the first entry is client-controlled and must never key the limiter.
  const headers = req.headers || {};
  const realIp = headers["x-real-ip"];
  if (typeof realIp === "string" && realIp.length > 0) return realIp.trim();
  const xff = headers["x-forwarded-for"];
  if (typeof xff === "string" && xff.length > 0) {
    const parts = xff.split(",");
    return parts[parts.length - 1].trim();
  }
  if (Array.isArray(xff) && xff.length > 0) return String(xff[xff.length - 1]);
  return (req.socket && req.socket.remoteAddress) || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hitsByIp.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hitsByIp.set(ip, recent);
    return true;
  }
  recent.push(now);
  hitsByIp.set(ip, recent);
  // Opportunistic cleanup so the map cannot grow without bound.
  if (hitsByIp.size > 5000) {
    for (const [key, arr] of hitsByIp) {
      if (arr.every((t) => now - t >= RATE_WINDOW_MS)) hitsByIp.delete(key);
    }
  }
  return false;
}

const MAX_BODY_BYTES = 32 * 1024; // legit payloads are ≤ ~7 KB

async function readJsonBody(req) {
  if (req.body !== undefined && req.body !== null) {
    if (typeof req.body === "string") {
      if (req.body.length > MAX_BODY_BYTES) throw new Error("body_too_large");
      return JSON.parse(req.body);
    }
    if (typeof req.body === "object") return req.body;
  }
  const chunks = [];
  let total = 0;
  for await (const chunk of req) {
    total += chunk.length;
    if (total > MAX_BODY_BYTES) throw new Error("body_too_large");
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

function cleanField(value, max) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > max) return null;
  return trimmed;
}

// Single-line fields (name, subject): collapse ALL internal whitespace —
// including CR/LF and zero-width runs — so a sender cannot forge the
// layout of the staff-chat message (e.g. a fake "Email:" line).
function cleanLine(value, max) {
  const cleaned = cleanField(value, max);
  if (cleaned === null) return null;
  return cleaned.replace(/[\s\u200B-\u200D\uFEFF]+/g, " ");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, reason: "method_not_allowed" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("[contact] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not configured");
    return res.status(501).json({ ok: false, reason: "not_configured" });
  }

  if (isRateLimited(clientIp(req))) {
    return res.status(429).json({ ok: false, reason: "rate_limited" });
  }

  let payload;
  try {
    payload = await readJsonBody(req);
  } catch {
    return res.status(400).json({ ok: false, reason: "invalid_json" });
  }

  const name = cleanLine(payload && payload.name, MAX_NAME);
  const email = cleanField(payload && payload.email, MAX_EMAIL);
  const subject = cleanLine(payload && payload.subject, MAX_SUBJECT);
  const message = cleanField(payload && payload.message, MAX_MESSAGE);
  if (!name || !email || !subject || !message || !EMAIL_RE.test(email)) {
    return res.status(400).json({ ok: false, reason: "validation_failed" });
  }

  // Plain text (no parse_mode) — user input can never break Telegram markup.
  let text =
    "📩 Сайт probcapital.com — новое сообщение\n\n" +
    `Имя: ${name}\n` +
    `Email: ${email}\n` +
    `Тема: ${subject}\n\n` +
    message;
  if (text.length > TELEGRAM_MAX_TEXT) {
    text = text.slice(0, TELEGRAM_MAX_TEXT - 1) + "…";
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TELEGRAM_TIMEOUT_MS);
  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: controller.signal,
    });
    const data = await tgRes.json().catch(() => null);
    if (!tgRes.ok || !data || data.ok !== true) {
      console.error(`[contact] telegram delivery failed: http ${tgRes.status}`);
      return res.status(502).json({ ok: false, reason: "delivery_failed" });
    }
  } catch (err) {
    console.error(`[contact] telegram request error: ${err && err.name ? err.name : "unknown"}`);
    return res.status(502).json({ ok: false, reason: "delivery_failed" });
  } finally {
    clearTimeout(timer);
  }

  return res.status(200).json({ ok: true });
}
