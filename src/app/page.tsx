import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TemplateShowcase from "@/components/TemplateShowcase";
import homeContent from "@/content/home.json";

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-brand-dark px-6 pb-16 pt-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-center text-xs uppercase tracking-[0.35em] text-brand-gold/60">
              {homeContent.hero.eyebrow}
            </p>
            <h1 className="text-center text-5xl font-black tracking-tight text-white md:text-7xl">
              {homeContent.hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-white/65">
              {homeContent.hero.description}
            </p>
          </div>
        </section>

        <TemplateShowcase />
      </main>
      <Footer />
    </>
  );
}
