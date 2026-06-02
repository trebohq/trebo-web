"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Plus,
    MagnifyingGlass,
    X,
    DotsThreeVertical,
    PencilSimple,
    Trash,
    Eye,
    SquaresFour,
    Rows,
} from "@phosphor-icons/react";

interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    status: "Active" | "Draft";
    image: string;
    stock: number;
}

const initialProducts: Product[] = [
    { id: "1", name: "Premium Leather Bag", price: 45000, category: "Accessories", status: "Active", image: "https://picsum.photos/400/400?random=1", stock: 12 },
    { id: "2", name: "Wireless Earbuds", price: 85000, category: "Electronics", status: "Active", image: "https://picsum.photos/400/400?random=2", stock: 5 },
    { id: "3", name: "Ceramic Coffee Mug", price: 3500, category: "Home", status: "Draft", image: "https://picsum.photos/400/400?random=3", stock: 50 },
    { id: "4", name: "Minimalist Watch", price: 120000, category: "Accessories", status: "Active", image: "https://picsum.photos/400/400?random=4", stock: 3 },
    { id: "5", name: "Organic Face Serum", price: 15000, category: "Beauty", status: "Active", image: "https://picsum.photos/400/400?random=5", stock: 24 },
    { id: "6", name: "Yoga Mat Pro", price: 18000, category: "Fitness", status: "Draft", image: "https://picsum.photos/400/400?random=6", stock: 0 },
    { id: "7", name: "Smart Home Hub", price: 65000, category: "Home", status: "Active", image: "https://picsum.photos/400/400?random=7", stock: 8 },
    { id: "8", name: "Running Shoes", price: 42000, category: "Fitness", status: "Active", image: "https://picsum.photos/400/400?random=8", stock: 15 },
];

const categories = ["All", "Accessories", "Electronics", "Home", "Beauty", "Fitness"];

const inputCls =
    "w-full px-3 py-2.5 bg-[#f8f6f3] border border-[#eae6df] rounded-xl text-sm text-[#0a1a3b] placeholder-[#0a1a3b]/40 focus:outline-none focus:ring-2 focus:ring-[#1b9cda]/20 focus:border-[#1b9cda] transition-all";

function StockLabel({ stock }: { stock: number }) {
    if (stock === 0) return <span className="text-[10px] font-bold text-red-500">Out of stock</span>;
    if (stock <= 5) return <span className="text-[10px] font-bold text-amber-500">{stock} left</span>;
    return <span className="text-[10px] font-bold text-[#0a1a3b]/40">{stock} in stock</span>;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Draft">("All");
    const [isAdding, setIsAdding] = useState(false);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);
    const [form, setForm] = useState({ name: "", price: "", category: "Accessories", stock: "" });

    const filtered = products.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.category.toLowerCase().includes(search.toLowerCase());
        const matchCat = selectedCategory === "All" || p.category === selectedCategory;
        const matchStatus = statusFilter === "All" || p.status === statusFilter;
        return matchSearch && matchCat && matchStatus;
    });

    const toggleStatus = (id: string) =>
        setProducts(ps => ps.map(p => p.id === id ? { ...p, status: p.status === "Active" ? "Draft" : "Active" } : p));

    const deleteProduct = (id: string) => {
        setProducts(ps => ps.filter(p => p.id !== id));
        setOpenMenuId(null);
    };

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.price) return;
        setProducts(ps => [{
            id: Math.random().toString(36).slice(2, 9),
            name: form.name,
            price: Number(form.price),
            category: form.category,
            status: "Draft",
            image: `https://picsum.photos/400/400?random=${Math.floor(Math.random() * 1000)}`,
            stock: Number(form.stock) || 0,
        }, ...ps]);
        setIsAdding(false);
        setForm({ name: "", price: "", category: "Accessories", stock: "" });
    };

    const counts = {
        all: products.length,
        active: products.filter(p => p.status === "Active").length,
        draft: products.filter(p => p.status === "Draft").length,
    };

    return (
        <div className="space-y-5">
            {/* Header row */}
            <div className="flex items-center justify-between gap-3">
                <div>
                    <h1 className="text-xl font-extrabold text-[#0a1a3b] tracking-tight">Products</h1>
                    <p className="text-[#0a1a3b]/40 text-xs mt-0.5">
                        {counts.all} total · {counts.active} active · {counts.draft} draft
                    </p>
                </div>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="inline-flex items-center gap-1.5 bg-[#1b9cda] hover:bg-[#1b9cda]/90 text-white px-3.5 py-2 rounded-xl text-sm font-bold transition-colors shrink-0"
                >
                    {isAdding ? <X size={15} weight="bold" /> : <Plus size={15} weight="bold" />}
                    {isAdding ? "Cancel" : "Add"}
                </button>
            </div>

            {/* Add Product Form */}
            <AnimatePresence>
                {isAdding && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <form
                            onSubmit={handleAdd}
                            className="bg-white border border-[#eae6df] rounded-2xl p-4 space-y-4"
                        >
                            <p className="text-sm font-extrabold text-[#0a1a3b]">New Product</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="col-span-2 space-y-1">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#0a1a3b]/40">Name</label>
                                    <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="e.g. Vintage Leather Jacket" className={inputCls} />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#0a1a3b]/40">Price (₦)</label>
                                    <input type="number" required min="0" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} placeholder="0" className={inputCls} />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#0a1a3b]/40">Stock</label>
                                    <input type="number" min="0" value={form.stock} onChange={e => setForm(f => ({ ...f, stock: e.target.value }))} placeholder="0" className={inputCls} />
                                </div>
                                <div className="col-span-2 space-y-1">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#0a1a3b]/40">Category</label>
                                    <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className={`${inputCls} appearance-none cursor-pointer`}>
                                        {categories.filter(c => c !== "All").map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-2 pt-1">
                                <button type="button" onClick={() => setIsAdding(false)} className="flex-1 py-2.5 rounded-xl text-sm font-bold text-[#0a1a3b]/60 bg-[#f3f4f6] hover:bg-[#eae6df] transition-colors">Cancel</button>
                                <button type="submit" className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white bg-[#0a1a3b] hover:bg-[#0a1a3b]/90 transition-colors">Save Draft</button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toolbar — single row, scrollable on mobile */}
            <div className="flex items-center gap-2">
                {/* Search */}
                <div className="relative flex-1 min-w-0">
                    <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a1a3b]/40" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#eae6df] rounded-xl text-sm text-[#0a1a3b] placeholder-[#0a1a3b]/40 focus:outline-none focus:ring-2 focus:ring-[#1b9cda]/20 focus:border-[#1b9cda] transition-all"
                    />
                </div>

                {/* Category — hidden on smallest screens */}
                <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="hidden sm:block py-2.5 px-3 bg-white border border-[#eae6df] rounded-xl text-sm text-[#0a1a3b] focus:outline-none focus:ring-2 focus:ring-[#1b9cda]/20 focus:border-[#1b9cda] cursor-pointer shrink-0"
                >
                    {categories.map(cat => <option key={cat} value={cat}>{cat === "All" ? "All Categories" : cat}</option>)}
                </select>

                {/* View toggle */}
                <div className="flex items-center bg-[#f3f4f6] rounded-xl p-1 shrink-0">
                    <button onClick={() => setViewMode("grid")} aria-label="Grid view" className={`p-1.5 rounded-lg transition-all ${viewMode === "grid" ? "bg-white text-[#0a1a3b] shadow-sm" : "text-[#0a1a3b]/40"}`}>
                        <SquaresFour size={16} />
                    </button>
                    <button onClick={() => setViewMode("list")} aria-label="List view" className={`p-1.5 rounded-lg transition-all ${viewMode === "list" ? "bg-white text-[#0a1a3b] shadow-sm" : "text-[#0a1a3b]/40"}`}>
                        <Rows size={16} />
                    </button>
                </div>
            </div>

            {/* Status filter pills — scrollable row */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 -mx-1 px-1">
                {(["All", "Active", "Draft"] as const).map(s => (
                    <button
                        key={s}
                        onClick={() => setStatusFilter(s)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${statusFilter === s
                            ? "bg-[#0a1a3b] text-white border-[#0a1a3b]"
                            : "bg-white text-[#0a1a3b]/50 border-[#eae6df] hover:text-[#0a1a3b]"
                            }`}
                    >
                        {s} {s === "All" ? `(${counts.all})` : s === "Active" ? `(${counts.active})` : `(${counts.draft})`}
                    </button>
                ))}
                {/* Category on mobile */}
                <div className="sm:hidden ml-auto shrink-0">
                    <select
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                        className="py-1.5 px-3 bg-white border border-[#eae6df] rounded-full text-xs font-bold text-[#0a1a3b] focus:outline-none cursor-pointer"
                    >
                        {categories.map(cat => <option key={cat} value={cat}>{cat === "All" ? "All" : cat}</option>)}
                    </select>
                </div>
            </div>

            {/* Grid View */}
            {viewMode === "grid" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    <AnimatePresence mode="popLayout">
                        {filtered.map(product => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.15 }}
                                className="bg-white border border-[#eae6df] rounded-2xl overflow-hidden flex flex-col group"
                            >
                                {/* Image */}
                                <div className="relative aspect-square bg-[#f8f6f3] overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {product.stock === 0 && (
                                        <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                                            <span className="text-[10px] font-bold text-[#0a1a3b]/60 bg-white px-2 py-1 rounded-lg border border-[#eae6df]">Out of stock</span>
                                        </div>
                                    )}
                                </div>

                                {/* Body */}
                                <div className="p-3 flex flex-col flex-1">
                                    <div className="flex items-start justify-between gap-1 mb-1">
                                        <h3 className="font-bold text-[#0a1a3b] text-xs leading-snug line-clamp-2 flex-1">{product.name}</h3>
                                        <div className="relative shrink-0">
                                            <button
                                                onClick={() => setOpenMenuId(openMenuId === product.id ? null : product.id)}
                                                className="p-0.5 text-[#0a1a3b]/30 hover:text-[#0a1a3b] transition-colors"
                                                aria-label="Options"
                                            >
                                                <DotsThreeVertical size={14} weight="bold" />
                                            </button>
                                            <AnimatePresence>
                                                {openMenuId === product.id && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.95, y: -4 }}
                                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                                        exit={{ opacity: 0, scale: 0.95 }}
                                                        transition={{ duration: 0.1 }}
                                                        className="absolute right-0 top-6 z-20 w-32 bg-white border border-[#eae6df] rounded-xl shadow-lg overflow-hidden"
                                                    >
                                                        <button className="w-full flex items-center gap-2 px-3 py-2.5 text-xs font-bold text-[#0a1a3b] hover:bg-[#f3f4f6] transition-colors">
                                                            <Eye size={13} /> View
                                                        </button>
                                                        <button className="w-full flex items-center gap-2 px-3 py-2.5 text-xs font-bold text-[#0a1a3b] hover:bg-[#f3f4f6] transition-colors">
                                                            <PencilSimple size={13} /> Edit
                                                        </button>
                                                        <button onClick={() => deleteProduct(product.id)} className="w-full flex items-center gap-2 px-3 py-2.5 text-xs font-bold text-red-500 hover:bg-red-50 transition-colors">
                                                            <Trash size={13} /> Delete
                                                        </button>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    <StockLabel stock={product.stock} />

                                    <div className="mt-auto pt-2.5 flex items-center justify-between border-t border-[#f3f4f6] mt-2.5">
                                        <span className="text-sm font-extrabold text-[#0a1a3b] font-mono">
                                            ₦{product.price.toLocaleString()}
                                        </span>
                                        <button
                                            onClick={() => toggleStatus(product.id)}
                                            aria-label="Toggle status"
                                            className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${product.status === "Active" ? "bg-[#1b9cda]" : "bg-[#eae6df]"}`}
                                        >
                                            <span className="sr-only">Toggle status</span>
                                            <span className={`inline-block h-4 w-4 rounded-full bg-white shadow transition duration-200 ${product.status === "Active" ? "translate-x-4" : "translate-x-0"}`} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filtered.length === 0 && <EmptyState />}
                </div>
            )}

            {/* List View */}
            {viewMode === "list" && (
                <div className="bg-white border border-[#eae6df] rounded-2xl overflow-hidden">
                    {filtered.length === 0 ? (
                        <div className="py-14 flex flex-col items-center justify-center text-center">
                            <EmptyStateInline />
                        </div>
                    ) : (
                        <div className="divide-y divide-[#f3f4f6]">
                            {filtered.map(product => (
                                <div key={product.id} className="flex items-center gap-3 px-4 py-3 hover:bg-[#f9fafb] transition-colors">
                                    <img src={product.image} alt={product.name} className="w-10 h-10 rounded-xl object-cover shrink-0 border border-[#eae6df]" />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-[#0a1a3b] text-sm truncate">{product.name}</p>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span className="text-[10px] text-[#0a1a3b]/40">{product.category}</span>
                                            <span className="text-[#0a1a3b]/20">·</span>
                                            <StockLabel stock={product.stock} />
                                        </div>
                                    </div>
                                    <span className="font-extrabold font-mono text-sm text-[#0a1a3b] shrink-0">₦{product.price.toLocaleString()}</span>
                                    <button
                                        onClick={() => toggleStatus(product.id)}
                                        aria-label="Toggle status"
                                        className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${product.status === "Active" ? "bg-[#1b9cda]" : "bg-[#eae6df]"}`}
                                    >
                                        <span className="sr-only">Toggle</span>
                                        <span className={`inline-block h-4 w-4 rounded-full bg-white shadow transition duration-200 ${product.status === "Active" ? "translate-x-4" : "translate-x-0"}`} />
                                    </button>
                                    <button onClick={() => deleteProduct(product.id)} className="p-1.5 text-[#0a1a3b]/20 hover:text-red-500 transition-colors shrink-0" aria-label="Delete">
                                        <Trash size={15} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

function EmptyState() {
    return (
        <div className="col-span-full py-14 flex flex-col items-center justify-center text-center border border-[#eae6df] border-dashed rounded-2xl bg-white">
            <EmptyStateInline />
        </div>
    );
}

function EmptyStateInline() {
    return (
        <>
            <div className="w-10 h-10 bg-[#f3f4f6] rounded-full flex items-center justify-center mb-3">
                <MagnifyingGlass size={18} className="text-[#0a1a3b]/30" />
            </div>
            <p className="font-bold text-[#0a1a3b] text-sm">No products found</p>
            <p className="text-[#0a1a3b]/40 text-xs mt-1">Try adjusting your filters.</p>
        </>
    );
}
