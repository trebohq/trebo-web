"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="macro-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-surface rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-foreground text-white p-12 md:p-20 rounded-[2rem] shadow-2xl relative overflow-hidden"
        >
          {/* Subtle noise or pattern could go here */}
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to take your business to the next level?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Stop losing customers to chaotic DMs. Join thousands of Nigerian entrepreneurs who are growing with Trebo.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="#get-started"
                className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-3 group shadow-xl shadow-primary/20"
              >
                Create your store now
                <ArrowRight size={24} weight="bold" className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            <p className="mt-10 text-white/40 text-sm font-medium tracking-wide uppercase">
              No credit card required • Setup in 5 minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
