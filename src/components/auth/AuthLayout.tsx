import React from "react";
import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Left Branding Panel (Hidden on small screens) */}
      <div className="hidden md:flex md:w-1/2 bg-foreground text-background p-12 flex-col justify-between relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10">
          <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
            Trebo.
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6 leading-tight">
            Build your business.
            <br />
            Own your growth.
          </h1>
          <p className="text-lg text-background/60 font-medium">
            Join the premium platform empowering Nigerian entrepreneurs to scale effortlessly.
          </p>
        </div>
        
        <div className="relative z-10 flex items-center gap-4 text-sm font-medium text-background/40">
          <span>© {new Date().getFullYear()} Trebo Inc.</span>
          <Link href="#" className="hover:text-background/80 transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-background/80 transition-colors">Terms</Link>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-24">
        <div className="w-full max-w-sm mx-auto">
          {/* Mobile Logo */}
          <div className="md:hidden mb-12">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground">
              Trebo.
            </Link>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">
              {title}
            </h2>
            <p className="text-foreground/60 font-medium text-sm">
              {subtitle}
            </p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};
