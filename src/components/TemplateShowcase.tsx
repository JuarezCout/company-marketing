import Link from "next/link";
import { templates } from "@/data/templates";

export default function TemplateShowcase() {
  return (
    <section id="templates" className="bg-brand-dark px-6 py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-brand-gold/60 text-xs tracking-[0.35em] uppercase mb-4">
            Templates prontos
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Soluções para cada tipo de negócio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {templates.map((template) => (
            <article
              key={template.slug}
              className="group border border-brand-gold/15 bg-brand-green/40 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-brand-gold/40"
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="px-3 py-1 text-[10px] tracking-[0.2em] uppercase"
                  style={{
                    background: template.accentSoft,
                    color: template.accent,
                    border: `1px solid ${template.accent}33`,
                  }}
                >
                  {template.category}
                </span>
                <span className="text-brand-gold text-xs uppercase tracking-[0.3em]">
                  {template.label}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {template.name}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                {template.tagline}
              </p>

              <div className="mb-6 space-y-3 text-sm text-white/70">
                {template.services.slice(0, 2).map((service) => (
                  <div key={service.title} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: template.accent }}
                    />
                    <span>{service.title}</span>
                  </div>
                ))}
              </div>

              <Link
                href={`/${template.slug}`}
                className="inline-flex items-center gap-2 text-brand-gold font-semibold tracking-[0.15em] uppercase text-xs"
              >
                Ver demo
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
