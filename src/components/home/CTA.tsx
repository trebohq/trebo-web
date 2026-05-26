"use client";

import React from "react";

export const CTA: React.FC = () => {
  return (
    <section className="macro-padding relative overflow-hidden bg-[#0a1a3b] text-white">
      {/* Subtle glowing dots background to resemble Nigeria starry sky */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1b9cda] rounded-full filter blur-3xl opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1b9cda] block mb-4">
          Take the next step
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Ready to take your business
          <br className="hidden md:inline" />
          to the next level?
        </h2>
        <p className="text-base text-white/70 max-w-[60ch] mx-auto mb-10 leading-relaxed font-medium">
          Stop losing customers to chaotic DMs. Join thousands of Nigerian entrepreneurs who are growing with Trebo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#customizer"
            className="px-8 py-4.5 rounded-full bg-white text-[#0a1a3b] hover:bg-[#1b9cda] hover:text-white font-black text-sm tracking-wide transition-all shadow-md focus:outline-none"
          >
            Create your store now
          </a>
          <button
            onClick={() => {
              const faqy = document.getElementById("faq");
              if (faqy) faqy.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-4.5 rounded-full border border-white/20 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            Request details
          </button>
        </div>

        <div className="text-xs font-mono text-white/40 mt-6 uppercase tracking-wider">
          No credit card required • Setup in 5 minutes
        </div>
      </div>
    </section>
  );
};
