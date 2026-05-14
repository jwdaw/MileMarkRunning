import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      {/* Animated lines decoration */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden lg:block" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">Now accepting new athletes</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6 text-balance">
            Run Faster.{" "}
            <span className="text-primary">Train Smarter.</span>
            <br />
            Achieve More.
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed text-pretty">
            Join Mile Mark Running Club and transform your running with personalized coaching, 
            structured training plans, and a supportive community of dedicated professionals and athletes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="#pricing">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link href="#about">
                <Play className="mr-2 h-5 w-5" />
                Learn More
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-8">
              In our first two years
            </h2>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { value: "1", label: "State Record" },
                { value: "8", label: "Individual State Championships" },
                { value: "100%", label: "Rate of Improvement" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl sm:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
