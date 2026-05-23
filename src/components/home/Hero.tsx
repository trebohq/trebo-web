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
          You post. People view. <br />
          <span className="text-primary italic">But nobody buys.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Your IG page is fine. Your TikTok gets views. But your WhatsApp is still quiet. Trebo helps you look professional, get found on Google, and turn attention into real sales.
        </motion.p>

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
            <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#how-it-works"
            className="w-full sm:w-auto bg-background text-foreground border border-border-subtle px-10 py-5 rounded-xl text-xl font-bold hover:bg-surface transition-all flex items-center justify-center gap-2"
          >
            How it works
          </Link>
        </motion.div>

        {/* Social Proof Mini */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-surface overflow-hidden">
                <div className={`w-full h-full bg-primary/${i * 10 + 10}`} />
              </div>
            ))}
          </div>
          <p className="text-foreground/50 font-medium italic">
            &quot;Finally, people stop asking for price in the DM.&quot; — Ada, Lagos
          </p>
        </motion.div>
      </div>
    </section>
  );
}
