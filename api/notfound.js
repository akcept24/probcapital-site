// Catch-all 404 responder for sensitive-path probes (/.env, /.git/*, ...).
//
// vercel.json rewrites those paths here instead of letting them fall
// through to the SPA fallback (which answered 200 + index.html and made
// scanners report "returns the app fallback page"). A rewrite restarts
// routing, so a rewrite to a nonexistent path lands on the SPA catch-all
// again — a rewrite to this function resolves in the filesystem phase
// and its 404 status is honored.
export default async function handler(req, res) {
  res.status(404).send('Not Found');
}
