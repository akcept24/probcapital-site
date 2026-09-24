import { useEffect } from "react";

/**
 * Sets per-page SEO head tags at runtime (title, description, OG/Twitter
 * tags, canonical URL) and the <html lang> attribute. The static index.html
 * carries the homepage defaults; pages call this to override them so every
 * route has unique, language-correct metadata.
 */
export interface PageHead {
  title: string;
  description: string;
  path: string; // e.g. "/pricing" — used for og:url and canonical
  lang: "en" | "ru";
}

const SITE = "https://www.probcapital.com";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageHead({ title, description, path, lang }: PageHead) {
  useEffect(() => {
    const url = `${SITE}${path}`;
    document.title = title;
    document.documentElement.setAttribute("lang", lang);
    upsertMeta("name", "description", description);
    upsertMeta("name", "title", title);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:locale", lang === "ru" ? "ru_RU" : "en_US");
    upsertMeta("property", "twitter:title", title);
    upsertMeta("property", "twitter:description", description);
    upsertMeta("property", "twitter:url", url);
    upsertLink("canonical", url);
  }, [title, description, path, lang]);
}
