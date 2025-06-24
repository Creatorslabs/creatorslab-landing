import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sponsor from "@/components/Sponsor";
import Task from "@/components/Task";

export default function Home() {
  return (
    <div className="p-4 md:p-8 max-w-[1440px] mx-auto">
      <div className="sticky top-0 z-50 backdrop-blur-md">
        <Header />
      </div>
      <Hero />
      <Features />
      <Task />
      <CTA />
      <Sponsor />
      <Footer />
    </div>
  );
}
