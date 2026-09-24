/**
 * Canonical outbound links to the ProbCapital app.
 * Use these constants everywhere instead of hardcoding
 * https://app.probcapital.com URLs across the marketing site.
 */

/** Sign-in page of the app (renders the login form). */
export const APP_LOGIN_URL = "https://app.probcapital.com/login";

/** Affiliate / partner program page of the app. */
export const AFFILIATE_SIGNUP_URL = "https://app.probcapital.com/partners";

/**
 * Challenge pricing page of the app — the entry point for starting
 * a trial / evaluation. (Note: /trial, /signup and /affiliate 404 on
 * the app, so /plans is the correct funnel entry.)
 */
export const TRIAL_SIGNUP_URL = "https://app.probcapital.com/plans";
