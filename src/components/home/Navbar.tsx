"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { clsx } from "clsx";
import Image from "next/image";

const NAV_LINKS = [
  { name: "How it works", href: "#how-it-works" },
  { name: "Benefits", href: "#benefits" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex justify-between items-center">
        {/* Left Pill: Logo */}
        <div
          className={clsx(
            "flex items-center px-2 py-1.5 pointer-events-auto transition-all duration-500",
            "bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-2xl",
          )}
        >
          <Link href="/" className="flex items-center gap-3 group px-2 py-1">
            {/* <div className="w-8 h-8 bg-deep-navy rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
              t
            </div> */}

            <Image
              src={"/trebo-icon-sm.png"}
              alt="trebo icon"
              width={30}
              height={60}
            />
            <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              trebo
            </span>
          </Link>
        </div>

        {/* Right Pill: Navigation */}
        <div
          className={clsx(
            "hidden md:flex items-center gap-6 px-2 py-2 pointer-events-auto transition-all duration-500",
            "bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-full",
          )}
        >
          <div className="flex items-center gap-8 px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-semibold text-foreground/60 hover:text-foreground transition-colors tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="#get-started"
            className="bg-deep-navy text-white px-6 py-2.5 rounded-full text-[13px] font-bold hover:bg-deep-navy/90 transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
            Create your store
          </Link>
        </div>

        {/* Mobile Toggle Pill */}
        <div className="md:hidden flex items-center pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-2xl p-1">
          <button
            className="p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={20} weight="bold" />
            ) : (
              <List size={20} weight="bold" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#get-started"
                className="bg-deep-navy text-white px-6 py-4 rounded-2xl font-bold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Create your store
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
