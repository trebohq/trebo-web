"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Play, ShieldCheck, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Product } from "./types";
import { PhoneMockup } from "../ui/PhoneMockup";

const ROTATING_WORDS = ["a Store.", "a Website.", "Trebo.", "Growth.", "an Edge."];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  const next = useCallback(() => {
    setPhase("out");
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
      setPhase("in");
    }, 350);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 2800);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <span
      className="inline-block transition-all duration-350 ease-[cubic-bezier(.4,0,.2,1)] text-[#1b9cda]"
      style={{
        transform: phase === "out" ? "translateY(-110%)" : "translateY(0)",
        opacity: phase === "out" ? 0 : 1,
      }}
    >
      {ROTATING_WORDS[index]}
    </span>
  );
}

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
      {/* Professional Dot Pattern Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-80"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%230a1a3b' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)'
        }}
      />
      {/* Subtle top glow to accentuate the layout */}
      <div className="absolute top-0 inset-x-0 h-[300px] bg-gradient-to-b from-foreground/[0.02] to-transparent z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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

            {/* H1 Headline with rotating word */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight lg:leading-[1.1] text-[#0a1a3b] mb-6">
              Your business,
              <br className="hidden md:inline" />
              Needs{" "}
              <span className="inline-flex relative overflow-hidden align-baseline" style={{ height: '1.15em' }}>
                <RotatingWord />
              </span>
            </h1>

            {/* Subtext (capped length as per guidelines) */}
            <p className="text-lg text-[#0a1a3b]/80 leading-relaxed max-w-[50ch] mb-8">
              Sell online properly without the headache of chaotic instant
              messages. Show products, manage inventory, and receive structured
              requests directly on WhatsApp.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-row items-center gap-3 mb-8">
              <a
                href="#customizer"
                className="flex-1 sm:flex-none px-4 py-3.5 sm:px-8 sm:py-4 text-center rounded-full bg-[#0a1a3b] hover:bg-[#1b9cda] text-white font-bold text-xs sm:text-base shadow-lg shadow-[#0a1a3b]/5 hover:shadow-xl transition-all whitespace-nowrap"
              >
                Start your page
              </a>
              <a
                href="#how-it-works"
                className="flex-1 sm:flex-none px-4 py-3.5 sm:px-6 sm:py-4 rounded-full border border-border-subtle hover:bg-surface text-[#0a1a3b] font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all whitespace-nowrap"
              >
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="currentColor" />
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

          {/* Right Asset Column: Live Phone Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background ambiance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-surface rounded-full filter blur-3xl opacity-70 pointer-events-none -z-10" />

            <div className="w-full max-w-[280px]">
              <PhoneMockup>
                {/* Browser bar */}
                <div className="px-3 py-1.5 bg-white border-b border-border-subtle flex items-center shrink-0">
                  <div className="text-[9px] font-mono bg-background px-2 py-0.5 rounded text-[#0a1a3b]/80 flex-1 overflow-hidden whitespace-nowrap flex items-center gap-1">
                    <span className="text-emerald-500">🔒</span>
                    <span>trebo.site/</span>
                    <span className="font-bold text-[#1b9cda]">
                      {businessName.toLowerCase().replace(/\s+/g, "")}
                    </span>
                  </div>
                </div>

                {/* Storefront */}
                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                  {/* Brand Banner */}
                  <div className="text-center bg-surface rounded-xl p-3 border border-border-subtle">
                    <div className="w-9 h-9 bg-[#0a1a3b] text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-1.5">
                      {businessName.charAt(0)}
                    </div>
                    <h3 className="font-extrabold text-[#0a1a3b] text-xs break-words">
                      {businessName}
                    </h3>
                    <div className="text-[8px] text-[#0a1a3b]/60 font-medium">
                      {customCategory} • Lagos, Nigeria
                    </div>
                    <div className="mt-1.5 inline-flex items-center gap-1 bg-[#1b9cda]/10 text-[#158bb3] text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                      <ShieldCheck size={8} className="fill-[#1b9cda]/20" />
                      <span>Verified Store</span>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="space-y-2">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-[#0a1a3b]/60 text-left">
                      Catalog
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {activeProducts.slice(0, 4).map((item) => (
                        <div
                          key={item.id}
                          className="bg-white border border-border-subtle rounded-lg p-1.5 flex flex-col justify-between group hover:border-[#1b9cda] transition-all"
                        >
                          <div className="aspect-square bg-surface rounded-md overflow-hidden mb-1 relative">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="object-cover"
                            />
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold text-[8px] text-[#0a1a3b] line-clamp-1">
                              {item.name}
                            </h4>
                            <p className="font-extrabold text-[10px] text-[#1b9cda] mt-0.5">
                              ₦{item.price.toLocaleString()}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setSelectedProductForInquiry(item);
                              setCheckoutModalOpen(true);
                            }}
                            className="mt-1 w-full py-0.5 rounded bg-[#0a1a3b] hover:bg-[#1b9cda] text-white text-[8px] font-bold transition-all flex items-center justify-center gap-0.5"
                          >
                            <MessageCircle size={8} />
                            Inquire
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="p-2 bg-white border-t border-border-subtle text-[9px] flex items-center justify-between shrink-0">
                  <span className="font-semibold text-[#0a1a3b]/70">
                    Need anything?
                  </span>
                  <button
                    onClick={() => {
                      const defaultProd = activeProducts[0];
                      if (defaultProd) {
                        setSelectedProductForInquiry(defaultProd);
                        setCheckoutModalOpen(true);
                      }
                    }}
                    className="px-2 py-1 rounded-full bg-[#1b9cda] hover:bg-[#158bb3] text-white font-extrabold text-[8px] transition-all"
                  >
                    Instant DM
                  </button>
                </div>
              </PhoneMockup>
            </div>

            {/* Floating aesthetic labels */}
            <div className="absolute -right-4 top-10 bg-white shadow-xl rounded-2xl p-3 border border-border-subtle max-w-[150px] text-left hidden sm:block">
              <p className="text-[10px] font-mono text-[#0a1a3b]/60 uppercase">
                User Customizer
              </p>
              <p className="text-xs font-bold text-[#0a1a3b] mt-0.5">
                ✦ Click any color or button below to see active changes!
              </p>
            </div>

            <div className="absolute -left-6 bottom-12 bg-white shadow-xl rounded-2xl p-3 border border-border-subtle max-w-[160px] text-left hidden sm:block">
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
