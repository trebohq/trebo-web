"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const categories = [
  "Fashion & Clothing",
  "Food & Beverages",
  "Beauty & Skincare",
  "Professional Photography",
  "Footwear & Sneakers",
  "Tailoring & Sewing",
  "Logistics & Transport",
  "Technology & Gadgets",
];

export const CategoryMarquee: React.FC = () => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap py-4 border-y border-border-subtle bg-surface pointer-events-none select-none">
      <div className="flex shrink-0 animate-marquee">
        {categories.map((themeName, i) => (
          <span
            key={i}
            className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-[#0a1a3b]/40 mx-8"
          >
            <Sparkles size={12} className="mr-2 text-[#1b9cda]" />
            {themeName}
          </span>
        ))}
      </div>
      <div className="flex shrink-0 animate-marquee" aria-hidden="true">
        {categories.map((themeName, i) => (
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
  );
};
