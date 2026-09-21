import Link from "next/link";
import homeContent from "@/content/home.json";
import { templates } from "@/data/templates";
import reformsPlans from "@/content/reformas-plans.json";

export default function TemplateShowcase() {
  const showcaseItems = [
    ...homeContent.showcase.items,
    ...Object.values(reformsPlans)
      .filter((plan) => plan.slug !== "reformas")
      .map((plan) => ({
        slug: plan.slug,
        category: `Construção ${plan.plan}`,
        label: "Casa Certa",
        name: plan.name,
        tagline: plan.description,
        services: plan.services.slice(0, 2),
      })),
  ];

  return (
    <section id="templates" className="bg-brand-dark px-6 py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-brand-gold/60 text-xs tracking-[0.35em] uppercase mb-4">
            {homeContent.showcase.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {homeContent.showcase.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {showcaseItems.map((template) => {
            const theme = templates.find((item) => item.slug === template.slug) ?? templates.find((item) => item.slug === "reformas");
            if (!theme) return null;

            return (
              <article
                key={template.slug}
                className="group border border-brand-gold/15 bg-brand-green/40 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-brand-gold/40"
              >
                <div className="flex flex-col items-start gap-3 mb-6 sm:flex-row sm:items-start sm:justify-between">
                  <span
                    className="max-w-full break-words px-3 py-1 text-[10px] leading-relaxed tracking-[0.2em] uppercase"
                    style={{
                      background: theme.accentSoft,
                      color: theme.accent,
                      border: `1px solid ${theme.accent}33`,
                    }}
                  >
                    {template.category}
                  </span>
                  <span className="max-w-full text-left text-brand-gold text-xs leading-relaxed tracking-[0.3em] uppercase sm:max-w-[45%] sm:text-right">
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
                    <div key={service} className="flex items-start gap-3">
                      <span
                        className="mt-1 inline-block h-2 w-2 rounded-full"
                        style={{ backgroundColor: theme.accent }}
                      />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/${template.slug}`}
                  className="inline-flex items-center gap-2 text-brand-gold font-semibold tracking-[0.15em] uppercase text-xs"
                >
                  {homeContent.showcase.demo}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
