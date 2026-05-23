"use client";

import { motion } from "framer-motion";
import { GoogleLogo, WhatsappLogo, ShieldCheck, Robot } from "@phosphor-icons/react";

const SOLUTIONS = [
  {
    icon: GoogleLogo,
    title: "Get found on Google",
    description: "Your products will show up when people search for them. You're not just selling to your contacts anymore.",
  },
  {
    icon: WhatsappLogo,
    title: "Structured inquiries",
    description: "No more 'How much?' for the 100th time. Customers see everything and only DM when they're ready to buy.",
  },
  {
    icon: ShieldCheck,
    title: "Build instant trust",
    description: "Verified reviews and badges show that you're a serious business. People pay faster when they trust you.",
  },
  {
    icon: Robot,
    title: "AI Business Assistant",
    description: "Text our AI on WhatsApp to upload products, follow up with buyers, and get daily summaries. No laptop needed.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="macro-padding bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">
              The Solution
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              A business that works <span className="text-primary italic">while you sleep.</span>
            </h3>
            <p className="text-xl text-foreground/70 mb-12 leading-relaxed">
              Trebo isn&apos;t just a link. It&apos;s your professional online presence that finds you new customers and handles the boring manual work for you.
            </p>

            <div className="space-y-10">
              {SOLUTIONS.map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <item.icon size={24} weight="bold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-foreground/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-square">
              {/* Abstract Representation of the Platform */}
              <div className="absolute inset-0 bg-surface rounded-[3rem] subtle-border overflow-hidden">
                <div className="absolute top-10 left-10 right-10 bottom-0 bg-background rounded-t-3xl shadow-2xl p-8">
                  {/* Mockup Profile */}
                  <div className="flex items-center gap-4 mb-10 pb-6 border-b border-border-subtle">
                    <div className="w-16 h-16 bg-primary rounded-2xl" />
                    <div className="flex-1">
                      <div className="w-32 h-4 bg-surface rounded-full mb-3" />
                      <div className="w-20 h-3 bg-surface rounded-full opacity-50" />
                    </div>
                  </div>
                  {/* Mockup Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="space-y-3">
                        <div className="aspect-square bg-surface rounded-2xl" />
                        <div className="w-full h-3 bg-surface rounded-full" />
                        <div className="w-2/3 h-3 bg-primary/10 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating AI Notification */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="absolute top-1/4 -right-8 bg-foreground text-white p-6 rounded-2xl shadow-2xl max-w-[240px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Robot size={24} weight="fill" className="text-primary" />
                  <span className="font-bold text-sm">Trebo AI</span>
                </div>
                <p className="text-sm text-white/80 leading-snug">
                  &quot;I followed up with 5 ghost buyers today. 2 of them are ready to pay!&quot;
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
