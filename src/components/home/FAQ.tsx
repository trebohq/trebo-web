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
    q: "Do I need technical skills to use Trebo?",
    a: "Not at all. If you can use WhatsApp you can use Trebo. Setup takes less than 10 minutes."
  },
  {
    q: "What happens after my free trial ends?",
    a: "Your store stays visible to customers but you won't be able to edit or add products until you subscribe to a plan."
  },
  {
    q: "Can customers buy directly on my Trebo page?",
    a: "Customers browse your products and reach you directly on WhatsApp to complete the purchase. Online payments are available on our Premium plan."
  },
  {
    q: "What is the difference between trebo.site/storename and storename.trebo.com?",
    a: "Free and Starter plans get trebo.site/storename. Pro and Premium plans get their own subdomain at storename.trebo.com which looks more professional and builds more trust."
  },
  {
    q: "Is my store visible on Google?",
    a: "SEO optimization is available on our Premium plan. This means your store can show up when people search for your products or services on Google."
  },
  {
    q: "Can I use my own domain?",
    a: "Premium users get a free .com.ng domain included. Custom domain connection is on our roadmap."
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
              Everything you need to know about setting up your store, managing payments, and choosing the right plan for your business.
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
