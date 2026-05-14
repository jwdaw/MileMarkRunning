import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { ScheduleSection } from "@/components/schedule-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ScheduleSection />
      <PricingSection />
      <Footer />
    </main>
  )
}
