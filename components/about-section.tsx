export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual side */}
          <div className="relative">
            <div className="aspect-4/5 rounded-2xl bg-secondary overflow-hidden relative w-[85%] mx-auto">
              <img
                src="/coach_photo.png"
                alt="Coach"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content side */}
          <div className="flex flex-col justify-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Coach Willcox
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-8 text-balance">
              Dedicated to Your Running Success
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                With over a decade of experience in competitive running and
                coaching, we&apos;ve coached a multitude of athletes to
                achieving their personal bests, from first-time 5K runners to
                Boston Marathon qualifiers.
              </p>
              <p>
                Our coaching philosophy centers on sustainable progress, injury
                prevention, and building a strong aerobic foundation. Every
                runner has untapped potential, and our job is to help you
                discover it.
              </p>
              <p>
                Whether you&apos;re chasing a PR, training for your first race,
                or simply looking to fall in love with running again, we&apos;re
                here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
