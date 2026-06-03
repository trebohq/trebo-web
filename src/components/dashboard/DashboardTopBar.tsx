"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MagnifyingGlass, Bell, List, X, ChatCircleText, ShoppingBag, SquaresFour, ChartBar, GearSix } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface DashboardTopBarProps {
  onMenuClick: () => void;
}

const pageTitles: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/products": "Products",
  "/dashboard/orders": "Orders",
  "/dashboard/analytics": "Analytics",
  "/dashboard/settings": "Settings",
};

const navItems = [
  { href: "/dashboard", label: "Overview", icon: SquaresFour },
  { href: "/dashboard/products", label: "Products", icon: ShoppingBag },
  { href: "/dashboard/orders", label: "Orders", icon: ChatCircleText },
  { href: "/dashboard/analytics", label: "Analytics", icon: ChartBar },
  { href: "/dashboard/settings", label: "Settings", icon: GearSix },
];

const mockNotifications = [
  { id: 1, title: "New Order", desc: "Chukwudi ordered Ankara Print Dress", time: "10m ago", icon: ShoppingBag, color: "text-blue-500", bg: "bg-blue-50" },
  { id: 2, title: "New WhatsApp Message", desc: "Sarah is asking about Lagos Night Heels", time: "2h ago", icon: ChatCircleText, color: "text-emerald-500", bg: "bg-emerald-50" },
];

export const DashboardTopBar: React.FC<DashboardTopBarProps> = ({ onMenuClick }) => {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";
  const [showNotifications, setShowNotifications] = useState(false);

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-30 bg-[#0a1a3b] border-b border-white/10">
      <div className="flex items-center justify-between h-[72px] px-4 md:px-8 max-w-[1600px] mx-auto w-full">
        {/* Left side */}
        <div className="flex items-center gap-6 h-full">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 rounded-xl text-white/70 hover:bg-white/10 transition-colors"
          >
            <List size={20} />
          </button>
          
          <Link href="/dashboard" className="flex items-center gap-2.5 shrink-0">
            <Image src="/trebo-icon-sm.png" width={28} height={28} alt="Trebo" className="rounded-lg bg-white/10 p-0.5" />
            <span className="text-lg font-extrabold text-white tracking-tight select-none">
              trebo
            </span>
          </Link>

          {/* Desktop Nav Tabs */}
          <nav className="hidden lg:flex items-center gap-1 ml-6">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={19} className={active ? "text-[#1b9cda]" : "text-white/40"} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-xl px-3.5 py-2 border border-white/10 focus-within:border-white/30 focus-within:bg-white/15 transition-all w-[220px]">
            <MagnifyingGlass size={15} className="text-white/50 shrink-0" />
            <input type="text" placeholder="Search..." className="bg-transparent text-sm font-medium text-white placeholder:text-white/40 outline-none w-full" />
          </div>

          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2.5 rounded-xl text-white/60 hover:bg-white/10 hover:text-white transition-colors"
            >
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#1b9cda] rounded-full ring-2 ring-[#0a1a3b]" />
            </button>

            <AnimatePresence>
              {showNotifications && (
                <>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowNotifications(false)} className="fixed inset-0 z-40" />
                  <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.2 }} className="absolute right-0 mt-2 w-[300px] sm:w-[340px] bg-white border border-[#eae6df] rounded-2xl shadow-xl z-50 overflow-hidden">
                    <div className="flex items-center justify-between p-4 border-b border-[#eae6df]">
                      <h3 className="text-sm font-extrabold text-[#0a1a3b]">Notifications</h3>
                      <button onClick={() => setShowNotifications(false)} className="text-[#0a1a3b]/40 hover:text-[#0a1a3b] transition-colors"><X size={16} /></button>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto">
                      {mockNotifications.map((notif) => (
                        <Link href="/dashboard/orders" key={notif.id} onClick={() => setShowNotifications(false)} className="flex items-start gap-3 p-4 hover:bg-[#f9fafb] transition-colors border-b border-[#eae6df] last:border-b-0 group">
                          <div className={`p-2 rounded-xl shrink-0 ${notif.bg} ${notif.color}`}><notif.icon size={16} /></div>
                          <div>
                            <div className="text-sm font-bold text-[#0a1a3b] group-hover:text-[#1b9cda] transition-colors leading-tight mb-0.5">{notif.title}</div>
                            <div className="text-[13px] text-[#0a1a3b]/60 leading-snug mb-1.5">{notif.desc}</div>
                            <div className="text-[10px] font-bold text-[#0a1a3b]/40 uppercase tracking-wider">{notif.time}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="p-3 border-t border-[#eae6df] bg-[#f9fafb] text-center">
                      <Link href="/dashboard/orders" onClick={() => setShowNotifications(false)} className="text-xs font-bold text-[#1b9cda] hover:underline">View all activity</Link>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <button className="flex items-center gap-2.5 pl-3 border-l border-white/15">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white text-xs font-bold shrink-0">A</div>
            <div className="hidden sm:block text-left">
              <div className="text-xs font-bold text-white">Adaeze</div>
              <div className="text-[10px] text-white/50 font-medium">Pro Plan</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
