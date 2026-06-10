import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Schedule from "@/components/sections/Schedule";
import Trainers from "@/components/sections/Trainers";
import Membership from "@/components/sections/Membership";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Facilities from "@/components/sections/Facilities";
import MarqueeBar from "@/components/sections/MarqueeBar";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <MarqueeBar />
      <Stats />
      <About />
      <Programs />
      <Facilities />
      <Schedule />
      <Trainers />
      <CTA />
      <Membership />
      <Gallery />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
