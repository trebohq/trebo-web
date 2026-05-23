"use client";

import { motion } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";

const TESTIMONIALS = [
  {
    quote: "Trebo changed how I sell my fabrics. Before, I was sending pictures one by one on WhatsApp. Now, I just send my link. It saves me so much time.",
    author: "Nneka Okoro",
    business: "Nneka's Textiles, Lagos",
  },
  {
    quote: "My customers trust me more now. The storefront looks professional, and they feel safe ordering from me. My sales have increased by 40%.",
    author: "Abubakar Sadiq",
    business: "Sadiq Electronics, Kano",
  },
  {
    quote: "Setting it up was so easy. I'm not a tech person, but I finished my store in 10 minutes. This is exactly what we need in Abuja.",
    author: "Tayo Adebayo",
    business: "The Thrift Hub, Abuja",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="macro-padding bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            Trusted by businesses across Nigeria.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-background subtle-border rounded-2xl flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <div>
                <Quotes size={32} weight="fill" className="text-primary/20 mb-6" />
                <p className="text-lg text-foreground/80 italic leading-relaxed mb-8">
                  &quot;{t.quote}&quot;
                </p>
              </div>
              <div>
                <div className="font-bold text-foreground">{t.author}</div>
                <div className="text-sm text-primary">{t.business}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
