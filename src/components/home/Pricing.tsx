"use client";

import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

interface PricingProps {
  isYearlyBilling: boolean;
  setIsYearlyBilling: (yearly: boolean) => void;
  setActiveWorkspaceTab: (tab: "onboarding" | "dashboard" | "store") => void;
}

export const Pricing: React.FC<PricingProps> = ({
  isYearlyBilling,
  setIsYearlyBilling,
  setActiveWorkspaceTab,
}) => {
  return (
    <section id="pricing" className="macro-padding border-b border-[#dedad3] bg-[#ebe7e0]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1b9cda] bg-[#1b9cda]/10 px-3 py-1 rounded-full">
            Fair Pricing Models
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4 mb-4 text-[#0a1a3b]">
            Plans built to grow
            <br className="sm:hidden" />
            with your business.
          </h2>
          <p className="text-base text-[#0a1a3b]/70 mb-8">
            Choose a plan that fits your current hustle. Upgrade as you grow of your scale. No hidden transaction charges.
          </p>

          {/* Monthly / Annual Toggle switch */}
          <div className="flex items-center justify-center gap-3">
            <span className={`text-xs font-bold uppercase tracking-wider ${!isYearlyBilling ? "text-[#0a1a3b]" : "text-[#0a1a3b]/50"}`}>
              Monthly billing
            </span>
            <button
              onClick={() => setIsYearlyBilling(!isYearlyBilling)}
              className="w-12 h-6.5 rounded-full bg-[#0a1a3b] p-0.5 relative transition-all flex items-center"
            >
              <div
                className={`w-5.5 h-5.5 rounded-full bg-white shadow-md transition-all ${
                  isYearlyBilling ? "translate-x-5.5" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-bold uppercase tracking-wider ${isYearlyBilling ? "text-[#0a1a3b]" : "text-[#0a1a3b]/50"}`}>
              Yearly plan (Save 20%)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Plan 1 - Starter */}
          <div className="bg-white border border-[#dedad3] rounded-3xl p-8 flex flex-col justify-between text-left">
            <div>
              <span className="text-xs font-bold text-[#0a1a3b]/50 uppercase tracking-widest block mb-2">
                Starter Plan
              </span>
              <h3 className="text-xl font-extrabold text-[#0a1a3b]">Starter</h3>
              <p className="text-xs text-[#0a1a3b]/60 mt-1 mb-6">
                Perfect for new micro-businesses looking to establish visual trust.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-black text-[#0a1a3b]">
                  ₦{isYearlyBilling ? "1,200" : "1,500"}
                </span>
                <span className="text-xs font-mono text-[#0a1a3b]/60 uppercase ml-1 block">
                  / month
                </span>
              </div>

              <div className="h-[1px] bg-[#dedad3] mb-6" />

              <ul className="space-y-3.5 mb-8">
                <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                  <CheckCircle2 size={14} className="text-[#10b981]" />
                  <span>trebo.site/yourname</span>
                </li>
                <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                  <CheckCircle2 size={14} className="text-[#10b981]" />
                  <span>Up to 20 products</span>
                </li>
                <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                  <CheckCircle2 size={14} className="text-[#10b981]" />
                  <span>Customer review logs</span>
                </li>
                <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                  <CheckCircle2 size={14} className="text-[#10b981]" />
                  <span>WhatsApp catalog order CTA</span>
                </li>
                <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                  <CheckCircle2 size={14} className="text-[#10b981]" />
                  <span>Basic brand configuration</span>
                </li>
              </ul>
            </div>

            <a
              href="#customizer"
              className="w-full text-center py-3.5 rounded-xl border border-[#dedad3] hover:bg-[#ebe7e0] text-[#0a1a3b] font-bold text-xs uppercase tracking-wide transition-all"
            >
              Select Starter
            </a>
          </div>

          {/* Plan 2 - Pro (Most Popular) */}
          <div className="bg-white border-2 border-[#1b9cda] rounded-3xl p-8 flex flex-col justify-between text-left relative shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1b9cda] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
              Recommended
            </div>

            <div>
              <span className="text-xs font-bold text-[#1b9cda] uppercase tracking-widest block mb-2 mt-2">
                Premium Bot Integration
              </span>
              <h3 className="text-xl font-extrabold text-[#0a1a3b]">Pro Plan</h3>
              <p className="text-xs text-[#0a1a3b]/60 mt-1 mb-6">
                Our most popular plan tailored for serious local store operators.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-black text-[#0a1a3b]">
                  ₦{isYearlyBilling ? "2,000" : "2,500"}
                </span>
                <span className="text-xs font-mono text-[#0a1a3b]/60 uppercase ml-1 block">
                  / month
                </span>
              </div>

              <div className="h-[1px] bg-[#dedad3] mb-6" />

              <ul className="space-y-3.5 mb-8">
                <li className="text-xs font-extrabold flex items-center gap-2 text-[#1b9cda]">
                  <Sparkles size={14} className="animate-pulse" />
                  <span>Includes AI WhatsApp Assistant</span>
                </li>
                <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                  <CheckCircle2 size={14} className="text-[#10b981]" />
                  <span>Everything in Starter plan</span>
                </li>
                <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                  <CheckCircle2 size={14} className="text-[#10b981]" />
                  <span>store.trebo.com subdomain redirection</span>
                </li>
                <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                  <CheckCircle2 size={14} className="text-[#10b981]" />
                  <span>Up to 300 products in directory</span>
                </li>
                <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                  <CheckCircle2 size={14} className="text-[#10b981]" />
                  <span>Trebo merchant directory listing</span>
                </li>
                <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                  <CheckCircle2 size={14} className="text-[#10b981]" />
                  <span>Auto-follow up message bot</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                const targetElement = document.getElementById("customizer");
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth" });
                  setActiveWorkspaceTab("dashboard");
                }
              }}
              className="w-full text-center py-3.5 rounded-xl bg-[#1b9cda] hover:bg-[#158bb3] text-white font-bold text-xs uppercase tracking-wide transition-all shadow-sm shadow-[#1b9cda]/10"
            >
              Launch Pro Page
            </button>
          </div>

          {/* Plan 3 - Premium */}
          <div className="bg-white border border-[#dedad3] rounded-3xl p-8 flex flex-col justify-between text-left">
            <div>
              <span className="text-xs font-bold text-[#0a1a3b]/50 uppercase tracking-widest block mb-2">
                Complete Branding Identity
              </span>
              <h3 className="text-xl font-extrabold text-[#0a1a3b]">Premium</h3>
              <p className="text-xs text-[#0a1a3b]/60 mt-1 mb-6">
                For established local outlets seeking payment capabilities and domains.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-black text-[#0a1a3b]">
                  ₦{isYearlyBilling ? "4,000" : "5,000"}
                </span>
                <span className="text-xs font-mono text-[#0a1a3b]/60 uppercase ml-1 block">
                  / month
                </span>
              </div>

              <div className="h-[1px] bg-[#dedad3] mb-6" />

              <ul className="space-y-3.5 mb-8">
                <li className="text-xs font-bold text-[#0a1a3b] flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#0a1a3b]" />
                  <span>Verification Badge displayed</span>
                </li>
                <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                  <CheckCircle2 size={14} className="text-[#10b981]" />
                  <span>Everything in Pro plan</span>
                </li>
                <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                  <CheckCircle2 size={14} className="text-[#10b981]" />
                  <span>Direct online payment integration</span>
                </li>
                <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                  <CheckCircle2 size={14} className="text-[#10b981]" />
                  <span>Free custom .com.ng domain</span>
                </li>
                <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                  <CheckCircle2 size={14} className="text-[#10b981]" />
                  <span>Advanced meta store analytics dashboard</span>
                </li>
              </ul>
            </div>

            <a
              href="#customizer"
              className="w-full text-center py-3.5 rounded-xl border border-[#dedad3] hover:bg-[#ebe7e0] text-[#0a1a3b] font-bold text-xs uppercase tracking-wide transition-all"
            >
              Select Premium
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-semibold text-[#0a1a3b]/70">
            Prices are in Nigerian Naira (₦). Need something different?{" "}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                alert("Thanks for your interest! Standard support is available on WhatsApp or via mail: contact@gettrebo.com");
              }}
              className="text-[#1b9cda] hover:underline"
            >
              Talk to us.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
