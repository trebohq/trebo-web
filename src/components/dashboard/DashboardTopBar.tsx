"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MagnifyingGlass, Bell, List, X, ChatCircleText, ShoppingBag } from "@phosphor-icons/react";
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

const mockNotifications = [
  { id: 1, title: "New Order", desc: "Chukwudi ordered Ankara Print Dress", time: "10m ago", icon: ShoppingBag, color: "text-blue-500", bg: "bg-blue-50" },
  { id: 2, title: "New WhatsApp Message", desc: "Sarah is asking about Lagos Night Heels", time: "2h ago", icon: ChatCircleText, color: "text-emerald-500", bg: "bg-emerald-50" },
];

export const DashboardTopBar: React.FC<DashboardTopBarProps> = ({ onMenuClick }) => {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-[#0a1a3b]/5">
      <div className="flex items-center justify-between h-[72px] px-4 md:px-8">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 rounded-xl text-[#0a1a3b]/70 hover:bg-[#0a1a3b]/5 transition-colors"
          >
            <List size={20} />
          </button>
          <div>
            <h1 className="text-lg font-extrabold text-[#0a1a3b] tracking-tight">{title}</h1>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-[#0a1a3b]/5 rounded-xl px-3.5 py-2 border border-[#0a1a3b]/10 focus-within:border-[#1b9cda]/30 focus-within:bg-[#0a1a3b]/8 transition-all w-[220px]">
            <MagnifyingGlass size={15} className="text-[#0a1a3b]/40 shrink-0" />
            <input type="text" placeholder="Search..." className="bg-transparent text-sm font-medium text-[#0a1a3b] placeholder:text-[#0a1a3b]/30 outline-none w-full" />
          </div>

          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2.5 rounded-xl text-[#0a1a3b]/60 hover:bg-[#0a1a3b]/5 hover:text-[#0a1a3b] transition-colors"
            >
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#1b9cda] rounded-full ring-2 ring-white" />
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

          <button className="flex items-center gap-2.5 pl-3 border-l border-[#eae6df]">
            <div className="w-8 h-8 rounded-full bg-[#0a1a3b] flex items-center justify-center text-white text-xs font-bold shrink-0">A</div>
            <div className="hidden sm:block text-left">
              <div className="text-xs font-bold text-[#0a1a3b]">Adaeze</div>
              <div className="text-[10px] text-[#0a1a3b]/40 font-medium">Pro Plan</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
