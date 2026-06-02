"use client";

import React, { useState, useMemo } from "react";
import { Product, ChatMessage } from "@/components/home/types";

// Import extracted components
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { CategoryMarquee } from "@/components/home/CategoryMarquee";
import { InteractivePlayground } from "@/components/home/InteractivePlayground";
import { Benefits } from "@/components/home/Benefits";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Pricing } from "@/components/home/Pricing";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { Footer } from "@/components/home/Footer";
import { CheckoutModal } from "@/components/home/CheckoutModal";

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
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <Hero 
        businessName={businessName}
        customCategory={customCategory}
        activeProducts={activeProducts}
        setSelectedProductForInquiry={setSelectedProductForInquiry}
        setCheckoutModalOpen={setCheckoutModalOpen}
      />

      <CategoryMarquee />

      <InteractivePlayground 
        activeWorkspaceTab={activeWorkspaceTab}
        setActiveWorkspaceTab={setActiveWorkspaceTab}
        activeDashboardSubTab={activeDashboardSubTab}
        setActiveDashboardSubTab={setActiveDashboardSubTab}
        businessName={businessName}
        setBusinessName={setBusinessName}
        customCategory={customCategory}
        handleCategoryChange={handleCategoryChange}
        whatsappNumber={whatsappNumber}
        setWhatsappNumber={setWhatsappNumber}
        brandColor={brandColor}
        setBrandColor={setBrandColor}
        isVerified={isVerified}
        setIsVerified={setIsVerified}
        activeProducts={activeProducts}
        newProductName={newProductName}
        setNewProductName={setNewProductName}
        newProductPrice={newProductPrice}
        setNewProductPrice={setNewProductPrice}
        handleAddProduct={handleAddProduct}
        aiChat={aiChat}
        executeAiCommand={executeAiCommand}
        customAiText={customAiText}
        setCustomAiText={setCustomAiText}
        aiInputEnabled={aiInputEnabled}
        handleCustomAiSend={handleCustomAiSend}
        setSelectedProductForInquiry={setSelectedProductForInquiry}
        setCheckoutModalOpen={setCheckoutModalOpen}
      />

      <Benefits 
        setActiveWorkspaceTab={setActiveWorkspaceTab}
        setActiveDashboardSubTab={setActiveDashboardSubTab}
      />

      <HowItWorks />

      <Pricing 
        isYearlyBilling={isYearlyBilling}
        setIsYearlyBilling={setIsYearlyBilling}
        setActiveWorkspaceTab={setActiveWorkspaceTab}
      />

      <Testimonials />

      <FAQ 
        activeFaq={activeFaq}
        toggleFaq={toggleFaq}
        executeAiCommand={executeAiCommand}
      />

      <CTA />

      <Footer />

      <CheckoutModal 
        checkoutModalOpen={checkoutModalOpen}
        setCheckoutModalOpen={setCheckoutModalOpen}
        selectedProductForInquiry={selectedProductForInquiry}
        businessName={businessName}
        whatsappNumber={whatsappNumber}
      />
    </div>
  );
}