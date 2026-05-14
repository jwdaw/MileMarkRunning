import { Award, Target, Users, Zap } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "Certified Coach",
    description:
      "USATF & RRCA certified with advanced specializations in distance running",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description:
      "Personalized training plans designed around your specific goals and lifestyle",
  },
  {
    icon: Users,
    title: "Community Focused",
    description:
      "Join a supportive network of runners who push each other to excel",
  },
  {
    icon: Zap,
    title: "Data-Driven",
    description:
      "Using the latest technology and metrics to optimize your performance",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-secondary overflow-hidden relative w-[85%] mx-auto">
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
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Coach Willcox
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Dedicated to Your Running Success
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over a decade of experience in competitive running and
                coaching, I&apos;ve helped hundreds of athletes achieve their
                personal bests, from first-time 5K runners to Boston Marathon
                qualifiers.
              </p>
              <p>
                My coaching philosophy centers on sustainable progress, injury
                prevention, and building a strong aerobic foundation. I believe
                that every runner has untapped potential, and my job is to help
                you discover it.
              </p>
              <p>
                Whether you&apos;re chasing a PR, training for your first race,
                or simply looking to fall in love with running again, I&apos;m
                here to guide you every step of the way.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {credentials.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
