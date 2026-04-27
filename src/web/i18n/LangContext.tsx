import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang, t, Translations } from "./translations";

// CIS country codes → auto-Russian
const CIS_CODES = new Set([
  "RU", "BY", "KZ", "UZ", "AM", "AZ", "KG", "TJ", "MD", "TM",
]);

const STORAGE_KEY = "pc_lang";

function getSavedLang(): Lang | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "ru" || v === "en") return v;
  } catch {}
  return null;
}

function saveLang(l: Lang) {
  try { localStorage.setItem(STORAGE_KEY, l); } catch {}
}

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: Translations;
  geoLoading: boolean;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  tr: t.en,
  geoLoading: true,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [geoLoading, setGeoLoading] = useState(true);

  useEffect(() => {
    // 1. If user already made a manual choice — respect it
    const saved = getSavedLang();
    if (saved) {
      setLangState(saved);
      setGeoLoading(false);
      return;
    }

    // 2. Detect by IP geo
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000); // 3s timeout

    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then(r => r.json())
      .then(data => {
        const code: string = (data?.country_code || "").toUpperCase();
        const detected: Lang = CIS_CODES.has(code) ? "ru" : "en";
        setLangState(detected);
        // Don't save to localStorage — only save on manual switch
      })
      .catch(() => {
        // Fallback: try browser language
        const bl = navigator.language?.slice(0, 2).toLowerCase();
        if (bl === "ru") setLangState("ru");
        // else keep "en"
      })
      .finally(() => {
        clearTimeout(timer);
        setGeoLoading(false);
      });

    return () => { clearTimeout(timer); controller.abort(); };
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    saveLang(l); // persist manual choice
  }

  return (
    <LangContext.Provider value={{ lang, setLang, tr: t[lang], geoLoading }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
