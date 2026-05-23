"use client";

import { motion } from "framer-motion";
import { Lightning, ShieldCheck, ChartLineUp, Handbag } from "@phosphor-icons/react";

const BENEFITS = [
  {
    icon: Lightning,
    title: "Instant Setup",
    description: "Go from zero to a live store in minutes. No waiting, no technical hurdles.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Trust Gap",
    description: "Your business is verified by Trebo, giving customers the confidence to pay.",
  },
  {
    icon: ChartLineUp,
    title: "Growth Ready",
    description: "Scale from 1 to 1,000 products seamlessly as your business expands.",
  },
  {
    icon: Handbag,
    title: "DM Management",
    description: "Never miss an order again. All inquiries come structured to your WhatsApp.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="macro-padding bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Why Trebo
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            Built for the modern Nigerian merchant.
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 subtle-border rounded-xl hover:bg-surface transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <benefit.icon size={24} weight="bold" />
              </div>
              <h4 className="font-bold text-foreground mb-4 text-xl">{benefit.title}</h4>
              <p className="text-foreground/60 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
