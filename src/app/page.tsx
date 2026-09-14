import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TemplateShowcase from "@/components/TemplateShowcase";

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-brand-dark px-6 pb-16 pt-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-center text-xs uppercase tracking-[0.35em] text-brand-gold/60">
              Portfólio de templates premium
            </p>
            <h1 className="text-center text-5xl font-black tracking-tight text-white md:text-7xl">
              Sites feitos para negócios que querem crescer com presença.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-white/65">
              Explore exemplos prontos para diferentes setores e descubra o
              visual ideal para o seu próximo projeto.
            </p>
          </div>
        </section>

        <TemplateShowcase />
      </main>
      <Footer />
    </>
  );
}
