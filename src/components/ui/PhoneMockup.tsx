import React from "react";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-[#1a1a1e] rounded-[3rem] p-[6px] shadow-2xl border border-zinc-700/50 relative ${className}`}>
      {/* Side buttons */}
      <div className="absolute -left-[2px] top-24 w-[3px] h-8 bg-zinc-600 rounded-l-sm" />
      <div className="absolute -left-[2px] top-36 w-[3px] h-12 bg-zinc-600 rounded-l-sm" />
      <div className="absolute -left-[2px] top-[12.5rem] w-[3px] h-12 bg-zinc-600 rounded-l-sm" />
      <div className="absolute -right-[2px] top-28 w-[3px] h-16 bg-zinc-600 rounded-r-sm" />

      {/* Screen */}
      <div className="rounded-[2.6rem] bg-background overflow-hidden relative flex flex-col" style={{ aspectRatio: '9/19.2' }}>
        {/* Dynamic Island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-30 flex items-center justify-center">
          <span className="w-[8px] h-[8px] rounded-full bg-[#1a1a2e] border border-zinc-700/40 ml-6" />
        </div>

        {/* iOS Status Bar */}
        <div className="h-12 px-6 flex justify-between items-center shrink-0 relative z-20 select-none text-[#0a1a3b]/90">
          {/* Time - left side */}
          <span className="text-[12px] font-semibold tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
            9:41
          </span>

          {/* Right side icons */}
          <div className="flex items-center gap-[5px]">
            {/* WiFi */}
            <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor" className="text-current">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-3-4a4.5 4.5 0 0 1 6 0 .75.75 0 0 0 1.06-1.06 6 6 0 0 0-8.12 0 .75.75 0 1 0 1.06 1.06zm-3-3a8.5 8.5 0 0 1 12 0 .75.75 0 0 0 1.06-1.06 10 10 0 0 0-14.12 0 .75.75 0 1 0 1.06 1.06z" />
            </svg>

            {/* Battery */}
            <div className="flex items-center gap-[1px]">
              <div className="w-[22px] h-[11.5px] border border-current rounded-[3.5px] p-[1.5px] flex items-center justify-start">
                <div className="h-full w-[80%] bg-current rounded-[1.5px]" />
              </div>
              <div className="w-[1.5px] h-[4px] bg-current rounded-r-[1px] -ml-[0.5px]" />
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {children}
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pb-2 pt-1 bg-white shrink-0">
          <div className="w-[100px] h-[4.5px] bg-[#0a1a3b]/30 rounded-full" />
        </div>
      </div>
    </div>
  );
};
