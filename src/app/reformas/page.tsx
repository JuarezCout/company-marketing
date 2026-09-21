import type { Metadata } from "next";
import { Archivo, Karla } from "next/font/google";
import {
  Armchair,
  ArrowRight,
  Broom,
  Camera,
  Clock,
  Door,
  EnvelopeSimple,
  LightningA,
  MapPin,
  Minus,
  PaintRoller,
  Phone,
  Plus,
  Quotes,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import reformasContent from "@/content/reformas.json";

/**
 * Redesign of /reformas following the redesign-existing-projects audit,
 * referencing the "Handyma" Dribbble on-demand handyman template. Scope
 * broadened from renovations-only to general home services (reformas,
 * consertos e servicos gerais).
 */

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const whatsappLink = reformasContent.contact.whatsapp;
const companyPhone = reformasContent.brand.phone;
const companyEmail = reformasContent.brand.email;
const companyAddress = reformasContent.brand.address;
const openingHours = reformasContent.contact.hours;
const categories = reformasContent.serviceCategories.map((name, index) => ({
  name,
  Icon: [Wrench, LightningA, Armchair, Broom, Door, PaintRoller][index],
}));
const faqs = reformasContent.faq;

export const metadata: Metadata = {
  title: reformasContent.metadata.title,
  description: reformasContent.metadata.description,
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: reformasContent.brand.name,
    title: reformasContent.metadata.title,
    description: reformasContent.metadata.description,
  },
};

type PhotoPlaceholderProps = {
  className?: string;
  tone?: "dark" | "light";
};

function PhotoPlaceholder({ className, tone = "dark" }: PhotoPlaceholderProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={`overflow-hidden rounded-xl ${
        isDark
          ? "bg-[linear-gradient(135deg,#3a1f18_0%,#241512_100%)]"
          : "bg-[linear-gradient(135deg,#f3d9bb_0%,#fbe9d8_100%)]"
      } ${className ?? ""}`}
    />
  );
}

/** Rendered after any overlay so the caption always stays visible, unlike a nested one. */
function PhotoCaption({ caption }: { caption: string }) {
  return (
    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1.5 backdrop-blur-sm">
      <Camera size={13} weight="light" className="text-white/80" />
      <span className="text-[11px] text-white/80">{caption}</span>
    </div>
  );
}

export default function ReformasPage() {
  return (
    <div className={`${archivo.variable} ${karla.variable} theme-reformas min-h-screen bg-(--page) font-(family-name:--font-body) text-(--text) selection:bg-(--accent) selection:text-white`}>
      <header className="sticky top-0 z-50 border-b border-[#241512]/10 bg-[#fbe9d8]/92 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e2793a] font-(family-name:--font-display) text-lg font-bold text-[#e2793a]">
              C
            </div>
            <span className="font-(family-name:--font-display) text-sm font-bold uppercase tracking-widest text-[#241512]">
              Casa Certa
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#5c4438] lg:flex">
            <a href="#servicos" className="transition hover:text-[#e2793a]">
              Servicos
            </a>
            <a href="#avaliacoes" className="transition hover:text-[#e2793a]">
              Avaliacoes
            </a>
            <a href="#faq" className="transition hover:text-[#e2793a]">
              Perguntas
            </a>
            <a href="#contacto" className="transition hover:text-[#e2793a]">
              Contacto
            </a>
          </nav>

          <a
            href={`tel:${companyPhone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#e2793a] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#c5622a] active:scale-[0.98]"
          >
            <Phone size={14} weight="fill" />
            Ligar agora
          </a>
        </div>
      </header>

      <main>
        {/* Hero: dark maroon block with big caps headline + phone CTA */}
        <section className="relative overflow-hidden bg-[#241512]">
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:py-24">
            <div>
              <h1 className="font-(family-name:--font-display) text-5xl font-extrabold uppercase leading-[0.98] text-white md:text-6xl">
                Tecnico
                <br />
                <span className="text-[#e2793a]">de confianca</span>
                <br />
                perto de ti!
              </h1>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
                De pequenos arranjos a instalacoes completas, tratamos de
                quase tudo em tua casa, incluindo servicos de urgencia.
              </p>

              <a
                href={`tel:${companyPhone.replace(/\s/g, "")}`}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 text-sm font-semibold text-[#241512] transition hover:bg-white/90 active:scale-[0.98]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e2793a] text-white">
                  <Phone size={15} weight="fill" />
                </span>
                Ligar {companyPhone}
              </a>
            </div>

            <div className="relative">
              <PhotoPlaceholder tone="dark" className="h-72 w-full lg:h-full" />
              <PhotoCaption caption="Foto: tecnico a trabalhar em casa" />
            </div>
          </div>

          <div className="border-t border-white/10 bg-[#1c0f0c] px-6 py-5 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 text-[11px] font-semibold uppercase tracking-widest text-white/50">
              <span>Resposta rapida</span>
              <span>Precos transparentes</span>
              <span>Servico seguro</span>
              <span>Profissionais qualificados</span>
            </div>
          </div>
        </section>

        {/* Problem + service category gallery */}
        <section id="servicos" className="bg-[#fbe9d8] px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <h2 className="font-(family-name:--font-display) text-3xl font-extrabold uppercase text-[#241512] md:text-4xl">
                Precisas de ajuda em casa?
              </h2>
              <p className="mt-3 text-sm text-[#5c4438]">
                Estamos aqui para te ajudar, ja.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <div key={category.name} className="text-center">
                  <div className="relative">
                    <PhotoPlaceholder tone="light" className="h-28 w-full" />
                  </div>
                  <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[#241512]">
                    <category.Icon size={14} weight="light" className="text-[#e2793a]" />
                    {category.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted solutions */}
        <section className="bg-white px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative">
              <PhotoPlaceholder tone="dark" className="h-72 w-full lg:h-96" />
              <PhotoCaption caption="Foto: equipa Casa Certa" />
            </div>

            <div>
              <h2 className="font-(family-name:--font-display) text-3xl font-extrabold uppercase leading-tight text-[#241512] md:text-4xl">
                Solucoes de confianca para a tua casa
              </h2>
              <p className="mt-3 text-sm text-[#5c4438]">
                Reparacoes fiaveis. Servico profissional. Resultados de
                confianca sempre.
              </p>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-[#5c4438]">
                Prestamos servicos de manutencao e reparacao pensados para
                manter a tua casa segura, funcional e com bom aspeto. De
                pequenos arranjos a reformas completas, a nossa equipa
                entrega um trabalho cuidado, com atencao a cada detalhe.
              </p>
            </div>
          </div>
        </section>

        {/* Recent job case study */}
        <section className="bg-[#241512] px-6 py-16 text-white lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-2xl bg-[#2f1c17] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative">
              <PhotoPlaceholder tone="dark" className="h-56 w-full rounded-none lg:h-full" />
              <PhotoCaption caption="Foto: trabalho concluido" />
            </div>

            <div className="p-6 lg:p-10">
              <h3 className="font-(family-name:--font-display) text-2xl font-bold uppercase leading-tight">
                Para cada casa moderna
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                As nossas solucoes de reparacao sao pensadas para manter
                qualquer casa segura, funcional e com bom aspeto.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e2793a] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#c5622a] active:scale-[0.98]"
              >
                Pedir um servico assim
                <ArrowRight size={14} weight="bold" />
              </a>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
                {[
                  ["Cliente", "Marta Oliveira"],
                  ["Servico", "Pintura de parede"],
                  ["Duracao", "2h30"],
                  ["Custo estimado", "120 EUR - 160 EUR"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-[10px] uppercase tracking-widest text-white/40">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section id="avaliacoes" className="bg-[#fbe9d8] px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-[0.7fr_1.6fr_0.7fr]">
            <PhotoPlaceholder tone="light" className="hidden h-40 w-full lg:block" />

            <div className="text-center">
              <Quotes size={28} weight="fill" className="mx-auto text-[#e2793a]" />
              <p className="mt-5 text-lg leading-relaxed text-[#241512] md:text-xl">
                Tive uma fuga a meio da noite e fiquei preocupada que
                estragasse tudo. Contactei o suporte 24 horas e resolveram
                no proprio dia.
              </p>
              <p className="mt-5 text-sm font-semibold text-[#241512]">
                Sofia G. Teixeira
              </p>
              <p className="text-xs text-[#5c4438]">Cliente</p>
            </div>

            <PhotoPlaceholder tone="light" className="hidden h-40 w-full lg:block" />
          </div>
        </section>

        {/* Get in touch */}
        <section className="bg-[#e2793a] px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-[#241512]/15 bg-[#fbe9d8] px-4 py-3.5">
                <Phone size={18} weight="light" className="flex-none text-[#241512]" />
                <div>
                  <p className="text-sm font-semibold text-[#241512]">
                    {companyPhone}
                  </p>
                  <p className="text-xs text-[#5c4438]">Liga-nos hoje</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[#241512]/15 bg-[#241512] px-4 py-3.5">
                <EnvelopeSimple size={18} weight="light" className="flex-none text-[#e2793a]" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    {companyEmail}
                  </p>
                  <p className="text-xs text-white/50">Email profissional</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[#241512]/15 bg-[#fbe9d8] px-4 py-3.5">
                <MapPin size={18} weight="light" className="flex-none text-[#241512]" />
                <div>
                  <p className="text-sm font-semibold text-[#241512]">
                    {companyAddress}
                  </p>
                  <p className="text-xs text-[#5c4438]">Area de servico</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <PhotoPlaceholder tone="dark" className="h-64 w-full lg:h-80" />
              <PhotoCaption caption="Foto: equipa pronta a intervir" />
              <div className="absolute -bottom-6 -right-6 hidden h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-[#241512] text-center text-[9px] font-semibold uppercase leading-tight tracking-wide text-white lg:flex animate-[spin_16s_linear_infinite] motion-reduce:animate-none">
                Fala connosco ja
              </div>
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="bg-[#241512] px-6 py-16 text-white lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <h2 className="font-(family-name:--font-display) max-w-lg text-3xl font-extrabold uppercase leading-tight md:text-4xl">
                Servicos de reparacao domestica fiaveis, hoje
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
                As nossas solucoes de reparacao sao pensadas para manter a
                tua casa segura, funcional e com bom aspeto, do pequeno
                arranjo a reforma completa.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e2793a] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#c5622a] active:scale-[0.98]"
              >
                Pedir orcamento
                <ArrowRight size={14} weight="bold" />
              </a>
            </div>
            <PhotoPlaceholder tone="dark" className="h-56 w-full border border-white/10 lg:h-72" />
          </div>
        </section>

        {/* FAQ + contact form */}
        <section id="faq" className="bg-[#fbe9d8] px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <h2 className="font-(family-name:--font-display) text-3xl font-extrabold uppercase text-[#241512] md:text-4xl">
                Perguntas sobre manutencao da casa
              </h2>
              <p className="mt-3 text-sm text-[#5c4438]">
                Explicacoes simples e conselhos diretos.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="divide-y divide-[#241512]/10">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-[#241512]">
                      {faq.question}
                      <Minus
                        size={16}
                        weight="bold"
                        className="hidden flex-none text-[#e2793a] group-open:block"
                      />
                      <Plus
                        size={16}
                        weight="bold"
                        className="flex-none text-[#e2793a] group-open:hidden"
                      />
                    </summary>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#5c4438]">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>

              <div id="contacto" className="rounded-2xl bg-[#241512] p-6 text-white">
                <p className="mb-5 font-(family-name:--font-display) text-base font-bold">
                  Pedir contacto
                </p>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-xs font-medium text-white/65"
                    >
                      Telefone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+351 900 000 000"
                      className="w-full rounded-lg border border-white/15 bg-[#1c0f0c] px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#e2793a] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-xs font-medium text-white/65"
                    >
                      Servico
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue="Canalizacao"
                      className="w-full rounded-lg border border-white/15 bg-[#1c0f0c] px-3.5 py-2.5 text-sm text-white focus:border-[#e2793a] focus:outline-none"
                    >
                      <option>Canalizacao</option>
                      <option>Eletricidade</option>
                      <option>Pintura</option>
                      <option>Montagem de moveis</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-medium text-white/65"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Descreve o que precisas..."
                      className="w-full rounded-lg border border-white/15 bg-[#1c0f0c] px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#e2793a] focus:outline-none"
                    />
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#e2793a] py-3 text-xs font-semibold text-white transition hover:bg-[#c5622a] active:scale-[0.98]"
                  >
                    Pedir contacto
                    <ArrowRight size={15} weight="bold" />
                  </a>
                  <p className="text-center text-[11px] text-white/35">
                    Respondemos por WhatsApp no mesmo dia util.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#e2793a] px-6 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#241512]/60">
              Emergencia
            </p>
            <p className="text-sm font-medium text-[#241512]">{companyEmail}</p>
            <p className="mt-1 text-sm font-medium text-[#241512]">{companyPhone}</p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#241512]/60">
              Horario
            </p>
            <div className="space-y-1 text-sm text-[#241512]">
              {openingHours.map(([day, hours]) => (
                <div key={day} className="flex items-center gap-2">
                  <Clock size={13} weight="light" />
                  {day}: {hours}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="font-(family-name:--font-display) text-2xl font-extrabold uppercase text-[#241512]">
              Casa Certa
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#241512] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#1c0f0c]"
            >
              Pedir orcamento
              <ArrowRight size={14} weight="bold" />
            </a>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-7xl text-xs text-[#241512]/50">
          Copyright 2026 Casa Certa.
        </p>
      </footer>
    </div>
  );
}
