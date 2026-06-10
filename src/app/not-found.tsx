"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  angle: number;
  speed: number;
}

export default function NotFound() {
  const [text, setText] = useState("");
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLAnchorElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const fullText = "> PRODUCT_ID: null  |  ROUTE: /undefined  |  STATUS: 404  |  This listing has left the building.";

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 120;
      if (dist < maxDist) {
        const pull = (1 - dist / maxDist) * 12;
        btnRef.current.style.transform = `translate(${(dx / dist) * pull}px, ${(dy / dist) * pull}px)`;
      } else {
        btnRef.current.style.transform = "translate(0,0)";
      }
    }
  }, []);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 55 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      delay: Math.random() * 8,
      duration: Math.random() * 12 + 10,
      opacity: Math.random() * 0.15 + 0.04,
    }));
    setParticles(newParticles);
    setMounted(true);

    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 38);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearInterval(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  const handleHeroClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);

    const colors = ["#1B9CDA", "#ffffff", "#0A1A3B", "#38BDF8", "#E0F2FE"];
    const pieces: ConfettiPiece[] = Array.from({ length: 28 }, (_, i) => ({
      id: Date.now() + i,
      x: 50 + (Math.random() - 0.5) * 30,
      y: 45,
      color: colors[Math.floor(Math.random() * colors.length)],
      angle: Math.random() * 360,
      speed: Math.random() * 3 + 1.5,
    }));
    setConfetti(pieces);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1400);
  };

  if (!mounted) return null;

  return (
    <div
      className={`min-h-screen bg-[#060E22] text-white font-sans overflow-hidden flex items-center justify-center relative select-none ${isShaking ? "page-shake" : ""}`}
      style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#1B9CDA 1px, transparent 1px), linear-gradient(90deg, #1B9CDA 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 55% at 50% 55%, rgba(27,156,218,0.07) 0%, transparent 70%)`,
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#1B9CDA] particle-float"
            style={{
              width: p.size + "px",
              height: p.size + "px",
              left: p.x + "%",
              top: p.y + "%",
              opacity: p.opacity,
              animationDelay: p.delay + "s",
              animationDuration: p.duration + "s",
            }}
          />
        ))}
      </div>

      {/* Confetti burst */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {confetti.map((c) => (
            <div
              key={c.id}
              className="absolute confetti-piece"
              style={{
                left: c.x + "%",
                top: c.y + "%",
                backgroundColor: c.color,
                width: "8px",
                height: "8px",
                borderRadius: Math.random() > 0.5 ? "50%" : "2px",
                "--angle": c.angle + "deg",
                "--speed": c.speed,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      {/* Logo */}
      <Link
        href="/"
        className="fixed top-7 left-8 flex items-center gap-2.5 z-50 group"
        style={{ transition: "opacity 0.2s" }}
      >
        <div className="w-7 h-7 bg-[#1B9CDA] flex items-center justify-center font-black text-[#060E22] text-sm tracking-tighter">
          t
        </div>
        <span className="font-black text-white tracking-tight text-lg">trebo</span>
      </Link>

      {/* Status badge */}
      <div className="fixed top-7 right-8 z-50 flex items-center gap-2 border border-[#1B9CDA]/20 px-3 py-1.5 text-[11px] font-mono text-[#1B9CDA]/60 tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1B9CDA] animate-pulse inline-block" />
        HTTP 404
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl w-full" ref={heroRef}>

        {/* Floating Cart SVG character */}
        <div className="mb-2 relative inline-block cart-float">
          <svg
            width="90"
            height="90"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            {/* Cart body */}
            <rect x="18" y="30" width="54" height="32" rx="4" fill="none" stroke="#1B9CDA" strokeWidth="2" opacity="0.9" />
            {/* Cart handle */}
            <path d="M12 20 H22 L30 62" stroke="#1B9CDA" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
            {/* Wheels */}
            <circle cx="32" cy="70" r="5" fill="none" stroke="#1B9CDA" strokeWidth="2" opacity="0.8" />
            <circle cx="58" cy="70" r="5" fill="none" stroke="#1B9CDA" strokeWidth="2" opacity="0.8" />
            {/* Empty — question mark inside */}
            <text x="45" y="52" textAnchor="middle" fontSize="20" fontWeight="900" fill="#1B9CDA" opacity="0.6" fontFamily="Space Grotesk, sans-serif">?</text>
            {/* Eyes (sad) */}
            <circle cx="36" cy="24" r="2" fill="#1B9CDA" opacity="0.5" className="eye-blink" />
            <circle cx="54" cy="24" r="2" fill="#1B9CDA" opacity="0.5" className="eye-blink" />
            {/* Mouth (frown) */}
            <path d="M39 29 Q45 25 51 29" stroke="#1B9CDA" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
          </svg>
          {/* Orbit dot */}
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#1B9CDA] rounded-full orbit-dot" />
        </div>

        {/* HERO 404 */}
        <div className="relative inline-block cursor-pointer mb-0" onClick={handleHeroClick}>
          <h1 className="text-[22vw] md:text-[18vw] lg:text-[16vw] font-black leading-none glitch-text" data-text="404">
            404
          </h1>
          <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B9CDA]/40 to-transparent" />
          {clickCount > 0 && (
            <div className="absolute -top-2 right-0 text-[10px] font-mono text-[#1B9CDA]/40 tracking-widest">
              ×{clickCount}
            </div>
          )}
        </div>

        {/* Headline */}
        <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight mt-6 mb-1 text-white">
          This page is out of stock.
        </h2>

        {/* Sub-headline */}
        <p className="text-[#1B9CDA]/60 text-sm md:text-base font-medium mb-4 tracking-wide">
          The listing you're looking for has been delisted, moved, or never existed.
        </p>

        {/* Terminal line */}
        <div className="inline-block border border-[#1B9CDA]/15 bg-[#1B9CDA]/[0.04] px-4 py-2.5 mb-10 max-w-xl w-full text-left">
          <p className="font-mono text-[#1B9CDA] text-[11px] md:text-xs leading-relaxed min-h-[1.4em] tracking-wide truncate">
            {text}
            <span className="inline-block w-0.5 h-3 bg-[#1B9CDA] ml-0.5 align-middle cursor-blink" />
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="inline-block px-10 py-4 border border-[#1B9CDA]/25 text-[#1B9CDA]/70 font-black uppercase tracking-widest text-xs hover:border-[#1B9CDA] hover:text-[#1B9CDA] transition-all duration-200"
          >
            Go Back
          </button>
          <Link
            ref={btnRef}
            href="/"
            className="inline-block px-10 py-4 bg-[#1B9CDA] text-[#060E22] font-black uppercase tracking-widest text-xs hover:bg-white transition-all duration-200 relative overflow-hidden btn-primary"
            style={{ transition: "background 0.2s, color 0.2s, transform 0.15s ease-out" }}
          >
            <span className="relative z-10">Back to Storefront</span>
          </Link>
          <Link
            href="/#customizer"
            className="inline-block px-10 py-4 border border-[#1B9CDA]/25 text-[#1B9CDA]/70 font-black uppercase tracking-widest text-xs hover:border-[#1B9CDA] hover:text-[#1B9CDA] transition-all duration-200"
          >
            Browse Catalogue
          </Link>
        </div>

        {/* Hint */}
        <p className="mt-10 text-[10px] font-mono text-white/15 tracking-widest uppercase">
          — tap the 404 for a surprise —
        </p>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;900&display=swap');

        /* Glitch effect on 404 */
        .glitch-text {
          position: relative;
          color: #ffffff;
          letter-spacing: -0.04em;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          font-size: inherit;
          font-weight: inherit;
          line-height: inherit;
          letter-spacing: inherit;
        }
        .glitch-text::before {
          color: #1B9CDA;
          clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%);
          transform: translateX(-3px);
          animation: glitch-a 3.5s infinite steps(1);
          opacity: 0.7;
        }
        .glitch-text::after {
          color: #ffffff;
          clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
          transform: translateX(3px);
          animation: glitch-b 3.5s infinite steps(1);
          opacity: 0.35;
        }
        @keyframes glitch-a {
          0%, 88%, 100% { clip-path: polygon(0 0, 0 0, 0 0, 0 0); transform: translateX(0); }
          90% { clip-path: polygon(0 18%, 100% 18%, 100% 36%, 0 36%); transform: translateX(-4px); }
          92% { clip-path: polygon(0 55%, 100% 55%, 100% 65%, 0 65%); transform: translateX(3px); }
          94% { clip-path: polygon(0 5%, 100% 5%, 100% 12%, 0 12%); transform: translateX(-2px); }
          96% { clip-path: polygon(0 72%, 100% 72%, 100% 88%, 0 88%); transform: translateX(5px); }
        }
        @keyframes glitch-b {
          0%, 88%, 100% { clip-path: polygon(0 0, 0 0, 0 0, 0 0); transform: translateX(0); }
          89% { clip-path: polygon(0 60%, 100% 60%, 100% 75%, 0 75%); transform: translateX(4px); }
          91% { clip-path: polygon(0 30%, 100% 30%, 100% 45%, 0 45%); transform: translateX(-3px); }
          93% { clip-path: polygon(0 80%, 100% 80%, 100% 95%, 0 95%); transform: translateX(2px); }
          95% { clip-path: polygon(0 10%, 100% 10%, 100% 22%, 0 22%); transform: translateX(-4px); }
        }

        /* Floating cart */
        .cart-float {
          animation: cartFloat 5s ease-in-out infinite;
        }
        @keyframes cartFloat {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-14px) rotate(1deg); }
        }

        /* Orbit dot */
        .orbit-dot {
          animation: orbitSpin 4s linear infinite;
          transform-origin: -28px 28px;
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg) translateX(28px); }
          to { transform: rotate(360deg) translateX(28px); }
        }

        /* Particles */
        .particle-float {
          animation: particleDrift ease-in-out infinite;
        }
        @keyframes particleDrift {
          0%, 100% { transform: translateY(0px); opacity: var(--opacity, 0.08); }
          50% { transform: translateY(-20px); opacity: calc(var(--opacity, 0.08) * 1.6); }
        }

        /* Cursor blink */
        .cursor-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }

        /* Page shake */
        @keyframes pageShake {
          10%, 90% { transform: translate3d(-2px, 0, 0); }
          20%, 80% { transform: translate3d(3px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-5px, 0, 0); }
          40%, 60% { transform: translate3d(5px, 0, 0); }
        }
        .page-shake {
          animation: pageShake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }

        /* Confetti */
        @keyframes confettiBurst {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          100% {
            transform: translate(
              calc(cos(var(--angle)) * 120px),
              calc(sin(var(--angle)) * 120px + 80px)
            ) rotate(calc(var(--speed) * 180deg));
            opacity: 0;
          }
        }
        .confetti-piece {
          animation: confettiBurst 1.2s ease-out forwards;
        }

        /* Button hover ripple */
        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.1);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .btn-primary:hover::after {
          transform: scaleX(1);
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .glitch-text::before,
          .glitch-text::after,
          .cart-float,
          .orbit-dot,
          .particle-float,
          .cursor-blink {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}