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
import LiveChat from "../components/LiveChat";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-[#F0F2FF] overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
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
      <LiveChat />
    </div>
  );
}
