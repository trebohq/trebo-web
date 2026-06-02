"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MagnifyingGlass,
    Check,
    X,
    CaretDown,
    WhatsappLogo,
    ArrowUpRight,
    ChatCircle,
} from "@phosphor-icons/react";

type OrderStatus = "pending" | "confirmed" | "completed" | "cancelled";

interface Order {
    id: string;
    customer: string;
    phone: string;
    product: string;
    productImage: string;
    category: string;
    amount: number;
    status: OrderStatus;
    date: string;
    note?: string;
}

const initialOrders: Order[] = [
    { id: "ORD-001", customer: "Chukwudi Nwosu", phone: "+234 801 234 5678", product: "Ankara Print Dress", productImage: "https://picsum.photos/80/80?random=10", category: "Fashion", amount: 25000, status: "pending", date: "Jun 2, 2026", note: "Size L please" },
    { id: "ORD-002", customer: "Sarah Adekunle", phone: "+234 802 345 6789", product: "Lagos Night Heels", productImage: "https://picsum.photos/80/80?random=11", category: "Footwear", amount: 45000, status: "confirmed", date: "Jun 2, 2026" },
    { id: "ORD-003", customer: "Ibrahim Khalil", phone: "+234 803 456 7890", product: "Men's Agbada Set", productImage: "https://picsum.photos/80/80?random=12", category: "Fashion", amount: 85000, status: "completed", date: "Jun 1, 2026", note: "XL, white colour" },
    { id: "ORD-004", customer: "Grace Obi", phone: "+234 804 567 8901", product: "Beaded Necklace", productImage: "https://picsum.photos/80/80?random=13", category: "Accessories", amount: 15000, status: "cancelled", date: "Jun 1, 2026" },
    { id: "ORD-005", customer: "Tunde Fashola", phone: "+234 805 678 9012", product: "Minimalist Watch", productImage: "https://picsum.photos/80/80?random=14", category: "Accessories", amount: 120000, status: "pending", date: "May 31, 2026", note: "Black strap" },
    { id: "ORD-006", customer: "Amaka Ezeh", phone: "+234 806 789 0123", product: "Organic Face Serum", productImage: "https://picsum.photos/80/80?random=15", category: "Beauty", amount: 15000, status: "confirmed", date: "May 31, 2026" },
    { id: "ORD-007", customer: "Biodun Olatunji", phone: "+234 807 890 1234", product: "Premium Leather Bag", productImage: "https://picsum.photos/80/80?random=16", category: "Accessories", amount: 45000, status: "completed", date: "May 30, 2026" },
    { id: "ORD-008", customer: "Ngozi Okonkwo", phone: "+234 808 901 2345", product: "Running Shoes", productImage: "https://picsum.photos/80/80?random=17", category: "Fitness", amount: 42000, status: "pending", date: "May 30, 2026", note: "Size 42" },
];

const statusConfig: Record<OrderStatus, { label: string; dot: string; text: string }> = {
    pending: { label: "Pending", dot: "bg-amber-400", text: "text-amber-600" },
    confirmed: { label: "Confirmed", dot: "bg-[#1b9cda]", text: "text-[#1b9cda]" },
    completed: { label: "Completed", dot: "bg-[#0a1a3b]", text: "text-[#0a1a3b]" },
    cancelled: { label: "Cancelled", dot: "bg-[#eae6df]", text: "text-[#0a1a3b]/40" },
};

const tabs: { label: string; value: "all" | OrderStatus }[] = [
    { label: "All", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Confirmed", value: "confirmed" },
    { label: "Completed", value: "completed" },
    { label: "Cancelled", value: "cancelled" },
];

export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>(initialOrders);
    const [search, setSearch] = useState("");
    const [activeTab, setActiveTab] = useState<"all" | OrderStatus>("all");
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const filtered = orders.filter(o => {
        const matchSearch =
            o.customer.toLowerCase().includes(search.toLowerCase()) ||
            o.product.toLowerCase().includes(search.toLowerCase()) ||
            o.id.toLowerCase().includes(search.toLowerCase());
        const matchTab = activeTab === "all" || o.status === activeTab;
        return matchSearch && matchTab;
    });

    const advance = (id: string) => {
        setOrders(os => os.map(o => {
            if (o.id !== id) return o;
            const map: Partial<Record<OrderStatus, OrderStatus>> = { pending: "confirmed", confirmed: "completed" };
            const next = map[o.status];
            return next ? { ...o, status: next } : o;
        }));
    };

    const cancel = (id: string) =>
        setOrders(os => os.map(o => o.id === id ? { ...o, status: "cancelled" } : o));

    const counts = tabs.reduce((acc, t) => {
        acc[t.value] = t.value === "all" ? orders.length : orders.filter(o => o.status === t.value).length;
        return acc;
    }, {} as Record<string, number>);

    const totalRevenue = orders.filter(o => o.status === "completed").reduce((s, o) => s + o.amount, 0);

    return (
        <div className="flex flex-col">
            {/* Page Header (Sub-header) */}
            <div className="bg-[#0a1a3b] text-white pt-8 pb-32 px-4 md:px-6 lg:px-10 -mx-4 md:-mx-6 lg:-mx-10 -mt-4 md:-mt-6 lg:-mt-10 mb-0">
                <div className="max-w-[1600px] mx-auto flex items-start justify-between gap-3">
                    <div>
                        <h1 className="text-xl font-extrabold tracking-tight">Orders</h1>
                        <p className="text-white/60 text-xs mt-0.5">
                            {counts.all} total · ₦{(totalRevenue / 1000).toFixed(0)}k earned
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Area (Overlapping Header) */}
            <div className="relative z-10 -mt-24 space-y-5 max-w-[1600px] mx-auto w-full">

            {/* Search and Filters Card */}
            <div className="bg-white border border-[#eae6df] rounded-2xl p-4 shadow-sm space-y-4">
                {/* Search */}
                <div className="relative">
                    <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a1a3b]/40" />
                    <input
                        type="text"
                        placeholder="Search orders..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 bg-[#f8f6f3] border border-[#eae6df] rounded-xl text-sm text-[#0a1a3b] placeholder-[#0a1a3b]/40 focus:outline-none focus:ring-2 focus:ring-[#1b9cda]/20 focus:border-[#1b9cda] transition-all"
                    />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5 -mx-1 px-1">
                    {tabs.map(t => (
                        <button
                            key={t.value}
                            onClick={() => setActiveTab(t.value)}
                            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${activeTab === t.value
                                ? "bg-[#0a1a3b] text-white border-[#0a1a3b]"
                                : "bg-[#f8f6f3] text-[#0a1a3b]/50 border-[#eae6df] hover:text-[#0a1a3b]"
                                }`}
                        >
                            {t.label}
                            <span className={`text-[10px] ${activeTab === t.value ? "text-white/60" : "text-[#0a1a3b]/30"}`}>
                                {counts[t.value]}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Orders */}
            <div className="space-y-2">
                <AnimatePresence mode="popLayout">
                    {filtered.map(order => {
                        const cfg = statusConfig[order.status];
                        const isExpanded = expandedId === order.id;
                        const canAdvance = order.status === "pending" || order.status === "confirmed";
                        const nextLabel = order.status === "pending" ? "Confirm" : "Complete";

                        return (
                            <motion.div
                                layout
                                key={order.id}
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="bg-white border border-[#eae6df] rounded-2xl overflow-hidden"
                            >
                                {/* Row */}
                                <button
                                    onClick={() => setExpandedId(isExpanded ? null : order.id)}
                                    className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-[#f9fafb] transition-colors"
                                >
                                    <img
                                        src={order.productImage}
                                        alt={order.product}
                                        className="w-10 h-10 rounded-xl object-cover shrink-0 border border-[#eae6df]"
                                    />

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-[#0a1a3b] text-sm truncate">{order.customer}</span>
                                            <span className="hidden sm:inline text-[10px] font-mono text-[#0a1a3b]/30 shrink-0">{order.id}</span>
                                        </div>
                                        <p className="text-xs text-[#0a1a3b]/50 truncate mt-0.5">{order.product}</p>
                                    </div>

                                    {/* Amount */}
                                    <span className="font-extrabold font-mono text-sm text-[#0a1a3b] shrink-0">
                                        ₦{order.amount.toLocaleString()}
                                    </span>

                                    {/* Status dot */}
                                    <span className="shrink-0 flex items-center gap-1.5 hidden sm:flex">
                                        <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                                        <span className={`text-xs font-bold ${cfg.text}`}>{cfg.label}</span>
                                    </span>

                                    {/* Chevron */}
                                    <motion.span
                                        animate={{ rotate: isExpanded ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-[#0a1a3b]/20 shrink-0"
                                    >
                                        <CaretDown size={14} weight="bold" />
                                    </motion.span>
                                </button>

                                {/* Expanded */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.18 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-4 pb-4 pt-3 border-t border-[#f3f4f6]">
                                                <div className="max-w-lg space-y-4">
                                                    {/* Details grid */}
                                                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs">
                                                        {[
                                                            { label: "Order ID", value: order.id },
                                                            { label: "Date", value: order.date },
                                                            { label: "Category", value: order.category },
                                                            { label: "Amount", value: `₦${order.amount.toLocaleString()}` },
                                                            { label: "Status", value: cfg.label },
                                                            { label: "Phone", value: order.phone },
                                                        ].map(row => (
                                                            <div key={row.label}>
                                                                <p className="text-[#0a1a3b]/40 font-bold uppercase tracking-wider text-[10px] mb-0.5">{row.label}</p>
                                                                <p className="font-bold text-[#0a1a3b]">{row.value}</p>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Note */}
                                                    {order.note && (
                                                        <div className="flex items-start gap-2 bg-[#f8f6f3] border border-[#eae6df] rounded-xl px-3 py-2.5">
                                                            <ChatCircle size={14} className="text-[#0a1a3b]/40 shrink-0 mt-0.5" />
                                                            <p className="text-xs text-[#0a1a3b]/70 font-medium">{order.note}</p>
                                                        </div>
                                                    )}

                                                    {/* Actions */}
                                                    <div className="flex items-center gap-2 pt-1">
                                                        <a
                                                            href={`https://wa.me/${order.phone.replace(/\D/g, "")}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={e => e.stopPropagation()}
                                                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#f3f4f6] text-[#0a1a3b] hover:bg-[#eae6df] transition-colors border border-[#eae6df]"
                                                        >
                                                            <WhatsappLogo size={14} /> Message
                                                            <ArrowUpRight size={12} className="opacity-40" />
                                                        </a>

                                                        {canAdvance && (
                                                            <>
                                                                <button
                                                                    onClick={e => { e.stopPropagation(); advance(order.id); }}
                                                                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0a1a3b] text-white hover:bg-[#0a1a3b]/90 transition-colors"
                                                                >
                                                                    <Check size={13} weight="bold" /> {nextLabel}
                                                                </button>
                                                                <button
                                                                    onClick={e => { e.stopPropagation(); cancel(order.id); }}
                                                                    className="inline-flex items-center justify-center p-2.5 rounded-xl text-xs font-bold bg-[#f3f4f6] text-[#0a1a3b]/40 hover:text-red-500 hover:bg-red-50 transition-colors border border-[#eae6df]"
                                                                    aria-label="Cancel order"
                                                                >
                                                                    <X size={14} weight="bold" />
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                {filtered.length === 0 && (
                    <div className="py-14 flex flex-col items-center justify-center text-center bg-white border border-[#eae6df] border-dashed rounded-2xl">
                        <div className="w-10 h-10 bg-[#f3f4f6] rounded-full flex items-center justify-center mb-3">
                            <MagnifyingGlass size={18} className="text-[#0a1a3b]/30" />
                        </div>
                        <p className="font-bold text-[#0a1a3b] text-sm">No orders found</p>
                        <p className="text-[#0a1a3b]/40 text-xs mt-1">
                            {search || activeTab !== "all" ? "Try adjusting your filters." : "Customer orders will appear here."}
                        </p>
                    </div>
                )}
            </div>

            {filtered.length > 0 && (
                <p className="text-center text-xs text-[#0a1a3b]/30 font-bold pb-2">
                    {filtered.length} of {orders.length} orders
                </p>
            )}
            </div>
        </div>
    );
}
