"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface BenefitsProps {
  setActiveWorkspaceTab: (tab: "onboarding" | "dashboard" | "store") => void;
  setActiveDashboardSubTab: (tab: "metrics" | "products" | "analytics" | "assistant") => void;
}

export const Benefits: React.FC<BenefitsProps> = ({
  setActiveWorkspaceTab,
  setActiveDashboardSubTab,
}) => {
  return (
    <section id="benefits" className="macro-padding border-b border-[#dedad3] bg-[#ebe7e0]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1b9cda] bg-[#1b9cda]/10 px-3 py-1 rounded-full">
            Why Trebo?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0a1a3b] mt-4 mb-4">
            Real business issues,
            <br />
            Solved.
          </h2>
          <p className="text-base text-[#0a1a3b]/70">
            Selling on Instagram and Facebook is exhausting. We automate the manual administrative work so you can focus strictly on scaling your stock.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Hand Column: The Sad Reality (Problem elements stacked) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-left bg-[#ebe7e0] border border-[#dedad3] rounded-3xl p-6 md:p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0a1a3b]/50 block mb-2">
                The Hard Reality
              </span>
              <h3 className="text-2xl font-extrabold text-[#0a1a3b] leading-tight mb-4">
                Selling in DMs is a full-time stress.
              </h3>
              <p className="text-sm text-[#0a1a3b]/70 leading-relaxed">
                Managing order tracking spreadsheets, sending photo cards separately, and answering monotonous pricing requests takes hours of your week without guaranteeing a secure conversion.
              </p>
            </div>

            {/* Stacked problem blocks */}
            {[
              { title: "Manual catalog sending", desc: "Sending individual product product pictures and prices one by one to 20 customers daily is a huge waste of your daylight hours." },
              { title: "Ghost buyers", desc: "They ask clarifying questions for 30 minutes, demand prices, then vanish. Trebo separates high-intent buyers early on." },
              { title: "Zero trust market", desc: "Anonymous bad actors have hurt marketplace confidence. If your page does not look polished and verified, prospects move elsewhere." }
            ].map((prob, idx) => (
              <div key={idx} className="bg-white/80 p-5 rounded-2xl border border-[#dedad3] text-left">
                <span className="text-[10px] font-mono text-[#0a1a3b]/50 uppercase tracking-widest block mb-1">
                  Friction point - 0{idx + 1}
                </span>
                <h4 className="font-extrabold text-sm text-[#0a1a3b] mb-1.5">{prob.title}</h4>
                <p className="text-xs text-[#0a1a3b]/70 leading-relaxed">{prob.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Hand Column: The Premium Solution (Gorgeous structural blocks) */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="text-left bg-[#0a1a3b] text-[#f3efe9] rounded-3xl p-6 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1b9cda] rounded-full filter blur-3xl opacity-20 pointer-events-none" />

              <span className="text-xs font-bold uppercase tracking-widest text-white/50 block mb-2 font-mono">
                The Solution System
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-6">
                A professional outlet that manages itself.
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {[
                  { title: "Google Search Discovery", desc: "Your listed products will register on index search tools automatically. Acquire organic inquiries beyond social media circles." },
                  { title: "Click-to-WhatsApp Checkout", desc: "No more repetitive pricing questions. Buyers see prices upfront, click buy, and deliver organized inquiries straight to your phone." },
                  { title: "Verified Identity badging", desc: "Display verification tags and custom reviews safely. Safe transactions build absolute marketplace credibility instantly." },
                  { title: "Interactive WhatsApp Assistant", desc: "Send simple mobile texts to our simulated AI assistant to sync metrics, follow up with buyers, or modify inventory catalogs." }
                ].map((sol, idx) => (
                  <div key={idx} className="space-y-1 text-left">
                    <div className="w-6 h-6 rounded-full bg-[#1b9cda] text-white flex items-center justify-center font-bold text-xs mb-2">
                      ✓
                    </div>
                    <h4 className="font-extrabold text-sm text-white">{sol.title}</h4>
                    <p className="text-xs text-white/70 leading-relaxed">{sol.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trebo AI assistant testimonial card */}
            <div className="bg-[#1b9cda]/10 border border-[#1b9cda]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
              <div className="space-y-1 max-w-md">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#158bb3]">
                  <Sparkles size={14} className="animate-spin" />
                  <span>Trebo AI Automation Enabled</span>
                </div>
                <p className="text-sm font-semibold text-[#0a1a3b] italic">
                  &ldquo;I followed up with 5 ghost buyers today. 2 of them are ready to pay!&rdquo;
                </p>
              </div>
              <button
                onClick={() => {
                  const workspace = document.getElementById("customizer");
                  if (workspace) {
                    workspace.scrollIntoView({ behavior: "smooth" });
                    setActiveWorkspaceTab("dashboard");
                    setActiveDashboardSubTab("assistant");
                  }
                }}
                className="px-4 py-2 bg-[#0a1a3b] text-white hover:bg-[#1b9cda] rounded-xl font-bold text-xs uppercase tracking-wide transition-all shrink-0"
              >
                Configure Agent chatbot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
