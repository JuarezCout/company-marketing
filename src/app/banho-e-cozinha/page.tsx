import type { Metadata } from "next";
import banhoContent from "@/content/banho-e-cozinha.json";

type IconProps = { className?: string };

function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 12.5 9.5 18 20 6"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="9.5"
        r="2.4"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

function ClockIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8.25"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6.5 4.5h2.7l1.2 3.6-1.9 1.7a11 11 0 0 0 5.7 5.7l1.7-1.9 3.6 1.2v2.7c0 1-.9 1.8-1.9 1.7-6.2-.6-11-5.4-11.6-11.6-.1-1 .7-1.9 1.7-1.9Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function KitchenIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="9"
        width="17"
        height="9.5"
        rx="0.5"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path d="M3.5 13.5h17" stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M8 5.5v3.5M16 5.5v3.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function BathIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 12h16v2.5A4.5 4.5 0 0 1 15.5 19h-7A4.5 4.5 0 0 1 4 14.5V12Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M4 12V9a2 2 0 0 1 2-2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M2.5 19h19"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShowerIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7 8.5a5 5 0 0 1 9.6-2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <rect
        x="5.5"
        y="8.5"
        width="13"
        height="3"
        rx="1.5"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M8 14.5v1.2M12 14.5v1.2M16 14.5v1.2M9 18v1M15 18v1"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function CounterIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="6"
        width="17"
        height="12"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path d="M3.5 11h17" stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M9 8.5h2M13 8.5h2M9 14h2M13 14h2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function FaucetIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 10V6.5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2V9h2.5a2 2 0 0 1 2 2v1.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 12.5v2.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M9 10v3a3 3 0 1 0 6 0v-1"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function LightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9 16.5h6M10 19h4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M12 3.5a5.5 5.5 0 0 0-3 10.1c.6.4 1 1 1 1.7v.7h4v-.7c0-.7.4-1.3 1-1.7A5.5 5.5 0 0 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

const services = [
  {
    name: "Remodelação de Cozinhas",
    description:
      "Cozinhas funcionais e bonitas, desenhadas à medida do espaço e da tua forma de viver.",
    price: "sob orçamento",
    Icon: KitchenIcon,
  },
  {
    name: "Casas de Banho Completas",
    description:
      "Renovação total com materiais de qualidade e um design que valoriza a tua casa.",
    price: "sob orçamento",
    Icon: BathIcon,
  },
  {
    name: "Duches & Banheiras",
    description:
      "Substituição ou instalação de duches e banheiras com acabamento impecável.",
    price: "desde €650",
    Icon: ShowerIcon,
  },
  {
    name: "Armários & Bancadas",
    description:
      "Móveis e bancadas à medida, pensados para maximizar arrumação e conforto.",
    price: "sob orçamento",
    Icon: CounterIcon,
  },
  {
    name: "Torneiras & Canalização",
    description:
      "Substituição de torneiras, sanitários e canalização decorativa com acabamento premium.",
    price: "desde €120",
    Icon: FaucetIcon,
  },
  {
    name: "Iluminação & Acabamentos",
    description:
      "Iluminação embutida, espelhos e detalhes finais que elevam todo o ambiente.",
    price: "desde €80",
    Icon: LightIcon,
  },
].map((service, index) => ({
  ...banhoContent.services[index],
  Icon: service.Icon,
}));

const reasons = banhoContent.reasons;
const steps = banhoContent.steps;

const testimonials = [
  {
    quote:
      "A cozinha ficou exatamente como sonhávamos. Equipa atenta a todos os detalhes do projeto.",
    author: "Helena C.",
  },
  {
    quote:
      "Casa de banho nova em menos de duas semanas, com um acabamento que parece de revista.",
    author: "Nuno F.",
  },
  {
    quote:
      "Orçamento claro e sem atrasos. O resultado final superou o que tínhamos imaginado.",
    author: "Beatriz R.",
  },
];

const whatsappLink = banhoContent.contact.whatsapp;
const companyAddress = banhoContent.brand.address;
const companyPhone = banhoContent.brand.phone;
const openingHours = banhoContent.contact.hours;

export const metadata: Metadata = {
  title: banhoContent.metadata.title,
  description: banhoContent.metadata.description,
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: banhoContent.brand.name,
    title: banhoContent.metadata.title,
    description: banhoContent.metadata.description,
  },
};

export default function BanhoECozinhaPage() {
  return (
    <div className="theme-banho-e-cozinha min-h-screen bg-(--page) text-(--text) selection:bg-(--accent) selection:text-(--text)">
      <header className="sticky top-0 z-50 border-b border-[#f9c74f]/12 bg-[#17120d]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f9c74f] text-sm font-black tracking-widest text-[#f9c74f]">
              BC
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#fff5ea]">
              Banho & Cozinha
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#f4dcc3] md:flex">
            <a href="#sobre" className="transition hover:text-[#f9c74f]">
              Sobre
            </a>
            <a href="#servicos" className="transition hover:text-[#f9c74f]">
              Serviços
            </a>
            <a href="#processo" className="transition hover:text-[#f9c74f]">
              Como funciona
            </a>
            <a href="#avaliacoes" className="transition hover:text-[#f9c74f]">
              Avaliações
            </a>
            <a href="#contacto" className="transition hover:text-[#f9c74f]">
              Contacto
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#f9c74f] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#17120d] transition hover:bg-[#fbd876] sm:px-5 sm:tracking-[0.2em]"
          >
            Pedir orçamento
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#17120d]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,199,79,0.14),transparent_45%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <h1 className="max-w-xl text-5xl font-black tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
                Mais conforto, mais beleza no teu espaço.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#f4dcc3]">
                Remodelação de cozinhas e casas de banho com design premium,
                materiais de qualidade e orçamento fechado em 7 dias.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f9c74f] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#17120d] transition hover:bg-[#fbd876]"
                >
                  Pedir orçamento
                  <ArrowIcon className="h-4 w-4" />
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-full border border-[#f9c74f]/35 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#f9c74f] transition hover:border-[#f9c74f] hover:bg-[#f9c74f]/5"
                >
                  Ver serviços
                </a>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 text-left">
                {[
                  ["7 dias", "Para proposta"],
                  ["300+", "Obras concluídas"],
                  ["4.8/5", "Satisfação"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#f9c74f]/15 bg-[#201a17] p-4"
                  >
                    <p className="text-2xl font-black text-[#f9c74f]">
                      {value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#f4dcc3]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-[#f9c74f]/12 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-[#f9c74f]/18 bg-[#201a17] p-5 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.6)]">
                <div className="mb-5 flex items-center justify-between border-b border-[#f9c74f]/15 pb-4">
                  <p className="text-xl font-semibold text-white">
                    Novo projeto
                  </p>
                  <div className="rounded-full border border-[#f9c74f]/30 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#f9c74f]">
                    Em design
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    ["Cozinha em L, 12m²", "Aprovado"],
                    ["Bancada em quartzo", "Selecionado"],
                    ["Iluminação embutida", "Selecionado"],
                    ["Casa de banho suite", "Em orçamento"],
                  ].map(([item, status]) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-lg border border-[#f9c74f]/10 bg-[#17120d] p-4"
                    >
                      <p className="text-sm font-semibold text-white">{item}</p>
                      <span className="text-sm font-bold text-[#f9c74f]">
                        {status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-[#f9c74f]/20 bg-[linear-gradient(135deg,rgba(249,199,79,0.14),rgba(255,255,255,0.03))] p-5">
                  <p className="text-3xl font-black text-white">
                    Proposta pronta
                  </p>
                  <p className="mt-2 text-sm text-[#f4dcc3]">
                    Enviada em 7 dias, com preços fechados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          className="border-t border-[#f9c74f]/10 bg-[#201a17] px-6 py-24 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="relative min-h-105 rounded-2xl border border-[#f9c74f]/15 bg-[radial-gradient(circle_at_top,rgba(249,199,79,0.18),rgba(23,18,13,0.3)),linear-gradient(135deg,#2e241f,#17120d)] p-6">
              <div className="relative flex h-full flex-col justify-between">
                <span className="inline-flex w-fit rounded-full border border-[#f9c74f]/25 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#f9c74f]">
                  Especialistas em acabamento
                </span>
                <div className="space-y-4">
                  <p className="text-4xl font-black tracking-[-0.03em] text-white">
                    Design que se sente.
                  </p>
                  <p className="text-lg leading-relaxed text-[#f4dcc3]">
                    Cada projeto une função e estética, para que o teu espaço
                    seja tão bonito quanto prático no dia a dia.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="max-w-lg text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                Funcionalidade com design premium.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-[#f4dcc3]">
                Trabalhamos com fornecedores selecionados e uma equipa de
                instalação especializada para transformar cozinhas e casas de
                banho em espaços que valorizam a tua casa e o teu dia a dia.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  ["300+", "Obras concluídas"],
                  ["4.8 ★", "Satisfação"],
                  ["7 dias", "Para proposta"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#f9c74f]/15 bg-[#201a17] p-5"
                  >
                    <p className="text-3xl font-black text-[#f9c74f]">
                      {value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#f4dcc3]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-[#17120d] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                O que fazemos
              </h2>
              <p className="max-w-xl text-sm text-[#f4dcc3]">
                Do projeto ao acabamento final, cuidamos de cada detalhe da tua
                cozinha ou casa de banho.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map(({ Icon, ...service }) => (
                <article
                  key={service.name}
                  className="group rounded-2xl border border-[#f9c74f]/15 bg-[#201a17] p-6 transition hover:-translate-y-1 hover:border-[#f9c74f]/35 hover:shadow-[0_20px_40px_-28px_rgba(249,199,79,0.35)]"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f9c74f]/10 text-[#f9c74f]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-bold text-[#f9c74f]">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#f4dcc3]">
                    {service.description}
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#f9c74f]/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#f9c74f] transition hover:bg-[#f9c74f] hover:text-[#17120d]"
                  >
                    Pedir orçamento
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#201a17] px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="max-w-md text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                Porque escolhem o nosso estúdio.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-[#f4dcc3]">
                Design, materiais e execução tratados com o mesmo cuidado, do
                primeiro esboço à última torneira instalada.
              </p>
            </div>

            <div className="divide-y divide-[#f9c74f]/15 border-t border-[#f9c74f]/15">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-5 py-7">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#f9c74f] text-[#17120d]">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#f4dcc3]">
                      {reason.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="bg-[#17120d] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                Um processo simples, do início ao fim
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-[#f9c74f]/15 bg-[#201a17] p-7"
                >
                  <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#f9c74f]">
                    Passo {step.number}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#f4dcc3]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-[#201a17] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                O que dizem os nossos clientes
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.author}
                  className="rounded-2xl border border-[#f9c74f]/15 bg-[#17120d] p-7"
                >
                  <p className="text-lg leading-relaxed text-[#fdf0e2]">
                    “{testimonial.quote}”
                  </p>
                  <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-[#f9c74f]">
                    {testimonial.author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-[#17120d] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10">
              <h2 className="text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                Pronto para renovar o teu espaço?
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-[#f9c74f]/20 bg-[linear-gradient(135deg,rgba(249,199,79,0.12),rgba(255,255,255,0.03))] p-8 md:p-10">
                <p className="max-w-md text-lg leading-relaxed text-[#fdf0e2]">
                  Envia-nos fotos e as medidas do teu espaço pelo WhatsApp e
                  recebes uma proposta em até 7 dias.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f9c74f] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#17120d] transition hover:bg-[#fbd876]"
                  >
                    Falar no WhatsApp
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`tel:${companyPhone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f9c74f]/35 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#f9c74f] transition hover:border-[#f9c74f] hover:bg-[#f9c74f]/5"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Ligar
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 rounded-2xl border border-[#f9c74f]/15 bg-[#201a17] p-6">
                  <PinIcon className="h-5 w-5 flex-none text-[#f9c74f]" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {banhoContent.labels.showroom}
                    </p>
                    <p className="mt-1 text-sm text-[#f4dcc3]">
                      {companyAddress}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-[#f9c74f]/15 bg-[#201a17] p-6">
                  <ClockIcon className="h-5 w-5 flex-none text-[#f9c74f]" />
                  <div className="w-full">
                    <p className="mb-2 text-sm font-semibold text-white">
                      Horário
                    </p>
                    <dl className="space-y-1">
                      {openingHours.map(([day, hours]) => (
                        <div
                          key={day}
                          className="flex items-center justify-between text-sm text-[#f4dcc3]"
                        >
                          <dt>{day}</dt>
                          <dd className="font-medium text-white">{hours}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#f9c74f]/15 bg-[#201a17] px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[#f4dcc3] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f9c74f] text-[10px] font-black tracking-widest text-[#f9c74f]">
              BC
            </div>
            <span className="uppercase tracking-[0.15em] text-white">
              Banho & Cozinha
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#servicos" className="transition hover:text-[#f9c74f]">
              Serviços
            </a>
            <a href="#processo" className="transition hover:text-[#f9c74f]">
              Como funciona
            </a>
            <span className="text-[#f9c74f]/30">•</span>
            <span>{companyAddress}</span>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#f9c74f]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
