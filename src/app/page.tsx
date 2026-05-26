"use client"

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Store,
  ShoppingBag,
  TrendingUp,
  Settings,
  Layers,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Share2,
  Play,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  DollarSign,
  X,
  Menu,
  HelpCircle,
  Briefcase,
  ChevronDown,
  ChevronRight,
  Check,
  Plus,
  Eye,
  MessageCircle,
  Clock,
  ExternalLink,
  Info
} from "lucide-react";

// --- Types ---
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  time: string;
}

export default function App() {
  // Mobile navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Customizer and Onboarding State
  const [businessName, setBusinessName] = useState("Adaeze Fashion");
  const [customCategory, setCustomCategory] = useState("Fashion");
  const [whatsappNumber, setWhatsappNumber] = useState("+234 801 234 5678");
  const [brandColor, setBrandColor] = useState("#1b9cda"); // Default primary blue
  const [isVerified, setIsVerified] = useState(true);

  // Active workspace / explorer section
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<"onboarding" | "dashboard" | "store">("onboarding");
  const [activeDashboardSubTab, setActiveDashboardSubTab] = useState<"metrics" | "products" | "analytics" | "assistant">("metrics");

  // Local storage / state for products in customizer
  const [products, setProducts] = useState<Product[]>([
    // Fashion
    { id: "f1", name: "Ankara Silk Maxi Gown", price: 18500, image: "https://picsum.photos/seed/ankara-gown/400/300", category: "Fashion" },
    { id: "f2", name: "Satin Lounge Two-Piece", price: 15000, image: "https://picsum.photos/seed/satin-set/400/300", category: "Fashion" },
    { id: "f3", name: "Adire Premium Kaftan", price: 22000, image: "https://picsum.photos/seed/adire-kaftan/400/300", category: "Fashion" },
    // Food
    { id: "fd1", name: "Abuja Spicy Jollof & Turkey", price: 5500, image: "https://picsum.photos/seed/jollof/400/300", category: "Food" },
    { id: "fd2", name: "Creamy Coconut Rice Platter", price: 6000, image: "https://picsum.photos/seed/coconut-rice/400/300", category: "Food" },
    { id: "fd3", name: "Poundo Yam & Egusi Traditional", price: 7200, image: "https://picsum.photos/seed/egusi/400/300", category: "Food" },
    // Beauty
    { id: "b1", name: "Shea Butter Nourishing Oil", price: 6500, image: "https://picsum.photos/seed/shea-oil/400/300", category: "Beauty" },
    { id: "b2", name: "Organic Cocoa Hydrating Lip Hydrol", price: 3500, image: "https://picsum.photos/seed/cocoa-lip/400/300", category: "Beauty" },
    { id: "b3", name: "Rosewater Refreshing Face Tonic", price: 7800, image: "https://picsum.photos/seed/rose-water/400/300", category: "Beauty" },
    // Electronics
    { id: "e1", name: "Smart Wireless Dual Charger", price: 9500, image: "https://picsum.photos/seed/charger-pad/400/300", category: "Electronics" },
    { id: "e2", name: "Premium Extreme Noise Buds", price: 16000, image: "https://picsum.photos/seed/wireless-buds/400/300", category: "Electronics" },
    { id: "e3", name: "Magnetic Adjustable Desk Dock", price: 8000, image: "https://picsum.photos/seed/desk-dock/400/300", category: "Electronics" },
    // Services
    { id: "s1", name: "Full Bridal Glam Package Session", price: 45000, image: "https://picsum.photos/seed/bridal-makeup/400/300", category: "Services" },
    { id: "s2", name: "Professional Portrait Headshot", price: 15000, image: "https://picsum.photos/seed/camera-shoot/400/300", category: "Services" },
    { id: "s3", name: "Tailoring Correction Consultation", price: 5000, image: "https://picsum.photos/seed/sewing/400/300", category: "Services" },
  ]);

  // Temporary form states for adding new products
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");

  // Simulated WhatsApp checkout or inquiry state
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<Product | null>(null);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  // Dynamic products filtered by the active customized category
  const activeProducts = useMemo(() => {
    return products.filter((p) => p.category === customCategory);
  }, [products, customCategory]);

  // AI Assistant Interaction State
  const [aiInputEnabled, setAiInputEnabled] = useState(true);
  const [aiChat, setAiChat] = useState<ChatMessage[]>([
    { id: "init-1", sender: "ai", text: "Welcome to Trebo AI: your WhatsApp business partner. Ask me to draft product descriptions, write follow-up messages, or share daily insights.", time: "09:00" }
  ]);
  const [customAiText, setCustomAiText] = useState("");

  // Handle template selection auto-population
  const handleCategoryChange = (cat: string) => {
    setCustomCategory(cat);
    if (cat === "Fashion") {
      setBusinessName("Adaeze Fashion");
    } else if (cat === "Food") {
      setBusinessName("Abuja Jollof Kitchen");
    } else if (cat === "Beauty") {
      setBusinessName("Kano Beauty Balm");
    } else if (cat === "Electronics") {
      setBusinessName("Lagos Tech Hub");
    } else if (cat === "Services") {
      setBusinessName("Sisi Stylings");
    }
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProductName || !newProductPrice) return;
    const priceNum = parseFloat(newProductPrice);
    if (isNaN(priceNum)) return;

    const newProd: Product = {
      id: "custom-" + Date.now(),
      name: newProductName,
      price: priceNum,
      image: `https://picsum.photos/seed/${newProductName.toLowerCase().replace(/\s+/g, "-")}/400/300`,
      category: customCategory,
    };

    setProducts(prev => [newProd, ...prev]);
    setNewProductName("");
    setNewProductPrice("");
  };

  const executeAiCommand = async (command: string) => {
    if (!aiInputEnabled) return;
    setAiInputEnabled(false);

    // Append user message
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: command,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setAiChat(prev => [...prev, userMsg]);

    // Simulate typing delay
    setTimeout(() => {
      let aiResponseText = "";
      if (command.toLowerCase().includes("ghost") || command.toLowerCase().includes("follow up")) {
        aiResponseText = "Follow-up activated: I followed up with 5 ghost buyers today. 2 of them are ready to pay! Draft sent: 'Hi! Quick check on the Ankara Gown order. Would you like us to secure it for dispatch tomorrow?'";
      } else if (command.toLowerCase().includes("summary") || command.toLowerCase().includes("recap") || command.toLowerCase().includes("today")) {
        aiResponseText = `Here is your shop recap for gettrebo.com/${businessName.toLowerCase().replace(/\s+/g, "")}:
- Page views: 148 (+22% vs yesterday)
- WhatsApp click-throughs: 18 high-intent inquiries
- Direct orders suggested: ₦64,500 pending transfer validation. 
Would you like me to auto-send the bank details to top buyers?`;
      } else {
        aiResponseText = `I processed that request for "${businessName}". Real-time analytics check: Everything is fully indexed for SEO search in Nigeria. I am monitoring your WhatsApp link and will ping you with any new checkout signals!`;
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: aiResponseText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setAiChat(prev => [...prev, aiMsg]);
      setAiInputEnabled(true);
    }, 1200);
  };

  const handleCustomAiSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customAiText.trim()) return;
    const text = customAiText;
    setCustomAiText("");
    executeAiCommand(text);
  };

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Pricing State
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);

  return (
    <div className="min-h-screen bg-[#f3efe9] text-[#0a1a3b] font-sans selection:bg-[#1b9cda] selection:text-white">
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#f3efe9]/80 backdrop-blur-md border-b border-[#dedad3] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-18 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg bg-[#0a1a3b] text-white flex items-center justify-center font-bold text-lg select-none group-hover:bg-[#1b9cda] transition-colors">
              t
            </span>
            <span className="font-extrabold text-xl tracking-tight text-[#0a1a3b] select-none">
              trebo
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-[#0a1a3b]/85 hover:text-[#1b9cda] transition-colors">
              How it works
            </a>
            <a href="#benefits" className="text-sm font-medium text-[#0a1a3b]/85 hover:text-[#1b9cda] transition-colors">
              Benefits
            </a>
            <a href="#pricing" className="text-sm font-medium text-[#0a1a3b]/85 hover:text-[#1b9cda] transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium text-[#0a1a3b]/85 hover:text-[#1b9cda] transition-colors">
              FAQ
            </a>
            <a
              href="#customizer"
              className="text-xs tracking-wide uppercase px-3 py-1 bg-[#ebe7e0] hover:bg-[#dedad3] text-[#0a1a3b] font-medium rounded-full transition-all subtle-border"
            >
              Interactive Playground
            </a>
          </nav>

          {/* Action buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#customizer"
              className="px-5 py-2.5 rounded-full bg-[#0a1a3b] hover:bg-[#1b9cda] text-[#f3efe9] font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#1b9cda]"
            >
              Start your page
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0a1a3b] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-b border-[#dedad3] bg-[#f3efe9] overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                <a
                  href="#how-it-works"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#0a1a3b] py-1"
                >
                  How it works
                </a>
                <a
                  href="#benefits"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#0a1a3b] py-1"
                >
                  Benefits
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#0a1a3b] py-1"
                >
                  Pricing
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#0a1a3b] py-1"
                >
                  FAQ
                </a>
                <div className="h-[1px] bg-[#dedad3] my-2" />
                <a
                  href="#customizer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-[#ebe7e0] text-[#0a1a3b] text-center font-semibold text-sm mb-2"
                >
                  Configure Store Live
                </a>
                <a
                  href="#customizer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-[#0a1a3b] text-[#f3efe9] text-center font-semibold text-sm"
                >
                  Start your page
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Early sign-up high contrast element */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ebe7e0] text-[#0a1a3b] border border-[#dedad3] w-fit mb-6 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-[#1b9cda]" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  120+ businesses across Nigeria already waiting
                </span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight lg:leading-[1.1] text-[#0a1a3b] mb-6">
                Your business,
                <br className="hidden md:inline" />
                Needs.
              </h1>

              {/* Subtext (capped length as per guidelines) */}
              <p className="text-lg text-[#0a1a3b]/80 leading-relaxed max-w-[50ch] mb-8">
                Sell online properly without the headache of chaotic instant messages. Show products, manage inventory, and receive structured requests directly on WhatsApp.
              </p>

              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <a
                  href="#customizer"
                  className="px-8 py-4 text-center rounded-full bg-[#0a1a3b] hover:bg-[#1b9cda] text-white font-bold text-base shadow-lg shadow-[#0a1a3b]/5 hover:shadow-xl transition-all"
                >
                  Start your page
                </a>
                <a
                  href="#how-it-works"
                  className="px-6 py-4 rounded-full border border-[#dedad3] hover:bg-[#ebe7e0] text-[#0a1a3b] font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Play size={16} fill="currentColor" />
                  See how it works
                </a>
              </div>

              {/* App URL teaser */}
              <div className="text-xs text-[#0a1a3b]/60 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Default domain provided: </span>
                <span className="font-semibold text-[#0a1a3b]/80 underline decoration-[#1b9cda] decoration-2">
                  app.gettrebo.com/onboarding
                </span>
              </div>
            </div>

            {/* Right Asset Column: Live Phone Mockup with direct interactive trigger */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Background ambiance geometry (no neon purple, tasteful sand tones) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#ebe7e0] rounded-full filter blur-3xl opacity-70 pointer-events-none -z-10" />

              {/* Smartphone layout */}
              <div className="w-full max-w-[340px] bg-zinc-900 rounded-[40px] p-3.5 shadow-2xl border border-zinc-800 relative">
                {/* Speaker pill */}
                <div className="absolute top-7 left-1/2 -translate-x-1/2 w-28 h-4 bg-zinc-950 rounded-full z-20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 mr-2" />
                  <span className="w-10 h-1 bg-zinc-800 rounded-full" />
                </div>

                {/* Live Screen Area */}
                <div className="rounded-[28px] bg-[#f3efe9] overflow-hidden border border-zinc-950 relative aspect-[9/18] flex flex-col">
                  {/* Phone status bar */}
                  <div className="h-10 pt-4 px-6 flex justify-between items-center text-[10px] font-mono font-semibold text-[#0a1a3b]/70 bg-[#ebe7e0] border-b border-[#dedad3]">
                    <span>08:42 AM</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#1b9cda]" />
                      <span>NG 4G</span>
                    </div>
                  </div>

                  {/* Browser simulated Header */}
                  <div className="px-4 py-2 bg-white border-b border-[#dedad3] flex items-center gap-1.5">
                    <div className="text-[10px] font-mono bg-[#f3efe9] px-2.5 py-1 rounded-md text-[#0a1a3b]/80 flex-1 overflow-hidden whitespace-nowrap text-left flex items-center gap-1">
                      <span className="text-emerald-500">🔒</span>
                      <span>trebo.site/</span>
                      <span className="font-bold text-[#1b9cda] animate-pulse">
                        {businessName.toLowerCase().replace(/\s+/g, "")}
                      </span>
                    </div>
                  </div>

                  {/* Storefront inside smartphone */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {/* Brand Banner */}
                    <div className="text-center bg-[#ebe7e0] rounded-2.5 p-4 border border-[#dedad3]">
                      <div className="w-11 h-11 bg-[#0a1a3b] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2">
                        {businessName.charAt(0)}
                      </div>
                      <h3 className="font-extrabold text-[#0a1a3b] text-sm break-words">
                        {businessName}
                      </h3>
                      <div className="text-[10px] text-[#0a1a3b]/60 font-medium">
                        {customCategory} • Lagos, Nigeria
                      </div>

                      <div className="mt-2.5 inline-flex items-center gap-1 bg-[#1b9cda]/10 text-[#158bb3] text-[9px] font-bold px-2 py-0.5 rounded-full">
                        <ShieldCheck size={10} className="fill-[#1b9cda]/20" />
                        <span>Verified Store</span>
                      </div>
                    </div>

                    {/* Products Grid */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0a1a3b]/60 text-left">
                        Catalog
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        {activeProducts.slice(0, 4).map((item) => (
                          <div
                            key={item.id}
                            className="bg-white border border-[#dedad3] rounded-xl p-2 relative flex flex-col justify-between group hover:border-[#1b9cda] transition-all"
                          >
                            <div className="aspect-square bg-[#ebe7e0] rounded-lg overflow-hidden mb-1.5 relative">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="text-left">
                              <h4 className="font-bold text-[10px] text-[#0a1a3b] line-clamp-1">
                                {item.name}
                              </h4>
                              <p className="font-extrabold text-xs text-[#1b9cda] mt-0.5">
                                ₦{item.price.toLocaleString()}
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                setSelectedProductForInquiry(item);
                                setCheckoutModalOpen(true);
                              }}
                              className="mt-2 w-full py-1 rounded bg-[#0a1a3b] hover:bg-[#1b9cda] text-white text-[9px] font-bold transition-all flex items-center justify-center gap-0.5"
                            >
                              <MessageCircle size={10} />
                              Inquire
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Sticky Checkout Mock button */}
                  <div className="p-2.5 bg-white border-t border-[#dedad3] text-[10px] flex items-center justify-between">
                    <span className="font-semibold text-[#0a1a3b]/70">
                      Need anything else?
                    </span>
                    <button
                      onClick={() => {
                        const defaultProd = activeProducts[0] || products[0];
                        setSelectedProductForInquiry(defaultProd);
                        setCheckoutModalOpen(true);
                      }}
                      className="px-3 py-1.5 rounded-full bg-[#1b9cda] hover:bg-[#158bb3] text-white font-extrabold text-[9px] transition-all"
                    >
                      Instant DM
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating aesthetic labels context from request */}
              <div className="absolute -right-4 top-10 bg-white shadow-xl rounded-2xl p-3 border border-[#dedad3] max-w-[150px] text-left hidden sm:block">
                <p className="text-[10px] font-mono text-[#0a1a3b]/60 uppercase">
                  User Customizer
                </p>
                <p className="text-xs font-bold text-[#0a1a3b] mt-0.5">
                  ✦ Click any color or button below to see active changes!
                </p>
              </div>

              <div className="absolute -left-6 bottom-12 bg-white shadow-xl rounded-2xl p-3 border border-[#dedad3] max-w-[160px] text-left hidden sm:block">
                <div className="flex items-center gap-1.5 mb-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-bold">LIVE CHAT</span>
                </div>
                <p className="text-xs font-extrabold text-[#0a1a3b]">
                  ₦40k+ direct daily organic sales average
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFINITE CATEGORY MARQUEE/TICKER */}
      <div className="py-4 border-y border-[#dedad3] bg-[#ebe7e0] overflow-hidden whitespace-nowrap pointer-events-none select-none">
        <div className="inline-block animate-marquee">
          {[
            "Fashion & Clothing",
            "Food & Beverages",
            "Beauty & Skincare",
            "Professional Photography",
            "Footwear & Sneakers",
            "Tailoring & Sewing",
            "Logistics & Transport",
            "Technology & Gadgets",
          ].map((themeName, i) => (
            <span
              key={i}
              className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-[#0a1a3b]/40 mx-8"
            >
              <Sparkles size={12} className="mr-2 text-[#1b9cda]" />
              {themeName}
            </span>
          ))}
        </div>
        <div className="inline-block animate-marquee" aria-hidden="true">
          {[
            "Fashion & Clothing",
            "Food & Beverages",
            "Beauty & Skincare",
            "Professional Photography",
            "Footwear & Sneakers",
            "Tailoring & Sewing",
            "Logistics & Transport",
            "Technology & Gadgets",
          ].map((themeName, i) => (
            <span
              key={`dup-${i}`}
              className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-[#0a1a3b]/40 mx-8"
            >
              <Sparkles size={12} className="mr-2 text-[#1b9cda]" />
              {themeName}
            </span>
          ))}
        </div>
      </div>

      {/* INTERACTIVE PLAYGROUND: CUSTOMIZER & DASHBOARD SIMULATOR */}
      <section id="customizer" className="macro-padding relative border-b border-[#dedad3] bg-[#f3efe9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1b9cda] bg-[#1b9cda]/10 px-3 py-1 rounded-full">
              Interactive Sandbox Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a1a3b] mt-4 mb-4">
              Customize Your Store
            </h2>
            <p className="text-base text-[#0a1a3b]/70">
              Change names, pick colors, add custom products, and chat with the simulated AI assistant. See the storefront adapt instantly in our high-fidelity workspace!
            </p>
          </div>

          {/* Setup / Workspace Navigator Tab Headers */}
          <div className="flex justify-center border-b border-[#dedad3] mb-12 max-w-sm mx-auto">
            <button
              onClick={() => setActiveWorkspaceTab("onboarding")}
              className={`flex-1 pb-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                activeWorkspaceTab === "onboarding"
                  ? "border-[#1b9cda] text-[#1b9cda]"
                  : "border-transparent text-[#0a1a3b]/50 hover:text-[#0a1a3b]"
              }`}
            >
              1. Onboarding
            </button>
            <button
              onClick={() => setActiveWorkspaceTab("dashboard")}
              className={`flex-1 pb-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                activeWorkspaceTab === "dashboard"
                  ? "border-[#1b9cda] text-[#1b9cda]"
                  : "border-transparent text-[#0a1a3b]/50 hover:text-[#0a1a3b]"
              }`}
            >
              2. Dashboard
            </button>
            <button
              onClick={() => setActiveWorkspaceTab("store")}
              className={`flex-1 pb-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                activeWorkspaceTab === "store"
                  ? "border-[#1b9cda] text-[#1b9cda]"
                  : "border-transparent text-[#0a1a3b]/50 hover:text-[#0a1a3b]"
              }`}
            >
              3. View Store
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white subtle-border rounded-3xl p-6 md:p-10 shadow-xl overflow-hidden">
            {/* LEFT WORKSPACE CONTROLS - COLUMN (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Onboarding tab contents */}
                {activeWorkspaceTab === "onboarding" && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-[#dedad3]">
                      <div>
                        <div className="text-[10px] font-mono text-[#0a1a3b]/50 uppercase tracking-widest">
                          Onboarding Step
                        </div>
                        <h3 className="font-extrabold text-[#0a1a3b] text-lg">
                          Step 2 of 3: Design your presence
                        </h3>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#ebe7e0] text-[#0a1a3b]">
                        Active Setup
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Business Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#0a1a3b]/70 mb-2">
                          Business Name
                        </label>
                        <input
                          type="text"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-[#dedad3] bg-[#f3efe9] text-[#0a1a3b] font-medium text-sm focus:outline-none focus:border-[#1b9cda] focus:ring-1 focus:ring-[#1b9cda] transition-all"
                          placeholder="e.g., Adaeze Fashion"
                        />
                      </div>

                      {/* WhatsApp Phone */}
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#0a1a3b]/70 mb-2">
                          WhatsApp Number
                        </label>
                        <input
                          type="text"
                          value={whatsappNumber}
                          onChange={(e) => setWhatsappNumber(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-[#dedad3] bg-[#f3efe9] text-[#0a1a3b] font-medium text-sm focus:outline-none focus:border-[#1b9cda] focus:ring-1 focus:ring-[#1b9cda] transition-all"
                          placeholder="e.g., +234 801 234 5678"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Brand Category Picker */}
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#0a1a3b]/70 mb-2">
                          Business Category
                        </label>
                        <select
                          value={customCategory}
                          onChange={(e) => handleCategoryChange(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-[#dedad3] bg-[#f3efe9] text-[#0a1a3b] font-medium text-sm focus:outline-none focus:border-[#1b9cda] focus:ring-2 focus:ring-[#1b9cda] transition-all"
                        >
                          <option value="Fashion">Fashion & Clothing</option>
                          <option value="Food">Food & Catering</option>
                          <option value="Beauty">Beauty & Skincare</option>
                          <option value="Electronics">Electronics & Gadgets</option>
                          <option value="Services">Services (Salons, Tailors, etc.)</option>
                        </select>
                      </div>

                      {/* Verification Status option */}
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#0a1a3b]/70 mb-2">
                          Verification Seal
                        </label>
                        <div className="flex items-center gap-3 px-4 py-3 border border-[#dedad3] rounded-xl bg-[#f3efe9]">
                          <input
                            type="checkbox"
                            checked={isVerified}
                            onChange={(e) => setIsVerified(e.target.checked)}
                            className="w-4.5 h-4.5 rounded text-[#1b9cda] focus:ring-[#1b9cda] border-[#dedad3]"
                            id="verify-seal"
                          />
                          <label htmlFor="verify-seal" className="text-xs font-semibold text-[#0a1a3b] select-none cursor-pointer">
                            Display Trust Badges
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Brand Colors row */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#0a1a3b]/70 mb-3">
                        Accent Identity (Brand Color)
                      </label>
                      <div className="flex items-center gap-3">
                        {[
                          { value: "#c29a53", label: "Sand Ochre" },
                          { value: "#4e6e58", label: "Forest Sage" },
                          { value: "#d96b43", label: "Terracotta" },
                          { value: "#a67c52", label: "Clay Bark" },
                          { value: "#e07a5f", label: "Coral Rose" },
                          { value: "#495867", label: "Slate Slate" },
                        ].map((colorObj) => (
                          <button
                            key={colorObj.value}
                            onClick={() => setBrandColor(colorObj.value)}
                            style={{ backgroundColor: colorObj.value }}
                            className={`w-9 h-9 rounded-full relative flex items-center justify-center transition-all ${
                              brandColor === colorObj.value
                                ? "ring-4 ring-[#0a1a3b] scale-110"
                                : "hover:scale-105"
                            }`}
                            title={colorObj.label}
                          >
                            {brandColor === colorObj.value && (
                              <Check size={14} className="text-white" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quick navigation suggestion */}
                    <div className="bg-[#f3efe9] border border-[#dedad3] rounded-2xl p-4 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#dedad3] text-[#0a1a3b]">
                        <Info size={16} />
                      </div>
                      <div className="text-xs text-[#0a1a3b]/80">
                        <span className="font-bold block mb-0.5">Quick setup complete!</span>
                        Your domain links, customized badges, and basic parameters are ready. Move to the **Dashboard** panel next to see product inventories.
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveWorkspaceTab("dashboard")}
                      className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#0a1a3b] hover:bg-[#1b9cda] text-white font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2 transition-all self-start"
                    >
                      Advance to Dashboard
                      <ArrowRight size={14} />
                    </button>
                  </div>
                )}

                {/* Dashboard tab contents */}
                {activeWorkspaceTab === "dashboard" && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-[#dedad3]">
                      <div>
                        <div className="text-[10px] font-mono text-[#0a1a3b]/50 uppercase tracking-widest">
                          Trebo Console
                        </div>
                        <h3 className="font-extrabold text-[#0a1a3b] text-lg">
                          Shop Control Panel: {businessName}
                        </h3>
                      </div>
                      <span className="text-xs font-bold text-[#1b9cda] bg-[#1b9cda]/10 px-2.5 py-1 rounded-full border border-[#1b9cda]/20">
                        online
                      </span>
                    </div>

                    {/* Sub navigation inside Dashboard mockup */}
                    <div className="flex bg-[#ebe7e0] rounded-xl p-1 gap-1">
                      {[
                        { id: "metrics", label: "Dashboard", icon: TrendingUp },
                        { id: "products", label: "Products", icon: ShoppingBag },
                        { id: "analytics", label: "Analytics", icon: Layers },
                        { id: "assistant", label: "Trebo AI", icon: Sparkles },
                      ].map((subTab) => {
                        const IconComponent = subTab.icon;
                        return (
                          <button
                            key={subTab.id}
                            onClick={() => setActiveDashboardSubTab(subTab.id as any)}
                            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                              activeDashboardSubTab === subTab.id
                                ? "bg-white text-[#0a1a3b] shadow-sm"
                                : "text-[#0a1a3b]/60 hover:text-[#0a1a3b]"
                            }`}
                          >
                            <IconComponent size={14} />
                            <span className="hidden sm:inline">{subTab.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Dashboard Metrics sub tab */}
                    {activeDashboardSubTab === "metrics" && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          <div className="p-4 bg-[#f3efe9] border border-[#dedad3] rounded-xl text-left">
                            <span className="text-[10px] font-mono text-[#0a1a3b]/60 uppercase tracking-wide">
                              Unique Views
                            </span>
                            <div className="text-xl font-black text-[#0a1a3b] mt-1">4,120</div>
                            <span className="text-[10px] text-[#1b9cda] font-medium">+12% this week</span>
                          </div>

                          <div className="p-4 bg-[#f3efe9] border border-[#dedad3] rounded-xl text-left">
                            <span className="text-[10px] font-mono text-[#0a1a3b]/60 uppercase tracking-wide">
                              WhatsApp Clicks
                            </span>
                            <div className="text-xl font-black text-[#0a1a3b] mt-1">342</div>
                            <span className="text-[10px] text-[#1b9cda] font-medium">8.3% convert</span>
                          </div>

                          <div className="p-4 bg-[#f3efe9] border border-[#dedad3] rounded-xl text-left">
                            <span className="text-[10px] font-mono text-[#0a1a3b]/60 uppercase tracking-wide">
                              Serious Inquiries
                            </span>
                            <div className="text-xl font-black text-[#0a1a3b] mt-1">112</div>
                            <span className="text-[10px] text-emerald-600 font-medium">No ghost buyers</span>
                          </div>

                          <div className="p-4 bg-[#f3efe9] border border-[#dedad3] rounded-xl text-left">
                            <span className="text-[10px] font-mono text-[#0a1a3b]/60 uppercase tracking-wide">
                              Potential Sales
                            </span>
                            <div className="text-xl font-black text-[#0a1a3b] mt-1">₦285.0k</div>
                            <span className="text-[10px] text-[#0a1a3b]/50 font-medium">Estimations</span>
                          </div>
                        </div>

                        {/* Order overview mockup */}
                        <div className="border border-[#dedad3] rounded-2xl overflow-hidden bg-[#f3efe9]">
                          <div className="p-4 bg-[#ebe7e0] border-b border-[#dedad3] flex justify-between items-center">
                            <h4 className="font-extrabold text-[#0a1a3b] text-sm">
                              Recent Inquiry Queue
                            </h4>
                            <span className="text-[10px] font-mono tracking-wider opacity-60">
                              Direct WhatsApp logs
                            </span>
                          </div>

                          <div className="divide-y divide-[#dedad3]">
                            {[
                              { customer: "Folake", item: activeProducts[0]?.name || "Ankara Gown", status: "Inquiry on size Medium", time: "10 mins ago" },
                              { customer: "Emeka O.", item: activeProducts[1]?.name || "Luxury Kaftan", status: "Delivery check (Abuja)", time: "2 hours ago" },
                              { customer: "Aisha G.", item: activeProducts[2]?.name || "Satin Two-Piece", status: "Payment verification pending", time: "Yesterday" }
                            ].map((inq, idx) => (
                              <div key={idx} className="p-4 flex justify-between items-center text-left hover:bg-white transition-all">
                                <div>
                                  <span className="text-xs font-bold text-[#0a1a3b] block">
                                    {inq.customer} ({inq.time})
                                  </span>
                                  <span className="text-[11px] text-[#0a1a3b]/70 block">
                                    {inq.item}
                                  </span>
                                </div>
                                <span className="text-[10px] px-2 py-1 rounded bg-amber-100 text-amber-800 font-bold">
                                  {inq.status}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Dashboard Manage Products Tab */}
                    {activeDashboardSubTab === "products" && (
                      <div className="space-y-4">
                        {/* Inline Addition Form */}
                        <form onSubmit={handleAddProduct} className="bg-[#f3efe9] p-4 rounded-2xl border border-[#dedad3] space-y-3 text-left">
                          <h4 className="font-extrabold text-[#0a1a3b] text-sm">
                            Add a Product to {customCategory}
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                              type="text"
                              value={newProductName}
                              onChange={(e) => setNewProductName(e.target.value)}
                              placeholder="Product Name"
                              className="px-3 py-2 rounded-lg bg-white border border-[#dedad3] text-xs font-semibold focus:outline-none focus:border-[#1b9cda]"
                            />
                            <input
                              type="number"
                              value={newProductPrice}
                              onChange={(e) => setNewProductPrice(e.target.value)}
                              placeholder="Price in Naira (e.g., 12000)"
                              className="px-3 py-2 rounded-lg bg-white border border-[#dedad3] text-xs font-semibold focus:outline-none focus:border-[#1b9cda]"
                            />
                          </div>
                          <button
                            type="submit"
                            className="px-4 py-2 bg-[#0a1a3b] hover:bg-[#1b9cda] text-white font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5"
                          >
                            <Plus size={14} />
                            Add Product
                          </button>
                        </form>

                        {/* Table list of customizer products */}
                        <div className="border border-[#dedad3] rounded-2xl overflow-hidden bg-[#f3efe9] max-h-[220px] overflow-y-auto">
                          <table className="w-full text-xs text-left">
                            <thead>
                              <tr className="bg-[#ebe7e0] text-[#0a1a3b] font-bold">
                                <th className="p-3">Product Name</th>
                                <th className="p-3">Category</th>
                                <th className="p-3">Price</th>
                                <th className="p-3 text-right">Draft Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#dedad3]">
                              {activeProducts.map((p) => (
                                <tr key={p.id} className="hover:bg-white transition-all font-medium">
                                  <td className="p-3">{p.name}</td>
                                  <td className="p-3">{p.category}</td>
                                  <td className="p-3 font-bold text-[#1b9cda]">
                                    ₦{p.price.toLocaleString()}
                                  </td>
                                  <td className="p-3 text-right">
                                    <span className="bg-emerald-150 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                      Active
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Analytics mock with pure mathematical SVGs for performance */}
                    {activeDashboardSubTab === "analytics" && (
                      <div className="space-y-4">
                        <div className="bg-[#f3efe9] border border-[#dedad3] rounded-2xl p-4 text-left">
                          <h4 className="font-extrabold text-[#0a1a3b] text-sm mb-1">
                            WhatsApp Redirect Analytics
                          </h4>
                          <p className="text-xs text-[#0a1a3b]/60 mb-4">
                            Aggregated high-intent customer requests over the last 7 days.
                          </p>

                          <div className="relative w-full h-[140px] mt-4">
                            {/* Smooth grid lines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                              <hr className="border-t border-dashed border-[#dedad3] w-full" />
                              <hr className="border-t border-dashed border-[#dedad3] w-full" />
                              <hr className="border-t border-dashed border-[#dedad3] w-full" />
                            </div>

                            {/* Simulated SVG Graph */}
                            <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#1b9cda" stopOpacity="0.3" />
                                  <stop offset="100%" stopColor="#1b9cda" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              <path
                                d="M 0 80 Q 80 40 160 55 T 320 15 T 500 20 L 500 100 L 0 100 Z"
                                fill="url(#chart-grad)"
                              />
                              <path
                                d="M 0 80 Q 80 40 160 55 T 320 15 T 500 20"
                                fill="none"
                                stroke="#1b9cda"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                              />
                            </svg>

                            <div className="absolute top-2 left-6 bg-white border border-[#dedad3] rounded-lg p-2 text-[10px] font-mono leading-none shadow-sm font-semibold text-[#0a1a3b]">
                              <span>Peak: 80 clickthroughs (Mon)</span>
                            </div>
                          </div>

                          <div className="flex justify-between text-[10px] font-mono font-bold text-[#0a1a3b]/50 mt-2 px-1">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* AI Chat assistant simulator of the WhatsApp auto bot */}
                    {activeDashboardSubTab === "assistant" && (
                      <div className="space-y-4">
                        <div className="bg-[#f3efe9] border border-[#dedad3] rounded-2xl p-4 flex flex-col h-[280px]">
                          {/* Chat Messages Log scroll area */}
                          <div className="flex-1 overflow-y-auto mb-4 space-y-3.5 pr-1 text-left">
                            {aiChat.map((msg) => (
                              <div
                                key={msg.id}
                                className={`flex flex-col max-w-[85%] ${
                                  msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                                }`}
                              >
                                <div
                                  className={`p-3 rounded-2xl text-xs font-medium leading-relaxed ${
                                    msg.sender === "user"
                                      ? "bg-[#0a1a3b] text-white rounded-tr-none"
                                      : "bg-white border border-[#dedad3] text-[#0a1a3b] rounded-tl-none"
                                  }`}
                                >
                                  {msg.text}
                                </div>
                                <span className="text-[9px] font-mono text-[#0a1a3b]/55 mt-1 block">
                                  {msg.time}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Predefined prompt helpers */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            <button
                              onClick={() => executeAiCommand("Follow up with ghost buyers")}
                              className="px-2.5 py-1 text-[10px] bg-[#ebe7e0] hover:bg-[#dedad3] font-bold rounded-full transition-all text-[#0a1a3b]"
                            >
                              💬 Follow-up Bot
                            </button>
                            <button
                              onClick={() => executeAiCommand("Give me my daily shop summary")}
                              className="px-2.5 py-1 text-[10px] bg-[#ebe7e0] hover:bg-[#dedad3] font-bold rounded-full transition-all text-[#0a1a3b]"
                            >
                              📊 Daily Summary
                            </button>
                          </div>

                          {/* Input Bar */}
                          <form onSubmit={handleCustomAiSend} className="flex gap-2">
                            <input
                              type="text"
                              value={customAiText}
                              onChange={(e) => setCustomAiText(e.target.value)}
                              disabled={!aiInputEnabled}
                              placeholder="Type commands to Trebo AI..."
                              className="flex-1 px-4 py-3 text-xs bg-white text-[#0a1a3b] font-semibold border border-[#dedad3] rounded-xl focus:outline-none focus:border-[#1b9cda] disabled:opacity-50"
                            />
                            <button
                              type="submit"
                              disabled={!aiInputEnabled}
                              className="px-4 bg-[#0a1a3b] hover:bg-[#1b9cda] text-white rounded-xl flex items-center justify-center transition-all disabled:opacity-50"
                            >
                              <ArrowRight size={16} />
                            </button>
                          </form>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Direct Store View tab content */}
                {activeWorkspaceTab === "store" && (
                  <div className="space-y-6 text-left">
                    <div className="pb-4 border-b border-[#dedad3]">
                      <div className="text-[10px] font-mono text-[#0a1a3b]/50 uppercase tracking-widest">
                        Trebo Preview
                      </div>
                      <h3 className="font-extrabold text-[#0a1a3b] text-lg">
                        You are viewing gettrebo.com/{businessName.toLowerCase().replace(/\s+/g, "")}
                      </h3>
                    </div>

                    <div className="p-6 bg-[#ebe7e0] border border-[#dedad3] rounded-2xl flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-[#0a1a3b]/50 uppercase">
                          Permanent QR Code
                        </span>
                        <h4 className="font-black text-[#0a1a3b] text-sm mt-1">
                          Share with buyers in Nigeria
                        </h4>
                        <p className="text-xs text-[#0a1a3b]/70 mt-1 max-w-[32ch]">
                          Print and place this QR on packages or post directly to your Instagram profile.
                        </p>
                      </div>

                      {/* Mock QR graphic */}
                      <div className="w-16 h-16 bg-white p-1 rounded-lg border border-[#dedad3] flex flex-wrap gap-0.5 justify-center items-center">
                        <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                        <div className="w-3.5 h-3.5 bg-transparent" />
                        <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                        <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                        <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                        <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                        <div className="w-3.5 h-3.5 bg-transparent" />
                        <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                        <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                        <div className="w-3.5 h-3.5 bg-transparent" />
                        <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                        <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                        <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                        <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                        <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                        <div className="w-3.5 h-3.5 bg-[#0a1a3b]" />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(`https://gettrebo.com/${businessName.toLowerCase().replace(/\s+/g, "")}`);
                          alert("Link copied! You can share it anywhere.");
                        }}
                        className="px-5 py-3 rounded-xl border border-[#dedad3] hover:bg-[#ebe7e0] text-[#0a1a3b] font-extrabold text-xs uppercase tracking-wide flex items-center gap-1.5 transition-all"
                      >
                        <Share2 size={14} />
                        Copy Link
                      </button>

                      <a
                        href="#pricing"
                        className="flex-1 px-5 py-3 text-center rounded-xl bg-[#0a1a3b] hover:bg-[#1b9cda] text-white font-extrabold text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 transition-all"
                      >
                        <DollarSign size={14} />
                        See Pricing Plans
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Step indicator feedback info block */}
              <div className="mt-8 pt-6 border-t border-[#dedad3] text-left">
                <p className="text-xs font-mono font-bold text-[#0a1a3b]/50">
                  ✦ Click any workspace tab above: onboarding controls are fully live and responsive.
                </p>
              </div>
            </div>

            {/* RIGHT WORKSPACE - THE SMARTPHONE VIEW (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-[#dedad3] pt-8 lg:pt-0 lg:pl-12">
              <span className="text-xs font-mono font-bold text-[#0a1a3b]/50 mb-4 block uppercase tracking-wider">
                Live Storefront Screen
              </span>

              {/* Smartphone mock container */}
              <div className="w-full max-w-[320px] bg-zinc-900 rounded-[36px] p-3 shadow-2xl border border-zinc-800 relative">
                {/* Speaker pill top notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-3 rounded-full bg-zinc-950 z-20 flex items-center justify-center" />

                {/* Screen boundary */}
                <div className="rounded-[24px] bg-[#f3efe9] overflow-hidden border border-zinc-950 relative aspect-[9/18] flex flex-col">
                  {/* Status Bar */}
                  <div className="h-8 pt-2.5 px-5 flex justify-between items-center text-[9px] font-mono text-[#0a1a3b]/60 bg-[#ebe7e0] border-b border-[#dedad3]">
                    <span>08:42</span>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1b9cda]" />
                      <span>4G</span>
                    </div>
                  </div>

                  {/* Simulated URL bar */}
                  <div className="px-3 py-1.5 bg-white border-b border-[#dedad3] flex items-center gap-1">
                    <div className="text-[9px] font-mono bg-[#f3efe9] px-2 py-0.5 rounded text-[#0a1a3b]/70 flex-1 overflow-hidden whitespace-nowrap text-left">
                      <span>trebo.site/</span>
                      <span className="font-extrabold text-[#1a5f7a]">
                        {businessName.toLowerCase().replace(/\s+/g, "")}
                      </span>
                    </div>
                  </div>

                  {/* Storefront View Scroll Container */}
                  <div className="flex-1 overflow-y-auto p-3.5 space-y-4">
                    {/* Brand Banner Profile summary */}
                    <div
                      style={{ borderTop: `4px solid ${brandColor}` }}
                      className="text-center bg-white rounded-xl p-3 border border-[#dedad3] shadow-sm"
                    >
                      <div
                        style={{ backgroundColor: brandColor }}
                        className="w-10 h-10 text-white rounded-full flex items-center justify-center font-black text-base mx-auto mb-1.5 shadow-sm"
                      >
                        {businessName.charAt(0)}
                      </div>
                      <h3 className="font-black text-[#0a1a3b] text-xs leading-none">
                        {businessName}
                      </h3>
                      <p className="text-[9px] text-[#0a1a3b]/50 mt-1 font-medium">
                        {customCategory} • Instant Dispatch
                      </p>

                      {isVerified && (
                        <div className="mt-2 inline-flex items-center gap-0.5 bg-[#1b9cda]/10 text-[#1b9cda] text-[8px] font-extrabold px-1.5 py-0.5 rounded-full">
                          <CheckCircle2 size={8} />
                          <span>Verified Merchant</span>
                        </div>
                      )}
                    </div>

                    {/* Products Showcase Catalog */}
                    <div className="space-y-2 text-left">
                      <span className="text-[9px] font-mono font-bold text-[#0a1a3b]/40 uppercase tracking-widest block">
                        Select an item
                      </span>

                      <div className="grid grid-cols-2 gap-2">
                        {activeProducts.map((p) => (
                          <div
                            key={p.id}
                            style={{ borderColor: brandColor + "20" }}
                            className="bg-white rounded-lg p-2 flex flex-col justify-between border hover:scale-[1.02] transition-all relative"
                          >
                            <div className="aspect-square bg-[#ebe7e0] rounded overflow-hidden mb-1 relative">
                              <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div>
                              <h4 className="font-extrabold text-[9px] text-[#0a1a3b] leading-tight line-clamp-1">
                                {p.name}
                              </h4>
                              <p
                                style={{ color: brandColor }}
                                className="font-black text-[10px] mt-0.5"
                              >
                                ₦{p.price.toLocaleString()}
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                setSelectedProductForInquiry(p);
                                setCheckoutModalOpen(true);
                              }}
                              style={{ backgroundColor: brandColor }}
                              className="mt-1.5 w-full py-1 rounded text-white text-[8px] font-bold transition-all flex items-center justify-center gap-0.5 shadow-sm hover:brightness-110"
                            >
                              <MessageCircle size={8} />
                              Inquire Now
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Simulated Smart Footer WhatsApp integration badge */}
                  <div className="bg-white border-t border-[#dedad3] p-2 flex items-center justify-center gap-1.5 text-[8px] font-bold text-[#0a1a3b]/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>WhatsApp Order Integration Active ({whatsappNumber})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM / THE SOLUTIONS BENTO COMPARISON */}
      <section id="benefits" className="macro-padding border-b border-[#dedad3] bg-[#ebe7e0]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1b9cda] bg-[#1b9cda]/10 px-3 py-1 rounded-full">
              Why Trebo?
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0a1a3b] mt-4 mb-4">
              Real business issues,
              <br />
              Solved.
            </h2>
            <p className="text-base text-[#0a1a3b]/70">
              Selling on Instagram and Facebook is exhausting. We automate the manual administrative work so you can focus strictly on scaling your stock.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Hand Column: The Sad Reality (Problem elements stacked) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-left bg-[#ebe7e0] border border-[#dedad3] rounded-3xl p-6 md:p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0a1a3b]/50 block mb-2">
                  The Hard Reality
                </span>
                <h3 className="text-2xl font-extrabold text-[#0a1a3b] leading-tight mb-4">
                  Selling in DMs is a full-time stress.
                </h3>
                <p className="text-sm text-[#0a1a3b]/70 leading-relaxed">
                  Managing order tracking spreadsheets, sending photo cards separately, and answering monotonous pricing requests takes hours of your week without guaranteeing a secure conversion.
                </p>
              </div>

              {/* Stacked problem blocks */}
              {[
                { title: "Manual catalog sending", desc: "Sending individual product product pictures and prices one by one to 20 customers daily is a huge waste of your daylight hours." },
                { title: "Ghost buyers", desc: "They ask clarifying questions for 30 minutes, demand prices, then vanish. Trebo separates high-intent buyers early on." },
                { title: "Zero trust market", desc: "Anonymous bad actors have hurt marketplace confidence. If your page does not look polished and verified, prospects move elsewhere." }
              ].map((prob, idx) => (
                <div key={idx} className="bg-white/80 p-5 rounded-2xl border border-[#dedad3] text-left">
                  <span className="text-[10px] font-mono text-[#0a1a3b]/50 uppercase tracking-widest block mb-1">
                    Friction point - 0{idx + 1}
                  </span>
                  <h4 className="font-extrabold text-sm text-[#0a1a3b] mb-1.5">{prob.title}</h4>
                  <p className="text-xs text-[#0a1a3b]/70 leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>

            {/* Right Hand Column: The Premium Solution (Gorgeous structural blocks) */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="text-left bg-[#0a1a3b] text-[#f3efe9] rounded-3xl p-6 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1b9cda] rounded-full filter blur-3xl opacity-20 pointer-events-none" />

                <span className="text-xs font-bold uppercase tracking-widest text-white/50 block mb-2 font-mono">
                  The Solution System
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-6">
                  A professional outlet that manages itself.
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {[
                    { title: "Google Search Discovery", desc: "Your listed products will register on index search tools automatically. Acquire organic inquiries beyond social media circles." },
                    { title: "Click-to-WhatsApp Checkout", desc: "No more repetitive pricing questions. Buyers see prices upfront, click buy, and deliver organized inquiries straight to your phone." },
                    { title: "Verified Identity badging", desc: "Display verification tags and custom reviews safely. Safe transactions build absolute marketplace credibility instantly." },
                    { title: "Interactive WhatsApp Assistant", desc: "Send simple mobile texts to our simulated AI assistant to sync metrics, follow up with buyers, or modify inventory catalogs." }
                  ].map((sol, idx) => (
                    <div key={idx} className="space-y-1 text-left">
                      <div className="w-6 h-6 rounded-full bg-[#1b9cda] text-white flex items-center justify-center font-bold text-xs mb-2">
                        ✓
                      </div>
                      <h4 className="font-extrabold text-sm text-white">{sol.title}</h4>
                      <p className="text-xs text-white/70 leading-relaxed">{sol.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trebo AI assistant testimonial card */}
              <div className="bg-[#1b9cda]/10 border border-[#1b9cda]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
                <div className="space-y-1 max-w-md">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#158bb3]">
                    <Sparkles size={14} className="animate-spin" />
                    <span>Trebo AI Automation Enabled</span>
                  </div>
                  <p className="text-sm font-semibold text-[#0a1a3b] italic">
                    "I followed up with 5 ghost buyers today. 2 of them are ready to pay!"
                  </p>
                </div>
                <button
                  onClick={() => {
                    const workspace = document.getElementById("customizer");
                    if (workspace) {
                      workspace.scrollIntoView({ behavior: "smooth" });
                      setActiveWorkspaceTab("dashboard");
                      setActiveDashboardSubTab("assistant");
                    }
                  }}
                  className="px-4 py-2 bg-[#0a1a3b] text-white hover:bg-[#1b9cda] rounded-xl font-bold text-xs uppercase tracking-wide transition-all shrink-0"
                >
                  Configure Agent chatbot
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS TIMELINE SECTION: 01, 02, 03 Flow */}
      <section id="how-it-works" className="macro-padding border-b border-[#dedad3] bg-[#f3efe9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1b9cda]">
              Simple Implementation
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3 mb-4 text-[#0a1a3b]">
              Get your store live in minutes
            </h2>
            <p className="text-base text-[#0a1a3b]/70">
              No complex database setups. No programming experience required. Just your business, online properly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white border border-[#dedad3] p-8 rounded-3xl relative text-left flex flex-col justify-between group hover:border-[#1b9cda] transition-all">
              <div>
                <span className="text-4xl font-extrabold text-[#1b9cda]/20 group-hover:text-[#1b9cda]/40 transition-colors block mb-4">
                  01
                </span>
                <h3 className="text-xl font-extrabold text-[#0a1a3b] mb-3">
                  Sign Up Free
                </h3>
                <p className="text-sm text-[#0a1a3b]/70 leading-relaxed mb-6">
                  Create your Trebo account in 30 seconds. Setup domain links or customizable store names with absolutely no credit card requirements.
                </p>
              </div>
              <a
                href="#customizer"
                className="text-xs font-bold uppercase tracking-wide text-[#1b9cda] inline-flex items-center gap-1 group-hover:translate-x-1 transition-all"
              >
                Inquire store name
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-[#dedad3] p-8 rounded-3xl relative text-left flex flex-col justify-between group hover:border-[#1b9cda] transition-all">
              <div>
                <span className="text-4xl font-extrabold text-[#1b9cda]/20 group-hover:text-[#1b9cda]/40 transition-colors block mb-4">
                  02
                </span>
                <h3 className="text-xl font-extrabold text-[#0a1a3b] mb-3">
                  Build Your Store
                </h3>
                <p className="text-sm text-[#0a1a3b]/70 leading-relaxed mb-6">
                  Add your custom product catalog, toggle brand colors, and add WhatsApp contact settings. Real storefront previews adapt instantly.
                </p>
              </div>
              <a
                href="#customizer"
                className="text-xs font-bold uppercase tracking-wide text-[#1b9cda] inline-flex items-center gap-1 group-hover:translate-x-1 transition-all"
              >
                Try customizer
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-[#dedad3] p-8 rounded-3xl relative text-left flex flex-col justify-between group hover:border-[#1b9cda] transition-all">
              <div>
                <span className="text-4xl font-extrabold text-[#1b9cda]/20 group-hover:text-[#1b9cda]/40 transition-colors block mb-4">
                  03
                </span>
                <h3 className="text-xl font-extrabold text-[#0a1a3b] mb-3">
                  Share Your Link
                </h3>
                <p className="text-sm text-[#0a1a3b]/70 leading-relaxed mb-6">
                  Copy your customized Trebo link (`trebo.site/yourname`) to social banners, bios, and descriptions. Direct buyer requests open instantly.
                </p>
              </div>
              <a
                href="#customizer"
                className="text-xs font-bold uppercase tracking-wide text-[#1b9cda] inline-flex items-center gap-1 group-hover:translate-x-1 transition-all"
              >
                Launch dashboard
                <ChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* Large callout quote in guidelines */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <span className="text-4xl font-serif text-[#1b9cda] opacity-30 select-none block mb-2 leading-none">
              “
            </span>
            <p className="text-lg md:text-xl font-medium text-[#0a1a3b] leading-relaxed italic">
              While you focus on your business, Trebo makes sure every customer who finds you stays.
            </p>
            <span className="text-xs font-mono font-bold text-[#0a1a3b]/55 uppercase block mt-3 tracking-wider">
              - Trebo Philosophy
            </span>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="macro-padding border-b border-[#dedad3] bg-[#ebe7e0]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1b9cda] bg-[#1b9cda]/10 px-3 py-1 rounded-full">
              Fair Pricing Models
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4 mb-4 text-[#0a1a3b]">
              Plans built to grow
              <br className="sm:hidden" />
              with your business.
            </h2>
            <p className="text-base text-[#0a1a3b]/70 mb-8">
              Choose a plan that fits your current hustle. Upgrade as you grow of your scale. No hidden transaction charges.
            </p>

            {/* Monthly / Annual Toggle switch */}
            <div className="flex items-center justify-center gap-3">
              <span className={`text-xs font-bold uppercase tracking-wider ${!isYearlyBilling ? "text-[#0a1a3b]" : "text-[#0a1a3b]/50"}`}>
                Monthly billing
              </span>
              <button
                onClick={() => setIsYearlyBilling(!isYearlyBilling)}
                className="w-12 h-6.5 rounded-full bg-[#0a1a3b] p-0.5 relative transition-all flex items-center"
              >
                <div
                  className={`w-5.5 h-5.5 rounded-full bg-white shadow-md transition-all ${
                    isYearlyBilling ? "translate-x-5.5" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={`text-xs font-bold uppercase tracking-wider ${isYearlyBilling ? "text-[#0a1a3b]" : "text-[#0a1a3b]/50"}`}>
                Yearly plan (Save 20%)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Plan 1 - Starter */}
            <div className="bg-white border border-[#dedad3] rounded-3xl p-8 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-bold text-[#0a1a3b]/50 uppercase tracking-widest block mb-2">
                  Starter Plan
                </span>
                <h3 className="text-xl font-extrabold text-[#0a1a3b]">Starter</h3>
                <p className="text-xs text-[#0a1a3b]/60 mt-1 mb-6">
                  Perfect for new micro-businesses looking to establish visual trust.
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-black text-[#0a1a3b]">
                    ₦{isYearlyBilling ? "1,200" : "1,500"}
                  </span>
                  <span className="text-xs font-mono text-[#0a1a3b]/60 uppercase ml-1 block">
                    / month
                  </span>
                </div>

                <div className="h-[1px] bg-[#dedad3] mb-6" />

                <ul className="space-y-3.5 mb-8">
                  <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                    <CheckCircle2 size={14} className="text-[#10b981]" />
                    <span>trebo.site/yourname</span>
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                    <CheckCircle2 size={14} className="text-[#10b981]" />
                    <span>Up to 20 products</span>
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                    <CheckCircle2 size={14} className="text-[#10b981]" />
                    <span>Customer review logs</span>
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                    <CheckCircle2 size={14} className="text-[#10b981]" />
                    <span>WhatsApp catalog order CTA</span>
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                    <CheckCircle2 size={14} className="text-[#10b981]" />
                    <span>Basic brand configuration</span>
                  </li>
                </ul>
              </div>

              <a
                href="#customizer"
                className="w-full text-center py-3.5 rounded-xl border border-[#dedad3] hover:bg-[#ebe7e0] text-[#0a1a3b] font-bold text-xs uppercase tracking-wide transition-all"
              >
                Select Starter
              </a>
            </div>

            {/* Plan 2 - Pro (Most Popular) */}
            <div className="bg-white border-2 border-[#1b9cda] rounded-3xl p-8 flex flex-col justify-between text-left relative shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1b9cda] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                Recommended
              </div>

              <div>
                <span className="text-xs font-bold text-[#1b9cda] uppercase tracking-widest block mb-2 mt-2">
                  Premium Bot Integration
                </span>
                <h3 className="text-xl font-extrabold text-[#0a1a3b]">Pro Plan</h3>
                <p className="text-xs text-[#0a1a3b]/60 mt-1 mb-6">
                  Our most popular plan tailored for serious local store operators.
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-black text-[#0a1a3b]">
                    ₦{isYearlyBilling ? "2,000" : "2,500"}
                  </span>
                  <span className="text-xs font-mono text-[#0a1a3b]/60 uppercase ml-1 block">
                    / month
                  </span>
                </div>

                <div className="h-[1px] bg-[#dedad3] mb-6" />

                <ul className="space-y-3.5 mb-8">
                  <li className="text-xs font-extrabold flex items-center gap-2 text-[#1b9cda]">
                    <Sparkles size={14} className="animate-pulse" />
                    <span>Includes AI WhatsApp Assistant</span>
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                    <CheckCircle2 size={14} className="text-[#10b981]" />
                    <span>Everything in Starter plan</span>
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                    <CheckCircle2 size={14} className="text-[#10b981]" />
                    <span>store.trebo.com subdomain redirection</span>
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                    <CheckCircle2 size={14} className="text-[#10b981]" />
                    <span>Up to 300 products in directory</span>
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                    <CheckCircle2 size={14} className="text-[#10b981]" />
                    <span>Trebo merchant directory listing</span>
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                    <CheckCircle2 size={14} className="text-[#10b981]" />
                    <span>Auto-follow up message bot</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  const targetElement = document.getElementById("customizer");
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                    setActiveWorkspaceTab("dashboard");
                  }
                }}
                className="w-full text-center py-3.5 rounded-xl bg-[#1b9cda] hover:bg-[#158bb3] text-white font-bold text-xs uppercase tracking-wide transition-all shadow-sm shadow-[#1b9cda]/10"
              >
                Launch Pro Page
              </button>
            </div>

            {/* Plan 3 - Premium */}
            <div className="bg-white border border-[#dedad3] rounded-3xl p-8 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-bold text-[#0a1a3b]/50 uppercase tracking-widest block mb-2">
                  Complete Branding Identity
                </span>
                <h3 className="text-xl font-extrabold text-[#0a1a3b]">Premium</h3>
                <p className="text-xs text-[#0a1a3b]/60 mt-1 mb-6">
                  For established local outlets seeking payment capabilities and domains.
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-black text-[#0a1a3b]">
                    ₦{isYearlyBilling ? "4,000" : "5,000"}
                  </span>
                  <span className="text-xs font-mono text-[#0a1a3b]/60 uppercase ml-1 block">
                    / month
                  </span>
                </div>

                <div className="h-[1px] bg-[#dedad3] mb-6" />

                <ul className="space-y-3.5 mb-8">
                  <li className="text-xs font-bold text-[#0a1a3b] flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#0a1a3b]" />
                    <span>Verification Badge displayed</span>
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                    <CheckCircle2 size={14} className="text-[#10b981]" />
                    <span>Everything in Pro plan</span>
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                    <CheckCircle2 size={14} className="text-[#10b981]" />
                    <span>Direct online payment integration</span>
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                    <CheckCircle2 size={14} className="text-[#10b981]" />
                    <span>Free custom .com.ng domain</span>
                  </li>
                  <li className="text-xs font-semibold flex items-center gap-2 text-[#0a1a3b]/80">
                    <CheckCircle2 size={14} className="text-[#10b981]" />
                    <span>Advanced meta store analytics dashboard</span>
                  </li>
                </ul>
              </div>

              <a
                href="#customizer"
                className="w-full text-center py-3.5 rounded-xl border border-[#dedad3] hover:bg-[#ebe7e0] text-[#0a1a3b] font-bold text-xs uppercase tracking-wide transition-all"
              >
                Select Premium
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm font-semibold text-[#0a1a3b]/70">
              Prices are in Nigerian Naira (₦). Need something different?{" "}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Thanks for your interest! Standard support is available on WhatsApp or via mail: contact@gettrebo.com");
                }}
                className="text-[#1b9cda] hover:underline"
              >
                Talk to us.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="macro-padding border-b border-[#dedad3] bg-[#f3efe9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1b9cda]">
              User Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3 mb-4 text-[#0a1a3b]">
              Trusted by businesses
              <br className="sm:hidden" />
              across Nigeria.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Trebo changed how I sell my fabrics. Before, I was sending pictures one by one on WhatsApp. Now, I just send my link. It saves me so much time.",
                name: "Nneka Okoro",
                store: "Nneka's Textiles, Lagos"
              },
              {
                text: "My customers trust me more now. The storefront looks professional, and they feel safe ordering from me. My sales have increased by 40%.",
                name: "Abubakar Sadiq",
                store: "Sadiq Electronics, Kano"
              },
              {
                text: "Setting it up was so easy. I'm not a tech person, but I finished my store in 10 minutes. This is exactly what we need in Abuja.",
                name: "Tayo Adebayo",
                store: "The Thrift Hub, Abuja"
              }
            ].map((testi, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#dedad3] p-8 rounded-3xl relative text-left flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <span className="text-3xl font-serif text-[#1b9cda] opacity-40 select-none block mb-4">
                    “
                  </span>
                  <p className="text-sm text-[#0a1a3b]/85 leading-relaxed italic mb-6">
                    {testi.text}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#dedad3] mb-4" />
                  <h4 className="font-extrabold text-[#0a1a3b] text-sm">
                    {testi.name}
                  </h4>
                  <p className="text-xs text-[#0a1a3b]/60 font-medium">
                    {testi.store}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCORDION FAQ SECTION */}
      <section id="faq" className="macro-padding border-b border-[#dedad3] bg-[#ebe7e0]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left FAQ side description */}
            <div className="lg:col-span-5 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1b9cda]">
                Support & Details
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3 mb-6 text-[#0a1a3b]">
                Common Questions
              </h2>
              <p className="text-base text-[#0a1a3b]/70 mb-8 leading-relaxed max-w-[40ch]">
                Everything you need to know about setting up payment redirects, domain configurations, and AI assistants.
              </p>

              <div className="p-5 border border-[#dedad3] rounded-2xl bg-white/70 max-w-[340px]">
                <h4 className="font-extrabold text-sm text-[#0a1a3b] mb-1.5 flex items-center gap-1.5">
                  <HelpCircle size={16} className="text-[#1b9cda]" />
                  Need direct assistance?
                </h4>
                <p className="text-xs text-[#0a1a3b]/70 leading-relaxed mb-3">
                  Reach out to the Trebo customer success desk. We are active 7 days a week for Nigerian sellers.
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    executeAiCommand("Ask Trebo AI for a tip to grow");
                    const exploreEl = document.getElementById("customizer");
                    if (exploreEl) exploreEl.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b9cda] hover:underline"
                >
                  Prompt Chat Helper
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Right FAQ Accordion list */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  q: "Do I need a separate website or domain?",
                  a: "No. Trebo gives you a professional link (e.g., gettrebo.com/yourbusiness) that you can use immediately. If you want a custom domain later, our Premium package supports custom .com.ng redirection flawlessly."
                },
                {
                  q: "How do customers pay?",
                  a: "Trebo handles the order discovery and inquiry. When a customer clicks buy, it opens a WhatsApp chat with all the order details. You can then use your preferred payment method (Bank Transfer, Moniepoint, etc.) to complete the sale."
                },
                {
                  q: "How many products can I upload?",
                  a: "The Starter plan allows up to 20 products. Our Pro plan supports up to 300 products, and the Premium plan supports unlimited catalog listings."
                },
                {
                  q: "Can I use it for professional services?",
                  a: "Absolutely. Many salons, consultants, and artisans use Trebo to showcase their services and receive booking inquiries via WhatsApp."
                }
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#dedad3] rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between text-[#0a1a3b] hover:bg-[#f3efe9]/30 focus:outline-none transition-all"
                  >
                    <span className="font-extrabold text-sm md:text-base leading-tight">
                      {faq.q}
                    </span>
                    <span className="p-1 rounded-full bg-[#ebe7e0] text-[#0a1a3b] shrink-0 ml-4 transition-transform duration-300">
                      {activeFaq === idx ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-xs md:text-sm text-[#0a1a3b]/75 leading-relaxed bg-[#f3efe9]/10 pt-1">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION (CTA) SECTION */}
      <section className="macro-padding relative overflow-hidden bg-[#0a1a3b] text-white">
        {/* Subtle glowing dots background to resemble Nigeria starry sky */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1b9cda] rounded-full filter blur-3xl opacity-15 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1b9cda] block mb-4">
            Take the next step
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Ready to take your business
            <br className="hidden md:inline" />
            to the next level?
          </h2>
          <p className="text-base text-white/70 max-w-[60ch] mx-auto mb-10 leading-relaxed font-medium">
            Stop losing customers to chaotic DMs. Join thousands of Nigerian entrepreneurs who are growing with Trebo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#customizer"
              className="px-8 py-4.5 rounded-full bg-white text-[#0a1a3b] hover:bg-[#1b9cda] hover:text-white font-black text-sm tracking-wide transition-all shadow-md focus:outline-none"
            >
              Create your store now
            </a>
            <button
              onClick={() => {
                const faqy = document.getElementById("faq");
                if (faqy) faqy.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-4.5 rounded-full border border-white/20 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Request details
            </button>
          </div>

          <div className="text-xs font-mono text-white/40 mt-6 uppercase tracking-wider">
            No credit card required • Setup in 5 minutes
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f3efe9] border-t border-[#dedad3] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12">
            {/* Left Col: brand focus */}
            <div className="md:col-span-5 text-left">
              <a href="#" className="flex items-center gap-2 group mb-4">
                <span className="w-7 h-7 rounded-md bg-[#0a1a3b] text-white flex items-center justify-center font-bold text-sm">
                  t
                </span>
                <span className="font-extrabold text-lg tracking-tight text-[#0a1a3b]">
                  trebo
                </span>
              </a>
              <p className="text-xs text-[#0a1a3b]/70 leading-relaxed mb-6 max-w-[40ch]">
                Every business deserves to be seen, trusted and chosen. Helping Nigerian entrepreneurs grow since 2024.
              </p>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 w-fit px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-full text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>All systems operational</span>
              </div>
            </div>

            {/* Middle Col: Product */}
            <div className="md:col-span-3 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0a1a3b]/50 mb-4">
                Product
              </h4>
              <ul className="space-y-2.5 text-xs font-semibold text-[#0a1a3b]">
                <li>
                  <a href="#how-it-works" className="hover:text-[#1b9cda] transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-[#1b9cda] transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#directory"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Trebo Directory is fully scheduled for Q3 2026. Register now to be prioritized!");
                    }}
                    className="hover:text-[#1b9cda] transition-colors flex items-center gap-1"
                  >
                    Directory
                    <span className="bg-amber-100 text-amber-800 text-[8px] font-extrabold px-1.5 py-0.2 rounded-full uppercase">
                      Soon
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#release-notes"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Trebo v2.4 (May 2026) Release: WhatsApp follow-up log automated, image cache optimized.");
                    }}
                    className="hover:text-[#1b9cda] transition-colors"
                  >
                    Release Notes
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Col: Legal */}
            <div className="md:col-span-4 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0a1a3b]/50 mb-4">
                Legal & Security
              </h4>
              <ul className="space-y-2.5 text-xs font-semibold text-[#0a1a3b]">
                <li>
                  <a
                    href="#privacy"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Privacy Policy: Your WhatsApp configurations and catalog logs remain fully encrypted. Trebo does not monitor customer identities.");
                    }}
                    className="hover:text-[#1b9cda] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Terms of Service: Merchants utilizing Trebo must obey all regional commerce bylaws in Nigeria.");
                    }}
                    className="hover:text-[#1b9cda] transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#merchant"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Merchant Policy: Fast, secure product dispatch and direct WhatsApp clear chat standards. Zero toleration for ghost seller actions.");
                    }}
                    className="hover:text-[#1b9cda] transition-colors"
                  >
                    Merchant Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#dedad3] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold text-[#0a1a3b]/50">
            <span>© 2026 Trebo Technologies. Made with love in Lagos, Nigeria.</span>
          </div>
        </div>
      </footer>

      {/* SIMULATED DIRECT WHATSAPP CHECKOUT MODAL LOG */}
      <AnimatePresence>
        {checkoutModalOpen && selectedProductForInquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Dynamic Card Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="bg-white rounded-3xl p-6.5 max-w-sm w-full border border-[#dedad3] shadow-2xl relative z-10 text-left space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#dedad3]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono uppercase text-[#0a1a3b]/60 font-bold">
                    WhatsApp Message Draft
                  </span>
                </div>
                <button
                  onClick={() => setCheckoutModalOpen(false)}
                  className="p-1 rounded-full hover:bg-[#ebe7e0] text-[#0a1a3b] transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              <div>
                <span className="text-[10px] text-[#0a1a3b]/50 block uppercase tracking-wide">
                  Product Selected
                </span>
                <h4 className="text-base font-black text-[#0a1a3b]">
                  {selectedProductForInquiry.name}
                </h4>
                <p className="text-sm font-black text-[#1b9cda] mt-0.5">
                  ₦{selectedProductForInquiry.price.toLocaleString()}
                </p>
              </div>

              {/* Mock WhatsApp message block */}
              <div className="bg-[#e5ddd5] p-3 rounded-2xl border border-[#dedad3] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#128c7e_15%,transparent_16%)] bg-[length:14px_14px] pointer-events-none" />
                <div className="bg-[#dcf8c6] p-3 rounded-xl border border-emerald-200 text-xs font-semibold leading-relaxed text-[#0a1a3b] relative z-10">
                  <span>
                    "Hello {businessName}! I am interested in purchasing the *{selectedProductForInquiry.name}* listed at *₦{selectedProductForInquiry.price.toLocaleString()}* on Trebo site. Please verify stock availability and provide bank dispatch details."
                  </span>
                </div>
                <span className="text-[9px] font-mono text-[#0a1a3b]/50 mt-1 block px-2 text-right relative z-10">
                  Message prefilled by Trebo
                </span>
              </div>

              <div className="text-xs text-[#0a1a3b]/70 font-medium">
                When click send, it redirects to the seller's active WhatsApp line (
                <span className="font-bold font-mono">{whatsappNumber}</span>) with structured, validated order parameters. No time waste, no ghost buyer queries!
              </div>

              <button
                onClick={() => {
                  alert(`Direct redirect activated! Sending pre-filled message for verification on ${whatsappNumber}. Enjoy the Trebo way.`);
                  setCheckoutModalOpen(false);
                }}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wide transition-all flex items-center justify-center gap-2 shadow-sm shadow-emerald-600/10"
              >
                <MessageSquare size={14} />
                Send via WhatsApp
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
