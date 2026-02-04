import { HeroSection } from "@/components/HeroSection";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { Clients } from "@/components/Clients";
import { Link } from "react-router-dom"; 
import { AIShowcase } from "@/components/AIShowcase";
import { AboutUs } from "@/components/AboutUs";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Careers } from "@/components/Careers";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


import { ClosingStatement } from "@/components/ClosingStatement";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50   border-b border-border/50">
        <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 ">
             <Link to="/" className="flex items-center">
         
       
            <img
    src="/devzennn.png"
    alt="DevZen Software Solutions"
    className="h-14 w-auto object-contain mix-blend-multiply "
  />
   </Link>
  </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm text-white hover:text-blue-500 transition-colors">Home</Link>
            <a href="#about" className="text-sm text-white hover:text-blue-500 transition-colors">About Us</a>
            <Link to="/services" className="text-sm text-white hover:text-blue-500 transition-colors">Services</Link>
            <a href="#careers" className="text-sm text-white hover:text-blue-500 transition-colors">Careers</a>
          </div>
           <a href="#contact" className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-primary hover:opacity-90 transition-opacity">
          Contact
        </a>
        </div>
      </nav>

      <HeroSection />
      <FeatureHighlights />
      <Clients />
      <AIShowcase />
      <AboutUs />
      <WhyChooseUs />
      <Careers />
      <TestimonialsSection />
      <Contact />
      <ClosingStatement />
      <Footer />

    </main>
  );
};

export default Index;
