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

function ClipboardIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="5.5"
        y="4.5"
        width="13"
        height="16"
        rx="1"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <rect
        x="9"
        y="3"
        width="6"
        height="3"
        rx="0.8"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M8.5 12.5h7M8.5 16h4.5"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );
}

function JointIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 8.5a2.5 2.5 0 1 1 3.6 2.2L15 16.2a2.5 2.5 0 1 1-2.2 3.6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <circle cx="6.5" cy="7" r="2" stroke="currentColor" strokeWidth={1.4} />
      <circle cx="17.5" cy="17" r="2" stroke="currentColor" strokeWidth={1.4} />
    </svg>
  );
}

function RecoveryIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 19.5c-3-2-7-5.4-7-9.4A4 4 0 0 1 12 8a4 4 0 0 1 7 2.1c0 4-4 7.4-7 9.4Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M9.5 11.5h2l1-2 1.5 3.5 1-1.5h1.5"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HandsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4.5 12.5V8a1.5 1.5 0 0 1 3 0v3M7.5 11V6.5a1.5 1.5 0 0 1 3 0V11M10.5 11V7a1.5 1.5 0 0 1 3 0v6"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <path
        d="M13.5 10.5a1.5 1.5 0 0 1 3 0v3.5c0 3-2 5.5-5 5.5-2.2 0-3.5-1-4.7-2.6L4.5 14"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PostureIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="4.5"
        r="1.8"
        stroke="currentColor"
        strokeWidth={1.4}
      />
      <path
        d="M12 6.5v4l-2 3v6M12 10.5l2 3v6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9h6"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );
}

function RunIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="14.5"
        cy="4.5"
        r="1.7"
        stroke="currentColor"
        strokeWidth={1.4}
      />
      <path
        d="M9 20l2.5-4.5-1.5-3 3-2.5 1.5 2.5 3.5 1M11.5 15.5l-4 1.5M13 10.5 10 8l-3 1"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const services = [
  {
    name: "Avaliação Inicial",
    description:
      "Diagnóstico completo da tua condição para definir o plano de tratamento mais adequado.",
    price: "€40",
    Icon: ClipboardIcon,
  },
  {
    name: "Fisioterapia Ortopédica",
    description:
      "Tratamento de lesões musculares, articulares e tendinosas com técnicas especializadas.",
    price: "desde €35",
    Icon: JointIcon,
  },
  {
    name: "Reabilitação Pós-Cirúrgica",
    description:
      "Acompanhamento estruturado para recuperar mobilidade e força após uma cirurgia.",
    price: "desde €35",
    Icon: RecoveryIcon,
  },
  {
    name: "Terapia Manual",
    description:
      "Técnicas manuais para aliviar dor, tensão muscular e melhorar a mobilidade.",
    price: "desde €30",
    Icon: HandsIcon,
  },
  {
    name: "Reeducação Postural",
    description:
      "Correção de padrões posturais que causam dor crónica e desconforto no dia a dia.",
    price: "desde €30",
    Icon: PostureIcon,
  },
  {
    name: "Fisioterapia Desportiva",
    description:
      "Prevenção e recuperação de lesões para atletas e praticantes de desporto regular.",
    price: "desde €35",
    Icon: RunIcon,
  },
];

const reasons = [
  {
    title: "Avaliação individualizada",
    text: "Cada plano de tratamento é adaptado à tua condição, objetivos e ritmo de recuperação.",
  },
  {
    title: "Equipa especializada",
    text: "Fisioterapeutas com formação específica em ortopedia, desporto e reabilitação pós-cirúrgica.",
  },
  {
    title: "Acompanhamento da evolução",
    text: "Registamos o teu progresso a cada sessão para ajustar o tratamento sempre que necessário.",
  },
];

const steps = [
  {
    number: "01",
    title: "Avaliação inicial",
    text: "Conhecemos o teu histórico, limitações e objetivos para perceber o que precisas.",
  },
  {
    number: "02",
    title: "Plano de tratamento",
    text: "Definimos um plano personalizado, com frequência e técnicas adequadas ao teu caso.",
  },
  {
    number: "03",
    title: "Sessões e evolução",
    text: "Acompanhamos cada sessão e ajustamos o plano consoante a tua recuperação.",
  },
];

const testimonials = [
  {
    quote:
      "Recuperei a mobilidade do joelho muito mais rápido do que esperava. Acompanhamento excelente.",
    author: "Fernando A.",
  },
  {
    quote:
      "Depois de meses com dores nas costas, finalmente encontrei um tratamento que resultou.",
    author: "Isabel V.",
  },
  {
    quote:
      "Voltei a correr sem dor no joelho. A equipa foi incansável em todo o processo de reabilitação.",
    author: "Miguel D.",
  },
];

const whatsappLink =
  "https://wa.me/351214000000?text=Olá! Gostaria de marcar uma avaliação de fisioterapia.";

const clinicAddress = "Praça da Saúde, 10, 8000-001 Faro";
const clinicPhone = "+351 214 000 000";
const openingHours = [
  ["Segunda a Sexta", "08:00 – 20:00"],
  ["Sábado", "09:00 – 13:00"],
  ["Domingo", "Encerrado"],
];

export const metadata: Metadata = {
  title:
    "Fisioterapia & Reabilitação | Cuidado que acompanha a tua recuperação",
  description:
    "Landing page para uma clínica de fisioterapia e reabilitação, com foco em acolhimento, confiança e conversão via WhatsApp.",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Fisioterapia & Reabilitação",
    title:
      "Fisioterapia & Reabilitação | Cuidado que acompanha a tua recuperação",
    description:
      "Landing page para uma clínica de fisioterapia e reabilitação, com foco em acolhimento, confiança e conversão via WhatsApp.",
  },
};

export default function SaudePage() {
  return (
    <div className="min-h-screen bg-[#0d1512] text-[#f1fff7] selection:bg-[#a7f3d0] selection:text-[#0d1512]">
      <header className="sticky top-0 z-50 border-b border-[#a7f3d0]/12 bg-[#0d1512]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#a7f3d0] text-sm font-black tracking-widest text-[#a7f3d0]">
              FR
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f1fff7]">
              Fisioterapia & Reabilitação
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#d5f6e2] md:flex">
            <a href="#sobre" className="transition hover:text-[#a7f3d0]">
              Sobre
            </a>
            <a href="#servicos" className="transition hover:text-[#a7f3d0]">
              Serviços
            </a>
            <a href="#processo" className="transition hover:text-[#a7f3d0]">
              Como funciona
            </a>
            <a href="#avaliacoes" className="transition hover:text-[#a7f3d0]">
              Avaliações
            </a>
            <a href="#contacto" className="transition hover:text-[#a7f3d0]">
              Contacto
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#a7f3d0] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0d1512] transition hover:bg-[#c2f7df] sm:px-5 sm:tracking-[0.2em]"
          >
            Marcar consulta
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#0d1512]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(167,243,208,0.14),transparent_45%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <h1 className="max-w-xl text-5xl font-black tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
                A tua recuperação acompanhada de perto.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#d5f6e2]">
                Fisioterapia e reabilitação com planos personalizados,
                acompanhamento próximo e foco em resultados duradouros.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a7f3d0] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0d1512] transition hover:bg-[#c2f7df]"
                >
                  Marcar avaliação
                  <ArrowIcon className="h-4 w-4" />
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-full border border-[#a7f3d0]/35 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#a7f3d0] transition hover:border-[#a7f3d0] hover:bg-[#a7f3d0]/5"
                >
                  Ver serviços
                </a>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 text-left">
                {[
                  ["4.9/5", "Experiência"],
                  ["700+", "Pacientes/mês"],
                  ["90%", "Retorno"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#a7f3d0]/15 bg-[#101d18] p-4"
                  >
                    <p className="text-2xl font-black text-[#a7f3d0]">
                      {value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#d5f6e2]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-[#a7f3d0]/12 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-[#a7f3d0]/18 bg-[#101d18] p-5 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.6)]">
                <div className="mb-5 flex items-center justify-between border-b border-[#a7f3d0]/15 pb-4">
                  <p className="text-xl font-semibold text-white">
                    Plano de recuperação
                  </p>
                  <div className="rounded-full border border-[#a7f3d0]/30 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#a7f3d0]">
                    Semana 3
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    ["Avaliação inicial", "Concluída"],
                    ["Terapia manual", "Em curso"],
                    ["Exercícios de mobilidade", "Em curso"],
                    ["Reavaliação de progresso", "Agendada"],
                  ].map(([item, status]) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-lg border border-[#a7f3d0]/10 bg-[#0d1512] p-4"
                    >
                      <p className="text-sm font-semibold text-white">{item}</p>
                      <span className="text-sm font-bold text-[#a7f3d0]">
                        {status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-[#a7f3d0]/20 bg-[linear-gradient(135deg,rgba(167,243,208,0.14),rgba(255,255,255,0.03))] p-5">
                  <p className="text-3xl font-black text-white">
                    Progresso visível
                  </p>
                  <p className="mt-2 text-sm text-[#d5f6e2]">
                    Recuperação acompanhada sessão após sessão
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          className="border-t border-[#a7f3d0]/10 bg-[#101d18] px-6 py-24 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="relative min-h-105 rounded-2xl border border-[#a7f3d0]/15 bg-[radial-gradient(circle_at_top,rgba(167,243,208,0.18),rgba(13,21,18,0.3)),linear-gradient(135deg,#152c24,#0d1512)] p-6">
              <div className="relative flex h-full flex-col justify-between">
                <span className="inline-flex w-fit rounded-full border border-[#a7f3d0]/25 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#a7f3d0]">
                  Cuidado clínico desde 2013
                </span>
                <div className="space-y-4">
                  <p className="text-4xl font-black tracking-[-0.03em] text-white">
                    Mais do que uma sessão.
                  </p>
                  <p className="text-lg leading-relaxed text-[#d5f6e2]">
                    Um acompanhamento pensado para que recuperes com confiança e
                    sem dúvidas sobre o teu progresso.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="max-w-lg text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                Credibilidade e acolhimento em cada consulta.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-[#d5f6e2]">
                A nossa equipa de fisioterapeutas trabalha com planos de
                tratamento individualizados, sempre com foco em resultados
                mensuráveis e comunicação clara sobre a tua evolução.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  ["700+", "Pacientes por mês"],
                  ["4.9 ★", "Experiência"],
                  ["90%", "Retorno"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#a7f3d0]/15 bg-[#101d18] p-5"
                  >
                    <p className="text-3xl font-black text-[#a7f3d0]">
                      {value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#d5f6e2]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-[#0d1512] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                Como podemos ajudar
              </h2>
              <p className="max-w-xl text-sm text-[#d5f6e2]">
                Da avaliação inicial à reabilitação completa, adaptamos o
                tratamento a cada fase da tua recuperação.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map(({ Icon, ...service }) => (
                <article
                  key={service.name}
                  className="group rounded-2xl border border-[#a7f3d0]/15 bg-[#101d18] p-6 transition hover:-translate-y-1 hover:border-[#a7f3d0]/35 hover:shadow-[0_20px_40px_-28px_rgba(167,243,208,0.35)]"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a7f3d0]/10 text-[#a7f3d0]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-bold text-[#a7f3d0]">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#d5f6e2]">
                    {service.description}
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#a7f3d0]/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#a7f3d0] transition hover:bg-[#a7f3d0] hover:text-[#0d1512]"
                  >
                    Marcar consulta
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#101d18] px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="max-w-md text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                Porque os pacientes confiam em nós.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-[#d5f6e2]">
                Recuperar bem exige acompanhamento próximo e um plano que evolui
                contigo, sessão após sessão.
              </p>
            </div>

            <div className="divide-y divide-[#a7f3d0]/15 border-t border-[#a7f3d0]/15">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-5 py-7">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#a7f3d0] text-[#0d1512]">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#d5f6e2]">
                      {reason.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="bg-[#0d1512] px-6 py-24 lg:px-8">
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
                  className="rounded-2xl border border-[#a7f3d0]/15 bg-[#101d18] p-7"
                >
                  <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#a7f3d0]">
                    Passo {step.number}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#d5f6e2]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-[#101d18] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                O que dizem os nossos pacientes
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.author}
                  className="rounded-2xl border border-[#a7f3d0]/15 bg-[#0d1512] p-7"
                >
                  <p className="text-lg leading-relaxed text-[#eafff3]">
                    “{testimonial.quote}”
                  </p>
                  <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-[#a7f3d0]">
                    {testimonial.author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-[#0d1512] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10">
              <h2 className="text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                Pronto para começar a tua recuperação?
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-[#a7f3d0]/20 bg-[linear-gradient(135deg,rgba(167,243,208,0.12),rgba(255,255,255,0.03))] p-8 md:p-10">
                <p className="max-w-md text-lg leading-relaxed text-[#eafff3]">
                  Marca a tua avaliação inicial pelo WhatsApp e começamos a
                  planear o teu tratamento o mais rápido possível.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a7f3d0] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0d1512] transition hover:bg-[#c2f7df]"
                  >
                    Falar no WhatsApp
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`tel:${clinicPhone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#a7f3d0]/35 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#a7f3d0] transition hover:border-[#a7f3d0] hover:bg-[#a7f3d0]/5"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Ligar
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 rounded-2xl border border-[#a7f3d0]/15 bg-[#101d18] p-6">
                  <PinIcon className="h-5 w-5 flex-none text-[#a7f3d0]" />
                  <div>
                    <p className="text-sm font-semibold text-white">Morada</p>
                    <p className="mt-1 text-sm text-[#d5f6e2]">
                      {clinicAddress}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-[#a7f3d0]/15 bg-[#101d18] p-6">
                  <ClockIcon className="h-5 w-5 flex-none text-[#a7f3d0]" />
                  <div className="w-full">
                    <p className="mb-2 text-sm font-semibold text-white">
                      Horário
                    </p>
                    <dl className="space-y-1">
                      {openingHours.map(([day, hours]) => (
                        <div
                          key={day}
                          className="flex items-center justify-between text-sm text-[#d5f6e2]"
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

      <footer className="border-t border-[#a7f3d0]/15 bg-[#101d18] px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[#d5f6e2] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#a7f3d0] text-[10px] font-black tracking-widest text-[#a7f3d0]">
              FR
            </div>
            <span className="uppercase tracking-[0.15em] text-white">
              Fisioterapia & Reabilitação
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#servicos" className="transition hover:text-[#a7f3d0]">
              Serviços
            </a>
            <a href="#processo" className="transition hover:text-[#a7f3d0]">
              Como funciona
            </a>
            <span className="text-[#a7f3d0]/30">•</span>
            <span>{clinicAddress}</span>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#a7f3d0]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
