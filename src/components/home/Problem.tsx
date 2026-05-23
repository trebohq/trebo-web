"use client";

import { motion } from "framer-motion";
import { Ghost, Clock, MagnifyingGlass, ShieldWarning } from "@phosphor-icons/react";

const PROBLEMS = [
  {
    icon: Clock,
    title: "Manual everything",
    description: "Sending product pictures and prices one by one to 20 customers daily is a waste of your time. Let them browse themselves.",
  },
  {
    icon: Ghost,
    title: "Ghost buyers",
    description: "They ask questions for 30 minutes, you explain everything, then they disappear. Trebo filters the serious from the curious.",
  },
  {
    icon: ShieldWarning,
    title: "Zero trust",
    description: "Fake sellers have poisoned the market. If you don't look professional, people will think you're one of them.",
  },
  {
    icon: MagnifyingGlass,
    title: "No discovery",
    description: "You only sell to people who already have your number. New customers can't find you on Google or social search.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="macro-padding bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">
            The Reality
          </h2>
          <p className="text-4xl md:text-6xl font-bold text-foreground max-w-4xl leading-[1.1]">
            Selling online is hard work. <br />
            <span className="text-primary italic">But it shouldn&apos;t be stressful.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROBLEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-background subtle-border rounded-2xl hover:shadow-xl hover:shadow-primary/5 transition-all group flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                <item.icon size={28} weight="bold" className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      
      </div>
    </section>
  );
}
