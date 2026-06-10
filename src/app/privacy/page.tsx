"use client";

import React, { useState } from "react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";

export default function PrivacyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-[#0a1a3b] font-sans">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-black mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-[#0a1a3b]/80 leading-relaxed">
          <p className="text-sm font-bold uppercase tracking-widest text-[#1b9cda]">Last Updated: June 10, 2026</p>
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, customize your store, or communicate with us. This includes your business name, WhatsApp number, and product details.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, to process transactions, and to communicate with you about your account and the service.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">3. Data Protection</h2>
            <p>Your WhatsApp configurations and catalog logs remain fully encrypted. Trebo does not monitor individual customer identities or the content of your private WhatsApp conversations.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">4. Data Sharing</h2>
            <p>We do not share your personal information with third parties except as described in this policy or with your consent.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">5. Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information at any time through your account settings or by contacting us.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
