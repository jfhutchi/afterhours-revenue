import { MarketingNav } from "@/components/marketing/MarketingNav";
import { Hero } from "@/components/marketing/Hero";
import { Problem } from "@/components/marketing/Problem";
import { RoiCalculator } from "@/components/marketing/RoiCalculator";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Features } from "@/components/marketing/Features";
import { Industries } from "@/components/marketing/Industries";
import { Pricing } from "@/components/marketing/Pricing";
import { AuditCta } from "@/components/marketing/AuditCta";
import { Trust } from "@/components/marketing/Trust";
import { Footer } from "@/components/marketing/Footer";

export default function LandingPage() {
  return (
    <>
      <MarketingNav />
      <Hero />
      <Problem />
      <RoiCalculator />
      <HowItWorks />
      <Features />
      <Industries />
      <Pricing />
      <AuditCta />
      <Trust />
      <Footer />
    </>
  );
}
