import type { Metadata } from "next";
import { Oswald, Work_Sans } from "next/font/google";
import {
  ArrowRight,
  CalendarBlank,
  Camera,
  Clock,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  PaperPlaneTilt,
  Phone,
  Quotes,
  Scissors,
  Star,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import barbeariaContent from "@/content/barbearia.json";
import barbeariaImages from "@/content/images/barbearia.json";

/**
 * Redesign of /barbearia following the redesign-existing-projects audit,
 * referencing the "Modern Mane" Dribbble barbershop template: dark espresso
 * hero with a real appointment card, location strip, work gallery, price
 * list + featured testimonial, team grid, structured footer.
 */

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const whatsappLink = barbeariaContent.contact.whatsapp;
const shopAddress = barbeariaContent.brand.address;
const shopPhone = barbeariaContent.brand.phone;
const openingHours = barbeariaContent.contact.hours;
const prices = barbeariaContent.prices;
const gallery = barbeariaImages.gallery;
const team = barbeariaContent.team;

export const metadata: Metadata = {
  title: barbeariaContent.metadata.title,
  description: barbeariaContent.metadata.description,
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: barbeariaContent.brand.name,
    title: barbeariaContent.metadata.title,
    description: barbeariaContent.metadata.description,
  },
};

type PhotoPlaceholderProps = {
  caption: string;
  className?: string;
  tone?: "dark" | "cream";
};

/** Honest stand-in for real barbershop photography (no image-gen tool available in this session). */
function PhotoPlaceholder({
  caption,
  className,
  tone = "dark",
}: PhotoPlaceholderProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={`relative flex items-start overflow-hidden rounded-xl ${
        isDark
          ? "bg-[linear-gradient(135deg,#3a2a1d_0%,#241a14_100%)]"
          : "bg-[linear-gradient(135deg,#e4d6bf_0%,#ece3d3_100%)]"
      } ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 p-3">
        <Camera
          size={15}
          weight="light"
          className={isDark ? "text-white/60" : "text-[#7a6a55]"}
        />
        <span
          className={`text-xs ${isDark ? "text-white/60" : "text-[#7a6a55]"}`}
        >
          {caption}
        </span>
      </div>
    </div>
  );
}

export default function BarbeariaPage() {
  return (
    <div
      className={`${oswald.variable} ${workSans.variable} theme-barbearia min-h-screen bg-(--page) font-(family-name:--font-body) text-(--text) selection:bg-(--accent) selection:text-white`}
    >
      <header className="sticky top-0 z-50 border-b border-[#241a14]/10 bg-[#ece3d3]/92 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e0893f] font-(family-name:--font-display) text-lg font-semibold text-[#e0893f]">
              M
            </div>
            <span className="font-(family-name:--font-display) text-sm font-semibold uppercase tracking-[0.14em] text-[#241a14]">
              Malta Barbearia
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#5c4c3c] lg:flex">
            <a href="#servicos" className="transition hover:text-[#e0893f]">
              Servicos
            </a>
            <a href="#equipa" className="transition hover:text-[#e0893f]">
              Equipa
            </a>
            <a href="#trabalhos" className="transition hover:text-[#e0893f]">
              Trabalhos
            </a>
            <a href="#contacto" className="transition hover:text-[#e0893f]">
              Contacto
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#e0893f] px-5 py-2.5 text-xs font-medium text-white transition hover:bg-[#c5702c] active:scale-[0.98]"
          >
            Marcar horario
          </a>
        </div>
      </header>

      <main>
        {/* Hero: dark espresso block with a real appointment card */}
        <section className="relative overflow-hidden bg-[#241a14]">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,#241a14_35%,#3a2a1d_100%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8 lg:py-24">
            <div className="order-2 rounded-2xl border border-white/10 bg-[#2f2019] p-6 lg:order-1">
              <p className="mb-5 font-(family-name:--font-display) text-lg font-semibold uppercase tracking-[0.06em] text-white">
                Marcacao rapida
              </p>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium text-white/70"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={barbeariaContent.labels.namePlaceholder}
                    className="w-full rounded-lg border border-white/15 bg-[#241a14] px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#e0893f] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-xs font-medium text-white/70"
                  >
                    Telefone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={barbeariaContent.labels.phonePlaceholder}
                    className="w-full rounded-lg border border-white/15 bg-[#241a14] px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#e0893f] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-xs font-medium text-white/70"
                  >
                    Servico
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-lg border border-white/15 bg-[#241a14] px-3.5 py-2.5 text-sm text-white focus:border-[#e0893f] focus:outline-none"
                    defaultValue="Corte"
                  >
                    {prices.map((price) => (
                      <option key={price.name}>{price.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="slot"
                    className="mb-1.5 block text-xs font-medium text-white/70"
                  >
                    Horario preferido
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
                      placeholder={barbeariaContent.labels.datePlaceholder}
                      className="w-full rounded-lg border border-white/15 bg-[#241a14] py-2.5 pl-10 pr-3.5 text-sm text-white placeholder:text-white/35 focus:border-[#e0893f] focus:outline-none"
                    />
                  </div>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#e0893f] py-3 text-xs font-medium text-white transition hover:bg-[#c5702c] active:scale-[0.98]"
                >
                  Pedir marcacao
                  <ArrowRight size={15} weight="bold" />
                </a>
                <p className="text-center text-[11px] text-white/40">
                  Confirmamos a tua marcacao por WhatsApp.
                </p>
              </form>
            </div>

            <div className="order-1 flex flex-col justify-center text-white lg:order-2">
              <h1 className="max-w-lg font-(family-name:--font-display) text-4xl font-semibold uppercase leading-[1.08] tracking-[-0.01em] md:text-5xl">
                Onde a tradicao encontra o estilo moderno.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
                Cortes classicos e modernos, num ambiente que respeita o oficio
                e cuida de cada detalhe.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#trabalhos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-xs font-medium text-white transition hover:border-white/50"
                >
                  Ver trabalhos
                </a>
              </div>

              <div className="mt-12 grid max-w-md grid-cols-3 gap-4">
                {[
                  ["4.8/5", "Avaliacao"],
                  ["1.2k+", "Clientes"],
                  ["12 anos", "De oficio"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-(family-name:--font-display) text-2xl font-semibold text-[#e0893f]">
                      {value}
                    </p>
                    <p className="mt-1 text-xs text-white/55">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service beyond expectation: location strip */}
        <section className="bg-[#2f2019] px-6 py-16 text-white lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr_0.8fr] lg:items-center">
            <div>
              <h2 className="max-w-xs font-(family-name:--font-display) text-3xl font-semibold uppercase leading-[1.1]">
                Servico acima da expectativa.
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
                Cada corte e feito com atencao ao detalhe, tecnica apurada e
                produtos de qualidade, para que saias sempre com a mesma
                confianca.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e0893f] px-6 py-3 text-xs font-medium text-white transition hover:bg-[#c5702c] active:scale-[0.98]"
              >
                Pedir marcacao
                <ArrowRight size={15} weight="bold" />
              </a>
            </div>

            <PhotoPlaceholder
              caption="Mapa: localizacao da barbearia"
              className="h-52 w-full"
            />

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  weight="light"
                  className="mt-0.5 flex-none text-[#e0893f]"
                />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/45">
                    Localizacao
                  </p>
                  <p className="text-sm text-white/85">{shopAddress}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  weight="light"
                  className="mt-0.5 flex-none text-[#e0893f]"
                />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/45">
                    Telefone
                  </p>
                  <p className="text-sm text-white/85">{shopPhone}</p>
                  <p className="mt-1 text-xs text-white/45">
                    {openingHours[0][0]}: {openingHours[0][1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discover our works: horizontal scroll gallery */}
        <section
          id="trabalhos"
          className="bg-[#ece3d3] px-6 py-16 lg:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="font-(family-name:--font-display) text-3xl font-semibold uppercase text-[#241a14] md:text-4xl">
                  Descobre os nossos trabalhos.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5c4c3c]">
                  A nossa equipa esta sempre atualizada com as tecnicas e
                  tendencias mais recentes, para um resultado a tua medida.
                </p>
              </div>
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#8a7a68]">
                Desliza para ver mais
                <ArrowRight size={14} weight="bold" />
              </p>
            </div>

            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
              {gallery.map((image) => (
                <PhotoPlaceholder
                  key={image.caption}
                  caption={image.caption}
                  tone="cream"
                  className="h-64 w-64 flex-none snap-start"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Prices + featured testimonial */}
        <section id="servicos" className="bg-white px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 font-(family-name:--font-display) text-3xl font-semibold uppercase text-[#241a14] md:text-4xl">
                Os nossos precos.
              </h2>
              <div className="divide-y divide-dotted divide-[#241a14]/20">
                {prices.map((item) => (
                  <div key={item.name} className="flex items-center gap-3 py-4">
                    <Scissors
                      size={16}
                      weight="light"
                      className="flex-none text-[#e0893f]"
                    />
                    <span className="flex-1 text-sm text-[#241a14]">
                      {item.name}
                    </span>
                    <span className="font-(family-name:--font-display) text-base font-medium text-[#241a14]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-[#e0893f] p-8 text-white">
              <Quotes size={28} weight="fill" className="text-white/80" />
              <p className="mt-4 max-w-sm text-lg leading-relaxed">
                Ando aqui ha mais de cinco anos e nunca fiquei desiludido.
                Equipa profissional e sempre atenta as tendencias.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <Star size={14} weight="fill" />
                <Star size={14} weight="fill" />
                <Star size={14} weight="fill" />
                <Star size={14} weight="fill" />
                <Star size={14} weight="fill" />
              </div>
              <p className="mt-3 text-sm font-medium">{barbeariaContent.labels.reviewAuthor}</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section
          id="equipa"
          className="bg-[#ece3d3] px-6 py-16 lg:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-10 font-(family-name:--font-display) text-3xl font-semibold uppercase text-[#241a14] md:text-4xl">
              Conhece a equipa.
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl bg-white p-5 text-center"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    width={140}
                    height={140}
                    loading="lazy"
                    className="mx-auto h-28 w-28 rounded-full object-cover"
                  />
                  <p className="mt-4 text-sm font-medium text-[#241a14]">
                    {member.name}
                  </p>
                  <p className="text-xs text-[#8a7a68]">{member.role}</p>
                </div>
              ))}

              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#241a14]/25 p-5 text-center">
                <PaperPlaneTilt
                  size={22}
                  weight="light"
                  className="text-[#e0893f]"
                />
                <p className="mt-3 text-sm font-medium text-[#241a14]">
                  Queres juntar-te a equipa?
                </p>
                <a
                  href="mailto:equipa@maltabarbearia.pt"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#241a14] px-5 py-2.5 text-xs font-medium text-white transition hover:bg-[#3a2a1d]"
                >
                  Enviar candidatura
                  <EnvelopeSimple size={14} weight="light" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contacto"
        className="bg-[#241a14] px-6 py-14 text-white lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e0893f] font-(family-name:--font-display) text-lg font-semibold text-[#e0893f]">
                M
              </div>
              <span className="font-(family-name:--font-display) text-sm font-semibold uppercase tracking-[0.14em]">
                Malta Barbearia
              </span>
            </div>
            <p className="mt-4 text-sm text-white/55">{shopAddress}</p>
            <p className="mt-1 text-sm text-white/55">{shopPhone}</p>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-white/40">
              Menu
            </p>
            <div className="flex flex-col gap-1.5 text-sm text-white/70">
              <a href="#servicos" className="transition hover:text-[#e0893f]">
                Servicos
              </a>
              <a href="#equipa" className="transition hover:text-[#e0893f]">
                Equipa
              </a>
              <a href="#trabalhos" className="transition hover:text-[#e0893f]">
                Trabalhos
              </a>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-white/40">
              Horario
            </p>
            <div className="space-y-1 text-sm text-white/70">
              {openingHours.map(([day, hours]) => (
                <div key={day} className="flex justify-between gap-4">
                  <span>{day}</span>
                  <span className="text-white/50">{hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-white/40">
              Segue-nos
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label={barbeariaContent.labels.instagram}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-[#e0893f] hover:text-[#e0893f]"
              >
                <InstagramLogo size={16} weight="light" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label={barbeariaContent.labels.facebook}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-[#e0893f] hover:text-[#e0893f]"
              >
                <FacebookLogo size={16} weight="light" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label={barbeariaContent.labels.whatsapp}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-[#e0893f] hover:text-[#e0893f]"
              >
                <WhatsappLogo size={16} weight="light" />
              </a>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#e0893f] px-5 py-2.5 text-xs font-medium text-white transition hover:bg-[#c5702c] active:scale-[0.98]"
            >
              Marcar horario
              <ArrowRight size={14} weight="bold" />
            </a>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-7xl text-xs text-white/35">
          Copyright 2026 Malta Barbearia.
        </p>
      </footer>
    </div>
  );
}
