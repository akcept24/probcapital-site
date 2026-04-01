import { useLang } from "../i18n/LangContext";
import { appPlans } from "../lib/app-links";

export default function Hero() {
  const { tr } = useLang();

  return (
    <section className="relative overflow-hidden bg-[#0F1117]">
      {/* Full-bleed photo + centered copy (reference layout) */}
      <div className="relative flex min-h-[min(92vh,920px)] flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-trader.png"
            alt=""
            className="h-full w-full object-cover object-[68%_28%] sm:object-[64%_center] lg:object-[58%_22%]"
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
          />
          {/* Readability: darken left/center for text, keep trader visible on the right */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(90deg, rgba(10,12,18,0.94) 0%, rgba(10,12,18,0.78) 28%, rgba(10,12,18,0.35) 55%, rgba(10,12,18,0.12) 72%, transparent 100%),
                linear-gradient(180deg, rgba(15,17,23,0.82) 0%, transparent 35%, transparent 55%, rgba(15,17,23,0.92) 100%),
                radial-gradient(ellipse 90% 70% at 50% 38%, rgba(0,0,0,0.45) 0%, transparent 65%)
              `,
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-14 pt-[100px]">
          <div className="mx-auto w-full max-w-[720px] text-center">
            <div
              className="fade-in-up mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-md"
              style={{
                background: "rgba(0,212,170,0.14)",
                border: "1px solid rgba(0,212,170,0.4)",
                boxShadow: "0 0 48px rgba(0,212,170,0.12)",
                animationDelay: "0.1s",
              }}
            >
              <span className="h-2 w-2 shrink-0 rounded-full gold-gradient pulse-gold" />
              <span className="text-[13px] font-semibold tracking-wide text-[#00FFCC]">
                {tr.hero_badge}
              </span>
            </div>

            <h1
              className="fade-in-up font-extrabold tracking-[-0.03em] text-white"
              style={{
                fontSize: "clamp(34px, 7vw, 76px)",
                lineHeight: 1.06,
                animationDelay: "0.2s",
                textShadow:
                  "0 2px 24px rgba(0,0,0,0.9), 0 10px 48px rgba(0,0,0,0.65), 0 0 2px rgba(0,0,0,1)",
              }}
            >
              {tr.hero_h1_1}
              <br />
              <span className="hero-accent-line">{tr.hero_h1_2}</span>
            </h1>

            <p
              className="fade-in-up mx-auto mt-6 max-w-[560px] leading-relaxed text-white/95"
              style={{
                fontSize: "clamp(15px, 2.2vw, 19px)",
                animationDelay: "0.3s",
                textShadow: "0 2px 18px rgba(0,0,0,0.85), 0 4px 32px rgba(0,0,0,0.5)",
              }}
            >
              {tr.hero_sub}{" "}
              <span className="font-semibold text-white">{tr.hero_sub_amount}</span> {tr.hero_sub_mid}{" "}
              <span className="font-semibold text-[#5dffdf]">{tr.hero_sub_split}</span>.
            </p>

            <div
              className="fade-in-up mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href={appPlans()}
                className="gold-gradient rounded-xl px-8 py-4 text-center text-[16px] font-bold text-[#0F1117] transition-all duration-200 hover:opacity-95 hover:brightness-105"
                style={{ boxShadow: "0 8px 36px rgba(0,212,170,0.5), 0 0 0 1px rgba(0,255,204,0.25)" }}
              >
                {tr.hero_cta1}
              </a>
              <a
                href="#how-it-works"
                className="rounded-xl border border-white/35 bg-black/20 px-8 py-4 text-center text-[16px] font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-white/55 hover:bg-white/10"
              >
                {tr.hero_cta2}
              </a>
            </div>

            <div
              className="fade-in-up mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-white/88"
              style={{ animationDelay: "0.5s" }}
            >
              {[tr.hero_trust_1, tr.hero_trust_2, tr.hero_trust_3, tr.hero_trust_4].map((text) => (
                <span
                  key={text}
                  className="flex items-center gap-1.5"
                  style={{ textShadow: "0 1px 10px rgba(0,0,0,0.85)" }}
                >
                  <span className="font-bold text-[#4ade80]">✓</span>
                  <span>{text}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard mockup — below hero band */}
      <div className="relative z-10 -mt-2 px-6 pb-20 pt-6">
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
