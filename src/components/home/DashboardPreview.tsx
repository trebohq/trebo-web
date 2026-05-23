"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layout, 
  Storefront, 
  Package, 
  ChartLine, 
  Gear, 
  WhatsappLogo,
  Lightbulb
} from "@phosphor-icons/react";

const TOOLTIPS = {
  businessName: "Your business name appears at the top of your store page",
  whatsapp: "Customers tap this button to message you directly — no typing needed",
  brandColor: "Your brand color is applied to buttons and accents across your store",
  preview: "This is exactly what your customers see when they visit your link",
  product: "Each product card shows your image, name, price and a direct WhatsApp button",
  analytics: "Track your store visits, inquiries and sales from your dashboard — Pro plan",
  manageProducts: "Add, edit and manage all your products from one place",
};

export default function DashboardPreview() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const Tooltip = ({ text }: { text: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      className="absolute z-50 bg-white text-foreground p-3 rounded-lg shadow-xl border-l-4 border-primary text-xs font-bold w-48 pointer-events-none"
    >
      <div className="flex items-center gap-2 mb-1 text-primary">
        <Lightbulb size={16} weight="fill" />
      </div>
      {text}
    </motion.div>
  );

  return (
    <section className="macro-padding bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="relative group"
        >
          {/* Browser Chrome */}
          <div className="bg-[#0D2B4E] rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(13,43,78,0.3)] border border-white/10">
            <div className="bg-white/5 border-b border-white/10 p-4 flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="bg-background/20 rounded-lg px-4 py-1.5 text-xs text-white/40 font-mono flex-1 max-w-md mx-auto text-center border border-white/5">
                app.gettrebo.com/onboarding
              </div>
            </div>

            <div className="flex h-[600px] overflow-hidden">
              {/* Sidebar */}
              <div className="w-20 md:w-64 bg-white/5 border-r border-white/10 p-4 hidden sm:flex flex-col gap-2">
                <div className="w-10 h-10 bg-primary rounded-xl mb-8 self-center md:self-start" />
                
                {[
                  { name: "Dashboard", icon: Layout },
                  { name: "My Store", icon: Storefront },
                  { name: "Products", icon: Package, id: "manageProducts" },
                  { name: "Analytics", icon: ChartLine, id: "analytics" },
                  { name: "Settings", icon: Gear },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="relative flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group/nav"
                    onMouseEnter={() => item.id && setActiveTooltip(item.id)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <item.icon size={20} className={item.name === "My Store" ? "text-primary" : "text-white/40"} />
                    <span className={`text-sm font-bold hidden md:block ${item.name === "My Store" ? "text-white" : "text-white/40"}`}>
                      {item.name}
                    </span>
                    <AnimatePresence>
                      {item.id && activeTooltip === item.id && (
                        <div className="absolute left-full ml-4 top-0">
                          <Tooltip text={TOOLTIPS[item.id as keyof typeof TOOLTIPS]} />
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div className="flex-1 bg-background relative overflow-y-auto p-6 md:p-10 custom-grid">
                <style jsx>{`
                  .custom-grid {
                    background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0);
                    background-size: 24px 24px;
                  }
                `}</style>

                <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-10">
                  {/* Form */}
                  <div className="flex-1 space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Customize Your Store</h3>
                      <p className="text-white/40 text-sm">Step 2 of 3 — Design your presence</p>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2 relative" onMouseEnter={() => setActiveTooltip("businessName")} onMouseLeave={() => setActiveTooltip(null)}>
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40">Business Name</label>
                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-white font-medium">Adaeze Fashion</div>
                        <AnimatePresence>{activeTooltip === "businessName" && <div className="absolute top-0 right-0"><Tooltip text={TOOLTIPS.businessName} /></div>}</AnimatePresence>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40">Category</label>
                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-white font-medium">Fashion & Clothing</div>
                      </div>

                      <div className="space-y-2 relative" onMouseEnter={() => setActiveTooltip("whatsapp")} onMouseLeave={() => setActiveTooltip(null)}>
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40">WhatsApp Number</label>
                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-white font-medium">+234 801 234 5678</div>
                        <AnimatePresence>{activeTooltip === "whatsapp" && <div className="absolute top-0 right-0"><Tooltip text={TOOLTIPS.whatsapp} /></div>}</AnimatePresence>
                      </div>

                      <div className="space-y-2 relative" onMouseEnter={() => setActiveTooltip("brandColor")} onMouseLeave={() => setActiveTooltip(null)}>
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40">Brand Color</label>
                        <div className="flex gap-3">
                          {[ "#1B9CDA", "#FF5733", "#33FF57", "#3357FF" ].map((color) => (
                            <div key={color} className={`w-8 h-8 rounded-full cursor-pointer border-2 ${color === "#1B9CDA" ? "border-white scale-110 shadow-lg shadow-primary/40" : "border-transparent opacity-40 hover:opacity-100"}`} style={{ backgroundColor: color }} />
                          ))}
                        </div>
                        <AnimatePresence>{activeTooltip === "brandColor" && <div className="absolute top-0 right-0"><Tooltip text={TOOLTIPS.brandColor} /></div>}</AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Preview Panel */}
                  <div className="lg:w-[320px] shrink-0">
                    <div 
                      className="bg-white rounded-3xl p-5 shadow-2xl relative cursor-help h-[480px] flex flex-col"
                      onMouseEnter={() => setActiveTooltip("preview")}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      <AnimatePresence>{activeTooltip === "preview" && <div className="absolute -top-12 left-0 w-full"><Tooltip text={TOOLTIPS.preview} /></div>}</AnimatePresence>
                      
                      {/* Store Mockup Header */}
                      <div className="flex flex-col items-center gap-2 mb-6 pt-2">
                        <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary font-bold text-2xl">A</div>
                        <div className="text-foreground font-bold text-lg">Adaeze Fashion</div>
                        <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Verified Store</div>
                      </div>

                      {/* Store Mockup Products */}
                      <div className="grid grid-cols-1 gap-4 overflow-y-auto pr-1">
                        {[1, 2, 3].map((i) => (
                          <div 
                            key={i} 
                            className="bg-surface rounded-xl p-3 flex gap-3 relative cursor-help"
                            onMouseEnter={(e) => { e.stopPropagation(); setActiveTooltip("product"); }}
                            onMouseLeave={(e) => { e.stopPropagation(); setActiveTooltip(null); }}
                          >
                            <div className="w-16 h-16 bg-primary/10 rounded-lg flex-shrink-0" />
                            <div className="flex-1 py-1">
                              <div className="w-20 h-2 bg-foreground/10 rounded-full mb-2" />
                              <div className="w-12 h-2.5 bg-primary/20 rounded-full mb-3" />
                              <div className="w-full h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <WhatsappLogo size={14} weight="fill" />
                              </div>
                            </div>
                            <AnimatePresence>{activeTooltip === "product" && <div className="absolute -top-12 -left-10"><Tooltip text={TOOLTIPS.product} /></div>}</AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="text-primary italic">✦</span> Hover over the dashboard to explore — this is the real Trebo experience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
