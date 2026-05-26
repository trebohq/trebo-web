"use client";

import React from "react";

const testimonials = [
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
];

export const Testimonials: React.FC = () => {
  return (
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
          {testimonials.map((testi, idx) => (
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
  );
};
