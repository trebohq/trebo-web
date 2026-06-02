"use client";

import React from "react";
import { motion } from "framer-motion";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ChartArea } from "@/components/dashboard/ChartArea";
import { DataTable } from "@/components/dashboard/DataTable";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { Eye, CursorClick, ChatCircle, Wallet, Plus, Storefront, Link as LinkIcon, Sparkle } from "@phosphor-icons/react";
import Link from "next/link";

const recentInquiries = [
  { id: "ORD-001", customer: "Chukwudi N.", product: "Ankara Print Dress", status: "pending", time: "10 mins ago", amount: "₦25,000" },
  { id: "ORD-002", customer: "Sarah A.", product: "Lagos Night Heels", status: "confirmed", time: "2 hours ago", amount: "₦45,000" },
  { id: "ORD-003", customer: "Ibrahim K.", product: "Men's Agbada Set", status: "completed", time: "5 hours ago", amount: "₦85,000" },
  { id: "ORD-004", customer: "Grace O.", product: "Beaded Necklace", status: "cancelled", time: "1 day ago", amount: "₦15,000" },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#0a1a3b] rounded-2xl p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
      >
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight mb-1">Welcome back, Adaeze! 👋</h2>
          <p className="text-white/70 text-sm">Here's what's happening with your store today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/products" className="bg-[#1b9cda] hover:bg-[#1b9cda]/90 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2">
            <Plus size={16} /> Add Product
          </Link>
        </div>
      </motion.div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatsCard title="Total Views" value="4,120" trend="12.5%" trendUp={true} icon={<Eye size={20} />}
          sparkline={[30, 55, 28, 62, 35, 48, 70, 32, 58, 40, 75, 38, 65, 42, 80, 45, 60, 38, 85, 50, 68, 42, 88, 55, 72, 48, 90, 60, 78, 92]} />
        <StatsCard title="Link Clicks" value="342" trend="8.3%" trendUp={true} icon={<CursorClick size={20} />}
          sparkline={[20, 45, 18, 52, 28, 38, 62, 22, 48, 30, 58, 25, 55, 35, 68, 28, 50, 20, 72, 38, 55, 30, 75, 42, 60, 35, 78, 50, 65, 82]} />
        <StatsCard title="Active Inquiries" value="28" icon={<ChatCircle size={20} />}
          sparkline={[45, 62, 38, 70, 42, 65, 35, 72, 40, 58, 44, 75, 36, 68, 42, 60, 38, 72, 45, 63, 37, 70, 43, 58, 39, 66, 41, 74, 38, 62]} />
        <StatsCard title="Est. Revenue" value="₦285k" trend="15.0%" trendUp={true} icon={<Wallet size={20} />}
          sparkline={[25, 50, 22, 58, 32, 42, 68, 28, 55, 38, 72, 30, 62, 45, 78, 35, 58, 25, 82, 48, 65, 38, 85, 52, 70, 45, 90, 58, 75, 95]} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Area */}
        <div className="lg:col-span-2 bg-white border border-[#eae6df] rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-extrabold text-[#0a1a3b]">Revenue Overview</h3>
            <select className="text-xs font-bold text-[#0a1a3b]/70 bg-[#f3f4f6] rounded-lg px-2.5 py-1.5 outline-none border-none cursor-pointer">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This Month</option>
            </select>
          </div>
          <ChartArea
            data={[30, 45, 38, 65, 52, 85, 70]}
            labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
            height={280}
            color="#1b9cda"
            valueFormatter={(v) => `₦${(v * 1000).toLocaleString()}`}
            yFormatter={(v) => `₦${v}k`}
          />
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-[#eae6df] rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="font-extrabold text-[#0a1a3b] mb-6">Quick Actions</h3>
          <div className="space-y-3 flex-1">
            <button className="w-full flex items-center gap-3 p-3.5 rounded-xl border border-[#eae6df] hover:border-[#1b9cda]/30 hover:bg-[#f3f4f6]/50 transition-all group text-left">
              <div className="p-2 rounded-lg bg-[#1b9cda]/10 text-[#1b9cda] group-hover:bg-[#1b9cda] group-hover:text-white transition-colors">
                <Storefront size={18} />
              </div>
              <span className="font-bold text-[#0a1a3b] text-sm">View Storefront</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3.5 rounded-xl border border-[#eae6df] hover:border-emerald-500/30 hover:bg-[#f3f4f6]/50 transition-all group text-left">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <LinkIcon size={18} />
              </div>
              <span className="font-bold text-[#0a1a3b] text-sm">Share Store Link</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3.5 rounded-xl border border-[#eae6df] hover:border-purple-500/30 hover:bg-[#f3f4f6]/50 transition-all group text-left">
              <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <Sparkle size={18} />
              </div>
              <span className="font-bold text-[#0a1a3b] text-sm">AI Sales Assistant</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white border border-[#eae6df] rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-extrabold text-[#0a1a3b]">Recent Inquiries</h3>
          <Link href="/dashboard/orders" className="text-xs font-bold text-[#1b9cda] hover:underline">
            View All
          </Link>
        </div>
        <DataTable
          data={recentInquiries}
          keyExtractor={(item) => item.id}
          columns={[
            { header: "Order ID", accessorKey: "id", className: "font-mono text-xs text-[#0a1a3b]/60 font-bold" },
            { header: "Customer", accessorKey: "customer", className: "font-bold" },
            { header: "Product", accessorKey: "product" },
            { header: "Amount", accessorKey: "amount", className: "font-mono font-bold" },
            {
              header: "Status",
              cell: (item) => <StatusBadge status={item.status as any}>{item.status}</StatusBadge>
            },
          ]}
        />
      </div>
    </div>
  );
}
