import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarBlank,
  Camera,
  Check,
  Clock,
  FirstAid,
  HandsClapping,
  MapPin,
  Phone,
  Pulse,
  Quotes,
} from "@phosphor-icons/react/dist/ssr";
import saudeContent from "@/content/saude.json";

/**
 * Redesign of /saude following the redesign-existing-projects audit,
 * referencing the "Therapy" physiotherapy Dribbble template: full-bleed
 * dark-green hero with a real booking form, light mint services section,
 * 3-step recovery process, single featured testimonial.
 */

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const whatsappLink = saudeContent.contact.whatsapp;
const clinicAddress = saudeContent.brand.address;
const clinicPhone = saudeContent.brand.phone;
const openingHours = saudeContent.contact.hours;

const services = saudeContent.services.map((service, index) => ({
  ...service,
  Icon: [HandsClapping, FirstAid, Pulse][index],
}));

const steps = saudeContent.steps;

export const metadata: Metadata = {
  title: saudeContent.metadata.title,
  description: saudeContent.metadata.description,
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: saudeContent.brand.name,
    title: saudeContent.metadata.title,
    description: saudeContent.metadata.description,
  },
};

type PhotoPlaceholderProps = {
  className?: string;
  tone?: "dark" | "light";
};

/** Honest stand-in for real clinic photography (no image-gen tool available in this session). */
function PhotoPlaceholder({ className, tone = "dark" }: PhotoPlaceholderProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={`overflow-hidden rounded-xl ${
        isDark
          ? "bg-[linear-gradient(135deg,#1b3327_0%,#0f1f17_100%)]"
          : "bg-[linear-gradient(135deg,#dce8db_0%,#eef3e6_100%)]"
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

export default function SaudePage() {
  return (
    <div
      className={`${sora.variable} ${manrope.variable} theme-saude min-h-screen bg-(--page) font-(family-name:--font-body) text-(--text) selection:bg-(--accent) selection:text-white`}
    >
      <header className="sticky top-0 z-50 border-b border-[#16241b]/10 bg-[#eef3e6]/92 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4f7a4a] font-(family-name:--font-display) text-lg font-bold text-[#4f7a4a]">
              V
            </div>
            <span className="font-(family-name:--font-display) text-sm font-bold uppercase tracking-widest text-[#16241b]">
              Vita Fisioterapia
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#4a5c46] lg:flex">
            <a href="#servicos" className="transition hover:text-[#4f7a4a]">
              Servicos
            </a>
            <a href="#processo" className="transition hover:text-[#4f7a4a]">
              Processo
            </a>
            <a href="#avaliacoes" className="transition hover:text-[#4f7a4a]">
              Avaliacoes
            </a>
            <a href="#contacto" className="transition hover:text-[#4f7a4a]">
              Contacto
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#4f7a4a] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#3d6238] active:scale-[0.98]"
          >
            Marcar consulta
          </a>
        </div>
      </header>

      <main>
        {/* Hero: full-bleed dark green photo block with a real booking form */}
        <section className="relative overflow-hidden bg-[#0f1f17]">
          <PhotoPlaceholder
            tone="dark"
            className="absolute inset-0 rounded-none"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,#0f1f17_35%,rgba(15,31,23,0.55)_75%,rgba(15,31,23,0.2)_100%)]" />
          <PhotoCaption caption="Foto: fisioterapeuta a tratar um paciente" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="max-w-xl">
              <h1 className="font-(family-name:--font-display) text-4xl font-bold leading-[1.1] text-white md:text-5xl">
                Recuperar. Reconstruir.{" "}
                <span className="text-[#8fd488]">{saudeContent.labels.restart}</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
                Cuidados de fisioterapia personalizados para restaurares forca,
                mobilidade e confianca e viveres sem dor.
              </p>
            </div>

            <div className="relative mt-10 max-w-md rounded-2xl border border-white/10 bg-[#16241b]/90 p-6 backdrop-blur">
              <p className="mb-5 font-(family-name:--font-display) text-base font-semibold text-white">
                Marcar avaliacao
              </p>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium text-white/65"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={saudeContent.labels.namePlaceholder}
                    className="w-full rounded-lg border border-white/15 bg-[#0f1f17] px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#7fb37a] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium text-white/65"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={saudeContent.labels.emailPlaceholder}
                      className="w-full rounded-lg border border-white/15 bg-[#0f1f17] px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#7fb37a] focus:outline-none"
                    />
                  </div>
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
                      placeholder={saudeContent.labels.phonePlaceholder}
                      className="w-full rounded-lg border border-white/15 bg-[#0f1f17] px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#7fb37a] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="slot"
                    className="mb-1.5 block text-xs font-medium text-white/65"
                  >
                    Data e hora
                  </label>
                  <div className="relative">
                    <CalendarBlank
                      size={16}
                      weight="light"
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
                    />
                    <input
                      id="slot"
                      name="slot"
                      type="text"
                      placeholder={saudeContent.labels.datePlaceholder}
                      className="w-full rounded-lg border border-white/15 bg-[#0f1f17] py-2.5 pl-10 pr-3.5 text-sm text-white placeholder:text-white/30 focus:border-[#7fb37a] focus:outline-none"
                    />
                  </div>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#4f7a4a] py-3 text-xs font-semibold text-white transition hover:bg-[#3d6238] active:scale-[0.98]"
                >
                  Marcar avaliacao
                  <ArrowRight size={15} weight="bold" />
                </a>
                <p className="text-center text-[11px] text-white/35">
                  Confirmamos a tua marcacao por WhatsApp.
                </p>
              </form>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-[#16241b]/80 px-4 py-3 backdrop-blur">
              <div className="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/64?img=52"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full border-2 border-[#16241b] object-cover"
                />
                <img
                  src="https://i.pravatar.cc/64?img=13"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full border-2 border-[#16241b] object-cover"
                />
                <img
                  src="https://i.pravatar.cc/64?img=8"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full border-2 border-[#16241b] object-cover"
                />
              </div>
              <p className="text-xs text-white/75">
                Mais de 700 pacientes acompanhados por mes
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="servicos"
          className="bg-[#eef3e6] px-6 py-16 lg:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="font-(family-name:--font-display) text-3xl font-bold text-[#16241b] md:text-4xl">
                Servicos de <span className="text-[#4f7a4a]">{saudeContent.labels.servicesAccent}</span>
              </h2>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[#16241b]/15 px-5 py-2.5 text-xs font-semibold text-[#16241b] transition hover:border-[#4f7a4a] hover:text-[#4f7a4a]"
              >
                Todos os servicos
                <ArrowUpRight size={14} weight="bold" />
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="group rounded-2xl bg-white p-3"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <PhotoPlaceholder tone="light" className="h-44 w-full" />
                    <PhotoCaption caption={service.photoCaption} />
                    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#4f7a4a] text-white transition group-hover:bg-[#3d6238]">
                      <service.Icon size={16} weight="light" />
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="font-(family-name:--font-display) text-lg font-semibold text-[#16241b]">
                      {service.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-[#5c6b57]">
                      {service.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3-step recovery process */}
        <section
          id="processo"
          className="bg-[#16241b] px-6 py-16 text-white lg:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-10 max-w-md font-(family-name:--font-display) text-3xl font-bold leading-[1.15] md:text-4xl">
              O nosso processo de recuperacao em{" "}
              <span className="text-[#8fd488]">3 passos</span>
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number}>
                  <div className="relative">
                    <PhotoPlaceholder
                      tone="dark"
                      className="h-40 w-full border border-white/10"
                    />
                    <PhotoCaption caption={`Foto: passo ${step.number}`} />
                  </div>
                  <p className="mt-4 font-(family-name:--font-display) text-sm font-semibold text-[#8fd488]">
                    {step.number}
                  </p>
                  <h3 className="mt-1 text-base font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-white/60">{step.text}</p>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#4f7a4a] px-7 py-3.5 text-xs font-semibold text-white transition hover:bg-[#3d6238] active:scale-[0.98]"
            >
              Comecar a tua recuperacao
              <ArrowRight size={15} weight="bold" />
            </a>
          </div>
        </section>

        {/* Featured testimonial */}
        <section
          id="avaliacoes"
          className="bg-[#eef3e6] px-6 py-16 lg:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <Quotes
              size={30}
              weight="fill"
              className="mx-auto text-[#4f7a4a]"
            />
            <p className="mt-6 font-(family-name:--font-display) text-2xl font-medium leading-snug text-[#16241b] md:text-3xl">
              Recuperei a mobilidade do joelho muito mais rapido do que
              esperava. Acompanhamento atento em cada sessao.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <img
                src="https://i.pravatar.cc/64?img=59"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-[#16241b]">
                  Fernando A.
                </p>
                <p className="text-xs text-[#5c6b57]">{saudeContent.labels.patient}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            <div className="flex items-start gap-3 rounded-2xl bg-[#eef3e6] p-6">
              <MapPin
                size={20}
                weight="light"
                className="flex-none text-[#4f7a4a]"
              />
              <div>
                <p className="text-sm font-semibold text-[#16241b]">{saudeContent.labels.address}</p>
                <p className="mt-1 text-sm text-[#5c6b57]">{clinicAddress}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-[#eef3e6] p-6">
              <Phone
                size={20}
                weight="light"
                className="flex-none text-[#4f7a4a]"
              />
              <div>
                <p className="text-sm font-semibold text-[#16241b]">{saudeContent.labels.phone}</p>
                <p className="mt-1 text-sm text-[#5c6b57]">{clinicPhone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-[#eef3e6] p-6">
              <Clock
                size={20}
                weight="light"
                className="flex-none text-[#4f7a4a]"
              />
              <div className="w-full">
                <p className="mb-1 text-sm font-semibold text-[#16241b]">
                  Horario
                </p>
                {openingHours.map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex justify-between text-xs text-[#5c6b57]"
                  >
                    <span>{day}</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contacto"
        className="bg-[#16241b] px-6 py-14 text-white lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8fd488] font-(family-name:--font-display) text-lg font-bold text-[#8fd488]">
              V
            </div>
            <div>
              <p className="font-(family-name:--font-display) text-sm font-bold uppercase tracking-widest">
                Vita Fisioterapia
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-white/50">
                <Check size={12} weight="bold" className="text-[#8fd488]" />
                {clinicAddress}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
            <a href="#servicos" className="transition hover:text-[#8fd488]">
              Servicos
            </a>
            <a href="#processo" className="transition hover:text-[#8fd488]">
              Processo
            </a>
            <a href="#avaliacoes" className="transition hover:text-[#8fd488]">
              Avaliacoes
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#4f7a4a] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#3d6238]"
            >
              Marcar consulta
              <ArrowRight size={14} weight="bold" />
            </a>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-7xl text-xs text-white/35">
          Copyright 2026 Vita Fisioterapia.
        </p>
      </footer>
    </div>
  );
}
