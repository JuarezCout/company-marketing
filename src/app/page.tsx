import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Process />
        <section id="servicos">
          <Portfolio />
        </section>
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
