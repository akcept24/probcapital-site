import { useState } from "react";
import { useLang } from "../i18n/LangContext";

const announcements = {
  en: "🎉 New: 1-Step Challenge is here — pass in one phase, keep up to 90% of profits. <a href='https://app.probcapital.com' target='_blank' style='color:#0F1117;font-weight:700;text-decoration:underline;'>Start now →</a>",
  ru: "🎉 Новинка: 1-шаговый челлендж — пройди за одну фазу, сохраняй до 90% прибыли. <a href='https://app.probcapital.com' target='_blank' style='color:#0F1117;font-weight:700;text-decoration:underline;'>Начать →</a>",
};

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const { lang } = useLang();

  if (!visible) return null;

  return (
    <div
      className="relative z-[60] flex items-center justify-center px-10 py-2.5 text-center text-[13px] font-medium text-[#0F1117]"
      style={{ background: "linear-gradient(90deg, #00C49A, #00D4AA, #00FFCC, #00D4AA, #00C49A)" }}
    >
      <span dangerouslySetInnerHTML={{ __html: announcements[lang] }} />
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F1117] opacity-60 hover:opacity-100 transition-opacity text-lg font-bold"
      >
        ×
      </button>
    </div>
  );
}
