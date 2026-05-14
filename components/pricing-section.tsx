"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Zap } from "lucide-react"

const plans = [
  {
    id: "basic",
    name: "Basic",
    description: "Perfect for runners looking to improve with personalized guidance",
    price: 99.99,
    features: [
      "Personalized training plan",
      "Weekly plan adjustments",
      "Email support",
      "Training log access",
      "Basic performance analytics",
      "Monthly check-in call",
    ],
    popular: false,
  },
  {
    id: "premium",
    name: "Premium",
    description: "Comprehensive coaching for dedicated athletes seeking peak performance",
    price: 149.99,
    features: [
      "Everything in Basic",
      "Weekly video calls",
      "Priority 24/7 support",
      "Advanced analytics dashboard",
      "Race strategy planning",
      "Strength training program",
      "Nutrition guidance",
      "Mental performance coaching",
    ],
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Invest in Your Running
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Choose the coaching plan that fits your goals. 
            All plans are billed monthly with no long-term commitment.
          </p>
        </div>

        {/* Cancel anytime badge */}
        <div className="flex justify-center mb-12">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Cancel anytime - No questions asked
          </Badge>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative bg-card border-border flex flex-col ${
                plan.popular ? "border-primary shadow-lg shadow-primary/10" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Zap className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="font-display text-2xl">{plan.name}</CardTitle>
                <CardDescription className="min-h-[48px]">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="text-center flex-grow">
                <div className="mb-6">
                  <span className="font-display text-5xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>

                <ul className="space-y-3 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4">
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Trust signals */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4 text-lg font-medium">
            No contracts. No hidden fees. Cancel anytime.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              7-day free trial
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Cancel with one click
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              100% satisfaction guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
