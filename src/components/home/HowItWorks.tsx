"use client";

import { motion } from "framer-motion";
import { UserPlus, Storefront, ShareNetwork } from "@phosphor-icons/react";

const STEPS = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up Free",
    description: "Create your Trebo account in 30 seconds. No credit card needed.",
  },
  {
    number: "02",
    icon: Storefront,
    title: "Build Your Store",
    description: "Add your products, upload your logo, pick your brand colors. Your store is ready before you finish your tea.",
  },
  {
    number: "03",
    icon: ShareNetwork,
    title: "Share Your Link",
    description: "Send your Trebo link anywhere. Customers browse, trust, and reach you directly on WhatsApp.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    }
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="macro-padding bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-bold text-foreground mb-6 tracking-tighter"
          >
            Get your store live in minutes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto"
          >
            No tech skills. No stress. Just your business, online properly.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-12 relative"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-[2px] border-t-2 border-dotted border-primary/20 -z-0" />

          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="mb-8 relative">
                <div className="w-16 h-16 bg-background subtle-border rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <step.icon size={32} weight="bold" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-lg border-2 border-background">
                  {step.number}
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-foreground tracking-tight">{step.title}</h4>
              <p className="text-foreground/60 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-24 text-center"
        >
          <p className="text-xl text-foreground/40 italic font-medium max-w-2xl mx-auto">
            &quot;While you focus on your business — Trebo makes sure every customer who finds you, stays.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
