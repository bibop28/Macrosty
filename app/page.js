import AppPreview from "@/components/AppPreview";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Privacy from "@/components/Privacy";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050506] font-sans text-zinc-50">
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <AppPreview />
        <Features />
        <HowItWorks />
        <Privacy />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
