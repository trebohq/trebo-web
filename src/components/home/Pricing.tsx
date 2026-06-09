"use client";

import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

interface PricingPlanFeature {
  text: string;
  icon: "check" | "sparkles";
  highlight?: boolean;
  iconColor?: string;
}

interface PricingPlan {
  id: string;
  badge: string;
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: PricingPlanFeature[];
  buttonText: string;
  buttonHref?: string;
  isRecommended?: boolean;
  action?: "launch-pro";
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    badge: "Starter Plan",
    name: "Starter",
    description:
      "Perfect for new micro-businesses looking to establish visual trust.",
    monthlyPrice: "1,500",
    yearlyPrice: "1,200",
    features: [
      { text: "trebo.site/yourname", icon: "check" },
      { text: "Up to 20 products", icon: "check" },
      { text: "Customer review and logs", icon: "check" },
      { text: "WhatsApp catalog order CTA", icon: "check" },
      { text: "Basic brand configuration", icon: "check" },
    ],
    buttonText: "Select Starter",
    buttonHref: "#customizer",
  },
  {
    id: "pro",
    badge: "Premium Bot Integration",
    name: "Pro Plan",
    description:
      "Our most popular plan tailored for serious local store operators.",
    monthlyPrice: "2,500",
    yearlyPrice: "2,000",
    features: [
      {
        text: "Includes AI WhatsApp Assistant",
        icon: "sparkles",
        highlight: true,
      },
      { text: "Everything in Starter plan", icon: "check" },
      { text: "store.trebo.com subdomain redirection", icon: "check" },
      { text: "Up to 300 products in directory", icon: "check" },
      { text: "Trebo merchant directory listing", icon: "check" },
      { text: "Review request via WhatsApp AI", icon: "check" },
      { text: "Auto-follow up message bot", icon: "check" },
    ],
    buttonText: "Launch Pro Page",
    isRecommended: true,
    action: "launch-pro",
  },
  {
    id: "premium",
    badge: "Complete Branding Identity",
    name: "Premium",
    description:
      "For established local outlets seeking payment capabilities and domains.",
    monthlyPrice: "5,000",
    yearlyPrice: "4,000",
    features: [
      {
        text: "Verification Badge displayed",
        icon: "check",
        iconColor: "text-[#0a1a3b]",
      },
      { text: "Everything in Pro plan", icon: "check" },
      { text: "Direct online payment integration", icon: "check" },
      { text: "Free custom .com.ng domain", icon: "check" },
      { text: "Advanced review analytics", icon: "check" },
      { text: "Advanced meta store analytics dashboard", icon: "check" },
    ],
    buttonText: "Select Premium",
    buttonHref: "#customizer",
  },
];

interface PricingProps {
  isYearlyBilling: boolean;
  setIsYearlyBilling: (yearly: boolean) => void;
  setActiveWorkspaceTab: (tab: "onboarding" | "dashboard" | "store") => void;
}

export const Pricing: React.FC<PricingProps> = ({
  isYearlyBilling,
  setIsYearlyBilling,
  setActiveWorkspaceTab,
}) => {
  const handleAction = (plan: PricingPlan) => {
    if (plan.action === "launch-pro") {
      const targetElement = document.getElementById("customizer");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        setActiveWorkspaceTab("dashboard");
      }
    }
  };

  return (
    <section
      id="pricing"
      className="macro-padding border-b border-border-subtle bg-surface/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1b9cda] bg-[#1b9cda]/10 px-3 py-1 rounded-full">
            Fair Pricing Models
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4 mb-4 text-[#0a1a3b]">
            Plans built to grow
            <br className="sm:hidden" />
            with your business.
          </h2>
          <p className="text-base text-[#0a1a3b]/70 mb-8">
            Choose a plan that fits your current hustle. Upgrade as you grow of
            your scale. No hidden transaction charges.
          </p>

          {/* Monthly / Annual Toggle switch */}
          <div className="flex items-center justify-center gap-3">
            <span
              className={`text-xs font-bold uppercase tracking-wider ${!isYearlyBilling ? "text-[#0a1a3b]" : "text-[#0a1a3b]/50"}`}
            >
              Monthly billing
            </span>
            <button
              onClick={() => setIsYearlyBilling(!isYearlyBilling)}
              className="w-12 h-6.5 rounded-full bg-[#0a1a3b] p-0.5 relative transition-all flex items-center"
            >
              <div
                className={`w-5.5 h-5.5 rounded-full bg-white shadow-md transition-all ${
                  isYearlyBilling ? "translate-x-5.5" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-xs font-bold uppercase tracking-wider ${isYearlyBilling ? "text-[#0a1a3b]" : "text-[#0a1a3b]/50"}`}
            >
              Yearly plan (Save 20%)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white border rounded-3xl p-8 flex flex-col justify-between text-left relative ${
                plan.isRecommended
                  ? "border-2 border-[#1b9cda] shadow-lg"
                  : "border-border-subtle"
              }`}
            >
              {plan.isRecommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1b9cda] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                  Recommended
                </div>
              )}

              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-widest block mb-2 ${
                    plan.isRecommended ? "text-[#1b9cda] mt-2" : "text-[#0a1a3b]/50"
                  }`}
                >
                  {plan.badge}
                </span>
                <h3 className="text-xl font-extrabold text-[#0a1a3b]">
                  {plan.name}
                </h3>
                <p className="text-xs text-[#0a1a3b]/60 mt-1 mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-black text-[#0a1a3b]">
                    ₦{isYearlyBilling ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-xs font-mono text-[#0a1a3b]/60 uppercase ml-1 block">
                    / month
                  </span>
                </div>

                <div className="h-[1px] bg-border-subtle mb-6" />

                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`text-xs flex items-center gap-2 ${
                        feature.highlight
                          ? "font-extrabold text-[#1b9cda]"
                          : feature.iconColor === "text-[#0a1a3b]"
                            ? "font-bold text-[#0a1a3b]"
                            : "font-semibold text-[#0a1a3b]/80"
                      }`}
                    >
                      {feature.icon === "sparkles" ? (
                        <Sparkles size={14} className="animate-pulse" />
                      ) : (
                        <CheckCircle2
                          size={14}
                          className={feature.iconColor || "text-[#10b981]"}
                        />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.buttonHref ? (
                <a
                  href={plan.buttonHref}
                  className="w-full text-center py-3.5 rounded-xl border border-border-subtle hover:bg-surface text-[#0a1a3b] font-bold text-xs uppercase tracking-wide transition-all"
                >
                  {plan.buttonText}
                </a>
              ) : (
                <button
                  onClick={() => handleAction(plan)}
                  className={`w-full text-center py-3.5 rounded-xl font-bold text-xs uppercase tracking-wide transition-all ${
                    plan.isRecommended
                      ? "bg-[#1b9cda] hover:bg-[#158bb3] text-white shadow-sm shadow-[#1b9cda]/10"
                      : "border border-border-subtle hover:bg-surface text-[#0a1a3b]"
                  }`}
                >
                  {plan.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-semibold text-[#0a1a3b]/70">
            Prices are in Nigerian Naira (₦). Need something different?{" "}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                alert(
                  "Thanks for your interest! Standard support is available on WhatsApp or via mail: contact@gettrebo.com",
                );
              }}
              className="text-[#1b9cda] hover:underline"
            >
              Talk to us.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
