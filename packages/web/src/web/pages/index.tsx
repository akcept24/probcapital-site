import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SimDisclaimer from "../components/SimDisclaimer";
import Ticker from "../components/Ticker";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import Challenges from "../components/Challenges";
import FreeTrial from "../components/FreeTrial";
import Platforms from "../components/Platforms";
import Comparison from "../components/Comparison";
import Features from "../components/Features";
import LivePayouts from "../components/LivePayouts";
import PayoutProof from "../components/PayoutProof";
import Testimonials from "../components/Testimonials";
import Affiliate from "../components/Affiliate";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";
import { usePageHead } from "../hooks/usePageHead";

export default function Index() {
  const { lang } = useLang();
  usePageHead({
    title: lang === "ru"
      ? "ProbCapital — Оценка торговых навыков | Капитал до $400,000 | Сплит 90%"
      : "ProbCapital — Trading Skill Evaluation | Up to $400k Simulated Capital | 90% Performance Split",
    description: lang === "ru"
      ? "Пройдите программу оценки ProbCapital и получите до $400,000 симулированного капитала. Сохраняйте до 90% одобренных выплат. Разовый оценочный взнос."
      : "Complete ProbCapital's trading evaluation program and access up to $400,000 in simulated capital. Receive up to 90% of approved performance-based payouts. One-time evaluation fee.",
    path: "/",
    lang,
  });
  return (
    <div className="min-h-screen bg-[#0F1117] text-[#F0F2FF] overflow-x-hidden">
      <AnnouncementBar />
      <Navbar sticky />
      <Hero />
      <SimDisclaimer />
      <Ticker />
      <Stats />
      <HowItWorks />
      <Challenges />
      <FreeTrial />
      <Platforms />
      <Comparison />
      <Features />
      <LivePayouts />
      <PayoutProof />
      <Testimonials />
      <Affiliate />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
