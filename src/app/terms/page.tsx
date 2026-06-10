"use client";

import React, { useState } from "react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";

export default function TermsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-[#0a1a3b] font-sans">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-black mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-[#0a1a3b]/80 leading-relaxed">
          <p className="text-sm font-bold uppercase tracking-widest text-[#1b9cda]">Last Updated: June 10, 2026</p>
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">1. Introduction</h2>
            <p>Welcome to Trebo. By using our website and services, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">2. Use of Service</h2>
            <p>Trebo provides a platform for merchants to showcase products and receive orders via WhatsApp. You agree to use the service only for lawful purposes and in accordance with these Terms.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">3. Merchant Responsibilities</h2>
            <p>As a merchant, you are responsible for the accuracy of your product listings, pricing, and fulfillment of orders. You must comply with all regional commerce bylaws in Nigeria.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">4. Prohibited Activities</h2>
            <p>You may not use Trebo for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">5. Limitation of Liability</h2>
            <p>Trebo shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">6. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
