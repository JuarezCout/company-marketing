import type { Metadata } from "next";

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

function HammerIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14.5 6.5 18 3l3 3-3.5 3.5M14.5 6.5 5 16v3h3l9.5-9.5M14.5 6.5l3 3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaintIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 3.5h9v6l-2.5 2.5H8.5L6 9.5v-6Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M11 12v4.5c0 1.4-1.1 2.5-2.5 2.5S6 17.9 6 16.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TileIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="3.5"
        width="7.2"
        height="7.2"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <rect
        x="13.3"
        y="3.5"
        width="7.2"
        height="7.2"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <rect
        x="3.5"
        y="13.3"
        width="7.2"
        height="7.2"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <rect
        x="13.3"
        y="13.3"
        width="7.2"
        height="7.2"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

function BoltIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M13 3 5 13.5h5.5L10.5 21 19 9.5h-5.5L13 3Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RulerIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.5 15 15 3.5l5.5 5.5L9 20.5 3.5 15Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M8 12.5 9.5 14M11 9.5 12.5 11M14 6.5 15.5 8"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3.5 19 6.5v5c0 5-3 8-7 9-4-1-7-4-7-9v-5l7-3Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const services = [
  {
    name: "Reforma Integral",
    description:
      "Remodelação completa da casa, do planeamento à entrega, com acompanhamento próximo em cada fase.",
    price: "orçamento sob medida",
    Icon: HammerIcon,
  },
  {
    name: "Pinturas & Acabamentos",
    description:
      "Pintura interior e exterior, estuques e acabamentos finos que renovam qualquer espaço.",
    price: "desde €8/m²",
    Icon: PaintIcon,
  },
  {
    name: "Pavimentos & Revestimentos",
    description:
      "Colocação de soalho, cerâmica e revestimentos com nivelamento e acabamento profissional.",
    price: "desde €25/m²",
    Icon: TileIcon,
  },
  {
    name: "Eletricidade & Canalização",
    description:
      "Instalações novas ou atualização de redes elétricas e de água integradas na obra.",
    price: "sob orçamento",
    Icon: BoltIcon,
  },
  {
    name: "Carpintaria à Medida",
    description:
      "Roupeiros, cozinhas e mobiliário fixo desenhados para aproveitar cada espaço da casa.",
    price: "sob orçamento",
    Icon: RulerIcon,
  },
  {
    name: "Impermeabilização & Isolamento",
    description:
      "Proteção contra humidade e melhoria do conforto térmico e acústico da habitação.",
    price: "desde €35/m²",
    Icon: ShieldIcon,
  },
];

const reasons = [
  {
    title: "Orçamento claro desde o início",
    text: "Sem surpresas: valores fechados por fase de obra, antes de qualquer trabalho começar.",
  },
  {
    title: "Equipa própria",
    text: "Sem subcontratação aleatória. A mesma equipa acompanha a obra do primeiro ao último dia.",
  },
  {
    title: "Cronograma cumprido",
    text: "Planeamento realista e comunicação semanal sobre o progresso da tua obra.",
  },
];

const steps = [
  {
    number: "01",
    title: "Visita e orçamento",
    text: "Vamos ao local, percebemos o projeto e entregamos um orçamento detalhado em poucos dias.",
  },
  {
    number: "02",
    title: "Planeamento da obra",
    text: "Definimos cronograma, materiais e fases de execução antes de qualquer trabalho arrancar.",
  },
  {
    number: "03",
    title: "Execução e entrega",
    text: "Obra acompanhada de perto, com entrega final revista contigo e garantia por escrito.",
  },
];

const testimonials = [
  {
    quote:
      "Orçamento certinho do início ao fim, sem surpresas. A obra terminou no prazo combinado.",
    author: "Paulo M.",
  },
  {
    quote:
      "Equipa organizada e sempre a par do que se passava em casa. Recomendo sem hesitar.",
    author: "Sandra L.",
  },
  {
    quote:
      "Remodelámos a casa toda e o resultado superou o que esperávamos. Acabamentos impecáveis.",
    author: "Jorge T.",
  },
];

const whatsappLink =
  "https://wa.me/351223000000?text=Olá! Gostaria de pedir um orçamento para uma obra.";

const companyAddress = "Rua do Trabalho, 73, 3000-001 Coimbra";
const companyPhone = "+351 223 000 000";
const openingHours = [
  ["Segunda a Sexta", "08:30 – 18:30"],
  ["Sábado", "09:00 – 13:00"],
  ["Domingo", "Encerrado"],
];

export const metadata: Metadata = {
  title: "Reformas & Construção | Rigor, transparência e resultado",
  description:
    "Landing page para uma empresa de reformas focada em orçamento transparente, acompanhamento de obra e conversão via WhatsApp.",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Reformas & Construção",
    title: "Reformas & Construção | Rigor, transparência e resultado",
    description:
      "Landing page para uma empresa de reformas focada em orçamento transparente, acompanhamento de obra e conversão via WhatsApp.",
  },
};

export default function ReformasPage() {
  return (
    <div className="min-h-screen bg-[#0d1217] text-[#edf7ff] selection:bg-[#8ecae6] selection:text-[#09161d]">
      <header className="sticky top-0 z-50 border-b border-[#8ecae6]/12 bg-[#0d1217]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8ecae6] text-sm font-black tracking-widest text-[#8ecae6]">
              RC
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#edf7ff]">
              Reformas & Construção
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#bdd9e9] md:flex">
            <a href="#sobre" className="transition hover:text-[#8ecae6]">
              Sobre
            </a>
            <a href="#servicos" className="transition hover:text-[#8ecae6]">
              Serviços
            </a>
            <a href="#processo" className="transition hover:text-[#8ecae6]">
              Como funciona
            </a>
            <a href="#avaliacoes" className="transition hover:text-[#8ecae6]">
              Avaliações
            </a>
            <a href="#contacto" className="transition hover:text-[#8ecae6]">
              Contacto
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#8ecae6] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#09161d] transition hover:bg-[#a8d8ee] sm:px-5 sm:tracking-[0.2em]"
          >
            Pedir orçamento
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#0d1217]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(142,202,230,0.14),transparent_45%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <h1 className="max-w-xl text-5xl font-black tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
                A tua obra, com rigor e sem surpresas.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#bdd9e9]">
                Remodelações completas com orçamento transparente, cronograma
                cumprido e uma equipa própria que acompanha a obra do início ao
                fim.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8ecae6] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#09161d] transition hover:bg-[#a8d8ee]"
                >
                  Pedir orçamento
                  <ArrowIcon className="h-4 w-4" />
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-full border border-[#8ecae6]/35 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#8ecae6] transition hover:border-[#8ecae6] hover:bg-[#8ecae6]/5"
                >
                  Ver serviços
                </a>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 text-left">
                {[
                  ["12 anos", "De experiência"],
                  ["230+", "Projetos concluídos"],
                  ["100%", "Orçamento claro"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#8ecae6]/15 bg-[#121d26] p-4"
                  >
                    <p className="text-2xl font-black text-[#8ecae6]">
                      {value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#bdd9e9]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-[#8ecae6]/12 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-[#8ecae6]/18 bg-[#121d26] p-5 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.55)]">
                <div className="mb-5 flex items-center justify-between border-b border-[#8ecae6]/15 pb-4">
                  <p className="text-xl font-semibold text-white">
                    Estado da obra
                  </p>
                  <div className="rounded-full border border-[#8ecae6]/30 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#8ecae6]">
                    Semana 4
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    ["Demolição & Preparação", "Concluído"],
                    ["Eletricidade & Canalização", "Concluído"],
                    ["Pavimentos & Revestimentos", "Em curso"],
                    ["Pinturas & Acabamentos", "Agendado"],
                  ].map(([phase, status]) => (
                    <div
                      key={phase}
                      className="flex items-center justify-between rounded-lg border border-[#8ecae6]/10 bg-[#0f1a22] p-4"
                    >
                      <p className="text-sm font-semibold text-white">
                        {phase}
                      </p>
                      <span className="text-sm font-bold text-[#8ecae6]">
                        {status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-[#8ecae6]/20 bg-[linear-gradient(135deg,rgba(142,202,230,0.12),rgba(255,255,255,0.03))] p-5">
                  <p className="text-3xl font-black text-white">
                    Entrega prevista
                  </p>
                  <p className="mt-2 text-sm text-[#bdd9e9]">
                    Dentro do prazo acordado, sem atrasos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          className="border-t border-[#8ecae6]/10 bg-[#101a22] px-6 py-24 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="relative min-h-105 rounded-2xl border border-[#8ecae6]/15 bg-[radial-gradient(circle_at_top,rgba(142,202,230,0.16),rgba(13,18,23,0.3)),linear-gradient(135deg,#182833,#0d1217)] p-6">
              <div className="relative flex h-full flex-col justify-between">
                <span className="inline-flex w-fit rounded-full border border-[#8ecae6]/25 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#8ecae6]">
                  A construir confiança desde 2012
                </span>
                <div className="space-y-4">
                  <p className="text-4xl font-black tracking-[-0.03em] text-white">
                    Mais do que uma obra.
                  </p>
                  <p className="text-lg leading-relaxed text-[#bdd9e9]">
                    Um processo pensado para que saibas sempre o que está a
                    acontecer em tua casa, do orçamento à última demão de tinta.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="max-w-lg text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                Rigor técnico e organização em cada fase.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-[#bdd9e9]">
                Trabalhamos com uma equipa própria e fornecedores de confiança
                para garantir que cada obra é entregue com qualidade, dentro do
                prazo e sem custos escondidos. Do projeto inicial ao
                acompanhamento pós-obra.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  ["230+", "Projetos concluídos"],
                  ["4.8 ★", "Satisfação"],
                  ["12 anos", "De experiência"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#8ecae6]/15 bg-[#121d26] p-5"
                  >
                    <p className="text-3xl font-black text-[#8ecae6]">
                      {value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#bdd9e9]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-[#0d1217] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                O que fazemos
              </h2>
              <p className="max-w-xl text-sm text-[#bdd9e9]">
                Da reforma integral aos acabamentos finais, tratamos de cada
                etapa da tua obra com equipa própria.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map(({ Icon, ...service }) => (
                <article
                  key={service.name}
                  className="group rounded-2xl border border-[#8ecae6]/15 bg-[#121d26] p-6 transition hover:-translate-y-1 hover:border-[#8ecae6]/35 hover:shadow-[0_20px_40px_-28px_rgba(142,202,230,0.35)]"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8ecae6]/10 text-[#8ecae6]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-bold text-[#8ecae6]">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#bdd9e9]">
                    {service.description}
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#8ecae6]/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8ecae6] transition hover:bg-[#8ecae6] hover:text-[#09161d]"
                  >
                    Pedir orçamento
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#101a22] px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="max-w-md text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                Porque os clientes confiam em nós.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-[#bdd9e9]">
                Uma obra bem feita começa com organização e comunicação clara,
                do primeiro dia até à entrega das chaves.
              </p>
            </div>

            <div className="divide-y divide-[#8ecae6]/15 border-t border-[#8ecae6]/15">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-5 py-7">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#8ecae6] text-[#09161d]">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#bdd9e9]">
                      {reason.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="bg-[#0d1217] px-6 py-24 lg:px-8">
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
                  className="rounded-2xl border border-[#8ecae6]/15 bg-[#121d26] p-7"
                >
                  <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#8ecae6]">
                    Passo {step.number}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#bdd9e9]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-[#101a22] px-6 py-24 lg:px-8">
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
                  className="rounded-2xl border border-[#8ecae6]/15 bg-[#121d26] p-7"
                >
                  <p className="text-lg leading-relaxed text-[#dff1fb]">
                    “{testimonial.quote}”
                  </p>
                  <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-[#8ecae6]">
                    {testimonial.author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-[#0d1217] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10">
              <h2 className="text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                Pronto para começar a tua obra?
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-[#8ecae6]/20 bg-[linear-gradient(135deg,rgba(142,202,230,0.1),rgba(255,255,255,0.03))] p-8 md:p-10">
                <p className="max-w-md text-lg leading-relaxed text-[#dff1fb]">
                  Envia-nos os detalhes do teu projeto pelo WhatsApp e recebes
                  um orçamento detalhado em poucos dias.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8ecae6] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#09161d] transition hover:bg-[#a8d8ee]"
                  >
                    Falar no WhatsApp
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`tel:${companyPhone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#8ecae6]/35 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#8ecae6] transition hover:border-[#8ecae6] hover:bg-[#8ecae6]/5"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Ligar
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 rounded-2xl border border-[#8ecae6]/15 bg-[#121d26] p-6">
                  <PinIcon className="h-5 w-5 flex-none text-[#8ecae6]" />
                  <div>
                    <p className="text-sm font-semibold text-white">Morada</p>
                    <p className="mt-1 text-sm text-[#bdd9e9]">
                      {companyAddress}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-[#8ecae6]/15 bg-[#121d26] p-6">
                  <ClockIcon className="h-5 w-5 flex-none text-[#8ecae6]" />
                  <div className="w-full">
                    <p className="mb-2 text-sm font-semibold text-white">
                      Horário
                    </p>
                    <dl className="space-y-1">
                      {openingHours.map(([day, hours]) => (
                        <div
                          key={day}
                          className="flex items-center justify-between text-sm text-[#bdd9e9]"
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

      <footer className="border-t border-[#8ecae6]/15 bg-[#101a22] px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[#bdd9e9] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8ecae6] text-[10px] font-black tracking-widest text-[#8ecae6]">
              RC
            </div>
            <span className="uppercase tracking-[0.15em] text-white">
              Reformas & Construção
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#servicos" className="transition hover:text-[#8ecae6]">
              Serviços
            </a>
            <a href="#processo" className="transition hover:text-[#8ecae6]">
              Como funciona
            </a>
            <span className="text-[#8ecae6]/30">•</span>
            <span>{companyAddress}</span>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#8ecae6]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
