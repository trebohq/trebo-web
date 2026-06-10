"use client";

import React, { useState } from "react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";

export default function CookiesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-[#0a1a3b] font-sans">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-black mb-8">Cookie Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-[#0a1a3b]/80 leading-relaxed">
          <p className="text-sm font-bold uppercase tracking-widest text-[#1b9cda]">Last Updated: June 10, 2026</p>
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">1. What are Cookies?</h2>
            <p>Cookies are small text files that are stored on your device when you visit a website. They help us provide you with a better experience by remembering your preferences and settings.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">2. How We Use Cookies</h2>
            <p>We use cookies to understand how you interact with our website, to remember your store customization settings, and to analyze our traffic.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">3. Types of Cookies We Use</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0a1a3b]">4. Managing Cookies</h2>
            <p>You can choose to disable cookies through your browser settings. However, please note that some parts of our website may not function properly if cookies are disabled.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
