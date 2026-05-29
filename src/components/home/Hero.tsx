"use client";

import React from "react";
import { Play, ShieldCheck, MessageCircle } from "lucide-react";
import { Product } from "./types";

interface HeroProps {
  businessName: string;
  customCategory: string;
  activeProducts: Product[];
  setSelectedProductForInquiry: (product: Product) => void;
  setCheckoutModalOpen: (open: boolean) => void;
}

export const Hero: React.FC<HeroProps> = ({
  businessName,
  customCategory,
  activeProducts,
  setSelectedProductForInquiry,
  setCheckoutModalOpen,
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-28 lg:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Early sign-up high contrast element */}
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ebe7e0] text-[#0a1a3b] border border-[#dedad3] w-fit mb-6 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-[#1b9cda]" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                120+ businesses across Nigeria already waiting
              </span>
            </div> */}

            {/* H1 Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight lg:leading-[1.1] text-[#0a1a3b] mb-6">
              Your business,
              <br className="hidden md:inline" />
              Needs.
            </h1>

            {/* Subtext (capped length as per guidelines) */}
            <p className="text-lg text-[#0a1a3b]/80 leading-relaxed max-w-[50ch] mb-8">
              Sell online properly without the headache of chaotic instant messages. Show products, manage inventory, and receive structured requests directly on WhatsApp.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href="#customizer"
                className="px-8 py-4 text-center rounded-full bg-[#0a1a3b] hover:bg-[#1b9cda] text-white font-bold text-base shadow-lg shadow-[#0a1a3b]/5 hover:shadow-xl transition-all"
              >
                Start your page
              </a>
              <a
                href="#how-it-works"
                className="px-6 py-4 rounded-full border border-[#dedad3] hover:bg-[#ebe7e0] text-[#0a1a3b] font-semibold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Play size={16} fill="currentColor" />
                See how it works
              </a>
            </div>

            {/* App URL teaser */}
            <div className="text-xs text-[#0a1a3b]/60 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Default domain provided: </span>
              <span className="font-semibold text-[#0a1a3b]/80 underline decoration-[#1b9cda] decoration-2">
                app.gettrebo.com/onboarding
              </span>
            </div>
          </div>

          {/* Right Asset Column: Live Phone Mockup with direct interactive trigger */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background ambiance geometry (no neon purple, tasteful sand tones) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#ebe7e0] rounded-full filter blur-3xl opacity-70 pointer-events-none -z-10" />

            {/* Smartphone layout */}
            <div className="w-full max-w-[340px] bg-zinc-900 rounded-[40px] p-3.5 shadow-2xl border border-zinc-800 relative">
              {/* Speaker pill */}
              <div className="absolute top-7 left-1/2 -translate-x-1/2 w-28 h-4 bg-zinc-950 rounded-full z-20 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 mr-2" />
                <span className="w-10 h-1 bg-zinc-800 rounded-full" />
              </div>

              {/* Live Screen Area */}
              <div className="rounded-[28px] bg-[#f3efe9] overflow-hidden border border-zinc-950 relative aspect-[9/18] flex flex-col">
                {/* Phone status bar */}
                <div className="h-10 pt-4 px-6 flex justify-between items-center text-[10px] font-mono font-semibold text-[#0a1a3b]/70 bg-[#ebe7e0] border-b border-[#dedad3]">
                  <span>08:42 AM</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#1b9cda]" />
                    <span>NG 4G</span>
                  </div>
                </div>

                {/* Browser simulated Header */}
                <div className="px-4 py-2 bg-white border-b border-[#dedad3] flex items-center gap-1.5">
                  <div className="text-[10px] font-mono bg-[#f3efe9] px-2.5 py-1 rounded-md text-[#0a1a3b]/80 flex-1 overflow-hidden whitespace-nowrap text-left flex items-center gap-1">
                    <span className="text-emerald-500">🔒</span>
                    <span>trebo.site/</span>
                    <span className="font-bold text-[#1b9cda] animate-pulse">
                      {businessName.toLowerCase().replace(/\s+/g, "")}
                    </span>
                  </div>
                </div>

                {/* Storefront inside smartphone */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* Brand Banner */}
                  <div className="text-center bg-[#ebe7e0] rounded-2.5 p-4 border border-[#dedad3]">
                    <div className="w-11 h-11 bg-[#0a1a3b] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2">
                      {businessName.charAt(0)}
                    </div>
                    <h3 className="font-extrabold text-[#0a1a3b] text-sm break-words">
                      {businessName}
                    </h3>
                    <div className="text-[10px] text-[#0a1a3b]/60 font-medium">
                      {customCategory} • Lagos, Nigeria
                    </div>

                    <div className="mt-2.5 inline-flex items-center gap-1 bg-[#1b9cda]/10 text-[#158bb3] text-[9px] font-bold px-2 py-0.5 rounded-full">
                      <ShieldCheck size={10} className="fill-[#1b9cda]/20" />
                      <span>Verified Store</span>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0a1a3b]/60 text-left">
                      Catalog
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {activeProducts.slice(0, 4).map((item) => (
                        <div
                          key={item.id}
                          className="bg-white border border-[#dedad3] rounded-xl p-2 relative flex flex-col justify-between group hover:border-[#1b9cda] transition-all"
                        >
                          <div className="aspect-square bg-[#ebe7e0] rounded-lg overflow-hidden mb-1.5 relative">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold text-[10px] text-[#0a1a3b] line-clamp-1">
                              {item.name}
                            </h4>
                            <p className="font-extrabold text-xs text-[#1b9cda] mt-0.5">
                              ₦{item.price.toLocaleString()}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setSelectedProductForInquiry(item);
                              setCheckoutModalOpen(true);
                            }}
                            className="mt-2 w-full py-1 rounded bg-[#0a1a3b] hover:bg-[#1b9cda] text-white text-[9px] font-bold transition-all flex items-center justify-center gap-0.5"
                          >
                            <MessageCircle size={10} />
                            Inquire
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* WhatsApp Sticky Checkout Mock button */}
                <div className="p-2.5 bg-white border-t border-[#dedad3] text-[10px] flex items-center justify-between">
                  <span className="font-semibold text-[#0a1a3b]/70">
                    Need anything else?
                  </span>
                  <button
                    onClick={() => {
                      const defaultProd = activeProducts[0];
                      if (defaultProd) {
                        setSelectedProductForInquiry(defaultProd);
                        setCheckoutModalOpen(true);
                      }
                    }}
                    className="px-3 py-1.5 rounded-full bg-[#1b9cda] hover:bg-[#158bb3] text-white font-extrabold text-[9px] transition-all"
                  >
                    Instant DM
                  </button>
                </div>
              </div>
            </div>

            {/* Floating aesthetic labels context from request */}
            <div className="absolute -right-4 top-10 bg-white shadow-xl rounded-2xl p-3 border border-[#dedad3] max-w-[150px] text-left hidden sm:block">
              <p className="text-[10px] font-mono text-[#0a1a3b]/60 uppercase">
                User Customizer
              </p>
              <p className="text-xs font-bold text-[#0a1a3b] mt-0.5">
                ✦ Click any color or button below to see active changes!
              </p>
            </div>

            <div className="absolute -left-6 bottom-12 bg-white shadow-xl rounded-2xl p-3 border border-[#dedad3] max-w-[160px] text-left hidden sm:block">
              <div className="flex items-center gap-1.5 mb-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-bold">LIVE CHAT</span>
              </div>
              <p className="text-xs font-extrabold text-[#0a1a3b]">
                ₦40k+ direct daily organic sales average
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
