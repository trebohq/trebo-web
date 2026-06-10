"use client";

import React from "react";
import { AlertCircle, CheckCircle2, Bot, ArrowRight } from "lucide-react";
import { PhoneMockup } from "../ui/PhoneMockup";

interface BenefitsProps {
  setActiveWorkspaceTab: (tab: "onboarding" | "dashboard" | "store") => void;
  setActiveDashboardSubTab: (tab: "metrics" | "products" | "analytics" | "assistant") => void;
}

export const Benefits: React.FC<BenefitsProps> = ({
  setActiveWorkspaceTab,
  setActiveDashboardSubTab,
}) => {
  return (
    <section id="benefits" className="macro-padding border-b border-border-subtle bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1b9cda] bg-[#1b9cda]/10 px-3 py-1 rounded-full">
            Friction to Freedom
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0a1a3b] mt-4 mb-4">
            Real business issues,
            <br />
            Solved.
          </h2>
          <p className="text-base text-[#0a1a3b]/70">
            Selling on Instagram or Facebook is exhausting. We replace the manual administrative nightmare of chat-based commerce with a smooth self-serve system.
          </p>
        </div>

        {/* 3-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Catalog */}
          <div className="bg-white border border-border-subtle rounded-3xl p-6.5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-left">
            <div>
              {/* Friction */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-rose-600">
                  <AlertCircle size={18} />
                  <span className="text-xs font-black uppercase tracking-wider">The Friction</span>
                </div>
                <h3 className="text-lg font-black text-[#0a1a3b]">DM Catalog Chaos</h3>
                <p className="text-xs text-[#0a1a3b]/70 leading-relaxed">
                  Sending product screenshots, typing pricing details, and manually checking stock sheets for every single customer query.
                </p>
              </div>

              {/* Connecting Split */}
              <div className="my-6 border-t border-dashed border-border-subtle relative flex justify-center">
                <span className="absolute -top-3.5 bg-white px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#1b9cda] border border-border-subtle rounded-full">
                  vs
                </span>
              </div>

              {/* Solution */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 size={18} />
                  <span className="text-xs font-black uppercase tracking-wider">The Freedom</span>
                </div>
                <h3 className="text-lg font-black text-[#0a1a3b]">Automated Web Catalog</h3>
                <p className="text-xs text-[#0a1a3b]/70 leading-relaxed">
                  A professional link where buyers browse your active inventory, search styles, and check prices independently.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Checkout */}
          <div className="bg-white border border-border-subtle rounded-3xl p-6.5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-left">
            <div>
              {/* Friction */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-rose-600">
                  <AlertCircle size={18} />
                  <span className="text-xs font-black uppercase tracking-wider">The Friction</span>
                </div>
                <h3 className="text-lg font-black text-[#0a1a3b]">Ghost Buyer Waste</h3>
                <p className="text-xs text-[#0a1a3b]/70 leading-relaxed">
                  Spending 30 minutes clarifying sizes, negotiating prices, and calculating delivery, only for the buyer to vanish completely.
                </p>
              </div>

              {/* Connecting Split */}
              <div className="my-6 border-t border-dashed border-border-subtle relative flex justify-center">
                <span className="absolute -top-3.5 bg-white px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#1b9cda] border border-border-subtle rounded-full">
                  vs
                </span>
              </div>

              {/* Solution */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 size={18} />
                  <span className="text-xs font-black uppercase tracking-wider">The Freedom</span>
                </div>
                <h3 className="text-lg font-black text-[#0a1a3b]">Pre-filled WhatsApp Checkout</h3>
                <p className="text-xs text-[#0a1a3b]/70 leading-relaxed">
                  Buyers assemble order parameters in their cart, click buy, and deliver a perfectly structured order draft straight to your DM.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Trust */}
          <div className="bg-white border border-border-subtle rounded-3xl p-6.5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-left">
            <div>
              {/* Friction */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-rose-600">
                  <AlertCircle size={18} />
                  <span className="text-xs font-black uppercase tracking-wider">The Friction</span>
                </div>
                <h3 className="text-lg font-black text-[#0a1a3b]">Skepticism & Low Trust</h3>
                <p className="text-xs text-[#0a1a3b]/70 leading-relaxed">
                  New Instagram pages without websites struggle to build credibility, leading to lost conversions from suspicious shoppers.
                </p>
              </div>

              {/* Connecting Split */}
              <div className="my-6 border-t border-dashed border-border-subtle relative flex justify-center">
                <span className="absolute -top-3.5 bg-white px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#1b9cda] border border-border-subtle rounded-full">
                  vs
                </span>
              </div>

              {/* Solution */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 size={18} />
                  <span className="text-xs font-black uppercase tracking-wider">The Freedom</span>
                </div>
                <h3 className="text-lg font-black text-[#0a1a3b]">Verified Store Badging</h3>
                <p className="text-xs text-[#0a1a3b]/70 leading-relaxed">
                  A dedicated checkout presence displaying verification seals, transparent reviews, and merchant policy assurances.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Immersive AI Copilot Feature Card (Full Width) */}
        <div className="bg-[#0a1a3b] rounded-3xl pt-8 md:pt-10 px-8 md:px-12 pb-0 md:pb-0 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 mt-12 text-left shadow-2xl">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1b9cda] rounded-full filter blur-3xl opacity-20 pointer-events-none" />

          {/* Left Text Block */}
          <div className="space-y-4 max-w-xl relative z-10 pb-8 md:pb-10 lg:pb-10">
            <div className="flex items-center gap-2 text-[#1b9cda]">
              <Bot size={20} />
              <span className="text-xs font-extrabold uppercase tracking-widest font-mono">AI Sales Copilot</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
              A virtual assistant that handles your operations 24/7.
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Sync metrics, retrieve performance reports, and draft follow-up messages for inactive leads automatically. Simply chat with your Trebo bot via standard mobile texts to run your shop.
            </p>
            <button
              onClick={() => {
                const workspace = document.getElementById("customizer");
                if (workspace) {
                  workspace.scrollIntoView({ behavior: "smooth" });
                  setActiveWorkspaceTab("dashboard");
                  setActiveDashboardSubTab("assistant");
                }
              }}
              className="px-5 py-3 rounded-xl bg-[#1b9cda] hover:bg-[#158bb3] text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all w-fit shadow-md shadow-[#1b9cda]/20"
            >
              Configure Assistant Chatbot
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Right Chat Mockup Block (Half-phone mockup clipping at the bottom) */}
          <div className="w-full max-w-[310px] h-[260px] lg:h-[330px] shrink-0 relative z-10 self-center lg:self-end mt-6 lg:mt-0">
            <div className="absolute top-0 left-0 w-full">
              <PhoneMockup>
                <div className="bg-slate-50 h-full flex flex-col overflow-hidden text-[#0a1a3b] font-sans">
                  {/* Chat App Header */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 border-b border-slate-200/80 shrink-0 select-none">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-[#1b9cda] flex items-center justify-center text-sm shadow-sm text-white font-bold">
                          💬
                        </div>
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-extrabold text-xs text-[#0a1a3b] leading-tight">Trebo Copilot</h4>
                        <span className="text-[9px] text-[#1b9cda] font-bold">WhatsApp Bot</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 text-[#0a1a3b]/40">
                      <span className="text-xs cursor-pointer hover:text-[#0a1a3b]">📞</span>
                      <span className="text-xs font-bold cursor-pointer hover:text-[#0a1a3b]">⋮</span>
                    </div>
                  </div>

                  {/* Conversation area */}
                  <div className="flex-1 p-3.5 space-y-4 overflow-y-auto bg-[#efeae2] relative">
                    {/* User message */}
                    <div className="flex flex-col items-end max-w-[85%] ml-auto space-y-1">
                      <div className="bg-[#d9fdd3] text-[#0a1a3b] px-3.5 py-2.5 rounded-2xl rounded-tr-none text-xs font-medium leading-relaxed shadow-sm text-left">
                        Follow up with yesterday&apos;s ghost buyers
                      </div>
                      <div className="flex items-center gap-1 text-[9px] text-slate-500">
                        <span>10:14 AM</span>
                        <svg className="w-3 h-3 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5M10.5 18.75l6-6" />
                        </svg>
                      </div>
                    </div>

                    {/* Bot response */}
                    <div className="flex flex-col items-start max-w-[90%] mr-auto space-y-1">
                      <div className="bg-white text-[#0a1a3b] p-3.5 rounded-2xl rounded-tl-none text-xs shadow-sm border border-slate-200/60 text-left">
                        <div className="text-slate-800 leading-relaxed font-medium">
                          Followed up with <span className="font-bold text-[#0a1a3b]">5 inquiries</span>.
                          <br />
                          <span className="font-bold text-[#0a1a3b]">2 buyers</span> completed their transfers!
                        </div>
                        <div className="mt-2.5 pt-2 border-t border-slate-200/80 flex justify-between items-center gap-4 text-[10px] text-slate-500">
                          <span>Total Recovered:</span>
                          <span className="font-black text-[12px] text-[#0a1a3b]">₦33,500</span>
                        </div>
                      </div>
                      <span className="text-[9px] text-slate-400 pl-1 font-mono">Trebo Bot • 10:15 AM</span>
                    </div>
                  </div>

                  {/* Simulated footer input */}
                  <div className="p-2 bg-[#f0f2f5] border-t border-slate-200/60 flex items-center gap-2 shrink-0">
                    <div className="flex-1 bg-white rounded-full px-4 py-2 text-[11px] text-slate-400 text-left select-none shadow-sm">
                      Type a message...
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#1b9cda] hover:bg-[#158bb3] flex items-center justify-center text-white shadow-sm shrink-0 transition-all cursor-pointer">
                      <svg className="w-3.5 h-3.5 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

