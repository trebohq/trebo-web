"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare } from "lucide-react";
import { Product } from "./types";

interface CheckoutModalProps {
  checkoutModalOpen: boolean;
  setCheckoutModalOpen: (open: boolean) => void;
  selectedProductForInquiry: Product | null;
  businessName: string;
  whatsappNumber: string;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  checkoutModalOpen,
  setCheckoutModalOpen,
  selectedProductForInquiry,
  businessName,
  whatsappNumber,
}) => {
  return (
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
  );
};
