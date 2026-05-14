import Link from "next/link"
import { Instagram, Mail, MapPin, Twitter, Youtube } from "lucide-react"

const footerLinks = {
  coaching: [
    { label: "About", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Pricing", href: "#pricing" },
    { label: "Schedule", href: "#schedule" },
  ],
  resources: [
    { label: "Training Tips", href: "#" },
    { label: "Race Calendar", href: "#" },
    { label: "Blog", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Mail, href: "mailto:hello@milemark.club", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">M</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Mile Mark
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Transform your running with personalized coaching from Mile Mark Running Club. 
              Join our community of dedicated athletes and reach your full potential.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
              <MapPin className="w-4 h-4" />
              <span>Based in Austin, TX. Coaching athletes worldwide.</span>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Coaching links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Coaching</h3>
            <ul className="space-y-3">
              {footerLinks.coaching.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mile Mark Running Club. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with passion for running
          </p>
        </div>
      </div>
    </footer>
  )
}
