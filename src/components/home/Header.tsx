"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#f3efe9]/80 backdrop-blur-md border-b border-[#dedad3] transition-all">
      <div className="max-w-7xl mx-auto px-6 h-18 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image src="/trebo-icon-sm.png" width={30} height={30} alt="trebo logo" />
          <span className="font-extrabold text-xl tracking-tight text-[#0a1a3b] select-none">
            trebo
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-[#0a1a3b]/85 hover:text-[#1b9cda] transition-colors">
            How it works
          </a>
          <a href="#benefits" className="text-sm font-medium text-[#0a1a3b]/85 hover:text-[#1b9cda] transition-colors">
            Benefits
          </a>
          <a href="#pricing" className="text-sm font-medium text-[#0a1a3b]/85 hover:text-[#1b9cda] transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-sm font-medium text-[#0a1a3b]/85 hover:text-[#1b9cda] transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action buttons */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/auth/login" 
            className="text-sm font-semibold text-[#0a1a3b]/85 hover:text-[#1b9cda] transition-colors"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="px-6 py-2.5 rounded-full bg-[#0a1a3b] hover:bg-[#1b9cda] text-[#f3efe9] font-semibold text-sm transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#1b9cda]"
          >
            Create account
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#0a1a3b] focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-[#dedad3] bg-[#f3efe9] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#0a1a3b] py-1"
              >
                How it works
              </a>
              <a
                href="#benefits"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#0a1a3b] py-1"
              >
                Benefits
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#0a1a3b] py-1"
              >
                Pricing
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#0a1a3b] py-1"
              >
                FAQ
              </a>
              <div className="h-[1px] bg-[#dedad3] my-2" />
              <Link
                href="/auth/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#0a1a3b] py-2"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3.5 rounded-xl bg-[#0a1a3b] text-[#f3efe9] text-center font-semibold text-sm shadow-md"
              >
                Create account
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
