import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { X, Mail, Send } from "lucide-react";
import { useLang } from "../i18n/LangContext";

/** Window event that opens the support panel (e.g. dispatched from the Contact page). */
export const OPEN_CHAT_EVENT = "probcapital:open-chat";

const labels = {
  en: {
    tooltip: "Live Support",
    close: "Close",
    title: "How can we help?",
    email: "Email us",
    emailAddr: "support@probcapital.com",
    telegram: "Telegram",
    telegramHandle: "@probcapital_support",
    contact: "Contact page",
    open: "Open support panel",
  },
  ru: {
    tooltip: "Онлайн поддержка",
    close: "Закрыть",
    title: "Чем мы можем помочь?",
    email: "Написать на email",
    emailAddr: "support@probcapital.com",
    telegram: "Telegram",
    telegramHandle: "@probcapital_support",
    contact: "Страница контактов",
    open: "Открыть панель поддержки",
  },
};

export default function LiveChat() {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  const [, navigate] = useLocation();
  const l = labels[lang];

  const toggle = () => setOpen((v) => !v);

  // Allow other parts of the site (e.g. the Contact page "Open Chat" button)
  // to open the support panel programmatically.
  useEffect(() => {
    const openPanel = () => setOpen(true);
    window.addEventListener(OPEN_CHAT_EVENT, openPanel);
    return () => window.removeEventListener(OPEN_CHAT_EVENT, openPanel);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Support panel */}
      {open && (
        <div
          className="w-[280px] rounded-2xl p-5 mb-1"
          style={{
            background: "#15181F",
            border: "1px solid rgba(0,212,170,0.25)",
            boxShadow: "0 12px 48px rgba(0,0,0,0.5)",
          }}
          role="dialog"
          aria-label={l.title}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[15px] font-bold text-[#F0F2FF]">{l.title}</span>
            <button
              onClick={() => setOpen(false)}
              aria-label={l.close}
              className="w-7 h-7 rounded-full flex items-center justify-center text-[#8A8FA8] hover:text-[#F0F2FF] transition-colors"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <X size={14} />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="mailto:support@probcapital.com"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-[#F0F2FF] transition-all"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <Mail size={16} className="text-[#00D4AA] shrink-0" />
              <span>
                {l.email}
                <span className="block text-[11px] text-[#8A8FA8] font-normal">{l.emailAddr}</span>
              </span>
            </a>

            <a
              href="https://t.me/probcapital_support"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-[#F0F2FF] transition-all"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <Send size={16} className="text-[#00D4AA] shrink-0" />
              <span>
                {l.telegram}
                <span className="block text-[11px] text-[#8A8FA8] font-normal">{l.telegramHandle}</span>
              </span>
            </a>

            <button
              onClick={() => { setOpen(false); navigate("/contact"); }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-[#F0F2FF] transition-all text-left cursor-pointer"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <span className="text-[#00D4AA] text-[16px] shrink-0">💬</span>
              <span>{l.contact}</span>
            </button>
          </div>
        </div>
      )}

      {/* Tooltip */}
      {hovered && !open && (
        <div className="px-3 py-1.5 rounded-lg text-[12px] font-semibold text-[#0F1117]"
          style={{ background: "linear-gradient(135deg,#00C49A,#00D4AA)", boxShadow: "0 4px 16px rgba(0,212,170,0.3)", whiteSpace: "nowrap" }}>
          {l.tooltip}
        </div>
      )}

      {/* Bubble button */}
      <button
        onClick={toggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 gold-gradient"
        style={{ boxShadow: "0 4px 24px rgba(0,212,170,0.4)", transform: hovered || open ? "scale(1.08)" : "scale(1)" }}
        aria-label={open ? l.close : l.open}
        aria-expanded={open}
      >
        {open ? (
          <X size={24} color="#0F1117" />
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="#0F1117"/>
            <circle cx="8" cy="10" r="1.2" fill="#00D4AA"/>
            <circle cx="12" cy="10" r="1.2" fill="#00D4AA"/>
            <circle cx="16" cy="10" r="1.2" fill="#00D4AA"/>
          </svg>
        )}
      </button>
    </div>
  );
}
