import { useState, useEffect } from "react";
import { useLang } from "../i18n/LangContext";

const navKeys = [
  { key: "nav_howItWorks" as const, href: "#how-it-works" },
  { key: "nav_challenges" as const, href: "#challenges" },
  { key: "nav_features" as const, href: "#features" },
  { key: "nav_faq" as const, href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, tr } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,11,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.png" alt="Probcapital" className="w-9 h-9 rounded-lg object-cover" />
          <span className="font-bold text-[17px] tracking-tight">
            <span className="gold-text">Prob</span>
            <span className="text-[#F0F2FF]">capital</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navKeys.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="text-[14px] text-[#8A8FA8] hover:text-[#F0F2FF] transition-colors duration-200 font-medium"
            >
              {tr[l.key]}
            </a>
          ))}
          <a href="/about" className="text-[14px] text-[#8A8FA8] hover:text-[#F0F2FF] transition-colors duration-200 font-medium">
            {lang === "ru" ? "О нас" : "About"}
          </a>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Lang switcher */}
          <div
            className="flex items-center rounded-lg overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}
          >
            {(["ru", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="px-3 py-1.5 text-[13px] font-semibold uppercase transition-all duration-200"
                style={
                  lang === l
                    ? { background: "linear-gradient(135deg,#00D4AA,#00FFCC)", color: "#0F1117" }
                    : { color: "#8A8FA8" }
                }
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer"
            className="text-[14px] text-[#8A8FA8] hover:text-[#F0F2FF] transition-colors font-medium px-4 py-2"
          >
            {tr.nav_login}
          </a>
          <a
            href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer"
            className="gold-gradient text-[#0F1117] text-[14px] font-bold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            {tr.nav_getFunded}
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-5 h-0.5 bg-[#F0F2FF] transition-all duration-200"
            style={{ transform: menuOpen ? "rotate(45deg) translate(3px,3px)" : "none" }} />
          <span className="block w-5 h-0.5 bg-[#F0F2FF] transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 bg-[#F0F2FF] transition-all duration-200"
            style={{ transform: menuOpen ? "rotate(-45deg) translate(3px,-3px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0F1117]">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-4">
            {/* Mobile lang switcher */}
            <div className="flex gap-2">
              {(["ru", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-4 py-1.5 rounded-lg text-[13px] font-bold uppercase transition-all duration-200"
                  style={
                    lang === l
                      ? { background: "linear-gradient(135deg,#00D4AA,#00FFCC)", color: "#0F1117" }
                      : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#8A8FA8" }
                  }
                >
                  {l}
                </button>
              ))}
            </div>
            {navKeys.map((l) => (
              <a
                key={l.key}
                href={l.href}
                className="text-[15px] text-[#8A8FA8] hover:text-[#F0F2FF] transition-colors font-medium py-1"
                onClick={() => setMenuOpen(false)}
              >
                {tr[l.key]}
              </a>
            ))}
            <a href="/about" className="text-[15px] text-[#8A8FA8] hover:text-[#F0F2FF] transition-colors font-medium py-1" onClick={() => setMenuOpen(false)}>
              {lang === "ru" ? "О нас" : "About"}
            </a>
            <a
              href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer"
              className="gold-gradient text-[#0F1117] text-[14px] font-bold px-5 py-3 rounded-lg text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              {tr.nav_getFunded}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
