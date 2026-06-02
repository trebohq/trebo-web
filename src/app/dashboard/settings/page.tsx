"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    User,
    Storefront,
    Bell,
    Lock,
    CreditCard,
    CaretRight,
    Camera,
    Check,
    Eye,
    EyeSlash,
    DeviceMobile,
    EnvelopeSimple,
    Globe,
    InstagramLogo,
    TwitterLogo,
} from "@phosphor-icons/react";

type Section = "profile" | "store" | "notifications" | "security" | "billing";

const nav: { id: Section; label: string; icon: React.ReactNode; description: string }[] = [
    { id: "profile", label: "Profile", icon: <User size={18} />, description: "Your personal info" },
    { id: "store", label: "Store", icon: <Storefront size={18} />, description: "Storefront settings" },
    { id: "notifications", label: "Notifications", icon: <Bell size={18} />, description: "Alerts & emails" },
    { id: "security", label: "Security", icon: <Lock size={18} />, description: "Password & 2FA" },
    { id: "billing", label: "Billing", icon: <CreditCard size={18} />, description: "Plan & payments" },
];

function SaveButton({ saved }: { saved: boolean }) {
    return (
        <button
            type="submit"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${saved
                ? "bg-emerald-500 text-white"
                : "bg-[#0a1a3b] hover:bg-[#0a1a3b]/90 text-white"
                }`}
        >
            {saved ? <><Check size={16} /> Saved</> : "Save Changes"}
        </button>
    );
}

function FieldGroup({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
    return (
        <div className="space-y-1.5">
            <label className="text-sm font-bold text-[#0a1a3b]">{label}</label>
            {hint && <p className="text-xs text-[#0a1a3b]/50">{hint}</p>}
            {children}
        </div>
    );
}

const inputCls =
    "w-full px-3 py-2.5 bg-[#f8f6f3] border border-[#eae6df] rounded-xl text-sm text-[#0a1a3b] placeholder-[#0a1a3b]/40 focus:outline-none focus:ring-2 focus:ring-[#1b9cda]/20 focus:border-[#1b9cda] transition-all";

// ─── Section: Profile ────────────────────────────────────────────────────────
function ProfileSection() {
    const [saved, setSaved] = useState(false);
    const [name, setName] = useState("Adaeze Okonkwo");
    const [email, setEmail] = useState("adaeze@trebo.ng");
    const [phone, setPhone] = useState("+234 801 234 5678");

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    return (
        <form onSubmit={handleSave} className="space-y-6">
            {/* Avatar */}
            <div className="flex items-center gap-5">
                <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-[#1b9cda]/10 flex items-center justify-center text-[#1b9cda] text-2xl font-extrabold border-2 border-[#1b9cda]/20">
                        AO
                    </div>
                    <button
                        type="button"
                        className="absolute -bottom-2 -right-2 w-7 h-7 bg-[#0a1a3b] text-white rounded-lg flex items-center justify-center shadow hover:bg-[#1b9cda] transition-colors"
                        aria-label="Change avatar"
                    >
                        <Camera size={13} />
                    </button>
                </div>
                <div>
                    <p className="font-bold text-[#0a1a3b] text-sm">Profile Photo</p>
                    <p className="text-xs text-[#0a1a3b]/50 mt-0.5">JPG, PNG or GIF · Max 2MB</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FieldGroup label="Full Name">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputCls} />
                </FieldGroup>
                <FieldGroup label="Email Address">
                    <div className="relative">
                        <EnvelopeSimple className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a1a3b]/40" />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`${inputCls} pl-9`} />
                    </div>
                </FieldGroup>
                <FieldGroup label="Phone Number">
                    <div className="relative">
                        <DeviceMobile className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a1a3b]/40" />
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={`${inputCls} pl-9`} />
                    </div>
                </FieldGroup>
                <FieldGroup label="Language">
                    <select className={inputCls}>
                        <option>English (Nigeria)</option>
                        <option>Yoruba</option>
                        <option>Igbo</option>
                        <option>Hausa</option>
                    </select>
                </FieldGroup>
            </div>

            <div className="flex justify-end pt-2 border-t border-[#eae6df]">
                <SaveButton saved={saved} />
            </div>
        </form>
    );
}

// ─── Section: Store ───────────────────────────────────────────────────────────
function StoreSection() {
    const [saved, setSaved] = useState(false);
    const [storeName, setStoreName] = useState("Adaeze's Boutique");
    const [storeSlug, setStoreSlug] = useState("adaeze-boutique");
    const [bio, setBio] = useState("Affordable, quality fashion for modern Nigerians. DM to order 🛍️");
    const [whatsapp, setWhatsapp] = useState("+234 801 234 5678");

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    return (
        <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FieldGroup label="Store Name">
                    <input type="text" value={storeName} onChange={(e) => setStoreName(e.target.value)} className={inputCls} />
                </FieldGroup>
                <FieldGroup label="Store URL" hint="trebo.ng/s/your-slug">
                    <div className="flex">
                        <span className="px-3 py-2.5 bg-[#eae6df] border border-r-0 border-[#eae6df] rounded-l-xl text-sm text-[#0a1a3b]/50 font-mono whitespace-nowrap">
                            trebo.ng/s/
                        </span>
                        <input
                            type="text"
                            value={storeSlug}
                            onChange={(e) => setStoreSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"))}
                            className="flex-1 px-3 py-2.5 bg-[#f8f6f3] border border-[#eae6df] rounded-r-xl text-sm text-[#0a1a3b] focus:outline-none focus:ring-2 focus:ring-[#1b9cda]/20 focus:border-[#1b9cda] transition-all font-mono"
                        />
                    </div>
                </FieldGroup>
                <FieldGroup label="Store Bio" hint="Shown on your public storefront">
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        rows={3}
                        maxLength={160}
                        className={`${inputCls} resize-none`}
                    />
                    <p className="text-[10px] text-[#0a1a3b]/40 text-right">{bio.length}/160</p>
                </FieldGroup>
                <FieldGroup label="WhatsApp Number" hint="Customers will contact you here">
                    <div className="relative">
                        <DeviceMobile className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a1a3b]/40" />
                        <input type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className={`${inputCls} pl-9`} />
                    </div>
                </FieldGroup>
            </div>

            <div>
                <p className="text-sm font-bold text-[#0a1a3b] mb-3">Social Links</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { icon: <InstagramLogo size={16} />, placeholder: "instagram.com/yourstore" },
                        { icon: <TwitterLogo size={16} />, placeholder: "x.com/yourstore" },
                        { icon: <Globe size={16} />, placeholder: "yourwebsite.com" },
                    ].map(({ icon, placeholder }, i) => (
                        <div key={i} className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a1a3b]/40">{icon}</span>
                            <input type="url" placeholder={placeholder} className={`${inputCls} pl-9`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-[#eae6df]">
                <SaveButton saved={saved} />
            </div>
        </form>
    );
}

// ─── Section: Notifications ───────────────────────────────────────────────────
function NotificationsSection() {
    const [saved, setSaved] = useState(false);
    const [prefs, setPrefs] = useState({
        newInquiry: true,
        orderConfirmed: true,
        orderCancelled: true,
        weeklyReport: false,
        productViews: false,
        promotions: false,
    });

    const toggle = (key: keyof typeof prefs) => setPrefs((p) => ({ ...p, [key]: !p[key] }));

    const groups = [
        {
            title: "Orders",
            items: [
                { key: "newInquiry" as const, label: "New inquiry received", desc: "When a customer messages about a product" },
                { key: "orderConfirmed" as const, label: "Order confirmed", desc: "When an order is marked as confirmed" },
                { key: "orderCancelled" as const, label: "Order cancelled", desc: "When a customer cancels an order" },
            ],
        },
        {
            title: "Reports & Insights",
            items: [
                { key: "weeklyReport" as const, label: "Weekly performance report", desc: "Summary of your store activity every Monday" },
                { key: "productViews" as const, label: "Product view milestones", desc: "When a product reaches 100, 500, 1k views" },
            ],
        },
        {
            title: "Marketing",
            items: [
                { key: "promotions" as const, label: "Trebo tips & promotions", desc: "Occasional product updates and growth tips" },
            ],
        },
    ];

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    return (
        <form onSubmit={handleSave} className="space-y-6">
            {groups.map((group) => (
                <div key={group.title}>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0a1a3b]/40 mb-3">{group.title}</p>
                    <div className="space-y-1 bg-[#f9fafb] rounded-2xl border border-[#eae6df] overflow-hidden">
                        {group.items.map(({ key, label, desc }, i) => (
                            <div
                                key={key}
                                className={`flex items-center justify-between px-5 py-4 ${i < group.items.length - 1 ? "border-b border-[#eae6df]" : ""
                                    }`}
                            >
                                <div>
                                    <p className="text-sm font-bold text-[#0a1a3b]">{label}</p>
                                    <p className="text-xs text-[#0a1a3b]/50 mt-0.5">{desc}</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => toggle(key)}
                                    aria-label={`Toggle ${label}`}
                                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1b9cda]/20 ${prefs[key] ? "bg-[#1b9cda]" : "bg-[#eae6df]"
                                        }`}
                                >
                                    <span className="sr-only">Toggle {label}</span>
                                    <span
                                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${prefs[key] ? "translate-x-5" : "translate-x-0"
                                            }`}
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className="flex justify-end pt-2 border-t border-[#eae6df]">
                <SaveButton saved={saved} />
            </div>
        </form>
    );
}

// ─── Section: Security ────────────────────────────────────────────────────────
function SecuritySection() {
    const [saved, setSaved] = useState(false);
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [twoFA, setTwoFA] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    return (
        <div className="space-y-6">
            {/* Change Password */}
            <form onSubmit={handleSave} className="space-y-5">
                <p className="text-sm font-bold text-[#0a1a3b]">Change Password</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FieldGroup label="Current Password">
                        <div className="relative">
                            <input
                                type={showCurrent ? "text" : "password"}
                                placeholder="••••••••"
                                className={`${inputCls} pr-10`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowCurrent(!showCurrent)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0a1a3b]/40 hover:text-[#0a1a3b] transition-colors"
                                aria-label={showCurrent ? "Hide password" : "Show password"}
                            >
                                {showCurrent ? <EyeSlash size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </FieldGroup>
                    <FieldGroup label="New Password">
                        <div className="relative">
                            <input
                                type={showNew ? "text" : "password"}
                                placeholder="••••••••"
                                className={`${inputCls} pr-10`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowNew(!showNew)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0a1a3b]/40 hover:text-[#0a1a3b] transition-colors"
                                aria-label={showNew ? "Hide password" : "Show password"}
                            >
                                {showNew ? <EyeSlash size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </FieldGroup>
                    <FieldGroup label="Confirm New Password">
                        <input type="password" placeholder="••••••••" className={inputCls} />
                    </FieldGroup>
                </div>
                <div className="flex justify-end pt-2 border-t border-[#eae6df]">
                    <SaveButton saved={saved} />
                </div>
            </form>

            {/* 2FA */}
            <div className="bg-[#f9fafb] border border-[#eae6df] rounded-2xl p-5 flex items-center justify-between gap-4">
                <div>
                    <p className="font-bold text-[#0a1a3b] text-sm">Two-Factor Authentication</p>
                    <p className="text-xs text-[#0a1a3b]/50 mt-0.5">Add an extra layer of security to your account</p>
                    <span className={`inline-block mt-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${twoFA ? "bg-emerald-50 text-emerald-600" : "bg-[#eae6df] text-[#0a1a3b]/50"}`}>
                        {twoFA ? "Enabled" : "Disabled"}
                    </span>
                </div>
                <button
                    type="button"
                    onClick={() => setTwoFA(!twoFA)}
                    aria-label="Toggle two-factor authentication"
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1b9cda]/20 ${twoFA ? "bg-[#1b9cda]" : "bg-[#eae6df]"
                        }`}
                >
                    <span className="sr-only">Toggle 2FA</span>
                    <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${twoFA ? "translate-x-5" : "translate-x-0"}`} />
                </button>
            </div>

            {/* Active Sessions */}
            <div>
                <p className="text-sm font-bold text-[#0a1a3b] mb-3">Active Sessions</p>
                <div className="space-y-2">
                    {[
                        { device: "Chrome on MacOS", location: "Lagos, NG", current: true },
                        { device: "Safari on iPhone", location: "Lagos, NG", current: false },
                    ].map((session) => (
                        <div key={session.device} className="flex items-center justify-between px-5 py-4 bg-[#f9fafb] border border-[#eae6df] rounded-2xl">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#eae6df] flex items-center justify-center text-[#0a1a3b]/50">
                                    <DeviceMobile size={16} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#0a1a3b]">{session.device}</p>
                                    <p className="text-xs text-[#0a1a3b]/50">{session.location}</p>
                                </div>
                            </div>
                            {session.current ? (
                                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md uppercase tracking-wider">Current</span>
                            ) : (
                                <button type="button" className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors">
                                    Revoke
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── Section: Billing ─────────────────────────────────────────────────────────
function BillingSection() {
    return (
        <div className="space-y-6">
            {/* Current Plan */}
            <div className="bg-[#0a1a3b] rounded-2xl p-6 text-white">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Current Plan</span>
                        <h3 className="text-2xl font-extrabold mt-1">Trebo Pro</h3>
                        <p className="text-white/60 text-sm mt-1">Unlimited products · Analytics · Priority support</p>
                    </div>
                    <span className="bg-[#1b9cda] text-white text-xs font-bold px-3 py-1 rounded-lg">Active</span>
                </div>
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between">
                    <div>
                        <p className="text-white/50 text-xs">Next billing date</p>
                        <p className="font-bold text-sm mt-0.5">July 2, 2026</p>
                    </div>
                    <div className="text-right">
                        <p className="text-white/50 text-xs">Amount</p>
                        <p className="font-extrabold text-lg mt-0.5">₦5,000<span className="text-white/50 text-xs font-normal">/mo</span></p>
                    </div>
                </div>
            </div>

            {/* Payment Method */}
            <div>
                <p className="text-sm font-bold text-[#0a1a3b] mb-3">Payment Method</p>
                <div className="flex items-center justify-between px-5 py-4 bg-[#f9fafb] border border-[#eae6df] rounded-2xl">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-7 bg-[#0a1a3b] rounded-md flex items-center justify-center">
                            <CreditCard size={14} className="text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[#0a1a3b]">•••• •••• •••• 4242</p>
                            <p className="text-xs text-[#0a1a3b]/50">Expires 08/27</p>
                        </div>
                    </div>
                    <button type="button" className="text-xs font-bold text-[#1b9cda] hover:underline">Update</button>
                </div>
            </div>

            {/* Invoice History */}
            <div>
                <p className="text-sm font-bold text-[#0a1a3b] mb-3">Invoice History</p>
                <div className="overflow-hidden border border-[#eae6df] rounded-2xl">
                    <table className="w-full">
                        <thead className="border-b border-[#eae6df] bg-[#f9fafb]">
                            <tr>
                                {["Date", "Description", "Amount", ""].map((h) => (
                                    <th key={h} className="text-left text-[10px] font-bold uppercase tracking-wider text-[#0a1a3b]/40 px-5 py-3">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { date: "Jun 2, 2026", desc: "Trebo Pro — Monthly", amount: "₦5,000" },
                                { date: "May 2, 2026", desc: "Trebo Pro — Monthly", amount: "₦5,000" },
                                { date: "Apr 2, 2026", desc: "Trebo Pro — Monthly", amount: "₦5,000" },
                            ].map((inv, i, arr) => (
                                <tr key={inv.date} className={`hover:bg-[#f9fafb] transition-colors ${i < arr.length - 1 ? "border-b border-[#eae6df]" : ""}`}>
                                    <td className="px-5 py-3.5 text-sm font-mono font-bold text-[#0a1a3b]/60">{inv.date}</td>
                                    <td className="px-5 py-3.5 text-sm font-bold text-[#0a1a3b]">{inv.desc}</td>
                                    <td className="px-5 py-3.5 text-sm font-mono font-bold text-[#0a1a3b]">{inv.amount}</td>
                                    <td className="px-5 py-3.5 text-right">
                                        <button type="button" className="text-xs font-bold text-[#1b9cda] hover:underline">Download</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Danger Zone */}
            <div className="border border-red-100 bg-red-50/50 rounded-2xl p-5">
                <p className="text-sm font-bold text-red-600 mb-1">Cancel Subscription</p>
                <p className="text-xs text-red-500/80 mb-4">Your store will remain active until the end of your billing period, then downgrade to the free plan.</p>
                <button type="button" className="text-sm font-bold text-red-600 border border-red-200 hover:bg-red-100 px-4 py-2 rounded-xl transition-colors">
                    Cancel Plan
                </button>
            </div>
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function SettingsPage() {
    const [active, setActive] = useState<Section>("profile");

    const sectionComponents: Record<Section, React.ReactNode> = {
        profile: <ProfileSection />,
        store: <StoreSection />,
        notifications: <NotificationsSection />,
        security: <SecuritySection />,
        billing: <BillingSection />,
    };

    return (
        <div className="flex flex-col">
            {/* Page Header (Sub-header) */}
            <div className="bg-[#0a1a3b] text-white pt-8 pb-32 px-4 md:px-6 lg:px-10 -mx-4 md:-mx-6 lg:-mx-10 -mt-4 md:-mt-6 lg:-mt-10 mb-0">
                <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-extrabold tracking-tight">Settings</h1>
                        <p className="text-white/60 text-sm mt-1">Manage your account and store preferences.</p>
                    </div>
                </div>
            </div>

            {/* Main Content Area (Overlapping Header) */}
            <div className="relative z-10 -mt-24 max-w-[1600px] mx-auto w-full">

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar Nav */}
                <nav className="lg:w-64 shrink-0 bg-white border border-[#eae6df] rounded-2xl p-3 shadow-sm h-fit">
                    <ul className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible no-scrollbar pb-1 lg:pb-0">
                        {nav.map(({ id, label, icon, description }) => (
                            <li key={id} className="shrink-0 lg:shrink">
                                <button
                                    onClick={() => setActive(id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${active === id
                                        ? "bg-[#0a1a3b] text-white shadow-sm"
                                        : "text-[#0a1a3b] hover:bg-[#eae6df]/60"
                                        }`}
                                  aria-label={`Open ${label} settings`}
                                >
                                    <span className={active === id ? "text-white" : "text-[#0a1a3b]/50"}>{icon}</span>
                                    <div className="flex-1 min-w-0 hidden lg:block">
                                        <p className="font-bold text-sm truncate">{label}</p>
                                        <p className={`text-[10px] truncate ${active === id ? "text-white/60" : "text-[#0a1a3b]/40"}`}>{description}</p>
                                    </div>
                                    <span className="lg:block hidden">
                                        <CaretRight size={14} className={active === id ? "text-white/50" : "text-[#0a1a3b]/20"} />
                                    </span>
                                    {/* Mobile label */}
                                    <span className="font-bold text-sm lg:hidden">{label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Content Panel */}
                <div className="flex-1 min-w-0">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white border border-[#eae6df] rounded-2xl p-6 shadow-sm"
                    >
                        <h2 className="text-lg font-extrabold text-[#0a1a3b] mb-6 pb-4 border-b border-[#eae6df]">
                            {nav.find((n) => n.id === active)?.label}
                        </h2>
                        {sectionComponents[active]}
                    </motion.div>
                </div>
            </div>
            </div>
        </div>
    );
}
