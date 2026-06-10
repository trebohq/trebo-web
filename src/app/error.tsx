"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const LOG_LINES = [
  "> [FATAL] checkout.service.ts: unhandled exception at line 0",
  "> [ERROR] payment_gateway: connection timeout after 30000ms",
  "> [WARN]  inventory.sync: upstream API returned null",
  "> [INFO]  attempting graceful restart... [FAILED]",
  "> [FATAL] process exited with code 1. Core dumped.",
];

const SCRAMBLE_CHARS = "!@#$%&*ABCXYZ0198?/\\|<>";

function scramble(text: string, progress: number): string {
  return text
    .split("")
    .map((char, i) =>
      i < Math.floor(progress * text.length)
        ? char
        : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
    )
    .join("");
}

type RetryState = "idle" | "loading" | "failed";

export default function InternalServerError() {
  const [mounted, setMounted] = useState(false);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [activeLog, setActiveLog] = useState(0);
  const [logChar, setLogChar] = useState(0);
  const [headline, setHeadline] = useState("");
  const [headlineProgress, setHeadlineProgress] = useState(0);
  const [retryState, setRetryState] = useState<RetryState>("idle");
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number; angle: number }[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fullHeadline = "Our servers just rage-quit.";

  useEffect(() => {
    setMounted(true);

    // Headline scramble resolve
    let progress = 0;
    const headlineTimer = setInterval(() => {
      progress = Math.min(1, progress + 0.04);
      setHeadline(scramble(fullHeadline, progress));
      setHeadlineProgress(progress);
      if (progress >= 1) {
        setHeadline(fullHeadline);
        clearInterval(headlineTimer);
      }
    }, 60);

    // Terminal log typewriter
    let lineIdx = 0;
    let charIdx = 0;
    const typeNextChar = () => {
      const line = LOG_LINES[lineIdx];
      if (!line) return;
      charIdx++;
      setLogChar(charIdx);
      setActiveLog(lineIdx);
      if (charIdx >= line.length) {
        setLogLines((prev) => [...prev, line]);
        lineIdx = (lineIdx + 1) % LOG_LINES.length;
        charIdx = 0;
        if (lineIdx === 0) {
          setTimeout(() => {
            setLogLines([]);
          }, 1200);
        }
      }
    };
    intervalRef.current = setInterval(typeNextChar, 28);

    // Sparks
    const sparkTimer = setInterval(() => {
      const newSparks = Array.from({ length: 6 }, (_, i) => ({
        id: Date.now() + i,
        x: 40 + Math.random() * 20,
        y: 35 + Math.random() * 20,
        angle: Math.random() * 360,
      }));
      setSparks(newSparks);
      setTimeout(() => setSparks([]), 900);
    }, 2200);

    return () => {
      clearInterval(headlineTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearInterval(sparkTimer);
    };
  }, []);

  const handleRetry = () => {
    setRetryState("loading");
    setTimeout(() => {
      setRetryState("failed");
      setTimeout(() => setRetryState("idle"), 3000);
    }, 1800);
  };

  if (!mounted) return null;

  const currentLine = LOG_LINES[activeLog] ?? "";
  const partialLine = currentLine.slice(0, logChar);

  return (
    <div
      className="min-h-screen bg-[#060E22] text-white font-sans overflow-hidden flex items-center justify-center relative select-none"
      style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
    >
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-20 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #1B9CDA, #1B9CDA 1px, transparent 1px, transparent 3px)`,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(ellipse 75% 60% at 50% 45%, transparent 40%, rgba(6,14,34,0.7) 100%)`,
        }}
      />

      {/* Sparks */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        {sparks.map((s) => (
          <div
            key={s.id}
            className="absolute spark"
            style={{
              left: s.x + "%",
              top: s.y + "%",
              "--spark-angle": s.angle + "deg",
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Logo */}
      <Link href="/" className="fixed top-7 left-8 flex items-center gap-2.5 z-50 group">
        <div className="w-7 h-7 bg-[#1B9CDA] flex items-center justify-center font-black text-[#060E22] text-sm tracking-tighter">
          t
        </div>
        <span className="font-black text-white tracking-tight text-lg">trebo</span>
      </Link>

      {/* Status badge */}
      <div className="fixed top-7 right-8 z-50 flex items-center gap-2 border border-red-500/30 px-3 py-1.5 text-[11px] font-mono text-red-400/70 tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 status-pulse inline-block" />
        HTTP 500
      </div>

      {/* Main content */}
      <div className="relative z-40 text-center px-6 max-w-5xl w-full">

        {/* Warning icon */}
        <div className="mb-2 fire-bob inline-block">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            {/* Flame outer */}
            <path
              d="M36 8 C36 8 44 18 44 28 C44 28 50 22 48 14 C52 20 56 30 52 40 C56 36 58 40 56 46 C60 42 64 48 60 56 C58 62 50 66 36 66 C22 66 14 62 12 56 C8 48 12 42 16 46 C14 40 18 36 22 40 C18 30 22 20 26 14 C24 22 30 28 30 28 C30 18 36 8 36 8Z"
              fill="none"
              stroke="#FF6B35"
              strokeWidth="1.5"
              opacity="0.7"
              className="flame-flicker"
            />
            {/* Flame inner */}
            <path
              d="M36 24 C36 24 40 30 40 36 C40 36 43 32 42 28 C44 31 45 36 43 41 C45 39 46 41 45 44 C47 42 48 45 46 49 C44 53 41 55 36 55 C31 55 28 53 26 49 C24 45 25 42 27 44 C26 41 27 39 29 41 C27 36 28 31 30 28 C29 32 32 36 32 36 C32 30 36 24 36 24Z"
              fill="none"
              stroke="#FFA500"
              strokeWidth="1.5"
              opacity="0.5"
              className="flame-flicker-fast"
            />
            {/* Core */}
            <circle cx="36" cy="46" r="4" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.4" />
          </svg>
        </div>

        {/* HERO 500 with melt */}
        <div className="relative inline-block mb-0">
          <h1 className="text-[22vw] md:text-[18vw] lg:text-[16vw] font-black leading-none melt-text" style={{ color: "#FF6B35", letterSpacing: "-0.04em" }}>
            500
          </h1>
          <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
        </div>

        {/* Scramble headline */}
        <h2
          className="text-xl md:text-3xl font-black uppercase tracking-tight mt-6 mb-1 text-white"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {headlineProgress < 1 ? headline : fullHeadline}
        </h2>

        <p className="text-white/40 text-sm md:text-base font-medium mb-6 tracking-wide">
          An unhandled exception took down this request. Our team has been paged.
        </p>

        {/* Terminal panel */}
        <div className="inline-block w-full max-w-xl text-left border border-red-500/15 bg-red-950/10 p-4 mb-8 font-mono text-[11px] leading-6">
          <div className="flex items-center gap-2 mb-3 border-b border-red-500/10 pb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            <span className="ml-2 text-white/20 text-[10px] tracking-widest uppercase">trebo.log — process stderr</span>
          </div>
          <div className="space-y-0.5 min-h-[5.5rem]">
            {logLines.map((line, i) => (
              <p key={i} className="text-green-400/70 truncate">{line}</p>
            ))}
            <p className="text-green-400/90 truncate">
              {partialLine}
              <span className="inline-block w-0.5 h-3 bg-green-400 ml-0.5 align-middle cursor-blink" />
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleRetry}
            disabled={retryState === "loading"}
            className="inline-block px-10 py-4 bg-[#FF6B35] text-[#060E22] font-black uppercase tracking-widest text-xs hover:bg-white transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed min-w-[200px]"
          >
            {retryState === "idle" && "Retry Request"}
            {retryState === "loading" && (
              <span className="flex items-center justify-center gap-2">
                <span className="spinner" /> Retrying...
              </span>
            )}
            {retryState === "failed" && "Still down. We know. 🙃"}
          </button>
          <Link
            href="/"
            className="inline-block px-10 py-4 border border-white/15 text-white/50 font-black uppercase tracking-widest text-xs hover:border-white/40 hover:text-white/80 transition-all duration-200"
          >
            Return to Safety
          </Link>
        </div>

        {/* Incident note */}
        <p className="mt-10 text-[10px] font-mono text-white/15 tracking-widest uppercase">
          — incident id: TRB-{Math.floor(Date.now() / 1000).toString(16).toUpperCase()} —
        </p>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;900&display=swap');

        /* Melt / drip on 500 */
        .melt-text {
          animation: meltPulse 4s ease-in-out infinite;
          filter: drop-shadow(0 0 20px rgba(255,107,53,0.25));
        }
        @keyframes meltPulse {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(255,107,53,0.25)) blur(0px); letter-spacing: -0.04em; }
          45% { filter: drop-shadow(0 8px 30px rgba(255,107,53,0.5)) blur(0.5px); letter-spacing: -0.045em; }
          50% { filter: drop-shadow(0 12px 40px rgba(255,107,53,0.6)) blur(1px); }
        }

        /* Flames */
        .flame-flicker {
          animation: flickerA 1.8s ease-in-out infinite;
        }
        .flame-flicker-fast {
          animation: flickerA 1.1s ease-in-out infinite reverse;
        }
        @keyframes flickerA {
          0%, 100% { transform: scaleX(1) scaleY(1); opacity: 0.7; }
          30% { transform: scaleX(1.05) scaleY(0.97); opacity: 0.9; }
          60% { transform: scaleX(0.96) scaleY(1.04); opacity: 0.6; }
        }

        /* Fire bob */
        .fire-bob {
          animation: fireBob 2.4s ease-in-out infinite;
        }
        @keyframes fireBob {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.03); }
        }

        /* Status pulse (red) */
        .status-pulse {
          animation: statusBlink 1.2s ease-in-out infinite;
        }
        @keyframes statusBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }

        /* Sparks */
        .spark {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #FF6B35;
          animation: sparkFly 0.8s ease-out forwards;
        }
        @keyframes sparkFly {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% {
            transform: translate(
              calc(cos(var(--spark-angle)) * 50px),
              calc(sin(var(--spark-angle)) * 50px)
            ) scale(0);
            opacity: 0;
          }
        }

        /* Spinner */
        .spinner {
          display: inline-block;
          width: 12px;
          height: 12px;
          border: 2px solid rgba(6,14,34,0.3);
          border-top-color: #060E22;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Cursor blink */
        .cursor-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .melt-text,
          .flame-flicker,
          .flame-flicker-fast,
          .fire-bob,
          .status-pulse,
          .spark,
          .cursor-blink {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}