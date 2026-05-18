"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const teamMembers = [
  {
    name: "Hugh Willcox",
    role: "Coach and Founder",
    specialty: "Middle and Long Distance",
    initials: "HW",
    achievements: ["Former Collegiate Runner"],
    profile_img: "/profilephoto.jpeg",
    bio: [
      "Coach Willcox is the founder and head coach of Mile Mark Running Club. He competed for the University of South Carolina where he ran the 800m and 1500m.",
      "Later, he coached at Heathwood Hall where he was the program head for boys cross country and the distance coach for track and field.",
      "He coaches athletes in all distances from the 800m all the way to the marathon, but his favorite event to coach is the Mile!",
    ],
  },
  {
    name: "Jeri Katherine Sipes",
    role: "Coach",
    specialty: "Middle and Long Distance",
    initials: "JKS",
    achievements: ["Former Collegiate Runner"],
    profile_img: "/sipes_photo.jpeg",
    bio: [],
  },
  {
    name: "Ella Zeigler",
    role: "Coach",
    specialty: "XC and Long Distance",
    initials: "EZ",
    achievements: ["Former Collegiate Runner"],
    profile_img: "/ella_photo.JPG",
    bio: [
      "Coach Ella ran cross country and track and field for the University of South Carolina (with Coach Willcox!) from 2022-2026. She ran any distance from the 1500m through the 6k XC, but primarily ran the 1500m and 5k. She holds Top 10 program marks in both respective events.",
      "She was a counselor at the Gamecock XC Camp and frequently volunteers at Heathwood Hall to assist Coach Willcox.",
      "Her favorite event to run is the Mile, and her favorite event to coach is the 3200m!",
    ],
  },
];

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[number] | null
  >(null);

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMember]);

  return (
    <>
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
              you achieve your running goals. Each coach specializes in
              different aspects of the sport.
            </p>
          </div>

          {/* Team grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                onClick={() =>
                  member.bio.length > 0 && setSelectedMember(member)
                }
                className={`group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] ${member.bio.length > 0 ? "cursor-pointer" : ""}`}
              >
                {/* Avatar */}
                <div className="w-20 h-20 mx-auto rounded-full bg-secondary border-2 border-border group-hover:border-primary transition-colors flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${member.profile_img}`}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
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

      {/* Bio Modal - portaled to body to cover full page */}
      {selectedMember &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="relative bg-card border border-border rounded-2xl max-w-md w-full p-8 shadow-2xl animate-drop-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Profile photo */}
              <div className="w-24 h-24 mx-auto rounded-full bg-secondary border-2 border-primary overflow-hidden mb-6">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${selectedMember.profile_img}`}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {selectedMember.name}
                </h3>
                <p className="text-primary font-medium">
                  {selectedMember.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {selectedMember.specialty}
                </p>
              </div>

              {/* Bio */}
              <div className="space-y-3 text-center">
                {selectedMember.bio.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Achievements */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {selectedMember.achievements.map((achievement) => (
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
          </div>,
          document.body,
        )}
    </>
  );
}
