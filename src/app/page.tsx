import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import SocialProof from "@/components/home/SocialProof";
import Problem from "@/components/home/Problem";
import Solution from "@/components/home/Solution";
import HowItWorks from "@/components/home/HowItWorks";
import Story from "@/components/home/Story";
import AIVision from "@/components/home/AIVision";
import DashboardPreview from "@/components/home/DashboardPreview";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* We are keeping this one out for now */}
      {/* <Story />
      <AIVision /> */}

      <Navbar />
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <DashboardPreview />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
