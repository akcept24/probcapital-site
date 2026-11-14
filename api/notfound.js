// Catch-all 404 responder for sensitive-path probes (/.env, /.git/*, ...).
//
// vercel.json rewrites those paths here instead of letting them fall
// through to the SPA fallback (which answered 200 + index.html and made
// scanners report "returns the app fallback page"). A rewrite restarts
// routing, so a rewrite to a nonexistent path lands on the SPA catch-all
// again — a rewrite to this function resolves in the filesystem phase
// and its 404 status is honored.
//
// The body is a joke page for whoever pokes at these paths (Vitaliy's
// idea, 2026-11-14): the status stays an honest 404, the human gets a
// meme. Self-contained: inline CSS only, no scripts (the site CSP has
// no script 'unsafe-inline' anymore), no external assets.
const PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="noindex" />
<title>404 — Nothing to catch here | ProbCapital</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; display: flex; align-items: center; justify-content: center;
    background: #0B1210; color: #E8F0EC; font-family: Georgia, 'Times New Roman', serif;
    padding: 24px;
  }
  .card { max-width: 640px; text-align: center; }
  .code {
    font-size: clamp(90px, 18vw, 170px); font-weight: 800; line-height: 1;
    background: linear-gradient(135deg, #0C8A5C, #0A7350);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .fish { font-size: clamp(44px, 9vw, 72px); margin: 10px 0 4px; }
  h1 { font-size: clamp(24px, 5vw, 36px); margin: 12px 0 6px; }
  .gold { color: #C9A86A; }
  p { font-size: 17px; line-height: 1.6; color: #B9C8C0; margin: 10px 0; }
  .mono {
    font-family: 'Courier New', monospace; font-size: 14px; color: #7EE2B8;
    background: #122019; border: 1px solid #1E3A2E; border-radius: 10px;
    padding: 14px 16px; margin: 20px 0; text-align: left; white-space: pre-wrap;
  }
  a.btn {
    display: inline-block; margin-top: 14px; padding: 13px 30px; border-radius: 999px;
    background: linear-gradient(135deg, #0C8A5C, #0A7350); color: #fff;
    text-decoration: none; font-size: 16px; font-weight: 700;
  }
  .tiny { font-size: 12.5px; color: #5F7269; margin-top: 22px; }
</style>
</head>
<body>
  <div class="card">
    <div class="code">404</div>
    <div class="fish">🎣 … 🐟💨</div>
    <h1>Ловить здесь <span class="gold">нечего</span>.</h1>
    <p>Привет, хакер. Да, мы знаем, зачем ты сюда залез.<br/>
    <b>.env</b> уехал. <b>.git</b> в отпуске. Ключи, пароли и «админка за углом» — всё мимо.</p>
    <div class="mono">$ cat /.env
cat: /.env: No such file or directory
$ ls /.git
ls: /.git: Nothing to steal here
$ sudo make-me-a-millionaire
Permission denied (and nice try 😄)</div>
    <p>Но упорство мы уважаем. Держи печеньку 🍪 — и иди торговать честно, у нас как раз челленджи до $400 000.</p>
    <a class="btn" href="https://www.probcapital.com/">← Вернуться торговать</a>
    <p class="tiny">ProbCapital LLC · This page is a 404 with a sense of humor. The status code is real, the secrets are not here.</p>
  </div>
</body>
</html>`;

export default async function handler(req, res) {
  res.status(404).setHeader('Content-Type', 'text/html; charset=utf-8').send(PAGE);
}
