"use client";

import { motion } from "framer-motion";
import { Check, Robot, Globe, ShieldCheck } from "@phosphor-icons/react";
import Link from "next/link";

const PLANS = [
  {
    name: "Starter",
    price: "1,500",
    description: "Perfect for new businesses looking to look professional.",
    features: [
      "trebo.site/yourname",
      "Up to 20 products",
      "Customer reviews",
      "WhatsApp order button",
      "Basic customization",
    ],
    cta: "Get Started",
    popular: false,
    highlight: null,
  },
  {
    name: "Pro",
    price: "2,500",
    description: "Our most popular plan for serious sellers.",
    features: [
      "Everything in Starter",
      "store.trebo.com subdomain",
      "Up to 300 products",
      "Directory listing",
      "AI WhatsApp Assistant",
      "Auto-follow up bot",
    ],
    cta: "Go Pro",
    popular: true,
    highlight: {
      icon: Robot,
      text: "Includes AI Assistant",
    },
  },
  {
    name: "Premium",
    price: "5,000",
    description: "The complete online presence for established brands.",
    features: [
      "Everything in Pro",
      "Online payment integration",
      "Free .com.ng domain",
      "SEO optimization",
      "Verification badge",
      "Advanced analytics",
    ],
    cta: "Go Premium",
    popular: false,
    highlight: {
      icon: ShieldCheck,
      text: "Verification Badge",
    },
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="macro-padding bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Fair Pricing
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Plans built to grow <br className="hidden md:block" />
            <span className="text-primary italic">with your business.</span>
          </h3>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Choose a plan that fits your current hustle. Upgrade as you grow. No hidden charges.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-3xl subtle-border flex flex-col h-full relative transition-all hover:translate-y-[-8px] ${
                plan.popular ? "bg-foreground text-white shadow-2xl shadow-primary/20 border-primary" : "bg-background"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Recommended
                </div>
              )}
              
              <div className="mb-10">
                <h4 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-foreground"}`}>
                    ₦{plan.price}
                  </span>
                  <span className={`${plan.popular ? "text-white/50" : "text-foreground/50"} text-sm`}>
                    /month
                  </span>
                </div>
                <p className={`text-lg leading-relaxed ${plan.popular ? "text-white/70" : "text-foreground/70"}`}>
                  {plan.description}
                </p>
              </div>

              {plan.highlight && (
                <div className={`mb-8 p-4 rounded-xl flex items-center gap-3 ${plan.popular ? "bg-white/10" : "bg-primary/5 text-primary"}`}>
                  <plan.highlight.icon size={24} weight="bold" />
                  <span className="font-bold text-sm uppercase tracking-wide">{plan.highlight.text}</span>
                </div>
              )}

              <div className="flex-1 space-y-5 mb-12">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-4">
                    <Check size={20} weight="bold" className="text-primary mt-1 flex-shrink-0" />
                    <span className={`text-lg ${plan.popular ? "text-white/90" : "text-foreground/90"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all active:scale-[0.98] ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary-dark shadow-xl shadow-primary/30"
                    : "bg-surface text-foreground hover:bg-border-subtle"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="mt-16 text-center text-foreground/50 font-medium">
          Prices are in Nigerian Naira (₦). Need something different? <Link href="#" className="text-primary underline">Talk to us.</Link>
        </p>
      </div>
    </section>
  );
}
