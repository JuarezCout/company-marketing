import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import {
  ArrowRight,
  Camera,
  Clock,
  Drop,
  Eye,
  FacebookLogo,
  InstagramLogo,
  Leaf,
  MapPin,
  Minus,
  PaintBrush,
  Phone,
  Plus,
  Quotes,
  Scissors,
  Sparkle,
  Star,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Design read: premium-consumer beauty salon landing page (redesign-overhaul),
 * editorial language inspired by the Crafto "Beauty Salon" reference on Dribbble.
 * Dials: VARIANCE 8 / MOTION 4 (CSS transitions only) / DENSITY 3.
 * Palette: Terracotta + Slate family (cream/white sections, two deliberate
 * dark navy-to-terracotta blocks reused as one consistent "color block" device).
 */

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const whatsappLink =
  "https://wa.me/351912345678?text=Ola! Gostaria de marcar um horario no estudio.";

const salonAddress = "Rua das Flores, 123, 1200-001 Lisboa";
const salonPhone = "+351 912 345 678";

const openingHours = [
  ["Segunda a Sexta", "09:30 - 19:30"],
  ["Sabado", "09:30 - 17:00"],
  ["Domingo", "Encerrado"],
];

const featureTriplet = [
  {
    number: "01",
    title: "Atendimento de excelencia",
    text: "Sem pressa, sem scripts.",
  },
  {
    number: "02",
    title: "Produtos cruelty-free",
    text: "Marcas selecionadas com cuidado.",
  },
  {
    number: "03",
    title: "Equipa certificada",
    text: "Formacao continua em cada area.",
  },
];

const serviceCards = [
  {
    name: "Cabelo",
    tagline: "Corte, cor e styling",
    photoCaption: "Foto: servico de cabelo",
  },
  {
    name: "Unhas",
    tagline: "Manicure e pedicure",
    photoCaption: "Foto: manicure e pedicure",
  },
  {
    name: "Estetica facial",
    tagline: "Limpeza e hidratacao",
    photoCaption: "Foto: tratamento facial",
  },
];

const pricingLeft = [
  {
    Icon: Scissors,
    name: "Corte & Escova",
    text: "Lavagem, corte e finalizacao",
    price: "25 EUR",
  },
  {
    Icon: Sparkle,
    name: "Manicure",
    text: "Verniz semipermanente incluido",
    price: "18 EUR",
  },
  {
    Icon: Drop,
    name: "Limpeza de pele",
    text: "Hidratacao profunda",
    price: "30 EUR",
  },
];

const pricingRight = [
  {
    Icon: PaintBrush,
    name: "Maquilhagem",
    text: "Para eventos e casamentos",
    price: "35 EUR",
  },
  {
    Icon: Leaf,
    name: "Depilacao",
    text: "Cera suave, resultado duradouro",
    price: "12 EUR",
  },
  {
    Icon: Eye,
    name: "Design de sobrancelha",
    text: "Com henna opcional",
    price: "15 EUR",
  },
];

const packages = [
  {
    title: "Pacote Noiva",
    text: "Cabelo, maquilhagem e prova incluida",
    photoCaption: "Foto: pacote noiva",
  },
  {
    title: "Pacote Expresso",
    text: "Manicure e escova em menos de uma hora",
    photoCaption: "Foto: pacote expresso",
  },
];

const team = [
  {
    name: "Marta Nogueira",
    role: "Cabeleireira",
    photo: "https://i.pravatar.cc/320?img=47",
  },
  {
    name: "Beatriz Salgado",
    role: "Esteticista",
    photo: "https://i.pravatar.cc/320?img=32",
  },
  {
    name: "Rita Coutinho",
    role: "Manicure",
    photo: "https://i.pravatar.cc/320?img=25",
  },
  {
    name: "Sofia Lemos",
    role: "Maquilhadora",
    photo: "https://i.pravatar.cc/320?img=44",
  },
];

const testimonials = [
  {
    quote:
      "Sai com o cabelo e as unhas impecaveis. Atendimento atento do inicio ao fim.",
    author: "Marta S.",
    role: "cliente ha 3 anos",
  },
  {
    quote:
      "Marcar pelo WhatsApp e tao pratico. O resultado supera sempre o que espero.",
    author: "Catia R.",
    role: "cliente",
  },
  {
    quote: "Fui para uma limpeza de pele e voltei apaixonada pelo espaco.",
    author: "Ines F.",
    role: "cliente",
  },
];

export const metadata: Metadata = {
  title: "Alma Studio de Beleza | Cuidado que revela a tua melhor versao",
  description:
    "Landing page editorial para um estudio de beleza, com foco em cabelo, unhas, estetica e marcacao via WhatsApp.",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Alma Studio de Beleza",
    title: "Alma Studio de Beleza | Cuidado que revela a tua melhor versao",
    description:
      "Landing page editorial para um estudio de beleza, com foco em cabelo, unhas, estetica e marcacao via WhatsApp.",
  },
};

type PhotoPlaceholderProps = {
  caption: string;
  className?: string;
  tone?: "light" | "dark";
};

/** Honest stand-in for real salon photography (no image-gen tool available in this session). */
function PhotoPlaceholder({
  caption,
  className,
  tone = "light",
}: PhotoPlaceholderProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={`relative flex items-start overflow-hidden rounded-2xl ${
        isDark
          ? "bg-[linear-gradient(135deg,#2a3038_0%,#4a3226_100%)]"
          : "bg-[linear-gradient(135deg,#efe6dd_0%,#f6ded1_100%)]"
      } ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 p-4">
        <Camera
          size={16}
          weight="light"
          className={isDark ? "text-white/70" : "text-[#8a6a56]"}
        />
        <span
          className={`text-xs ${isDark ? "text-white/70" : "text-[#8a6a56]"}`}
        >
          {caption}
        </span>
      </div>
    </div>
  );
}

export default function SalaoBelezaPage() {
  return (
    <div
      className={`${cormorant.variable} ${jost.variable} min-h-screen bg-[#faf7f4] font-(family-name:--font-body) text-[#1c2024] selection:bg-[#e07856] selection:text-white`}
    >
      <header className="sticky top-0 z-50 border-b border-[#1c2024]/8 bg-[#faf7f4]/92 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e07856] font-(family-name:--font-display) text-lg font-semibold text-[#e07856]">
              A
            </div>
            <span className="text-sm font-medium uppercase tracking-[0.16em] text-[#1c2024]">
              Alma Studio
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#54504c] lg:flex">
            <a href="#sobre" className="transition hover:text-[#e07856]">
              Sobre
            </a>
            <a href="#servicos" className="transition hover:text-[#e07856]">
              Servicos
            </a>
            <a href="#equipa" className="transition hover:text-[#e07856]">
              Equipa
            </a>
            <a href="#avaliacoes" className="transition hover:text-[#e07856]">
              Avaliacoes
            </a>
            <a href="#contacto" className="transition hover:text-[#e07856]">
              Contacto
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#e07856] px-5 py-2.5 text-xs font-medium text-white transition hover:bg-[#c9663f] active:scale-[0.98]"
          >
            Marcar horario
          </a>
        </div>
      </header>

      <main>
        {/* Hero: asymmetric split, dark editorial block (color-block device, use #1) */}
        <section className="relative overflow-hidden bg-[#161d24]">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,#161d24_20%,#4a3226_100%)] opacity-90" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-16 lg:grid-cols-[1fr_0.85fr] lg:gap-16 lg:px-8 lg:pt-20">
            <div className="flex flex-col justify-center text-white">
              <h1 className="max-w-lg font-(family-name:--font-display) text-5xl font-medium leading-[1.05] tracking-[-0.01em] md:text-6xl">
                Cuidado que revela a tua melhor versao.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
                Cabelo, pele e bem-estar num espaco pensado para te sentires
                cuidada, do primeiro dia a ultima visita.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#e07856] px-7 py-3.5 text-xs font-medium text-white transition hover:bg-[#c9663f] active:scale-[0.98]"
                >
                  Marcar horario
                  <ArrowRight size={16} weight="bold" />
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-xs font-medium text-white transition hover:border-white/50"
                >
                  Ver servicos
                </a>
              </div>
            </div>

            <div className="relative">
              <PhotoPlaceholder
                caption="Foto: cliente apos tratamento de beleza"
                className="h-105 w-full md:h-135"
              />
              <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-xl border border-[#1c2024]/8 bg-white px-5 py-4 shadow-[0_20px_45px_-25px_rgba(28,32,36,0.45)] md:left-8">
                <Star size={18} weight="fill" className="text-[#e07856]" />
                <p className="text-sm font-medium text-[#1c2024]">
                  4.9/5 <span className="text-[#54504c]">- 800+ clientes</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Promo micro-strip */}
        <section className="border-b border-[#1c2024]/8 bg-white px-6 py-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 sm:divide-x sm:divide-[#1c2024]/10">
            <div className="flex items-center gap-4 sm:pr-6">
              <Star
                size={22}
                weight="fill"
                className="flex-none text-[#e07856]"
              />
              <p className="text-sm text-[#54504c]">
                <span className="font-medium text-[#1c2024]">
                  Estudio premiado 2024.
                </span>{" "}
                Atendimento personalizado em cada visita.
              </p>
            </div>
            <div className="flex items-center gap-4 sm:pl-6">
              <Sparkle
                size={22}
                weight="fill"
                className="flex-none text-[#e07856]"
              />
              <p className="text-sm text-[#54504c]">
                <span className="font-medium text-[#1c2024]">
                  -20% em maquilhagem de noiva.
                </span>{" "}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[#e07856] hover:underline"
                >
                  Pedir orcamento
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* About: image + text split (1st of the split pattern) */}
        <section
          id="sobre"
          className="bg-[#faf7f4] px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <PhotoPlaceholder
              caption="Foto: interior do estudio"
              className="h-90 w-full lg:h-130"
            />

            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#e07856]">
                Sobre o estudio
              </p>
              <h2 className="max-w-md font-(family-name:--font-display) text-4xl font-medium leading-[1.1] text-[#1c2024] md:text-5xl">
                Tratamentos para o corpo. Cuidado para a pele.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-[#54504c]">
                Mais de uma decada a cuidar de peles e cabelos com tecnicas
                atuais, produtos de qualidade e uma equipa que trata cada
                cliente como unica.
              </p>
              <a
                href="#equipa"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#1c2024] underline decoration-[#e07856] decoration-2 underline-offset-4"
              >
                Conhecer a equipa
                <ArrowRight size={15} weight="bold" />
              </a>

              <div className="mt-12 grid gap-8 border-t border-[#1c2024]/10 pt-8 sm:grid-cols-3">
                {featureTriplet.map((feature) => (
                  <div key={feature.number}>
                    <p className="mb-2 font-(family-name:--font-display) text-sm text-[#c9663f]">
                      {feature.number}
                    </p>
                    <h3 className="mb-1 text-sm font-medium text-[#1c2024]">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#54504c]">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services: image-card trio */}
        <section id="servicos" className="bg-white px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#e07856]">
                Servicos do estudio
              </p>
              <h2 className="font-(family-name:--font-display) text-4xl font-medium text-[#1c2024] md:text-5xl">
                Cabelo, unhas e estetica
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {serviceCards.map((card) => (
                <div key={card.name} className="group">
                  <div className="overflow-hidden rounded-2xl">
                    <PhotoPlaceholder
                      caption={card.photoCaption}
                      className="h-72 w-full transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 font-(family-name:--font-display) text-2xl font-medium text-[#1c2024]">
                    {card.name}
                  </h3>
                  <p className="text-sm text-[#54504c]">{card.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing list: two-column icon rows, divide-y only (no double borders) */}
        <section className="bg-[#faf7f4] px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="mb-10 text-lg text-[#1c2024]">
              Os nossos precos mais pedidos.{" "}
              <a
                href="#contacto"
                className="font-medium text-[#e07856] hover:underline"
              >
                Ver todos os servicos
              </a>
            </p>

            <div className="grid gap-x-16 gap-y-1 md:grid-cols-2">
              <div className="divide-y divide-[#1c2024]/10">
                {pricingLeft.map((item) => (
                  <div key={item.name} className="flex items-center gap-4 py-5">
                    <item.Icon
                      size={22}
                      weight="light"
                      className="flex-none text-[#e07856]"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#1c2024]">
                        {item.name}
                      </p>
                      <p className="text-sm text-[#54504c]">{item.text}</p>
                    </div>
                    <span className="font-(family-name:--font-display) text-lg text-[#1c2024]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="divide-y divide-[#1c2024]/10">
                {pricingRight.map((item) => (
                  <div key={item.name} className="flex items-center gap-4 py-5">
                    <item.Icon
                      size={22}
                      weight="light"
                      className="flex-none text-[#e07856]"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#1c2024]">
                        {item.name}
                      </p>
                      <p className="text-sm text-[#54504c]">{item.text}</p>
                    </div>
                    <span className="font-(family-name:--font-display) text-lg text-[#1c2024]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Package promo duo */}
        <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            {packages.map((pack) => (
              <div
                key={pack.title}
                className="group relative overflow-hidden rounded-2xl"
              >
                <PhotoPlaceholder
                  caption={pack.photoCaption}
                  tone="dark"
                  className="h-80 w-full transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#161d24]/80 via-[#161d24]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <p className="font-(family-name:--font-display) text-2xl font-medium text-white">
                      {pack.title}
                    </p>
                    <p className="mt-1 text-sm text-white/75">{pack.text}</p>
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Marcar ${pack.title}`}
                    className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white text-[#1c2024] transition hover:bg-[#e07856] hover:text-white active:scale-[0.95]"
                  >
                    <ArrowRight size={18} weight="bold" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust banner: dark editorial block reused (color-block device, use #2) */}
        <section className="relative overflow-hidden bg-[#161d24]">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,#161d24_25%,#4a3226_100%)] opacity-90" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:px-8 lg:py-28">
            <PhotoPlaceholder
              caption="Foto: especialista em preparacao"
              className="h-80 w-full lg:h-115"
            />

            <div className="text-white">
              <h2 className="max-w-md font-(family-name:--font-display) text-4xl font-medium leading-[1.1] md:text-5xl">
                A qualidade e a seguranca em primeiro lugar.
              </h2>

              <div className="mt-8 border-t border-white/15">
                <details open className="group border-b border-white/15 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                    Produtos e tecnicas certificadas
                    <Minus
                      size={16}
                      weight="bold"
                      className="hidden flex-none group-open:block"
                    />
                    <Plus
                      size={16}
                      weight="bold"
                      className="flex-none group-open:hidden"
                    />
                  </summary>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">
                    Ha mais de dez anos a par das normas de higiene e seguranca
                    mais exigentes do setor, com produtos dermatologicamente
                    testados.
                  </p>
                </details>
                <details className="group border-b border-white/15 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                    Acompanhamento a cada visita
                    <Minus
                      size={16}
                      weight="bold"
                      className="hidden flex-none group-open:block"
                    />
                    <Plus
                      size={16}
                      weight="bold"
                      className="flex-none group-open:hidden"
                    />
                  </summary>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">
                    Registamos o teu historico e preferencias para que cada
                    visita seguinte seja ainda mais precisa.
                  </p>
                </details>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e07856] px-7 py-3.5 text-xs font-medium text-white transition hover:bg-[#c9663f] active:scale-[0.98]"
              >
                Marcar horario
                <ArrowRight size={16} weight="bold" />
              </a>
            </div>
          </div>
        </section>

        {/* Specialists / team grid */}
        <section
          id="equipa"
          className="bg-[#faf7f4] px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#e07856]">
                A nossa equipa
              </p>
              <h2 className="font-(family-name:--font-display) text-4xl font-medium text-[#1c2024] md:text-5xl">
                Especialistas em beleza
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    width={160}
                    height={160}
                    loading="lazy"
                    className="mx-auto h-32 w-32 rounded-full object-cover"
                  />
                  <p className="mt-4 text-sm font-medium text-[#1c2024]">
                    {member.name}
                  </p>
                  <p className="text-sm text-[#54504c]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="avaliacoes"
          className="bg-white px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#e07856]">
                Avaliacoes
              </p>
              <h2 className="font-(family-name:--font-display) text-4xl font-medium text-[#1c2024] md:text-5xl">
                As nossas clientes recomendam
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.author}
                  className="rounded-2xl border border-[#1c2024]/10 bg-[#faf7f4] p-7"
                >
                  <Quotes size={24} weight="fill" className="text-[#e07856]" />
                  <p className="mt-4 text-base leading-relaxed text-[#1c2024]">
                    {testimonial.quote}
                  </p>
                  <footer className="mt-6 text-sm">
                    <span className="font-medium text-[#1c2024]">
                      {testimonial.author}
                    </span>
                    <span className="text-[#54504c]">
                      {" "}
                      - {testimonial.role}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / location */}
        <section
          id="contacto"
          className="bg-[#faf7f4] px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 font-(family-name:--font-display) text-4xl font-medium text-[#1c2024] md:text-5xl">
              Vamos tratar de ti?
            </h2>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <PhotoPlaceholder
                caption="Foto: fachada do estudio"
                className="h-64 w-full lg:h-full"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex gap-4 rounded-2xl border border-[#1c2024]/10 bg-white p-6">
                  <MapPin
                    size={20}
                    weight="light"
                    className="flex-none text-[#e07856]"
                  />
                  <div>
                    <p className="text-sm font-medium text-[#1c2024]">Morada</p>
                    <p className="mt-1 text-sm text-[#54504c]">
                      {salonAddress}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-[#1c2024]/10 bg-white p-6">
                  <Clock
                    size={20}
                    weight="light"
                    className="flex-none text-[#e07856]"
                  />
                  <div className="w-full">
                    <p className="mb-2 text-sm font-medium text-[#1c2024]">
                      Horario
                    </p>
                    <dl className="space-y-1">
                      {openingHours.map(([day, hours]) => (
                        <div
                          key={day}
                          className="flex items-center justify-between text-sm text-[#54504c]"
                        >
                          <dt>{day}</dt>
                          <dd className="font-medium text-[#1c2024]">
                            {hours}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-[#1c2024]/10 bg-white p-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-sm leading-relaxed text-[#54504c]">
                    A forma mais rapida de marcar e pelo WhatsApp: dizes o
                    servico e respondemos com os horarios disponiveis.
                  </p>
                  <div className="flex flex-none gap-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#e07856] px-6 py-3 text-xs font-medium text-white transition hover:bg-[#c9663f] active:scale-[0.98]"
                    >
                      Marcar horario
                      <ArrowRight size={15} weight="bold" />
                    </a>
                    <a
                      href={`tel:${salonPhone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 rounded-full border border-[#1c2024]/15 px-6 py-3 text-xs font-medium text-[#1c2024] transition hover:border-[#e07856] hover:text-[#e07856]"
                    >
                      <Phone size={15} weight="light" />
                      Ligar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA strip */}
        <section className="bg-[#161d24] px-6 py-14 text-center lg:px-8">
          <p className="mx-auto max-w-xl font-(family-name:--font-display) text-2xl font-medium text-white md:text-3xl">
            Todas merecem sentir-se bem tratadas.{" "}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="text-[#e07856] underline decoration-2 underline-offset-4 hover:text-[#f0906f]"
            >
              Marca o teu horario
            </a>
          </p>
        </section>
      </main>

      <footer className="border-t border-[#1c2024]/10 bg-white px-6 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1fr_1fr_1fr]">
          <div className="flex items-center gap-3 md:col-span-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e07856] font-(family-name:--font-display) text-lg font-semibold text-[#e07856]">
              A
            </div>
            <span className="text-sm font-medium uppercase tracking-[0.16em] text-[#1c2024]">
              Alma Studio
            </span>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#8a857f]">
              Contacto
            </p>
            <p className="text-sm text-[#54504c]">{salonAddress}</p>
            <p className="mt-1 text-sm text-[#54504c]">{salonPhone}</p>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#8a857f]">
              Ligacoes rapidas
            </p>
            <div className="flex flex-col gap-1.5 text-sm text-[#54504c]">
              <a href="#servicos" className="transition hover:text-[#e07856]">
                Servicos
              </a>
              <a href="#equipa" className="transition hover:text-[#e07856]">
                Equipa
              </a>
              <a href="#avaliacoes" className="transition hover:text-[#e07856]">
                Avaliacoes
              </a>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#8a857f]">
              Segue-nos
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1c2024]/12 text-[#1c2024] transition hover:border-[#e07856] hover:text-[#e07856]"
              >
                <InstagramLogo size={16} weight="light" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1c2024]/12 text-[#1c2024] transition hover:border-[#e07856] hover:text-[#e07856]"
              >
                <FacebookLogo size={16} weight="light" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1c2024]/12 text-[#1c2024] transition hover:border-[#e07856] hover:text-[#e07856]"
              >
                <WhatsappLogo size={16} weight="light" />
              </a>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-7xl text-xs text-[#8a857f]">
          Copyright 2026 Alma Studio de Beleza.
        </p>
      </footer>
    </div>
  );
}
