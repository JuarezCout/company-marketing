import Link from "next/link";
import type { TemplateItem } from "@/data/templates";

export default function TemplateHero({ template }: { template: TemplateItem }) {
  return (
    <section
      className="relative flex min-h-[70vh] items-center overflow-hidden border-b"
      style={{
        background: template.theme.page,
        borderColor: template.theme.border,
        color: template.theme.text,
      }}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: template.theme.gradient,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p
              className="mb-4 text-[11px] tracking-[0.35em] uppercase"
              style={{ color: template.accent }}
            >
              {template.category}
            </p>
            <h1
              className="text-5xl font-black tracking-tight md:text-6xl lg:text-7xl"
              style={{ color: template.theme.text }}
            >
              {template.heroTitle}
            </h1>
            <p
              className="mt-6 max-w-2xl text-lg leading-relaxed"
              style={{ color: template.theme.muted }}
            >
              {template.heroSubtitle}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={`https://wa.me/${template.contact.whatsapp}?text=Olá! Gostaria de saber mais sobre este template.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] transition hover:opacity-90"
              style={{
                background: template.accent,
                color: template.theme.buttonText,
              }}
            >
              Solicitar orçamento
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center border px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition hover:opacity-90"
              style={{
                borderColor: template.theme.border,
                color: template.accent,
              }}
            >
              Voltar ao portfólio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
