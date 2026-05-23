"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="story" className="macro-padding bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-6">
            Our Story
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-12">
            Built from real conversations.
          </h3>
        </motion.div>

        <div className="space-y-8 text-lg md:text-xl text-foreground/80 leading-relaxed">
          <p>
            The idea started simple. We noticed business owners posting
            beautiful products on WhatsApp status, only for them to disappear
            after 24 hours.
          </p>
          <p>
            We saw owners wasting hours sending the same pictures and prices to
            10 different people who might not even buy. We saw the frustration
            of &quot;ghost buyers&quot; and the struggle to get new customers to
            trust a &quot;DM for price&quot; business.
          </p>
          <div className="p-8 bg-background rounded-2xl border-l-4 border-primary italic font-medium shadow-sm">
            <p>
              That is why we built Trebo. Not to be another complicated website
              builder, but to be the complete online presence that makes every
              serious Nigerian business look as serious as they actually are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
