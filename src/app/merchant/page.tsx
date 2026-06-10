"use client";

import React, { useState } from "react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";

export default function MerchantPolicyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-[#0a1a3b] font-sans">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-black mb-8">Merchant Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-[#0a1a3b]/80 leading-relaxed">
          <p className="text-sm font-bold uppercase tracking-widest text-[#1b9cda]">Last Updated: June 10, 2026</p>
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">1. Purpose of Policy</h2>
            <p>This Merchant Policy outlines the standards and expectations for all business owners utilizing Trebo to facilitate commerce. Our goal is to ensure a high-trust, efficient, and professional environment for both sellers and buyers.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">2. Product Dispatch & Fulfillment</h2>
            <p>Merchants are expected to maintain clear timelines for product dispatch. Once an order is confirmed via WhatsApp, we recommend updating the customer on the expected delivery date within 24 hours.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Items should be packaged securely to prevent damage during transit.</li>
              <li>Merchants must provide accurate shipping costs and delivery estimates before payment.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">3. Communication Standards</h2>
            <p>Direct WhatsApp communication is a cornerstone of the Trebo experience. Merchants must adhere to professional communication standards:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Clear Chat Standards:</strong> Respond to inquiries within a reasonable timeframe (typically within 12-24 business hours).</li>
              <li><strong>Transparency:</strong> Be honest about product availability, features, and conditions.</li>
              <li><strong>Zero Tolerance for Ghosting:</strong> Repeated failure to respond to high-intent inquiries or confirmed orders may result in temporary or permanent suspension of your Trebo store link.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">4. Pricing and Payments</h2>
            <p>All prices listed on your Trebo store must be accurate. While Trebo facilitates the catalog and inquiry process, the final transaction occurs via your preferred payment method on WhatsApp.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Do not include hidden fees not disclosed in the product or shipping descriptions.</li>
              <li>Issue clear digital receipts or confirmations once payment is received.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">5. Verified Status</h2>
            <p>The &quot;Verified Store&quot; badge is a privilege granted to merchants who consistently follow these policies and provide a high level of service. Trebo reserves the right to revoke verified status if these standards are not met.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">6. Prohibited Goods</h2>
            <p>Merchants may not list or sell illegal items, counterfeit goods, or any products that violate Nigerian trade laws or our community guidelines.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
