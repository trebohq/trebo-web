"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="macro-padding border-b border-[#dedad3] bg-[#f3efe9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1b9cda]">
            Simple Implementation
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3 mb-4 text-[#0a1a3b]">
            Get your store live in minutes
          </h2>
          <p className="text-base text-[#0a1a3b]/70">
            No complex database setups. No programming experience required. Just your business, online properly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white border border-[#dedad3] p-8 rounded-3xl relative text-left flex flex-col justify-between group hover:border-[#1b9cda] transition-all">
            <div>
              <span className="text-4xl font-extrabold text-[#1b9cda]/20 group-hover:text-[#1b9cda]/40 transition-colors block mb-4">
                01
              </span>
              <h3 className="text-xl font-extrabold text-[#0a1a3b] mb-3">
                Sign Up Free
              </h3>
              <p className="text-sm text-[#0a1a3b]/70 leading-relaxed mb-6">
                Create your Trebo account in 30 seconds. Setup domain links or customizable store names with absolutely no credit card requirements.
              </p>
            </div>
            <a
              href="#customizer"
              className="text-xs font-bold uppercase tracking-wide text-[#1b9cda] inline-flex items-center gap-1 group-hover:translate-x-1 transition-all"
            >
              Inquire store name
              <ChevronRight size={14} />
            </a>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-[#dedad3] p-8 rounded-3xl relative text-left flex flex-col justify-between group hover:border-[#1b9cda] transition-all">
            <div>
              <span className="text-4xl font-extrabold text-[#1b9cda]/20 group-hover:text-[#1b9cda]/40 transition-colors block mb-4">
                02
              </span>
              <h3 className="text-xl font-extrabold text-[#0a1a3b] mb-3">
                Build Your Store
              </h3>
              <p className="text-sm text-[#0a1a3b]/70 leading-relaxed mb-6">
                Add your custom product catalog, toggle brand colors, and add WhatsApp contact settings. Real storefront previews adapt instantly.
              </p>
            </div>
            <a
              href="#customizer"
              className="text-xs font-bold uppercase tracking-wide text-[#1b9cda] inline-flex items-center gap-1 group-hover:translate-x-1 transition-all"
            >
              Try customizer
              <ChevronRight size={14} />
            </a>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-[#dedad3] p-8 rounded-3xl relative text-left flex flex-col justify-between group hover:border-[#1b9cda] transition-all">
            <div>
              <span className="text-4xl font-extrabold text-[#1b9cda]/20 group-hover:text-[#1b9cda]/40 transition-colors block mb-4">
                03
              </span>
              <h3 className="text-xl font-extrabold text-[#0a1a3b] mb-3">
                Share Your Link
              </h3>
              <p className="text-sm text-[#0a1a3b]/70 leading-relaxed mb-6">
                Copy your customized Trebo link (`trebo.site/yourname`) to social banners, bios, and descriptions. Direct buyer requests open instantly.
              </p>
            </div>
            <a
              href="#customizer"
              className="text-xs font-bold uppercase tracking-wide text-[#1b9cda] inline-flex items-center gap-1 group-hover:translate-x-1 transition-all"
            >
              Launch dashboard
              <ChevronRight size={14} />
            </a>
          </div>
        </div>

        {/* Large callout quote in guidelines */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <span className="text-4xl font-serif text-[#1b9cda] opacity-30 select-none block mb-2 leading-none">
            “
          </span>
          <p className="text-lg md:text-xl font-medium text-[#0a1a3b] leading-relaxed italic">
            While you focus on your business, Trebo makes sure every customer who finds you stays.
          </p>
          <span className="text-xs font-mono font-bold text-[#0a1a3b]/55 uppercase block mt-3 tracking-wider">
            - Trebo Philosophy
          </span>
        </div>
      </div>
    </section>
  );
};
