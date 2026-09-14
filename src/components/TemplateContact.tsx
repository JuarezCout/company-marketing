import type { TemplateItem } from "@/data/templates";

export default function TemplateContact({
  template,
}: {
  template: TemplateItem;
}) {
  return (
    <section
      id="contacto"
      className="px-6 py-24 lg:px-8"
      style={{ background: template.theme.page, color: template.theme.text }}
    >
      <div
        className="mx-auto max-w-7xl rounded-2xl border p-8 md:p-12"
        style={{
          borderColor: template.theme.border,
          background: template.theme.panel,
        }}
      >
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p
              className="mb-4 text-xs uppercase tracking-[0.3em]"
              style={{ color: template.accent }}
            >
              Contacto
            </p>
            <h2
              className="text-4xl font-black md:text-5xl"
              style={{ color: template.theme.text }}
            >
              Pronto para levar este modelo ao próximo nível?
            </h2>
            <p
              className="mt-5 max-w-xl"
              style={{ color: template.theme.muted }}
            >
              Este template é um ponto de partida premium para um negócio real.
              Podemos personalizá-lo com identidade, serviços, fotografia e
              conversão real.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${template.contact.whatsapp}?text=Olá! Gostaria de saber mais sobre este template.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] transition hover:opacity-90"
                style={{
                  background: template.accent,
                  color: template.theme.buttonText,
                }}
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${template.contact.email}`}
                className="inline-flex items-center justify-center border px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition hover:opacity-90"
                style={{
                  borderColor: template.theme.border,
                  color: template.accent,
                }}
              >
                Email
              </a>
            </div>
          </div>

          <div
            className="space-y-4 text-sm"
            style={{ color: template.theme.muted }}
          >
            <div>
              <p
                className="mb-1 uppercase tracking-[0.2em] text-[10px]"
                style={{ color: template.accent }}
              >
                Telefone
              </p>
              <a
                href={`tel:${template.contact.phone}`}
                style={{ color: template.theme.text }}
                className="hover:opacity-80"
              >
                {template.contact.phone}
              </a>
            </div>
            <div>
              <p
                className="mb-1 uppercase tracking-[0.2em] text-[10px]"
                style={{ color: template.accent }}
              >
                WhatsApp
              </p>
              <a
                href={`https://wa.me/${template.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                style={{ color: template.theme.text }}
                className="hover:opacity-80"
              >
                {template.contact.whatsapp}
              </a>
            </div>
            <div>
              <p
                className="mb-1 uppercase tracking-[0.2em] text-[10px]"
                style={{ color: template.accent }}
              >
                Email
              </p>
              <a
                href={`mailto:${template.contact.email}`}
                style={{ color: template.theme.text }}
                className="hover:opacity-80"
              >
                {template.contact.email}
              </a>
            </div>
            <div>
              <p
                className="mb-1 uppercase tracking-[0.2em] text-[10px]"
                style={{ color: template.accent }}
              >
                Morada
              </p>
              <p style={{ color: template.theme.text }}>
                {template.contact.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
