import { useLang } from "../i18n/LangContext";

const labels = {
  en: {
    badge: "Proprietary Platform",
    h2_1: "Trade on",
    h2_2: "ProbTrader",
    sub: "Our fully in-house built platform — designed from scratch for funded traders. MT4 & MT5 also supported.",
    built: "Built in-house",
    built_sub: "MT4 & MT5 also available.",
    features: [
      { icon: "⚡", title: "Ultra-Low Latency", desc: "Sub-millisecond order execution. No requotes, no slippage on limit orders." },
      { icon: "📊", title: "Advanced Charting", desc: "50+ indicators, multi-timeframe analysis, custom drawing tools built in." },
      { icon: "🛡️", title: "Risk Dashboard", desc: "Real-time drawdown meter, daily P&L, equity curve — all on one screen." },
      { icon: "📱", title: "Mobile & Desktop", desc: "Full-featured on iOS, Android, Windows and Mac. One account, all devices." },
      { icon: "🤖", title: "Algo Trading", desc: "Native EA support via our open API. Backtest, optimize and deploy directly." },
      { icon: "🔔", title: "Smart Alerts", desc: "Price alerts, drawdown warnings, news events — push notifications in real time." },
    ],
    available: "Available on",
    devices: ["iOS", "Android", "Windows", "macOS", "Web"],
    cta: "Try ProbTrader Free →",
    cta2: "View Documentation",
    exclusive: "Exclusive to Probcapital traders",
  },
  ru: {
    badge: "Собственная платформа",
    h2_1: "Торгуйте на",
    h2_2: "ProbTrader",
    sub: "Наша собственная платформа, разработанная с нуля для финансируемых трейдеров. MT4 и MT5 также поддерживаются.",
    built: "Собственная разработка",
    built_sub: "Никаких сторонних зависимостей. Полный контроль.",
    features: [
      { icon: "⚡", title: "Сверхбыстрое исполнение", desc: "Исполнение ордеров за миллисекунды. Без реквот и проскальзываний на лимитных ордерах." },
      { icon: "📊", title: "Продвинутые графики", desc: "50+ индикаторов, мультитаймфреймный анализ, встроенные инструменты рисования." },
      { icon: "🛡️", title: "Риск-дашборд", desc: "Счётчик просадки в реальном времени, дневной P&L, кривая доходности — всё на одном экране." },
      { icon: "📱", title: "Мобильная и десктоп", desc: "Полноценная работа на iOS, Android, Windows и Mac. Один аккаунт — все устройства." },
      { icon: "🤖", title: "Алготрейдинг", desc: "Нативная поддержка советников через открытый API. Бэктест, оптимизация и запуск прямо из платформы." },
      { icon: "🔔", title: "Умные уведомления", desc: "Ценовые алерты, предупреждения о просадке, новостные события — push-уведомления в реальном времени." },
    ],
    available: "Доступно на",
    devices: ["iOS", "Android", "Windows", "macOS", "Web"],
    cta: "Попробовать бесплатно →",
    cta2: "Документация",
    exclusive: "Доступно только трейдерам Probcapital",
  },
};

export default function Platforms() {
  const { lang } = useLang();
  const l = labels[lang];

  return (
    <section id="platform" className="py-12 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[12px] font-semibold uppercase tracking-widest"
            style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", color: "#00D4AA" }}>
            {l.badge}
          </div>
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(36px, 6vw, 64px)", letterSpacing: "-0.03em" }}>
            {l.h2_1} <span className="gold-text">{l.h2_2}</span>
          </h2>
          <p className="text-[#8A8FA8] max-w-[560px] mx-auto text-[17px] leading-relaxed">{l.sub}</p>
        </div>

        {/* Main showcase */}
        <div className="rounded-3xl overflow-hidden mb-8 relative"
          style={{ background: "#1A1D27", border: "1px solid rgba(0,212,170,0.15)", boxShadow: "0 0 80px rgba(0,212,170,0.06)" }}>

          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 800px 400px at 50% 0%, rgba(0,212,170,0.06) 0%, transparent 60%)" }} />

          {/* Top bar */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 px-8 md:px-12 pt-10 pb-8"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center gap-5">
              {/* Logo mark */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #00C49A, #00D4AA)", boxShadow: "0 8px 32px rgba(0,212,170,0.35)" }}>
                <span className="text-[#0F1117] font-black text-[22px] tracking-tight">PT</span>
              </div>
              <div>
                <div className="text-[28px] font-black text-[#F0F2FF] tracking-tight">ProbTrader</div>
                <div className="text-[13px] text-[#8A8FA8]">{l.built_sub}</div>
              </div>
            </div>
            {/* Built in-house badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)" }}>
                <span className="w-2 h-2 rounded-full bg-[#00D4AA] pulse-gold" />
                <span className="text-[13px] font-semibold text-[#00D4AA]">{l.built}</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="text-[13px] text-[#8A8FA8]">🔒 {l.exclusive}</span>
              </div>
            </div>
          </div>

          {/* Platform mockup */}
          <div className="px-6 md:px-10 py-8">
            <div className="rounded-2xl overflow-hidden"
              style={{ background: "#0F1117", border: "1px solid rgba(255,255,255,0.06)" }}>
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="mx-3 flex-1 rounded-md px-3 py-1 text-[11px] text-[#555A72]"
                  style={{ background: "rgba(255,255,255,0.04)", maxWidth: "240px" }}>
                  app.probtrader.io
                </div>
                <div className="ml-auto flex items-center gap-1.5 text-[11px] text-[#555A72]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] pulse-gold" />
                  Live
                </div>
              </div>

              {/* Chart area mockup */}
              <div className="p-4 grid grid-cols-12 gap-3" style={{ minHeight: "220px" }}>
                {/* Left sidebar */}
                <div className="col-span-2 flex flex-col gap-2">
                  {["EUR/USD", "GBP/USD", "XAU/USD", "BTC/USD", "NAS100"].map((sym, i) => (
                    <div key={sym} className="px-2 py-1.5 rounded-lg text-[10px] font-semibold transition-all"
                      style={{
                        background: i === 0 ? "rgba(0,212,170,0.12)" : "rgba(255,255,255,0.03)",
                        border: i === 0 ? "1px solid rgba(0,212,170,0.25)" : "1px solid rgba(255,255,255,0.05)",
                        color: i === 0 ? "#00D4AA" : "#8A8FA8",
                      }}>
                      {sym}
                    </div>
                  ))}
                </div>

                {/* Main chart */}
                <div className="col-span-7 rounded-xl relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                  {/* Candlestick simulation */}
                  <div className="absolute inset-0 flex items-end px-4 pb-4 gap-1.5">
                    {[
                      [60,55],[65,50],[58,62],[70,54],[63,60],[75,58],[68,72],[80,65],
                      [74,78],[85,70],[78,82],[90,75],[84,88],[95,80],[88,93],[100,85]
                    ].map(([h, l], i) => (
                      <div key={i} className="flex-1 flex flex-col items-center justify-end gap-0.5">
                        <div className="w-0.5 rounded-full" style={{ height: `${Math.abs(h - l) * 0.4}px`, background: h > l ? "#00D4AA" : "#FF4444" }} />
                        <div className="w-full rounded-sm" style={{
                          height: `${Math.abs(h - l) * 1.2}px`,
                          background: h > l
                            ? "linear-gradient(to top, rgba(0,212,170,0.6), rgba(0,212,170,0.3))"
                            : "rgba(255,68,68,0.4)",
                          minHeight: "6px",
                        }} />
                        <div className="w-0.5 rounded-full" style={{ height: `${Math.abs(h - l) * 0.3}px`, background: h > l ? "#00D4AA" : "#FF4444" }} />
                      </div>
                    ))}
                  </div>
                  {/* Price label */}
                  <div className="absolute top-3 left-3">
                    <div className="text-[10px] text-[#555A72] font-medium">EUR/USD · 1H</div>
                    <div className="text-[16px] font-black text-[#00D4AA]">1.08542</div>
                    <div className="text-[10px] text-[#00D4AA]">▲ +0.12%</div>
                  </div>
                </div>

                {/* Right panel */}
                <div className="col-span-3 flex flex-col gap-2">
                  {/* Order form */}
                  <div className="rounded-xl p-3 flex-1"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="text-[9px] text-[#555A72] uppercase tracking-wider mb-2">Quick Order</div>
                    <div className="grid grid-cols-2 gap-1 mb-2">
                      <div className="py-1.5 rounded-lg text-center text-[10px] font-bold text-[#0F1117]"
                        style={{ background: "linear-gradient(135deg,#00C49A,#00D4AA)" }}>BUY</div>
                      <div className="py-1.5 rounded-lg text-center text-[10px] font-bold"
                        style={{ background: "rgba(255,68,68,0.15)", color: "#FF4444", border: "1px solid rgba(255,68,68,0.25)" }}>SELL</div>
                    </div>
                    <div className="space-y-1">
                      {["0.10 lot", "SL: 1.08400", "TP: 1.08700"].map(v => (
                        <div key={v} className="px-2 py-1 rounded text-[9px] text-[#8A8FA8]"
                          style={{ background: "rgba(255,255,255,0.03)" }}>{v}</div>
                      ))}
                    </div>
                  </div>
                  {/* Drawdown meter */}
                  <div className="rounded-xl p-3"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="text-[9px] text-[#555A72] uppercase tracking-wider mb-2">Drawdown</div>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-[#8A8FA8]">Used</span>
                      <span className="text-[#00D4AA] font-bold">2.4%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                      <div className="h-full rounded-full" style={{ width: "24%", background: "linear-gradient(to right,#00C49A,#00D4AA)" }} />
                    </div>
                    <div className="text-[9px] text-[#555A72] mt-1">Max: 10%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Device badges + also supports */}
          <div className="px-8 md:px-12 pb-8 flex flex-wrap items-center gap-3">
            <span className="text-[12px] text-[#555A72]">{l.available}:</span>
            {[
              {
                name: "iOS",
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              },
              {
                name: "Android",
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.341A5.53 5.53 0 0118 12.95v-1.4A5.55 5.55 0 0012.45 6H11.6A5.55 5.55 0 006 11.55v1.4a5.53 5.53 0 00.477 2.391L5.1 20.7l4.2-1.5a5.53 5.53 0 002.3.5h.8a5.53 5.53 0 002.3-.5l4.2 1.5-1.377-5.359zM9 13a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2zM6.5 7.5l1.5-3 3 1.5M17.5 7.5l-1.5-3-3 1.5"/></svg>
              },
              {
                name: "Windows",
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12V6.75l6-1.32v6.57H3zm17 0V4.5l-8 1.41V12h8zM3 13h6v6.57l-6-1.32V13zm17 0h-8v6.09L20 20.5V13z"/></svg>
              },
              {
                name: "macOS",
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              },
              {
                name: "Web",
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              },
            ].map(d => (
              <span key={d.name} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold text-[#8A8FA8]"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {d.icon}
                {d.name}
              </span>
            ))}
            <span className="text-[12px] text-[#555A72] ml-1">+</span>
            {[
              { name: "MT4", img: null },
              { name: "MT5", img: "/mt5.png" },
            ].map(p => (
              <span key={p.name} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold"
                style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", color: "#00D4AA" }}>
                {p.img && <img src={p.img} alt={p.name} className="w-4 h-4 object-contain" />}
                {p.name}
              </span>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {l.features.map((f, i) => (
            <div key={i} className="p-5 rounded-2xl flex gap-4 transition-all duration-200 group"
              style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,212,170,0.2)"; el.style.boxShadow = "0 0 24px rgba(0,212,170,0.05)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.boxShadow = "none"; }}>
              <div className="text-[24px] shrink-0 mt-0.5">{f.icon}</div>
              <div>
                <div className="font-bold text-[15px] text-[#F0F2FF] mb-1">{f.title}</div>
                <div className="text-[13px] text-[#8A8FA8] leading-relaxed">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer"
            className="gold-gradient text-[#0F1117] text-[15px] font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-center"
            style={{ boxShadow: "0 8px 24px rgba(0,212,170,0.25)" }}>
            {l.cta}
          </a>
          <a href="#"
            className="text-[#F0F2FF] text-[15px] font-semibold px-8 py-4 rounded-xl text-center transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,170,0.3)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}>
            {l.cta2}
          </a>
        </div>

      </div>
    </section>
  );
}
