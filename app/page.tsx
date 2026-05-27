import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import Services from "@/components/sections/Services";
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

      <div className="section-dark">
        <Hero />
      </div>

      <div className="section-divider" />

      <div className="section-darker">
        <ValueProposition />
      </div>

      <div className="section-divider" />

      <div className="section-dark">
        <Services />
      </div>

      <div className="section-divider" />

      <div className="section-darker">
        <Portfolio />
      </div>

      <div className="section-divider" />

      <div className="section-dark">
        <About />
      </div>

      <div className="section-divider" />

      <div className="section-darker">
        <Testimonials />
      </div>

      <div className="section-divider" />

      <div className="section-dark">
        <Reviews />
      </div>

      <div className="section-divider" />

      <div className="section-darker">
        <Blog />
      </div>

      <div className="section-divider" />

      <div className="section-dark">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}