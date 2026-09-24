import { useState } from "react";
import { useLang } from "../i18n/LangContext";
import { TRIAL_SIGNUP_URL } from "../lib/links";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const { lang } = useLang();

  if (!visible) return null;

  return (
    <div
      // In normal document flow above the (sticky) navbar — no z-index above the nav.
      className="relative flex items-center justify-center px-10 py-2.5 text-center text-[13px] font-medium text-[#0F1117]"
      style={{ background: "linear-gradient(90deg, #0ea97a, #10b981, #34d399, #10b981, #0ea97a)" }}
    >
      <span>
        🎉 {lang === "ru" ? "Новинка" : "New"}: 1-{lang === "ru" ? "шаговый челлендж" : "Step Challenge"}{" "}
        —{" "}
        {lang === "ru" 
          ? "пройди за одну фазу, сохраняй до 90% прибыли" 
          : "pass in one phase, keep up to 90% of profits"}.{" "}
        <a 
          href={TRIAL_SIGNUP_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-bold underline"
          style={{ color: "#0F1117" }}
        >
          {lang === "ru" ? "Начать" : "Start now"} →
        </a>
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F1117] opacity-60 hover:opacity-100 transition-opacity text-lg font-bold"
        aria-label="Close announcement"
      >
        ×
      </button>
    </div>
  );
}
