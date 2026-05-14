import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { TeamSection } from "@/components/team-section";
import { PricingSection } from "@/components/pricing-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="animate-drop-in-delay-1">
        <HeroSection />
      </div>
      <div className="animate-drop-in-delay-2">
        <AboutSection />
      </div>
      <div className="animate-drop-in-delay-3">
        <TeamSection />
      </div>
      <div className="animate-drop-in-delay-4">
        <PricingSection />
      </div>
      <div className="animate-drop-in-delay-5">
        <Footer />
      </div>
    </main>
  );
}
