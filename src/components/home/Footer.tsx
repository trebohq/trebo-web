"use client";

import Link from "next/link";
import { InstagramLogo, TwitterLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface pt-20 pb-10 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-white font-bold text-xl">
                t
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                trebo
              </span>
            </Link>
            <p className="text-foreground/60 max-w-xs leading-relaxed mb-8">
              Every business deserves to be seen, trusted and chosen. Helping Nigerian entrepreneurs grow since 2024.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-background subtle-border rounded-lg flex items-center justify-center text-foreground/60 hover:text-primary transition-colors shadow-sm">
                <InstagramLogo size={20} weight="bold" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-background subtle-border rounded-lg flex items-center justify-center text-foreground/60 hover:text-primary transition-colors shadow-sm">
                <TwitterLogo size={20} weight="bold" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-background subtle-border rounded-lg flex items-center justify-center text-foreground/60 hover:text-primary transition-colors shadow-sm">
                <LinkedinLogo size={20} weight="bold" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase text-xs tracking-[0.2em]">Product</h4>
            <ul className="space-y-4">
              <li><Link href="#how-it-works" className="text-foreground/60 hover:text-primary text-sm transition-colors">How it works</Link></li>
              <li><Link href="#pricing" className="text-foreground/60 hover:text-primary text-sm transition-colors">Pricing</Link></li>
              <li><Link href="#directory" className="text-foreground/60 hover:text-primary text-sm transition-colors">Directory</Link></li>
              <li><Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">Release Notes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase text-xs tracking-[0.2em]">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">Merchant Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-foreground/40 font-medium">
            &copy; {currentYear} Trebo Technologies. Made with love in Lagos, Nigeria.
          </p>
          <div className="flex items-center gap-2 text-sm text-foreground/40 font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
