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

function WrenchIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14.5 6.5a3.5 3.5 0 0 0-4.6 4.3L4 16.7l2.3 2.3 5.9-5.9a3.5 3.5 0 0 0 4.3-4.6l-2.3 2.3-2-2 2.3-2.3Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeakIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3.5S6 11 6 15a6 6 0 0 0 12 0c0-4-6-11.5-6-11.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M10.5 14.5h3l-1.5 3"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TapIcon({ className }: IconProps) {
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

function HeaterIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="6"
        y="3.5"
        width="12"
        height="17"
        rx="1"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M12 8.5c1.4 1.2 2 2.2 2 3.2a2 2 0 1 1-4 0c0-1 .6-2 2-3.2Z"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      <path
        d="M9 16.5h6"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarCheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="15"
        rx="1"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M4 9.5h16M8 3v3.5M16 3v3.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M8.5 14.5 11 17l4.5-5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PipeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 8.5h9a3.5 3.5 0 0 1 3.5 3.5v0A3.5 3.5 0 0 0 20 15.5"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <circle cx="4" cy="8.5" r="1.6" stroke="currentColor" strokeWidth={1.4} />
      <circle
        cx="20"
        cy="15.5"
        r="1.6"
        stroke="currentColor"
        strokeWidth={1.4}
      />
    </svg>
  );
}

const services = [
  {
    name: "Desentupimentos Urgentes",
    description:
      "Resposta imediata para entupimentos em canos, ralos e esgotos, a qualquer hora.",
    price: "desde €45",
    Icon: WrenchIcon,
  },
  {
    name: "Deteção & Reparação de Fugas",
    description:
      "Localização precisa de fugas de água e reparação rápida para evitar danos maiores.",
    price: "desde €60",
    Icon: LeakIcon,
  },
  {
    name: "Torneiras & Autoclismos",
    description:
      "Substituição e reparação de torneiras, autoclismos e sistemas de descarga.",
    price: "desde €35",
    Icon: TapIcon,
  },
  {
    name: "Esquentadores & Termoacumuladores",
    description:
      "Instalação, manutenção e reparação de equipamentos de água quente.",
    price: "desde €80",
    Icon: HeaterIcon,
  },
  {
    name: "Manutenção Preventiva",
    description:
      "Contratos de manutenção programada para evitar falhas e custos inesperados.",
    price: "desde €25/mês",
    Icon: CalendarCheckIcon,
  },
  {
    name: "Substituição de Canalização",
    description:
      "Renovação de redes antigas com materiais duradouros e garantia do serviço.",
    price: "sob orçamento",
    Icon: PipeIcon,
  },
];

const reasons = [
  {
    title: "Atendimento 24 horas",
    text: "Emergências não esperam. Estamos disponíveis a qualquer hora, todos os dias da semana.",
  },
  {
    title: "Técnicos certificados",
    text: "Equipa qualificada e equipada para resolver desde pequenas reparações a instalações complexas.",
  },
  {
    title: "Diagnóstico transparente",
    text: "Avaliamos o problema no local e explicamos o custo antes de qualquer intervenção.",
  },
];

const steps = [
  {
    number: "01",
    title: "Contacto e diagnóstico",
    text: "Descreves o problema por WhatsApp ou telefone e fazemos uma primeira avaliação.",
  },
  {
    number: "02",
    title: "Visita técnica",
    text: "Um técnico desloca-se ao local, confirma o diagnóstico e apresenta o plano de ação.",
  },
  {
    number: "03",
    title: "Reparação e garantia",
    text: "Resolvemos o problema com garantia do serviço, seja urgência ou manutenção programada.",
  },
];

const testimonials = [
  {
    quote:
      "Fuga de água às 23h e tiveram um técnico em casa em 40 minutos. Resolvido no mesmo dia.",
    author: "Carlos N.",
  },
  {
    quote:
      "Contrato de manutenção que já evitou dois problemas graves. Vale muito a pena.",
    author: "Ana P.",
  },
  {
    quote:
      "Diagnóstico honesto e preço justo. Já é a segunda vez que os chamamos.",
    author: "Ricardo S.",
  },
];

const whatsappLink =
  "https://wa.me/351211000000?text=Olá! Preciso de assistência de canalização.";

const companyAddress = "Rua da Água, 5, 4400-001 Vila Nova de Gaia";
const companyPhone = "+351 211 000 000";
const openingHours = [
  ["Urgências", "24 horas / 7 dias"],
  ["Atendimento programado", "Seg a Sex, 08:00 – 19:00"],
  ["Sábado", "09:00 – 13:00"],
];

export const metadata: Metadata = {
  title: "Canalização & Assistência | Resposta rápida e profissional",
  description:
    "Landing page para uma empresa de canalização e assistência técnica, com foco em urgências 24/7 e conversão via WhatsApp.",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Canalização & Assistência",
    title: "Canalização & Assistência | Resposta rápida e profissional",
    description:
      "Landing page para uma empresa de canalização e assistência técnica, com foco em urgências 24/7 e conversão via WhatsApp.",
  },
};

export default function CanalizacaoPage() {
  return (
    <div className="min-h-screen bg-[#0d1419] text-[#ebf8ff] selection:bg-[#7dd3fc] selection:text-[#0d1419]">
      <header className="sticky top-0 z-50 border-b border-[#7dd3fc]/12 bg-[#0d1419]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7dd3fc] text-sm font-black tracking-widest text-[#7dd3fc]">
              CA
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ebf8ff]">
              Canalização & Assistência
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#cfeafc] md:flex">
            <a href="#sobre" className="transition hover:text-[#7dd3fc]">
              Sobre
            </a>
            <a href="#servicos" className="transition hover:text-[#7dd3fc]">
              Serviços
            </a>
            <a href="#processo" className="transition hover:text-[#7dd3fc]">
              Como funciona
            </a>
            <a href="#avaliacoes" className="transition hover:text-[#7dd3fc]">
              Avaliações
            </a>
            <a href="#contacto" className="transition hover:text-[#7dd3fc]">
              Contacto
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#7dd3fc] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0d1419] transition hover:bg-[#a3e2fd] sm:px-5 sm:tracking-[0.2em]"
          >
            Pedir ajuda agora
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#0d1419]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.14),transparent_45%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <h1 className="max-w-xl text-5xl font-black tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
                Uma urgência precisa de resposta imediata.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#cfeafc]">
                Canalização e assistência técnica 24 horas por dia, com
                diagnóstico transparente e técnicos certificados.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7dd3fc] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0d1419] transition hover:bg-[#a3e2fd]"
                >
                  Pedir ajuda agora
                  <ArrowIcon className="h-4 w-4" />
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-full border border-[#7dd3fc]/35 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7dd3fc] transition hover:border-[#7dd3fc] hover:bg-[#7dd3fc]/5"
                >
                  Ver serviços
                </a>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 text-left">
                {[
                  ["24/7", "Atendimento"],
                  ["1.500+", "Intervenções"],
                  ["98%", "Satisfação"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#7dd3fc]/15 bg-[#101c25] p-4"
                  >
                    <p className="text-2xl font-black text-[#7dd3fc]">
                      {value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#cfeafc]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-[#7dd3fc]/12 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-[#7dd3fc]/18 bg-[#101c25] p-5 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.6)]">
                <div className="mb-5 flex items-center justify-between border-b border-[#7dd3fc]/15 pb-4">
                  <p className="text-xl font-semibold text-white">
                    Pedido recebido
                  </p>
                  <div className="rounded-full border border-[#7dd3fc]/30 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#7dd3fc]">
                    Ativo
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    ["Fuga de água detetada", "Técnico a caminho"],
                    ["Diagnóstico no local", "20 min"],
                    ["Orçamento apresentado", "No local"],
                    ["Reparação concluída", "Com garantia"],
                  ].map(([step, status]) => (
                    <div
                      key={step}
                      className="flex items-center justify-between rounded-lg border border-[#7dd3fc]/10 bg-[#0d1419] p-4"
                    >
                      <p className="text-sm font-semibold text-white">{step}</p>
                      <span className="text-sm font-bold text-[#7dd3fc]">
                        {status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-[#7dd3fc]/20 bg-[linear-gradient(135deg,rgba(125,211,252,0.14),rgba(255,255,255,0.03))] p-5">
                  <p className="text-3xl font-black text-white">
                    Resposta em minutos
                  </p>
                  <p className="mt-2 text-sm text-[#cfeafc]">
                    Atendimento de urgência todos os dias, 24 horas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          className="border-t border-[#7dd3fc]/10 bg-[#101c25] px-6 py-24 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="relative min-h-105 rounded-2xl border border-[#7dd3fc]/15 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.18),rgba(13,20,25,0.3)),linear-gradient(135deg,#122432,#0d1419)] p-6">
              <div className="relative flex h-full flex-col justify-between">
                <span className="inline-flex w-fit rounded-full border border-[#7dd3fc]/25 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#7dd3fc]">
                  Resposta rápida desde 2010
                </span>
                <div className="space-y-4">
                  <p className="text-4xl font-black tracking-[-0.03em] text-white">
                    Rapidez com rigor técnico.
                  </p>
                  <p className="text-lg leading-relaxed text-[#cfeafc]">
                    Do primeiro contacto à reparação final, tratamos cada
                    intervenção com a urgência que merece.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="max-w-lg text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                Direta, funcional e sempre disponível.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-[#cfeafc]">
                Combinamos disponibilidade 24/7 para urgências com contratos de
                manutenção preventiva, para que problemas graves nunca cheguem a
                acontecer.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  ["1.500+", "Intervenções"],
                  ["98%", "Satisfação"],
                  ["24/7", "Disponibilidade"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#7dd3fc]/15 bg-[#101c25] p-5"
                  >
                    <p className="text-3xl font-black text-[#7dd3fc]">
                      {value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#cfeafc]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-[#0d1419] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                O que resolvemos
              </h2>
              <p className="max-w-xl text-sm text-[#cfeafc]">
                De urgências a manutenção programada, cobrimos toda a rede de
                água da tua casa ou negócio.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map(({ Icon, ...service }) => (
                <article
                  key={service.name}
                  className="group rounded-2xl border border-[#7dd3fc]/15 bg-[#101c25] p-6 transition hover:-translate-y-1 hover:border-[#7dd3fc]/35 hover:shadow-[0_20px_40px_-28px_rgba(125,211,252,0.35)]"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7dd3fc]/10 text-[#7dd3fc]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-bold text-[#7dd3fc]">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#cfeafc]">
                    {service.description}
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#7dd3fc]/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#7dd3fc] transition hover:bg-[#7dd3fc] hover:text-[#0d1419]"
                  >
                    Pedir ajuda
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#101c25] px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="max-w-md text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                Porque nos chamam primeiro.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-[#cfeafc]">
                Numa emergência, rapidez e confiança fazem toda a diferença. É
                isso que garantimos em cada chamada.
              </p>
            </div>

            <div className="divide-y divide-[#7dd3fc]/15 border-t border-[#7dd3fc]/15">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-5 py-7">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#7dd3fc] text-[#0d1419]">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#cfeafc]">
                      {reason.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="bg-[#0d1419] px-6 py-24 lg:px-8">
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
                  className="rounded-2xl border border-[#7dd3fc]/15 bg-[#101c25] p-7"
                >
                  <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#7dd3fc]">
                    Passo {step.number}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#cfeafc]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-[#101c25] px-6 py-24 lg:px-8">
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
                  className="rounded-2xl border border-[#7dd3fc]/15 bg-[#0d1419] p-7"
                >
                  <p className="text-lg leading-relaxed text-[#e4f6ff]">
                    “{testimonial.quote}”
                  </p>
                  <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-[#7dd3fc]">
                    {testimonial.author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-[#0d1419] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10">
              <h2 className="text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                Tens uma urgência? Fala connosco agora.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-[#7dd3fc]/20 bg-[linear-gradient(135deg,rgba(125,211,252,0.12),rgba(255,255,255,0.03))] p-8 md:p-10">
                <p className="max-w-md text-lg leading-relaxed text-[#e4f6ff]">
                  Descreve o problema pelo WhatsApp e enviamos um técnico o mais
                  rápido possível, 24 horas por dia.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7dd3fc] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0d1419] transition hover:bg-[#a3e2fd]"
                  >
                    Falar no WhatsApp
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`tel:${companyPhone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#7dd3fc]/35 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7dd3fc] transition hover:border-[#7dd3fc] hover:bg-[#7dd3fc]/5"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Ligar agora
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 rounded-2xl border border-[#7dd3fc]/15 bg-[#101c25] p-6">
                  <PinIcon className="h-5 w-5 flex-none text-[#7dd3fc]" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Área de serviço
                    </p>
                    <p className="mt-1 text-sm text-[#cfeafc]">
                      {companyAddress}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-[#7dd3fc]/15 bg-[#101c25] p-6">
                  <ClockIcon className="h-5 w-5 flex-none text-[#7dd3fc]" />
                  <div className="w-full">
                    <p className="mb-2 text-sm font-semibold text-white">
                      Horário
                    </p>
                    <dl className="space-y-1">
                      {openingHours.map(([day, hours]) => (
                        <div
                          key={day}
                          className="flex items-center justify-between text-sm text-[#cfeafc]"
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

      <footer className="border-t border-[#7dd3fc]/15 bg-[#101c25] px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[#cfeafc] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7dd3fc] text-[10px] font-black tracking-widest text-[#7dd3fc]">
              CA
            </div>
            <span className="uppercase tracking-[0.15em] text-white">
              Canalização & Assistência
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#servicos" className="transition hover:text-[#7dd3fc]">
              Serviços
            </a>
            <a href="#processo" className="transition hover:text-[#7dd3fc]">
              Como funciona
            </a>
            <span className="text-[#7dd3fc]/30">•</span>
            <span>{companyAddress}</span>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#7dd3fc]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
