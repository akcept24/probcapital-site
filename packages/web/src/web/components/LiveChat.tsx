import { useState } from "react";
import { useLang } from "../i18n/LangContext";

const labels = {
  en: { tooltip: "Live Support", close: "Close" },
  ru: { tooltip: "Онлайн поддержка", close: "Закрыть" },
};

export default function LiveChat() {
  const [hovered, setHovered] = useState(false);
  const { lang } = useLang();
  const l = labels[lang];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {hovered && (
        <div className="px-3 py-1.5 rounded-lg text-[12px] font-semibold text-[#0F1117]"
          style={{ background: "linear-gradient(135deg,#00C49A,#00D4AA)", boxShadow: "0 4px 16px rgba(0,212,170,0.3)", whiteSpace: "nowrap" }}>
          {l.tooltip}
        </div>
      )}
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 gold-gradient"
        style={{ boxShadow: "0 4px 24px rgba(0,212,170,0.4)", transform: hovered ? "scale(1.08)" : "scale(1)" }}
        aria-label="Live Chat"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="#0F1117"/>
          <circle cx="8" cy="10" r="1.2" fill="#00D4AA"/>
          <circle cx="12" cy="10" r="1.2" fill="#00D4AA"/>
          <circle cx="16" cy="10" r="1.2" fill="#00D4AA"/>
        </svg>
      </button>
    </div>
  );
}
