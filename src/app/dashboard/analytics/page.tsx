"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ChartArea } from "@/components/dashboard/ChartArea";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
    type TooltipProps,
} from "recharts";
import {
    Eye,
    CursorClick,
    Users,
    TrendUp,
    ShoppingBag,
    ArrowUpRight,
    ArrowDownRight,
} from "@phosphor-icons/react";

const ranges = ["Last 7 days", "Last 30 days", "This Month", "All Time"];

const chartData: Record<string, { data: number[]; labels: string[] }> = {
    "Last 7 days": {
        data: [30, 45, 38, 65, 52, 85, 70],
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    "Last 30 days": {
        data: [40, 55, 48, 70, 60, 90, 75, 88, 65, 95, 80, 72, 85, 60, 78, 92, 68, 74, 88, 95, 82, 70, 77, 84, 91, 66, 73, 80, 88, 76],
        labels: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "30"],
    },
    "This Month": {
        data: [50, 65, 58, 75, 68, 92, 80, 85, 70, 95, 88, 74],
        labels: ["Wk 1", "Wk 1", "Wk 1", "Wk 2", "Wk 2", "Wk 2", "Wk 3", "Wk 3", "Wk 3", "Wk 4", "Wk 4", "Wk 4"],
    },
    "All Time": {
        data: [20, 35, 50, 65, 80, 72, 90, 85, 95, 88, 102, 98],
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
};

const topProducts = [
    { name: "Minimalist Watch", views: 842, clicks: 210, revenue: "₦360k", change: 12.4, up: true },
    { name: "Wireless Earbuds", views: 720, clicks: 185, revenue: "₦295k", change: 8.1, up: true },
    { name: "Premium Leather Bag", views: 610, clicks: 143, revenue: "₦270k", change: 3.2, up: true },
    { name: "Organic Face Serum", views: 510, clicks: 98, revenue: "₦147k", change: 2.5, up: false },
    { name: "Running Shoes", views: 480, clicks: 90, revenue: "₦126k", change: 5.8, up: true },
];

const trafficSources = [
    { name: "WhatsApp", value: 44 },
    { name: "Storefront", value: 27 },
    { name: "Instagram", value: 18 },
    { name: "Other", value: 11 },
];
const PIE_COLORS = ["#1b9cda", "#0a1a3b", "#94a3b8", "#cbd5e1"];

function BarTooltip({ active, payload, label }: TooltipProps<number, string>) {
    if (!active || !payload?.length) return null;
    return (
        <div className="bg-[#0a1a3b] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg space-y-1">
            <p className="text-white/50 font-medium">{label}</p>
            {payload.map(p => (
                <p key={p.name} style={{ color: p.color as string }}>
                    {p.name}: {(p.value as number).toLocaleString()}
                </p>
            ))}
        </div>
    );
}

function PieTooltip({ active, payload }: TooltipProps<number, string>) {
    if (!active || !payload?.length) return null;
    return (
        <div className="bg-[#0a1a3b] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
            <p>{payload[0].name}: {payload[0].value}%</p>
        </div>
    );
}

export default function AnalyticsPage() {
    const [range, setRange] = useState("Last 7 days");
    const current = chartData[range];

    // Build views vs clicks bar data from the same dataset
    const barData = current.data.map((v, i) => ({
        label: current.labels[i],
        Views: Math.round(v * 1.4),
        Clicks: Math.round(v * 0.6),
    }));

    return (
        <div className="flex flex-col">
            {/* Page Header (Sub-header) */}
            <div className="bg-[#0a1a3b] text-white pt-8 pb-32 px-4 md:px-6 lg:px-10 -mx-4 md:-mx-6 lg:-mx-10 -mt-4 md:-mt-6 lg:-mt-10 mb-0">
                <div className="max-w-[1600px] mx-auto flex items-end justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-extrabold tracking-tight">Analytics</h1>
                        <p className="text-white/60 text-sm mt-1">Track your store&apos;s performance over time.</p>
                    </div>
                    <select
                        value={range}
                        onChange={(e) => setRange(e.target.value)}
                        className="text-xs font-bold text-white bg-white/10 border border-white/10 rounded-lg px-3 py-2 outline-none cursor-pointer focus:ring-2 focus:ring-white/20 transition-all w-fit shrink-0"
                    >
                        {ranges.map((r) => <option key={r} value={r} className="bg-[#0a1a3b] text-white">{r}</option>)}
                    </select>
                </div>
            </div>

            {/* Main Content Area (Overlapping Header) */}
            <div className="relative z-10 -mt-24 space-y-6 max-w-[1600px] mx-auto w-full">

            {/* Stats — Mobile: 2×2 widget card / Desktop: 4-column grid */}
            {/* Mobile 2×2 card */}
            <div className="md:hidden bg-white border border-[#eae6df] rounded-2xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-2">
                    {[
                        { title: "Total Views", value: "4,120", trend: "12.5%", trendUp: true, icon: <Eye size={16} weight="bold" /> },
                        { title: "Link Clicks", value: "342", trend: "8.3%", trendUp: true, icon: <CursorClick size={16} weight="bold" /> },
                        { title: "Visitors", value: "2,860", trend: "5.7%", trendUp: true, icon: <Users size={16} weight="bold" /> },
                        { title: "Conversion", value: "8.3%", trend: "1.2%", trendUp: false, icon: <TrendUp size={16} weight="bold" /> },
                    ].map((s, i) => (
                        <div
                            key={s.title}
                            className={`px-4 py-5 flex flex-col gap-2.5 min-w-0 ${
                                i < 2 ? "border-b border-[#eae6df]" : ""
                            } ${i % 2 === 0 ? "border-r border-[#eae6df]" : ""}`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="w-8 h-8 rounded-lg bg-[#0a1a3b]/5 flex items-center justify-center text-[#0a1a3b]/50">{s.icon}</div>
                                {s.trend ? (
                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ${s.trendUp ? "text-emerald-600 bg-emerald-50" : "text-red-500 bg-red-50"}`}>
                                        {s.trendUp ? "↑" : "↓"}{s.trend}
                                    </span>
                                ) : <span />}
                            </div>
                            <div className="min-w-0">
                                <p className="text-lg font-extrabold text-[#0a1a3b] tracking-tight leading-none truncate" style={{ fontVariantNumeric: 'tabular-nums' }}>{s.value}</p>
                                <p className="text-[9px] font-bold uppercase tracking-widest text-[#0a1a3b]/35 mt-1 truncate">{s.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Desktop 4-column grid */}
            <div className="hidden md:grid md:grid-cols-4 gap-4">
                <StatsCard title="Total Views" value="4,120" trend="12.5%" trendUp={true} icon={<Eye size={20} />} />
                <StatsCard title="Link Clicks" value="342" trend="8.3%" trendUp={true} icon={<CursorClick size={20} />} />
                <StatsCard title="Unique Visitors" value="2,860" trend="5.7%" trendUp={true} icon={<Users size={20} />} />
                <StatsCard title="Conversion Rate" value="8.3%" trend="1.2%" trendUp={false} icon={<TrendUp size={20} />} />
            </div>

            {/* Revenue area chart + Traffic pie */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white border border-[#eae6df] rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                        <div>
                            <h3 className="font-extrabold text-[#0a1a3b]">Revenue Overview</h3>
                            <p className="text-[#0a1a3b]/40 text-xs mt-0.5">Estimated from confirmed inquiries</p>
                        </div>
                        <span className="text-xl font-extrabold text-[#0a1a3b] tracking-tight">₦285k</span>
                    </div>
                    <ChartArea
                        data={current.data}
                        labels={current.labels}
                        height={260}
                        color="#1b9cda"
                        valueFormatter={(v) => `₦${(v * 1000).toLocaleString()}`}
                        yFormatter={(v) => `₦${v}k`}
                    />
                </div>

                <div className="bg-white border border-[#eae6df] rounded-2xl p-6 shadow-sm flex flex-col">
                    <h3 className="font-extrabold text-[#0a1a3b] mb-0.5">Traffic Sources</h3>
                    <p className="text-[#0a1a3b]/40 text-xs mb-4">Where your visitors come from</p>
                    <div className="flex-1 flex items-center justify-center">
                        <ResponsiveContainer width="100%" height={220}>
                            <PieChart>
                                <Pie
                                    data={trafficSources}
                                    cx="50%"
                                    cy="45%"
                                    innerRadius={55}
                                    outerRadius={80}
                                    paddingAngle={3}
                                    dataKey="value"
                                    strokeWidth={0}
                                >
                                    {trafficSources.map((_, i) => (
                                        <Cell key={i} fill={PIE_COLORS[i]} />
                                    ))}
                                </Pie>
                                <Tooltip content={<PieTooltip />} />
                                <Legend
                                    iconType="circle"
                                    iconSize={8}
                                    formatter={(value) => (
                                        <span className="text-xs font-bold text-[#0a1a3b]/60">{value}</span>
                                    )}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Views vs Clicks bar chart */}
            <div className="bg-white border border-[#eae6df] rounded-2xl p-6 shadow-sm">
                <h3 className="font-extrabold text-[#0a1a3b] mb-0.5">Views vs Clicks</h3>
                <p className="text-[#0a1a3b]/40 text-xs mb-5">Store views compared to product link clicks</p>
                <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={barData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }} barCategoryGap="30%">
                        <CartesianGrid strokeDasharray="3 3" stroke="#eae6df" vertical={false} />
                        <XAxis
                            dataKey="label"
                            tick={{ fontSize: 10, fill: "#0a1a3b", opacity: 0.4, fontWeight: 700 }}
                            axisLine={false}
                            tickLine={false}
                            dy={6}
                        />
                        <YAxis
                            tick={{ fontSize: 10, fill: "#0a1a3b", opacity: 0.4, fontWeight: 700 }}
                            axisLine={false}
                            tickLine={false}
                            width={36}
                        />
                        <Tooltip content={<BarTooltip />} cursor={{ fill: "#f3f4f6" }} />
                        <Bar dataKey="Views" fill="#0a1a3b" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="Clicks" fill="#1b9cda" radius={[4, 4, 0, 0]} />
                        <Legend
                            iconType="circle"
                            iconSize={8}
                            formatter={(value) => (
                                <span className="text-xs font-bold text-[#0a1a3b]/60">{value}</span>
                            )}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Top Products Table */}
            <div className="bg-white border border-[#eae6df] rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h3 className="font-extrabold text-[#0a1a3b]">Top Products</h3>
                        <p className="text-[#0a1a3b]/40 text-xs mt-0.5">By views and revenue this period</p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-[#0a1a3b]/40 uppercase tracking-wider">
                        <ShoppingBag size={12} />
                        {topProducts.length} products
                    </div>
                </div>
                <div className="overflow-x-auto no-scrollbar">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#eae6df]">
                                {["Product", "Views", "Clicks", "Revenue", "Change"].map((h) => (
                                    <th key={h} className="text-left text-[10px] font-bold uppercase tracking-wider text-[#0a1a3b]/40 pb-3 pr-6 last:pr-0">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {topProducts.map((p, i) => (
                                <tr key={p.name} className="border-b border-[#eae6df] last:border-0 hover:bg-[#f9fafb] transition-colors">
                                    <td className="py-3.5 pr-6">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-mono font-bold text-[#0a1a3b]/30 w-4">{i + 1}</span>
                                            <span className="font-bold text-[#0a1a3b] text-sm">{p.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3.5 pr-6 font-mono text-sm font-bold text-[#0a1a3b]/60">{p.views.toLocaleString()}</td>
                                    <td className="py-3.5 pr-6 font-mono text-sm font-bold text-[#0a1a3b]/60">{p.clicks}</td>
                                    <td className="py-3.5 pr-6 font-mono text-sm font-bold text-[#1b9cda]">{p.revenue}</td>
                                    <td className="py-3.5">
                                        <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md ${p.up ? "text-emerald-600 bg-emerald-50" : "text-red-500 bg-red-50"}`}>
                                            {p.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                                            {p.change}%
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    );
}
