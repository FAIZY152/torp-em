import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main className="font-sans">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Skills />
        <Testimonials />
        <Pricing />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
