"use client";

import React from "react";
import { 
  TrendingUp, 
  ShoppingBag, 
  Layers, 
  Sparkles, 
  Plus, 
  ArrowRight, 
  Info, 
  Check, 
  Share2, 
  DollarSign, 
  CheckCircle2, 
  MessageCircle 
} from "lucide-react";
import { Product, ChatMessage } from "./types";

interface InteractivePlaygroundProps {
  activeWorkspaceTab: "onboarding" | "dashboard" | "store";
  setActiveWorkspaceTab: (tab: "onboarding" | "dashboard" | "store") => void;
  activeDashboardSubTab: "metrics" | "products" | "analytics" | "assistant";
  setActiveDashboardSubTab: (tab: "metrics" | "products" | "analytics" | "assistant") => void;
  businessName: string;
  setBusinessName: (name: string) => void;
  customCategory: string;
  handleCategoryChange: (cat: string) => void;
  whatsappNumber: string;
  setWhatsappNumber: (num: string) => void;
  brandColor: string;
  setBrandColor: (color: string) => void;
  isVerified: boolean;
  setIsVerified: (verified: boolean) => void;
  activeProducts: Product[];
  newProductName: string;
  setNewProductName: (name: string) => void;
  newProductPrice: string;
  setNewProductPrice: (price: string) => void;
  handleAddProduct: (e: React.FormEvent) => void;
  aiChat: ChatMessage[];
  executeAiCommand: (command: string) => void;
  customAiText: string;
  setCustomAiText: (text: string) => void;
  aiInputEnabled: boolean;
  handleCustomAiSend: (e: React.FormEvent) => void;
  setSelectedProductForInquiry: (product: Product) => void;
  setCheckoutModalOpen: (open: boolean) => void;
}

export const InteractivePlayground: React.FC<InteractivePlaygroundProps> = ({
  activeWorkspaceTab,
  setActiveWorkspaceTab,
  activeDashboardSubTab,
  setActiveDashboardSubTab,
  businessName,
  setBusinessName,
  customCategory,
  handleCategoryChange,
  whatsappNumber,
  setWhatsappNumber,
  brandColor,
  setBrandColor,
  isVerified,
  setIsVerified,
  activeProducts,
  newProductName,
  setNewProductName,
  newProductPrice,
  setNewProductPrice,
  handleAddProduct,
  aiChat,
  executeAiCommand,
  customAiText,
  setCustomAiText,
  aiInputEnabled,
  handleCustomAiSend,
  setSelectedProductForInquiry,
  setCheckoutModalOpen,
}) => {
  return (
    <section id="customizer" className="macro-padding relative border-b border-[#dedad3] bg-[#f3efe9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1b9cda] bg-[#1b9cda]/10 px-3 py-1 rounded-full">
            Interactive Sandbox Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a1a3b] mt-4 mb-4">
            Customize Your Store
          </h2>
          <p className="text-base text-[#0a1a3b]/70">
            Change names, pick colors, add custom products, and chat with the simulated AI assistant. See the storefront adapt instantly in our high-fidelity workspace!
          </p>
        </div>

        {/* Setup / Workspace Navigator Tab Headers */}
        <div className="flex justify-center border-b border-[#dedad3] mb-12 max-w-sm mx-auto">
          <button
            onClick={() => setActiveWorkspaceTab("onboarding")}
            className={`flex-1 pb-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeWorkspaceTab === "onboarding"
                ? "border-[#1b9cda] text-[#1b9cda]"
                : "border-transparent text-[#0a1a3b]/50 hover:text-[#0a1a3b]"
            }`}
          >
            1. Onboarding
          </button>
          <button
            onClick={() => setActiveWorkspaceTab("dashboard")}
            className={`flex-1 pb-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeWorkspaceTab === "dashboard"
                ? "border-[#1b9cda] text-[#1b9cda]"
                : "border-transparent text-[#0a1a3b]/50 hover:text-[#0a1a3b]"
            }`}
          >
            2. Dashboard
          </button>
          <button
            onClick={() => setActiveWorkspaceTab("store")}
            className={`flex-1 pb-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeWorkspaceTab === "store"
                ? "border-[#1b9cda] text-[#1b9cda]"
                : "border-transparent text-[#0a1a3b]/50 hover:text-[#0a1a3b]"
            }`}
          >
            3. View Store
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white subtle-border rounded-3xl p-6 md:p-10 shadow-xl overflow-hidden">
          {/* LEFT WORKSPACE CONTROLS - COLUMN (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Onboarding tab contents */}
              {activeWorkspaceTab === "onboarding" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#dedad3]">
                    <div>
                      <div className="text-[10px] font-mono text-[#0a1a3b]/50 uppercase tracking-widest">
                        Onboarding Step
                      </div>
                      <h3 className="font-extrabold text-[#0a1a3b] text-lg">
                        Step 2 of 3: Design your presence
                      </h3>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#ebe7e0] text-[#0a1a3b]">
                      Active Setup
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#0a1a3b]/70 mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#dedad3] bg-[#f3efe9] text-[#0a1a3b] font-medium text-sm focus:outline-none focus:border-[#1b9cda] focus:ring-1 focus:ring-[#1b9cda] transition-all"
                        placeholder="e.g., Adaeze Fashion"
                      />
                    </div>

                    {/* WhatsApp Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#0a1a3b]/70 mb-2">
                        WhatsApp Number
                      </label>
                      <input
                        type="text"
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#dedad3] bg-[#f3efe9] text-[#0a1a3b] font-medium text-sm focus:outline-none focus:border-[#1b9cda] focus:ring-1 focus:ring-[#1b9cda] transition-all"
                        placeholder="e.g., +234 801 234 5678"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Brand Category Picker */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#0a1a3b]/70 mb-2">
                        Business Category
                      </label>
                      <select
                        value={customCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#dedad3] bg-[#f3efe9] text-[#0a1a3b] font-medium text-sm focus:outline-none focus:border-[#1b9cda] focus:ring-2 focus:ring-[#1b9cda] transition-all"
                      >
                        <option value="Fashion">Fashion & Clothing</option>
                        <option value="Food">Food & Catering</option>
                        <option value="Beauty">Beauty & Skincare</option>
                        <option value="Electronics">Electronics & Gadgets</option>
                        <option value="Services">Services (Salons, Tailors, etc.)</option>
                      </select>
                    </div>

                    {/* Verification Status option */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#0a1a3b]/70 mb-2">
                        Verification Seal
                      </label>
                      <div className="flex items-center gap-3 px-4 py-3 border border-[#dedad3] rounded-xl bg-[#f3efe9]">
                        <input
                          type="checkbox"
                          checked={isVerified}
                          onChange={(e) => setIsVerified(e.target.checked)}
                          className="w-4.5 h-4.5 rounded text-[#1b9cda] focus:ring-[#1b9cda] border-[#dedad3]"
                          id="verify-seal"
                        />
                        <label htmlFor="verify-seal" className="text-xs font-semibold text-[#0a1a3b] select-none cursor-pointer">
                          Display Trust Badges
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Brand Colors row */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#0a1a3b]/70 mb-3">
                      Accent Identity (Brand Color)
                    </label>
                    <div className="flex items-center gap-3">
                      {[
                        { value: "#c29a53", label: "Sand Ochre" },
                        { value: "#4e6e58", label: "Forest Sage" },
                        { value: "#d96b43", label: "Terracotta" },
                        { value: "#a67c52", label: "Clay Bark" },
                        { value: "#e07a5f", label: "Coral Rose" },
                        { value: "#495867", label: "Slate Slate" },
                      ].map((colorObj) => (
                        <button
                          key={colorObj.value}
                          onClick={() => setBrandColor(colorObj.value)}
                          style={{ backgroundColor: colorObj.value }}
                          className={`w-9 h-9 rounded-full relative flex items-center justify-center transition-all ${
                            brandColor === colorObj.value
                              ? "ring-4 ring-[#0a1a3b] scale-110"
                              : "hover:scale-105"
                          }`}
                          title={colorObj.label}
                        >
                          {brandColor === colorObj.value && (
                            <Check size={14} className="text-white" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick navigation suggestion */}
                  <div className="bg-[#f3efe9] border border-[#dedad3] rounded-2xl p-4 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#dedad3] text-[#0a1a3b]">
                      <Info size={16} />
                    </div>
                    <div className="text-xs text-[#0a1a3b]/80">
                      <span className="font-bold block mb-0.5">Quick setup complete!</span>
                      Your domain links, customized badges, and basic parameters are ready. Move to the **Dashboard** panel next to see product inventories.
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveWorkspaceTab("dashboard")}
                    className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#0a1a3b] hover:bg-[#1b9cda] text-white font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2 transition-all self-start"
                  >
                    Advance to Dashboard
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}

              {/* Dashboard tab contents */}
              {activeWorkspaceTab === "dashboard" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#dedad3]">
                    <div>
                      <div className="text-[10px] font-mono text-[#0a1a3b]/50 uppercase tracking-widest">
                        Trebo Console
                      </div>
                      <h3 className="font-extrabold text-[#0a1a3b] text-lg">
                        Shop Control Panel: {businessName}
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-[#1b9cda] bg-[#1b9cda]/10 px-2.5 py-1 rounded-full border border-[#1b9cda]/20">
                      online
                    </span>
                  </div>

                  {/* Sub navigation inside Dashboard mockup */}
                  <div className="flex bg-[#ebe7e0] rounded-xl p-1 gap-1">
                    {[
                      { id: "metrics", label: "Dashboard", icon: TrendingUp },
                      { id: "products", label: "Products", icon: ShoppingBag },
                      { id: "analytics", label: "Analytics", icon: Layers },
                      { id: "assistant", label: "Trebo AI", icon: Sparkles },
                    ].map((subTab) => {
                      const IconComponent = subTab.icon;
                      return (
                        <button
                          key={subTab.id}
                          onClick={() => setActiveDashboardSubTab(subTab.id as any)}
                          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                            activeDashboardSubTab === subTab.id
                              ? "bg-white text-[#0a1a3b] shadow-sm"
                              : "text-[#0a1a3b]/60 hover:text-[#0a1a3b]"
                          }`}
                        >
                          <IconComponent size={14} />
                          <span className="hidden sm:inline">{subTab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Dashboard Metrics sub tab */}
                  {activeDashboardSubTab === "metrics" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="p-4 bg-[#f3efe9] border border-[#dedad3] rounded-xl text-left">
                          <span className="text-[10px] font-mono text-[#0a1a3b]/60 uppercase tracking-wide">
                            Unique Views
                          </span>
                          <div className="text-xl font-black text-[#0a1a3b] mt-1">4,120</div>
                          <span className="text-[10px] text-[#1b9cda] font-medium">+12% this week</span>
                        </div>

                        <div className="p-4 bg-[#f3efe9] border border-[#dedad3] rounded-xl text-left">
                          <span className="text-[10px] font-mono text-[#0a1a3b]/60 uppercase tracking-wide">
                            WhatsApp Clicks
                          </span>
                          <div className="text-xl font-black text-[#0a1a3b] mt-1">342</div>
                          <span className="text-[10px] text-[#1b9cda] font-medium">8.3% convert</span>
                        </div>

                        <div className="p-4 bg-[#f3efe9] border border-[#dedad3] rounded-xl text-left">
                          <span className="text-[10px] font-mono text-[#0a1a3b]/60 uppercase tracking-wide">
                            Serious Inquiries
                          </span>
                          <div className="text-xl font-black text-[#0a1a3b] mt-1">112</div>
                          <span className="text-[10px] text-emerald-600 font-medium">No ghost buyers</span>
                        </div>

                        <div className="p-4 bg-[#f3efe9] border border-[#dedad3] rounded-xl text-left">
                          <span className="text-[10px] font-mono text-[#0a1a3b]/60 uppercase tracking-wide">
                            Potential Sales
                          </span>
                          <div className="text-xl font-black text-[#0a1a3b] mt-1">₦285.0k</div>
                          <span className="text-[10px] text-[#0a1a3b]/50 font-medium">Estimations</span>
                        </div>
                      </div>

                      {/* Order overview mockup */}
                      <div className="border border-[#dedad3] rounded-2xl overflow-hidden bg-[#f3efe9]">
                        <div className="p-4 bg-[#ebe7e0] border-b border-[#dedad3] flex justify-between items-center">
                          <h4 className="font-extrabold text-[#0a1a3b] text-sm">
                            Recent Inquiry Queue
                          </h4>
                          <span className="text-[10px] font-mono tracking-wider opacity-60">
                            Direct WhatsApp logs
                          </span>
                        </div>

                        <div className="divide-y divide-[#dedad3]">
                          {[
                            { customer: "Folake", item: activeProducts[0]?.name || "Ankara Gown", status: "Inquiry on size Medium", time: "10 mins ago" },
                            { customer: "Emeka O.", item: activeProducts[1]?.name || "Luxury Kaftan", status: "Delivery check (Abuja)", time: "2 hours ago" },
                            { customer: "Aisha G.", item: activeProducts[2]?.name || "Satin Two-Piece", status: "Payment verification pending", time: "Yesterday" }
                          ].map((inq, idx) => (
                            <div key={idx} className="p-4 flex justify-between items-center text-left hover:bg-white transition-all">
                              <div>
                                <span className="text-xs font-bold text-[#0a1a3b] block">
                                  {inq.customer} ({inq.time})
                                </span>
                                <span className="text-[11px] text-[#0a1a3b]/70 block">
                                  {inq.item}
                                </span>
                              </div>
                              <span className="text-[10px] px-2 py-1 rounded bg-amber-100 text-amber-800 font-bold">
                                {inq.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dashboard Manage Products Tab */}
                  {activeDashboardSubTab === "products" && (
                    <div className="space-y-4">
                      {/* Inline Addition Form */}
                      <form onSubmit={handleAddProduct} className="bg-[#f3efe9] p-4 rounded-2xl border border-[#dedad3] space-y-3 text-left">
                        <h4 className="font-extrabold text-[#0a1a3b] text-sm">
                          Add a Product to {customCategory}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            type="text"
                            value={newProductName}
                            onChange={(e) => setNewProductName(e.target.value)}
                            placeholder="Product Name"
                            className="px-3 py-2 rounded-lg bg-white border border-[#dedad3] text-xs font-semibold focus:outline-none focus:border-[#1b9cda]"
                          />
                          <input
                            type="number"
                            value={newProductPrice}
                            onChange={(e) => setNewProductPrice(e.target.value)}
                            placeholder="Price in Naira (e.g., 12000)"
                            className="px-3 py-2 rounded-lg bg-white border border-[#dedad3] text-xs font-semibold focus:outline-none focus:border-[#1b9cda]"
                          />
                        </div>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-[#0a1a3b] hover:bg-[#1b9cda] text-white font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5"
                        >
                          <Plus size={14} />
                          Add Product
                        </button>
                      </form>

                      {/* Table list of customizer products */}
                      <div className="border border-[#dedad3] rounded-2xl overflow-hidden bg-[#f3efe9] max-h-[220px] overflow-y-auto">
                        <table className="w-full text-xs text-left">
                          <thead>
                            <tr className="bg-[#ebe7e0] text-[#0a1a3b] font-bold">
                              <th className="p-3">Product Name</th>
                              <th className="p-3">Category</th>
                              <th className="p-3">Price</th>
                              <th className="p-3 text-right">Draft Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#dedad3]">
                            {activeProducts.map((p) => (
                              <tr key={p.id} className="hover:bg-white transition-all font-medium">
                                <td className="p-3">{p.name}</td>
                                <td className="p-3">{p.category}</td>
                                <td className="p-3 font-bold text-[#1b9cda]">
                                  ₦{p.price.toLocaleString()}
                                </td>
                                <td className="p-3 text-right">
                                  <span className="bg-emerald-150 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    Active
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Analytics mock with pure mathematical SVGs for performance */}
                  {activeDashboardSubTab === "analytics" && (
                    <div className="space-y-4">
                      <div className="bg-[#f3efe9] border border-[#dedad3] rounded-2xl p-4 text-left">
                        <h4 className="font-extrabold text-[#0a1a3b] text-sm mb-1">
                          WhatsApp Redirect Analytics
                        </h4>
                        <p className="text-xs text-[#0a1a3b]/60 mb-4">
                          Aggregated high-intent customer requests over the last 7 days.
                        </p>

                        <div className="relative w-full h-[140px] mt-4">
                          {/* Smooth grid lines */}
                          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                            <hr className="border-t border-dashed border-[#dedad3] w-full" />
                            <hr className="border-t border-dashed border-[#dedad3] w-full" />
                            <hr className="border-t border-dashed border-[#dedad3] w-full" />
                          </div>

                          {/* Simulated SVG Graph */}
                          <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#1b9cda" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#1b9cda" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M 0 80 Q 80 40 160 55 T 320 15 T 500 20 L 500 100 L 0 100 Z"
                              fill="url(#chart-grad)"
                            />
                            <path
                              d="M 0 80 Q 80 40 160 55 T 320 15 T 500 20"
                              fill="none"
                              stroke="#1b9cda"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                            />
                          </svg>

                          <div className="absolute top-2 left-6 bg-white border border-[#dedad3] rounded-lg p-2 text-[10px] font-mono leading-none shadow-sm font-semibold text-[#0a1a3b]">
                            <span>Peak: 80 clickthroughs (Mon)</span>
                          </div>
                        </div>

                        <div className="flex justify-between text-[10px] font-mono font-bold text-[#0a1a3b]/50 mt-2 px-1">
                          <span>Mon</span>
                          <span>Tue</span>
                          <span>Wed</span>
                          <span>Thu</span>
                          <span>Fri</span>
                          <span>Sat</span>
                          <span>Sun</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* AI Chat assistant simulator of the WhatsApp auto bot */}
                  {activeDashboardSubTab === "assistant" && (
                    <div className="space-y-4">
                      <div className="bg-[#f3efe9] border border-[#dedad3] rounded-2xl p-4 flex flex-col h-[280px]">
                        {/* Chat Messages Log scroll area */}
                        <div className="flex-1 overflow-y-auto mb-4 space-y-3.5 pr-1 text-left">
                          {aiChat.map((msg) => (
                            <div
                              key={msg.id}
                              className={`flex flex-col max-w-[85%] ${
                                msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                              }`}
                            >
                              <div
                                className={`p-3 rounded-2xl text-xs font-medium leading-relaxed ${
                                  msg.sender === "user"
                                    ? "bg-[#0a1a3b] text-white rounded-tr-none"
                                    : "bg-white border border-[#dedad3] text-[#0a1a3b] rounded-tl-none"
                                }`}
                              >
                                {msg.text}
                              </div>
                              <span className="text-[9px] font-mono text-[#0a1a3b]/55 mt-1 block">
                                {msg.time}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Predefined prompt helpers */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          <button
                            onClick={() => executeAiCommand("Follow up with ghost buyers")}
                            className="px-2.5 py-1 text-[10px] bg-[#ebe7e0] hover:bg-[#dedad3] font-bold rounded-full transition-all text-[#0a1a3b]"
                          >
                            💬 Follow-up Bot
                          </button>
                          <button
                            onClick={() => executeAiCommand("Give me my daily shop summary")}
                            className="px-2.5 py-1 text-[10px] bg-[#ebe7e0] hover:bg-[#dedad3] font-bold rounded-full transition-all text-[#0a1a3b]"
                          >
                            📊 Daily Summary
                          </button>
                        </div>

                        {/* Input Bar */}
                        <form onSubmit={handleCustomAiSend} className="flex gap-2">
                          <input
                            type="text"
                            value={customAiText}
                            onChange={(e) => setCustomAiText(e.target.value)}
                            disabled={!aiInputEnabled}
                            placeholder="Type commands to Trebo AI..."
                            className="flex-1 px-4 py-3 text-xs bg-white text-[#0a1a3b] font-semibold border border-[#dedad3] rounded-xl focus:outline-none focus:border-[#1b9cda] disabled:opacity-50"
                          />
                          <button
                            type="submit"
                            disabled={!aiInputEnabled}
                            className="px-4 bg-[#0a1a3b] hover:bg-[#1b9cda] text-white rounded-xl flex items-center justify-center transition-all disabled:opacity-50"
                          >
                            <ArrowRight size={16} />
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Direct Store View tab content */}
              {activeWorkspaceTab === "store" && (
                <div className="space-y-6 text-left">
                  <div className="pb-4 border-b border-[#dedad3]">
                    <div className="text-[10px] font-mono text-[#0a1a3b]/50 uppercase tracking-widest">
                      Trebo Preview
                    </div>
                    <h3 className="font-extrabold text-[#0a1a3b] text-lg">
                      You are viewing gettrebo.com/{businessName.toLowerCase().replace(/\s+/g, "")}
                    </h3>
                  </div>

                  <div className="p-6 bg-[#ebe7e0] border border-[#dedad3] rounded-2xl flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#0a1a3b]/50 uppercase">
                        Permanent QR Code
                      </span>
                      <h4 className="font-black text-[#0a1a3b] text-sm mt-1">
                        Share with buyers in Nigeria
                      </h4>
                      <p className="text-xs text-[#0a1a3b]/70 mt-1 max-w-[32ch]">
                        Print and place this QR on packages or post directly to your Instagram profile.
                      </p>
                    </div>

                    {/* Mock QR graphic */}
                    <div className="w-16 h-16 bg-white p-1 rounded-lg border border-[#dedad3] flex flex-wrap gap-0.5 justify-center items-center">
                      <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                      <div className="w-3.5 h-3.5 bg-transparent" />
                      <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                      <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                      <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                      <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                      <div className="w-3.5 h-3.5 bg-transparent" />
                      <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                      <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                      <div className="w-3.5 h-3.5 bg-transparent" />
                      <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                      <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                      <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                      <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                      <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                      <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                    </div>
                  </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(`https://gettrebo.com/${businessName.toLowerCase().replace(/\s+/g, "")}`);
                          alert("Link copied! You can share it anywhere.");
                        }}
                        className="px-5 py-3 rounded-xl border border-[#dedad3] hover:bg-[#ebe7e0] text-[#0a1a3b] font-extrabold text-xs uppercase tracking-wide flex items-center gap-1.5 transition-all"
                      >
                        <Share2 size={14} />
                        Copy Link
                      </button>

                      <a
                        href="#pricing"
                        className="flex-1 px-5 py-3 text-center rounded-xl bg-[#0a1a3b] hover:bg-[#1b9cda] text-white font-extrabold text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 transition-all"
                      >
                        <DollarSign size={14} />
                        See Pricing Plans
                      </a>
                    </div>
                </div>
              )}
            </div>

            {/* Step indicator feedback info block */}
            <div className="mt-8 pt-6 border-t border-[#dedad3] text-left">
              <p className="text-xs font-mono font-bold text-[#0a1a3b]/50">
                ✦ Click any workspace tab above: onboarding controls are fully live and responsive.
              </p>
            </div>
          </div>

          {/* RIGHT WORKSPACE - THE SMARTPHONE VIEW (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-[#dedad3] pt-8 lg:pt-0 lg:pl-12">
            <span className="text-xs font-mono font-bold text-[#0a1a3b]/50 mb-4 block uppercase tracking-wider">
              Live Storefront Screen
            </span>

            {/* Smartphone mock container */}
            <div className="w-full max-w-[320px] bg-zinc-900 rounded-[36px] p-3 shadow-2xl border border-zinc-800 relative">
              {/* Speaker pill top notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-3 rounded-full bg-zinc-950 z-20 flex items-center justify-center" />

              {/* Screen boundary */}
              <div className="rounded-[24px] bg-[#f3efe9] overflow-hidden border border-zinc-950 relative aspect-[9/18] flex flex-col">
                {/* Status Bar */}
                <div className="h-8 pt-2.5 px-5 flex justify-between items-center text-[9px] font-mono text-[#0a1a3b]/60 bg-[#ebe7e0] border-b border-[#dedad3]">
                  <span>08:42</span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1b9cda]" />
                    <span>4G</span>
                  </div>
                </div>

                {/* Simulated URL bar */}
                <div className="px-3 py-1.5 bg-white border-b border-[#dedad3] flex items-center gap-1">
                  <div className="text-[9px] font-mono bg-[#f3efe9] px-2 py-0.5 rounded text-[#0a1a3b]/70 flex-1 overflow-hidden whitespace-nowrap text-left">
                    <span>trebo.site/</span>
                    <span className="font-extrabold text-[#1a5f7a]">
                      {businessName.toLowerCase().replace(/\s+/g, "")}
                    </span>
                  </div>
                </div>

                {/* Storefront View Scroll Container */}
                <div className="flex-1 overflow-y-auto p-3.5 space-y-4">
                  {/* Brand Banner Profile summary */}
                  <div
                    style={{ borderTop: `4px solid ${brandColor}` }}
                    className="text-center bg-white rounded-xl p-3 border border-[#dedad3] shadow-sm"
                  >
                    <div
                      style={{ backgroundColor: brandColor }}
                      className="w-10 h-10 text-white rounded-full flex items-center justify-center font-black text-base mx-auto mb-1.5 shadow-sm"
                    >
                      {businessName.charAt(0)}
                    </div>
                    <h3 className="font-black text-[#0a1a3b] text-xs leading-none">
                      {businessName}
                    </h3>
                    <p className="text-[9px] text-[#0a1a3b]/50 mt-1 font-medium">
                      {customCategory} • Instant Dispatch
                    </p>

                    {isVerified && (
                      <div className="mt-2 inline-flex items-center gap-0.5 bg-[#1b9cda]/10 text-[#1b9cda] text-[8px] font-extrabold px-1.5 py-0.5 rounded-full">
                        <CheckCircle2 size={8} />
                        <span>Verified Merchant</span>
                      </div>
                    )}
                  </div>

                  {/* Products Showcase Catalog */}
                  <div className="space-y-2 text-left">
                    <span className="text-[9px] font-mono font-bold text-[#0a1a3b]/40 uppercase tracking-widest block">
                      Select an item
                    </span>

                    <div className="grid grid-cols-2 gap-2">
                      {activeProducts.map((p) => (
                        <div
                          key={p.id}
                          style={{ borderColor: brandColor + "20" }}
                          className="bg-white rounded-lg p-2 flex flex-col justify-between border hover:scale-[1.02] transition-all relative"
                        >
                          <div className="aspect-square bg-[#ebe7e0] rounded overflow-hidden mb-1 relative">
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div>
                            <h4 className="font-extrabold text-[9px] text-[#0a1a3b] leading-tight line-clamp-1">
                              {p.name}
                            </h4>
                            <p
                              style={{ color: brandColor }}
                              className="font-black text-[10px] mt-0.5"
                            >
                              ₦{p.price.toLocaleString()}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setSelectedProductForInquiry(p);
                              setCheckoutModalOpen(true);
                            }}
                            style={{ backgroundColor: brandColor }}
                            className="mt-1.5 w-full py-1 rounded text-white text-[8px] font-bold transition-all flex items-center justify-center gap-0.5 shadow-sm hover:brightness-110"
                          >
                            <MessageCircle size={8} />
                            Inquire Now
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Simulated Smart Footer WhatsApp integration badge */}
                <div className="bg-white border-t border-[#dedad3] p-2 flex items-center justify-center gap-1.5 text-[8px] font-bold text-[#0a1a3b]/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>WhatsApp Order Integration Active ({whatsappNumber})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
