import { useLang } from "../i18n/LangContext";
import { appPlans } from "../lib/app-links";

export default function Hero() {
  const { tr } = useLang();

  return (
    <section className="relative overflow-hidden bg-[#0F1117]">
      {/* Full-bleed photo */}
      <div className="absolute inset-0 z-0 min-h-[560px] lg:min-h-0">
        <img
          src="/hero-trader.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] sm:object-[65%_center] lg:object-[72%_28%]"
          width={1920}
          height={1080}
          decoding="async"
          fetchPriority="high"
        />
        {/* Readability: heavy left vignette + top/bottom fade into page bg */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg, #0F1117 0%, rgba(15,17,23,0.97) 18%, rgba(15,17,23,0.55) 52%, rgba(15,17,23,0.2) 72%, transparent 100%),
              linear-gradient(180deg, rgba(15,17,23,0.75) 0%, transparent 28%, transparent 62%, #0F1117 100%)
            `,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Copy + CTAs */}
      <div
        className="relative z-10 flex min-h-[min(100vh,920px)] flex-col justify-center px-6"
        style={{ paddingTop: "100px", paddingBottom: "2.5rem" }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-[640px] text-center lg:mx-0 lg:text-left">
            <div
              className="fade-in-up mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-md lg:mx-0 mx-auto"
              style={{
                background: "rgba(0,212,170,0.12)",
                border: "1px solid rgba(0,212,170,0.35)",
                boxShadow: "0 0 40px rgba(0,212,170,0.08)",
                animationDelay: "0.1s",
              }}
            >
              <span className="h-2 w-2 shrink-0 rounded-full gold-gradient pulse-gold" />
              <span className="text-[13px] font-semibold tracking-wide text-[#00FFCC]">
                {tr.hero_badge}
              </span>
            </div>

            <h1
              className="fade-in-up font-extrabold tracking-[-0.03em] text-[#F0F2FF]"
              style={{
                fontSize: "clamp(36px, 6.5vw, 76px)",
                lineHeight: 1.06,
                animationDelay: "0.2s",
                textShadow:
                  "0 2px 20px rgba(0,0,0,0.85), 0 8px 48px rgba(0,0,0,0.55), 0 0 1px rgba(0,0,0,1)",
              }}
            >
              {tr.hero_h1_1}
              <br />
              <span className="gold-text" style={{ filter: "drop-shadow(0 4px 24px rgba(0,212,170,0.35))" }}>
                {tr.hero_h1_2}
              </span>
            </h1>

            <p
              className="fade-in-up mx-auto mt-6 max-w-[540px] leading-relaxed text-[#C8CDDF] lg:mx-0"
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                animationDelay: "0.3s",
                textShadow: "0 2px 16px rgba(0,0,0,0.75)",
              }}
            >
              {tr.hero_sub}{" "}
              <span className="font-semibold text-white">{tr.hero_sub_amount}</span> {tr.hero_sub_mid}{" "}
              <span className="font-semibold text-[#00FFCC]">{tr.hero_sub_split}</span>.
            </p>

            <div
              className="fade-in-up mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href={appPlans()}
                className="gold-gradient rounded-xl px-8 py-4 text-center text-[16px] font-bold text-[#0F1117] transition-all duration-200 hover:opacity-95 hover:brightness-105"
                style={{ boxShadow: "0 8px 36px rgba(0,212,170,0.45), 0 0 0 1px rgba(0,255,204,0.2)" }}
              >
                {tr.hero_cta1}
              </a>
              <a
                href="#how-it-works"
                className="rounded-xl border border-white/15 bg-black/25 px-8 py-4 text-center text-[16px] font-semibold text-[#F0F2FF] backdrop-blur-md transition-all duration-200 hover:border-[rgba(0,212,170,0.45)] hover:bg-[rgba(0,212,170,0.08)]"
              >
                {tr.hero_cta2}
              </a>
            </div>

            <div
              className="fade-in-up mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-[#9BA3C0] lg:justify-start"
              style={{ animationDelay: "0.5s" }}
            >
              {[tr.hero_trust_1, tr.hero_trust_2, tr.hero_trust_3, tr.hero_trust_4].map((text) => (
                <span key={text} className="flex items-center gap-1.5" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>
                  <span className="font-bold text-[#00D4AA]">✓</span>
                  <span>{text}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard mockup — sits on solid strip below photo */}
      <div className="relative z-10 -mt-4 px-6 pb-20 pt-6">
        <div className="fade-in-up mx-auto w-full max-w-[900px]" style={{ animationDelay: "0.6s" }}>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 rounded-b-2xl"
            style={{ background: "linear-gradient(to top, rgba(0,212,170,0.1), transparent)" }}
          />
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              background: "#1A1D27",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow:
                "0 0 0 1px rgba(0,212,170,0.12), 0 40px 100px rgba(0,0,0,0.65), 0 0 80px rgba(0,212,170,0.07)",
            }}
          >
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5">
              <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <div className="h-3 w-3 rounded-full bg-[#28C840]" />
              <div className="ml-auto flex items-center gap-2 text-[12px] text-[#555A72]">
                <span className="h-2 w-2 rounded-full bg-[#22C55E] pulse-gold" />
                {tr.hero_dash_live}
              </div>
            </div>

            <div className="p-4 md:p-6">
              <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  { label: tr.hero_dash_acct, value: "$100,000", change: null },
                  { label: tr.hero_dash_bal, value: "$108,240", change: "+8.24%" },
                  { label: tr.hero_dash_profit, value: "$8,240", change: "+8.24%" },
                  { label: tr.hero_dash_days, value: "14 / 30", change: null },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-0 rounded-xl p-3"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div className="mb-1.5 truncate text-[10px] font-medium uppercase tracking-wider text-[#555A72]">
                      {stat.label}
                    </div>
                    <div className="truncate font-bold text-[#F0F2FF]" style={{ fontSize: "clamp(13px, 1.8vw, 18px)" }}>
                      {stat.value}
                    </div>
                    {stat.change && <div className="mt-1 text-[11px] font-medium text-[#22C55E]">{stat.change}</div>}
                  </div>
                ))}
              </div>

              <div
                className="relative h-[150px] overflow-hidden rounded-xl p-4"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className="absolute inset-0 flex items-end gap-1 px-4 pb-4">
                  {[40, 55, 45, 70, 60, 80, 65, 90, 75, 95, 85, 108].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background: i === 11 ? "linear-gradient(to top, #00D4AA, #00FFCC)" : "rgba(0,212,170,0.2)",
                      }}
                    />
                  ))}
                </div>
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-wider text-[#555A72]">{tr.hero_dash_label}</div>
                    <div className="gold-text mt-1 text-[20px] font-bold">+8.24%</div>
                  </div>
                  <div
                    className="whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium"
                    style={{
                      background: "rgba(34,197,94,0.12)",
                      color: "#22C55E",
                      border: "1px solid rgba(34,197,94,0.2)",
                    }}
                  >
                    Phase 1 ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
