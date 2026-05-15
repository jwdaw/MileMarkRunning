"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#pricing", label: "Pricing" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-drop-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: logo left, hamburger right */}
        <div className="flex items-center justify-between h-16 md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/apple-logo.png"
              alt="Mile Mark"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-display font-bold text-xl text-foreground">
              Mile Mark Running Club
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-foreground hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop: centered stacked layout */}
        <div className="hidden md:flex flex-col items-center h-auto py-6 gap-5">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/apple-logo.png"
              alt="Mile Mark"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="font-display font-bold text-2xl text-foreground">
              Mile Mark Running Club
            </span>
          </Link>

          <nav className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-md transition-colors text-[1.05rem] font-medium cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="bg-transparent hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#pricing")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </a>
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-b-0"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-primary hover:bg-primary/10 px-4 py-3 rounded-lg transition-colors text-lg font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-border">
            <Button asChild className="w-full" size="lg">
              <Link href="#pricing" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
