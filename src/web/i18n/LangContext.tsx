import { createContext, useContext, useState, ReactNode } from "react";
import { Lang, t, Translations } from "./translations";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: "ru",
  setLang: () => {},
  tr: t.ru,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");
  return (
    <LangContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
