"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";

interface FAQProps {
  activeFaq: number | null;
  toggleFaq: (index: number) => void;
  executeAiCommand: (command: string) => void;
}

const faqs = [
  {
    q: "Do I need a separate website or domain?",
    a: "No. Trebo gives you a professional link (e.g., gettrebo.com/yourbusiness) that you can use immediately. If you want a custom domain later, our Premium package supports custom .com.ng redirection flawlessly."
  },
  {
    q: "How do customers pay?",
    a: "Trebo handles the order discovery and inquiry. When a customer clicks buy, it opens a WhatsApp chat with all the order details. You can then use your preferred payment method (Bank Transfer, Moniepoint, etc.) to complete the sale."
  },
  {
    q: "How many products can I upload?",
    a: "The Starter plan allows up to 20 products. Our Pro plan supports up to 300 products, and the Premium plan supports unlimited catalog listings."
  },
  {
    q: "Can I use it for professional services?",
    a: "Absolutely. Many salons, consultants, and artisans use Trebo to showcase their services and receive booking inquiries via WhatsApp."
  }
];

export const FAQ: React.FC<FAQProps> = ({ activeFaq, toggleFaq, executeAiCommand }) => {
  return (
    <section id="faq" className="macro-padding border-b border-border-subtle bg-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left FAQ side description */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1b9cda]">
              Support & Details
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3 mb-6 text-[#0a1a3b]">
              Common Questions
            </h2>
            <p className="text-base text-[#0a1a3b]/70 mb-8 leading-relaxed max-w-[40ch]">
              Everything you need to know about setting up payment redirects, domain configurations, and AI assistants.
            </p>

            <div className="p-5 border border-border-subtle rounded-2xl bg-white/70 max-w-[340px]">
              <h4 className="font-extrabold text-sm text-[#0a1a3b] mb-1.5 flex items-center gap-1.5">
                <HelpCircle size={16} className="text-[#1b9cda]" />
                Need direct assistance?
              </h4>
              <p className="text-xs text-[#0a1a3b]/70 leading-relaxed mb-3">
                Reach out to the Trebo customer success desk. We are active 7 days a week for Nigerian sellers.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  executeAiCommand("Ask Trebo AI for a tip to grow");
                  const exploreEl = document.getElementById("customizer");
                  if (exploreEl) exploreEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b9cda] hover:underline"
              >
                Prompt Chat Helper
                <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Right FAQ Accordion list */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-border-subtle rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between text-[#0a1a3b] hover:bg-background/30 focus:outline-none transition-all"
                >
                  <span className="font-extrabold text-sm md:text-base leading-tight">
                    {faq.q}
                  </span>
                  <span className="p-1 rounded-full bg-surface text-[#0a1a3b] shrink-0 ml-4 transition-transform duration-300">
                    {activeFaq === idx ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-xs md:text-sm text-[#0a1a3b]/75 leading-relaxed bg-background/10 pt-1">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
