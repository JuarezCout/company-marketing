import type { TemplateItem } from "@/data/templates";

export default function TemplateSection({
  template,
}: {
  template: TemplateItem;
}) {
  return (
    <section
      className="px-6 py-20 lg:px-8"
      style={{ background: template.theme.page, color: template.theme.text }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p
              className="mb-4 text-xs uppercase tracking-[0.3em]"
              style={{ color: template.accent }}
            >
              Serviço principal
            </p>
            <h2
              className="text-4xl font-black md:text-5xl"
              style={{ color: template.theme.text }}
            >
              {template.name}
            </h2>
            <p
              className="mt-5 text-lg leading-relaxed"
              style={{ color: template.theme.muted }}
            >
              {template.description}
            </p>
          </div>

          <div className="grid gap-4">
            {template.stats.map((stat) => (
              <div
                key={stat.label}
                className="border p-6"
                style={{
                  borderColor: template.theme.border,
                  background: template.theme.panel,
                }}
              >
                <p
                  className="text-3xl font-black"
                  style={{ color: template.accent }}
                >
                  {stat.value}
                </p>
                <p className="mt-2" style={{ color: template.theme.muted }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
