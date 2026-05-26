import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import Services from "@/components/sections/Services";
import AISection from "@/components/sections/AISection";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Reviews from "@/components/sections/Reviews";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative bg-void overflow-x-hidden">
      <Navbar />
      <Hero />
      <ValueProposition />
      <Services />
      <AISection />
      <Portfolio />
      <About />
      <Testimonials />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
