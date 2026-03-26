/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_URL?: string;
  /** Optional: production site origin for `/api/quotes` when running `vite` locally (e.g. https://probcapital.com) */
  readonly VITE_QUOTES_API_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
