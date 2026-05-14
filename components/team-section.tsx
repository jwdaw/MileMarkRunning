import { Badge } from "@/components/ui/badge";

const teamMembers = [
  {
    name: "Hugh Willcox",
    role: "Coach and Founder",
    specialty: "Middle and Long Distance",
    initials: "HW",
    achievements: ["Former Collegiate Runner"],
    profile_img: "/profilephoto.jpeg",
  },
  {
    name: "Jeri Katherine Sipes",
    role: "Coach",
    specialty: "Middle and Long Distance",
    initials: "JKS",
    achievements: ["Former Collegiate Runner"],
    profile_img: "/sipes_photo.jpeg",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Mile Mark Running Club
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Meet the Coaches
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our team of coaches brings decades of combined experience to help
            you achieve your running goals. Each coach specializes in different
            aspects of the sport.
          </p>
        </div>

        {/* Team grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto rounded-full bg-secondary border-2 border-border group-hover:border-primary transition-colors flex items-center justify-center mb-4">
                <span className="font-display text-2xl font-bold text-primary">
                  <img
                    src={member.profile_img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </span>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {member.specialty}
                </p>

                {/* Achievements */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.achievements.map((achievement) => (
                    <Badge
                      key={achievement}
                      variant="secondary"
                      className="text-xs"
                    >
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
