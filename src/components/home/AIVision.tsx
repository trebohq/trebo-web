"use client";

import { motion } from "framer-motion";
import { Robot, WhatsappLogo, MagicWand, ChartLineUp } from "@phosphor-icons/react";

const AI_FEATURES = [
  {
    icon: MagicWand,
    title: "Upload via Chat",
    description: "Just text a photo and price to the AI on WhatsApp. It asks the right questions and updates your store instantly.",
  },
  {
    icon: ChartLineUp,
    title: "Daily Summaries",
    description: "Receive a simple business report every evening at 8pm. See your sales, visits, and hot products without opening a laptop.",
  },
  {
    icon: WhatsappLogo,
    title: "Ghost Buyer Follow-up",
    description: "The AI automatically follows up with customers who disappeared, turning abandoned carts into successful sales.",
  },
];

export default function AIVision() {
  return (
    <section id="ai-vision" className="macro-padding bg-foreground text-white overflow-hidden relative">
      {/* Abstract Background Detail */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/4" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
              <Robot size={16} weight="fill" className="text-primary" />
              <span className="text-xs font-bold tracking-wide uppercase text-white/80">
                The Future of Business
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              An assistant that <br />
              <span className="text-primary italic">runs your shop.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              We believe you should never need to open a laptop to grow your business. Trebo&apos;s AI lives on WhatsApp and handles the manual work you hate.
            </p>

            <div className="grid sm:grid-cols-1 gap-10">
              {AI_FEATURES.map((feature) => (
                <div key={feature.title} className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <feature.icon size={28} weight="bold" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">{feature.title}</h4>
                    <p className="text-lg text-white/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white/5 p-4 md:p-8 rounded-[3rem] border border-white/10 backdrop-blur-sm">
              <div className="bg-[#E5DDD5] rounded-[2rem] overflow-hidden shadow-2xl aspect-[9/16] relative max-w-[320px] mx-auto">
                {/* WhatsApp Header */}
                <div className="bg-[#075E54] p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Robot size={24} weight="fill" className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Trebo Business AI</div>
                    <div className="text-white/70 text-[10px]">online</div>
                  </div>
                </div>
                
                {/* WhatsApp Messages */}
                <div className="p-4 space-y-4">
                  <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%] text-xs text-foreground">
                    I just sent a follow-up to 5 customers. 2 of them have clicked the payment link!
                  </div>
                  <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[80%] ml-auto text-xs text-foreground">
                    Well done! Can you send me today&apos;s sales summary?
                  </div>
                  <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%] text-xs text-foreground">
                    <div className="font-bold mb-1">Today&apos;s Report:</div>
                    <div className="flex justify-between">
                      <span>Total Sales:</span>
                      <span className="font-bold">₦45,000</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span>Store Visits:</span>
                      <span className="font-bold">128</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
