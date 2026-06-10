"use client";
import { useState } from "react";
import { Check, Zap } from "lucide-react";

type Plan = {
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  color: string;
  featured: boolean;
  badge?: string;
  features: string[];
  cta: string;
};

const plans: Plan[] = [
  {
    name: "STARTER",
    tagline: "Perfect for beginners",
    monthlyPrice: 4500,
    annualPrice: 3800,
    color: "border-apex-gray/40",
    featured: false,
    features: [
      "Full gym floor access",
      "Locker room & shower",
      "2 group classes per week",
      "Fitness assessment",
      "App access",
      "Nutrition guide PDF",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "PERFORMANCE",
    tagline: "For serious athletes",
    monthlyPrice: 8500,
    annualPrice: 7200,
    color: "border-apex-red",
    featured: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "2 PT sessions/month",
      "Nutrition coaching",
      "Recovery lounge access",
      "Priority class booking",
      "Guest pass (1/month)",
      "Progress tracking dashboard",
    ],
    cta: "Join Performance",
  },
  {
    name: "APEX ELITE",
    tagline: "The complete experience",
    monthlyPrice: 15000,
    annualPrice: 12500,
    color: "border-apex-gray/40",
    featured: false,
    features: [
      "Everything in Performance",
      "Unlimited PT sessions",
      "Monthly body composition scan",
      "Custom meal plan",
      "VIP lounge access",
      "24/7 facility access",
      "Guest passes (unlimited)",
      "Priority equipment booking",
      "Dedicated coach on-call",
    ],
    cta: "Go Elite",
  },
];

export default function Membership() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section id="membership" className="py-28 bg-apex-black-2">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-4">Membership Plans</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide mb-4">
            INVEST IN<br /><span className="text-apex-red">YOUR POTENTIAL</span>
          </h2>
          <p className="font-body text-apex-white-dim text-base max-w-lg mx-auto mb-8">
            No lock-in contracts. No hidden fees. Just elite training at a price that makes sense for your goals.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 bg-apex-black-4 border border-apex-gray/30 p-1.5 rounded-none">
            {(["monthly", "annual"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setBilling(type)}
                className={`font-condensed font-700 text-xs tracking-widest uppercase px-6 py-2.5 transition-all duration-200 ${
                  billing === type ? "bg-apex-red text-white" : "text-apex-white-dim hover:text-white"
                }`}
              >
                {type === "monthly" ? "Monthly" : "Annual · Save 15%"}
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative border-2 ${plan.color} ${
                plan.featured
                  ? "bg-gradient-to-b from-apex-red/10 to-apex-black-4 glow-red"
                  : "bg-apex-black-4"
              } p-8 transition-all duration-300 hover:scale-[1.02]`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-apex-red px-5 py-1.5">
                  <span className="font-mono text-xs text-white tracking-widest uppercase flex items-center gap-1">
                    <Zap className="w-3 h-3" fill="white" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-8">
                <h3 className="font-display text-3xl tracking-widest text-apex-white mb-1">{plan.name}</h3>
                <p className="font-body text-apex-gray-muted text-sm">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-sm text-apex-gray-muted">LKR</span>
                  <span className="font-display text-6xl text-apex-white">
                    {(billing === "monthly" ? plan.monthlyPrice : plan.annualPrice).toLocaleString()}
                  </span>
                </div>
                <p className="font-mono text-xs text-apex-gray-muted tracking-wider mt-1">
                  / month {billing === "annual" ? "(billed annually)" : "(billed monthly)"}
                </p>
                {billing === "annual" && (
                  <p className="font-mono text-xs text-apex-red mt-1">
                    Save LKR {((plan.monthlyPrice - plan.annualPrice) * 12).toLocaleString()}/year
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? "text-apex-red" : "text-apex-gray-muted"}`} />
                    <span className="font-body text-sm text-apex-white-dim">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full font-condensed font-700 text-sm tracking-widest uppercase py-4 transition-all duration-200 clip-slash ${
                  plan.featured
                    ? "bg-apex-red hover:bg-apex-red-light text-white glow-red"
                    : "border border-apex-gray/50 hover:border-apex-red text-apex-white-dim hover:text-apex-red"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center font-body text-apex-gray-muted text-xs mt-8">
          All prices in Sri Lankan Rupees. First month free for new members. Cancel anytime — no penalties.
        </p>
      </div>
    </section>
  );
}
