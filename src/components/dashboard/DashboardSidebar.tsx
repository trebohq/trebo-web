"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  SquaresFour,
  ShoppingBag,
  ChatCircleText,
  ChartBar,
  GearSix,
  CaretDoubleLeft,
  CaretDoubleRight,
  X,
} from "@phosphor-icons/react";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: SquaresFour },
  { href: "/dashboard/products", label: "Products", icon: ShoppingBag },
  { href: "/dashboard/orders", label: "Orders", icon: ChatCircleText },
  { href: "/dashboard/analytics", label: "Analytics", icon: ChartBar },
  { href: "/dashboard/settings", label: "Settings", icon: GearSix },
];

interface DashboardSidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

interface TooltipState {
  label: string;
  y: number;
}

// export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
//   collapsed,
//   setCollapsed,
//   mobileOpen,
//   setMobileOpen,
// }) => {
//   const pathname = usePathname();
//   const [tooltip, setTooltip] = useState<TooltipState | null>(null);

//   const isActive = (href: string) => {
//     if (href === "/dashboard") return pathname === "/dashboard";
//     return pathname.startsWith(href);
//   };

//   const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, label: string) => {
//     if (!collapsed) return;
//     const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
//     setTooltip({ label, y: rect.top + rect.height / 2 });
//   };

//   const renderSidebarContent = (isCollapsed: boolean) => (
//     <div className="flex flex-col h-full">
//       {/* Logo area */}
//       <div className={`flex items-center gap-2.5 px-5 h-[72px] border-b border-white/8 shrink-0 ${isCollapsed ? "justify-center px-0" : ""}`}>
//         <Image src="/trebo-icon-sm.png" width={28} height={28} alt="Trebo" className="rounded-lg" />
//         {!isCollapsed && (
//           <span className="text-lg font-extrabold text-white tracking-tight select-none">
//             trebo
//           </span>
//         )}
//       </div>

//       {/* Navigation links */}
//       <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
//         {navItems.map((item) => {
//           const Icon = item.icon;
//           const active = isActive(item.href);
//           return (
//             <div
//               key={item.href}
//               onMouseEnter={(e) => handleMouseEnter(e, item.label)}
//               onMouseLeave={() => setTooltip(null)}
//             >
//               <Link
//                 href={item.href}
//                 onClick={() => setMobileOpen(false)}
//                 className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 relative ${active
//                     ? "bg-[#1b9cda]/15 text-white"
//                     : "text-white/55 hover:text-white hover:bg-white/5"
//                   } ${isCollapsed ? "justify-center px-2" : ""}`}
//               >
//                 {active && (
//                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#1b9cda] rounded-r-full" />
//                 )}
//                 <Icon size={18} className={active ? "text-[#1b9cda]" : ""} />
//                 {!isCollapsed && <span>{item.label}</span>}
//               </Link>
//             </div>
//           );
//         })}
//       </nav>

//       {/* Bottom section */}
//       <div className={`border-t border-white/8 p-4 ${isCollapsed ? "px-2" : ""}`}>
//         {/* User profile */}
//         <div className={`relative group/user flex items-center gap-3 mb-3 ${isCollapsed ? "justify-center" : ""}`}>
//           <div className="w-9 h-9 rounded-full bg-[#1b9cda]/20 flex items-center justify-center text-[#1b9cda] font-bold text-sm shrink-0">
//             A
//           </div>
//           {!isCollapsed && (
//             <div className="min-w-0">
//               <div className="text-sm font-bold text-white truncate">Adaeze Fashion</div>
//               <div className="text-[10px] text-white/40 font-medium">Pro Plan</div>
//             </div>
//           )}
//           {isCollapsed && (
//             <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 z-[999] bg-[#1a2d52] text-white text-xs font-bold px-3 py-2 rounded-lg shadow-2xl whitespace-nowrap opacity-0 translate-x-2 group-hover/user:opacity-100 group-hover/user:translate-x-0 transition-all duration-150">
//               Adaeze Fashion
//               <span className="text-white/40 font-normal block text-[10px] mt-0.5">Pro Plan</span>
//               <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#1a2d52]" />
//             </div>
//           )}
//         </div>

//         {/* Collapse toggle (desktop only) */}
//         <button
//           onClick={() => setCollapsed(!collapsed)}
//           className="hidden lg:flex items-center justify-center gap-2 w-full py-2 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/5 transition-all text-xs font-semibold"
//         >
//           {isCollapsed ? <CaretDoubleRight size={16} /> : <><CaretDoubleLeft size={16} /> <span>Collapse</span></>}
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {/* Desktop sidebar */}
//       <aside
//         className={`hidden lg:flex flex-col bg-[#0a1a3b] fixed top-0 left-0 h-screen z-40 transition-all duration-300 ${collapsed ? "w-[72px]" : "w-[260px]"
//           }`}
//       >
//         {renderSidebarContent(collapsed)}
//       </aside>

//       {/* Fixed tooltip rendered outside sidebar — escapes all overflow */}
//       <AnimatePresence>
//         {collapsed && tooltip && (
//           <motion.div
//             key={tooltip.label}
//             initial={{ opacity: 0, x: -4 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -4 }}
//             transition={{ duration: 0.12 }}
//             className="fixed z-[9999] pointer-events-none"
//             style={{ left: 80, top: tooltip.y, transform: "translateY(-50%)" }}
//           >
//             <div className="relative bg-[#1a2d52] text-white text-xs font-bold px-3 py-2 rounded-lg shadow-2xl whitespace-nowrap">
//               {tooltip.label}
//               <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#1a2d52]" />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Mobile sidebar overlay */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               className="fixed inset-0 bg-black/50 z-50 lg:hidden"
//               onClick={() => setMobileOpen(false)}
//             />
//             <motion.aside
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               className="fixed top-0 left-0 h-screen w-[280px] bg-[#0a1a3b] z-50 lg:hidden shadow-2xl"
//             >
//               <button
//                 onClick={() => setMobileOpen(false)}
//                 className="absolute top-5 right-4 p-1.5 rounded-lg bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors"
//               >
//                 <X size={18} />
//               </button>
//               {renderSidebarContent(false)}
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

interface DashboardSidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  const renderSidebarContent = (isCollapsed: boolean) => (
    <div className="flex flex-col h-full">
      {/* Logo area */}
      <div className={`flex items-center gap-2.5 px-5 h-[72px] border-b border-white/8 shrink-0 ${isCollapsed ? "justify-center px-0" : ""}`}>
        <Image src="/trebo-icon-sm.png" width={28} height={28} alt="Trebo" className="rounded-lg" />
        {!isCollapsed && (
          <span className="text-lg font-extrabold text-white tracking-tight select-none">
            trebo
          </span>
        )}
      </div>

      {/* Navigation links */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <div key={item.href} className="relative group/nav">
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 relative ${active
                  ? "bg-[#1b9cda]/15 text-white"
                  : "text-white/55 hover:text-white hover:bg-white/5"
                  } ${isCollapsed ? "justify-center px-2" : ""}`}
              >
                {active && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#1b9cda] rounded-r-full" />
                )}
                <Icon size={18} className={active ? "text-[#1b9cda]" : ""} />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>

              {/* Tooltip — fixed so it escapes overflow-y-auto */}
              {isCollapsed && (
                <div className="pointer-events-none fixed left-[80px] z-[999] -translate-y-[calc(50%+1px)] bg-[#1a2d52] text-white text-xs font-bold px-3 py-2 rounded-lg shadow-2xl whitespace-nowrap opacity-0 translate-x-2 group-hover/nav:opacity-100 group-hover/nav:translate-x-0 transition-all duration-150"
                  style={{ top: "inherit" }}
                >
                  {item.label}
                  <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#1a2d52]" />
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className={`border-t border-white/8 p-4 ${isCollapsed ? "px-2" : ""}`}>
        {/* User profile */}
        <div className={`relative group/user flex items-center gap-3 mb-3 ${isCollapsed ? "justify-center" : ""}`}>
          <div className="w-9 h-9 rounded-full bg-[#1b9cda]/20 flex items-center justify-center text-[#1b9cda] font-bold text-sm shrink-0">
            A
          </div>
          {!isCollapsed && (
            <div className="min-w-0">
              <div className="text-sm font-bold text-white truncate">Adaeze Fashion</div>
              <div className="text-[10px] text-white/40 font-medium">Pro Plan</div>
            </div>
          )}
          {isCollapsed && (
            <div className="
              pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 z-50
              bg-[#0a1a3b] border border-white/10 text-white text-xs font-bold
              px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap
              opacity-0 translate-x-1
              group-hover/user:opacity-100 group-hover/user:translate-x-0
              transition-all duration-150
            ">
              Adaeze Fashion
              <span className="text-white/40 font-normal block text-[10px]">Pro Plan</span>
              <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#0a1a3b]" />
            </div>
          )}
        </div>

        {/* Collapse toggle (desktop only) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center gap-2 w-full py-2 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/5 transition-all text-xs font-semibold"
        >
          {isCollapsed ? <CaretDoubleRight size={16} /> : <><CaretDoubleLeft size={16} /> <span>Collapse</span></>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:flex flex-col bg-[#0a1a3b] fixed top-0 left-0 h-screen z-40 transition-all duration-300 ${collapsed ? "w-[72px] overflow-visible" : "w-[260px]"
          }`}
      >
        {renderSidebarContent(collapsed)}
      </aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 h-screen w-[280px] bg-[#0a1a3b] z-50 lg:hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-5 right-4 p-1.5 rounded-lg bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors"
              >
                <X size={18} />
              </button>
              {renderSidebarContent(false)}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
