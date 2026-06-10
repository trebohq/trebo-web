"use client";

import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border-subtle py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12">
          {/* Left Col: brand focus */}
          <div className="md:col-span-5 text-left">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <span className="w-7 h-7 rounded-md bg-[#0a1a3b] text-white flex items-center justify-center font-bold text-sm">
                t
              </span>
              <span className="font-extrabold text-lg tracking-tight text-[#0a1a3b]">
                trebo
              </span>
            </Link>
            <p className="text-xs text-[#0a1a3b]/70 leading-relaxed mb-6 max-w-[40ch]">
              Every business deserves to be seen, trusted and chosen. Helping Nigerian entrepreneurs grow since 2024.
            </p>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 w-fit px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-full text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>

          {/* Middle Col: Product */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0a1a3b]/50 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-[#0a1a3b]">
              <li>
                <Link href="/#how-it-works" className="hover:text-[#1b9cda] transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#1b9cda] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="#directory"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Trebo Directory is fully scheduled for Q3 2026. Register now to be prioritized!");
                  }}
                  className="hover:text-[#1b9cda] transition-colors flex items-center gap-1"
                >
                  Directory
                  <span className="bg-amber-100 text-amber-800 text-[8px] font-extrabold px-1.5 py-0.2 rounded-full uppercase">
                    Soon
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#release-notes"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Trebo v2.4 (May 2026) Release: WhatsApp follow-up log automated, image cache optimized.");
                  }}
                  className="hover:text-[#1b9cda] transition-colors"
                >
                  Release Notes
                </a>
              </li>
            </ul>
          </div>

          {/* Right Col: Legal */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0a1a3b]/50 mb-4">
              Legal & Security
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-[#0a1a3b]">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#1b9cda] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#1b9cda] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:text-[#1b9cda] transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/merchant"
                  className="hover:text-[#1b9cda] transition-colors"
                >
                  Merchant Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold text-[#0a1a3b]/50">
          <span>© 2026 Trebo Technologies. Made with love in Lagos, Nigeria.</span>
        </div>
      </div>
    </footer>
  );
};
