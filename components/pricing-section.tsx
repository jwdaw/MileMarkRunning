"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";

const plan = {
  name: "All-In",
  description:
    "Comprehensive coaching for dedicated athletes seeking peak performance",
  price: 149.99,
  features: [
    "Personalized Training Plan",
    "Weekly Plan Adjustments",
    "Weekly Correspondence",
    "Race Strategy Planning",
    "Strength & Mobility Programming",
    "Priority Coach Access",
  ],
};

export function PricingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);

  const RATE_LIMIT_MS = 10 * 60 * 1000; // 10 minutes

  // Handle form submission via fetch to Web3Forms API
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side rate limit: 1 submission per 10 minutes
    const lastSubmit = localStorage.getItem("form_last_submit");
    if (lastSubmit && Date.now() - parseInt(lastSubmit) < RATE_LIMIT_MS) {
      setRateLimited(true);
      return;
    }

    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Debug: log form data being sent
    console.log("[Web3Forms] Submitting form...");
    console.log("[Web3Forms] Form data entries:");
    for (const [key, value] of formData.entries()) {
      console.log(`  ${key}: ${value}`);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // Debug: log response status
      console.log("[Web3Forms] Response status:", response.status);

      const result = await response.json();

      // Debug: log full response body
      console.log("[Web3Forms] Response body:", result);

      if (result.success) {
        console.log("[Web3Forms] Submission successful!");
        localStorage.setItem("form_last_submit", Date.now().toString());
        setSubmitted(true);
      } else {
        console.error("[Web3Forms] Submission failed:", result.message);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      // Debug: log any network or parsing errors
      console.error("[Web3Forms] Fetch error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Invest in Your Running
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            One plan. Everything you need. Fill out the form and we&apos;ll be
            in touch to get you started.
          </p>
        </div>

        {/* Cancel anytime badge */}
        <div className="flex justify-center mb-12">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Cancel anytime - No questions asked
          </Badge>
        </div>

        {/* Two column: pricing left, form right */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pricing card */}
          <Card className="relative bg-card border-primary shadow-lg shadow-primary/10 h-fit">
            <CardHeader className="text-center pb-4">
              <CardTitle className="font-display text-2xl">
                {plan.name}
              </CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>

            <CardContent className="text-center">
              <div className="mb-6">
                <span className="font-display text-5xl font-bold text-foreground">
                  ${plan.price}
                </span>
                <span className="text-muted-foreground">/month</span>
              </div>

              <ul className="space-y-3 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Web3Forms contact form */}
          <Card className="bg-card border-border flex flex-col">
            {submitted ? (
              <div className="text-center flex flex-col items-center justify-center grow py-12">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  We got your message!
                </h3>
                <p className="text-muted-foreground text-sm">
                  We&apos;ll be in touch soon to get you started.
                </p>
              </div>
            ) : (
              <>
                <CardHeader>
                  <CardTitle className="font-display text-xl">
                    Ready to Start?
                  </CardTitle>
                  <CardDescription>
                    Tell us about yourself and we&apos;ll set up a meeting!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <input
                      type="hidden"
                      name="access_key"
                      value="13ce8092-3d80-492a-93a3-ae5d8fb59fce"
                    />
                    <input
                      type="hidden"
                      name="subject"
                      value="New Mile Mark Running Club Inquiry"
                    />
                    <input
                      type="hidden"
                      name="from_name"
                      value="Mile Mark Running Club"
                    />

                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="goals">Running Goals</Label>
                      <Textarea
                        id="goals"
                        name="goals"
                        placeholder="Tell us about your running experience and what you'd like to achieve..."
                        rows={4}
                        required
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={loading || rateLimited}
                    >
                      {loading
                        ? "Submitting..."
                        : rateLimited
                          ? "Please wait 10 minutes"
                          : "Get Started"}
                    </Button>
                    {rateLimited && (
                      <p className="text-sm text-destructive text-center mt-2">
                        You&apos;ve already submitted recently. Please try again
                        in a few minutes.
                      </p>
                    )}
                  </form>
                </CardContent>
              </>
            )}
          </Card>
        </div>

        {/* Trust signals */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4 text-lg font-medium">
            No contracts. No hidden fees. Cancel anytime.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              100% satisfaction guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
