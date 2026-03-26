/**
 * Base URL of the Next.js dashboard (ProbCapital app).
 * Set VITE_APP_URL in .env for staging / preview (e.g. https://preview.vercel.app).
 */
export function getAppOrigin(): string {
  const raw = (import.meta.env.VITE_APP_URL as string | undefined)?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return "https://app.probcapital.com";
}

/** Full URL to a path on the app (always starts with /). */
export function appUrl(path: string): string {
  const origin = getAppOrigin();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${p}`;
}

/** Already registered — sign in */
export const appLogin = () => appUrl("/login");

/** New account (free trial, first-time signup) */
export const appRegister = () => appUrl("/register");

/**
 * Buy a challenge / pricing — requires auth; middleware sends guests to
 * /login?redirect=/plans, then back to checkout flow.
 */
export const appPlans = () => appUrl("/plans");

/** Logged-in user hub */
export const appDashboard = () => appUrl("/dashboard");

/** Terminal / trading */
export const appTerminal = () => appUrl("/terminal");

/** Partners / affiliate area */
export const appPartners = () => appUrl("/partners");

/**
 * App root — redirects by session (dashboard for users, login if not signed in).
 * Use sparingly; prefer explicit /login, /register, or /plans.
 */
export const appHome = () => appUrl("/");
