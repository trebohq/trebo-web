"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChatCircleText } from "@phosphor-icons/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Subtle Background Detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-surface rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tight text-foreground mb-8 max-w-5xl mx-auto leading-[0.95]"
        >
          Your Buisness, <br />
          <span className="text-primary italic">Needs.</span>
        </motion.h1>

      

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#get-started"
            className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 group shadow-xl shadow-primary/20"
          >
            Start your page
            <ArrowRight
              size={20}
              weight="bold"
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="#how-it-works"
            className="w-full sm:w-auto bg-background text-foreground border border-border-subtle px-10 py-5 rounded-xl text-xl font-bold hover:bg-surface transition-all flex items-center justify-center gap-2"
          >
            How it works
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
