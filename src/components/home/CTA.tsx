"use client";

import React from "react";

export const CTA: React.FC = () => {
  return (
    <section className="py-32 bg-foreground text-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-background mb-8">
          Ready for the next level?
        </h2>
        <p className="text-xl text-background/60 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Stop losing customers to chaotic DMs. Join thousands of Nigerian entrepreneurs growing with Trebo.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#customizer"
            className="px-8 py-4 rounded-full bg-background text-foreground font-medium hover:scale-105 transition-transform"
          >
            Create your store now
          </a>
          <button
            onClick={() => {
              const faqy = document.getElementById("faq");
              if (faqy) faqy.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-full bg-transparent text-background font-medium border border-background/20 hover:bg-background/10 transition-colors"
          >
            Request details
          </button>
        </div>

        <div className="mt-12 text-sm font-medium text-background/40">
          No credit card required • Setup in 5 minutes
        </div>
      </div>
    </section>
  );
};
