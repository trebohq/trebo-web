"use client";

import { motion } from "framer-motion";
import { 
  Dress, 
  Hamburger, 
  Sparkle, 
  Camera, 
  Sneaker, 
  Needle, 
  Truck, 
  Cpu 
} from "@phosphor-icons/react";

const CATEGORIES = [
  { name: "Fashion", icon: Dress },
  { name: "Food", icon: Hamburger },
  { name: "Beauty", icon: Sparkle },
  { name: "Photography", icon: Camera },
  { name: "Footwear", icon: Sneaker },
  { name: "Tailoring", icon: Needle },
  { name: "Logistics", icon: Truck },
  { name: "Tech", icon: Cpu },
];

export default function SocialProof() {
  return (
    <section className="w-full bg-surface border-y border-border-subtle py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-shrink-0">
          <p className="text-sm font-bold text-foreground/60 whitespace-nowrap uppercase tracking-widest">
            120+ businesses across Nigeria already waiting
          </p>
        </div>

        <div className="flex-1 relative overflow-hidden">
          <motion.div 
            className="flex items-center gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...CATEGORIES, ...CATEGORIES].map((cat, index) => (
              <div key={index} className="flex items-center gap-2 group">
                <cat.icon size={20} weight="bold" className="text-primary/60 group-hover:text-primary transition-colors" />
                <span className="text-sm font-bold text-foreground/40 group-hover:text-foreground/80 transition-colors uppercase tracking-wider">
                  {cat.name}
                </span>
              </div>
            ))}
          </motion.div>
          
          {/* Fades */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
