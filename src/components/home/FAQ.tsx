"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";
import { useState } from "react";

const FAQS = [
  {
    question: "Do I need a website or domain to start?",
    answer: "No. Trebo gives you a professional link (e.g., gettrebo.com/yourbusiness) that you can use immediately. If you want a custom domain later, we can help with that too.",
  },
  {
    question: "How do I receive payments?",
    answer: "Trebo handles the order discovery and inquiry. When a customer clicks buy, it opens a WhatsApp chat with all the order details. You can then use your preferred payment method (Bank Transfer, Moniepoint, etc.) to complete the sale.",
  },
  {
    question: "Is there a limit to how many products I can upload?",
    answer: "The Starter plan allows up to 10 products. Our Growth and Pro plans allow for unlimited product uploads.",
  },
  {
    question: "Can I use Trebo for a service business?",
    answer: "Absolutely. Many salons, consultants, and artisans use Trebo to showcase their services and receive booking inquiries via WhatsApp.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="macro-padding bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Common Questions
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            Everything you need to know.
          </h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="subtle-border rounded-xl overflow-hidden bg-background hover:border-primary/30 transition-colors"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg text-foreground">{faq.question}</span>
                <div className="flex-shrink-0 text-primary">
                  {openIndex === index ? <Minus size={20} weight="bold" /> : <Plus size={20} weight="bold" />}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-foreground/70 leading-relaxed border-t border-border-subtle/50">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
