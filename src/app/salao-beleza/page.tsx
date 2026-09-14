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

function ScissorsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth={1.5} />
      <circle cx="6" cy="18" r="2.2" stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M7.7 7.4 20 18M7.7 16.6 20 6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkleIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3.5c.6 3.2 2 4.6 5.2 5.2-3.2.6-4.6 2-5.2 5.2-.6-3.2-2-4.6-5.2-5.2 3.2-.6 4.6-2 5.2-5.2Z"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      <path
        d="M18.5 15.5c.3 1.6 1 2.3 2.6 2.6-1.6.3-2.3 1-2.6 2.6-.3-1.6-1-2.3-2.6-2.6 1.6-.3 2.3-1 2.6-2.6Z"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DropletIcon({ className }: IconProps) {
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
    </svg>
  );
}

function BrushIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M15.5 3.5 20.5 8.5 11 18 5 19l1-6 9.5-9.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M6 18 5 19"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function LeafIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M19.5 4.5c.6 6.6-2.4 12-9.4 14.5-3.3-6.1-2.5-11 9.4-14.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M18.5 5.5 6 18"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function EyeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.5 12S7 6.5 12 6.5 20.5 12 20.5 12 17 17.5 12 17.5 3.5 12 3.5 12Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}

const services = [
  {
    name: "Cabelo",
    description:
      "Corte, escova, coloração e tratamentos capilares pensados para a textura e o brilho do teu cabelo.",
    price: "desde €25",
    Icon: ScissorsIcon,
  },
  {
    name: "Manicure & Pedicure",
    description:
      "Cuidado completo das mãos e pés, com verniz semipermanente e acabamento impecável.",
    price: "desde €18",
    Icon: SparkleIcon,
  },
  {
    name: "Tratamentos Faciais",
    description:
      "Limpeza de pele, hidratação profunda e protocolos personalizados para cada tipo de pele.",
    price: "desde €30",
    Icon: DropletIcon,
  },
  {
    name: "Maquilhagem",
    description:
      "Make para eventos, casamentos ou o dia a dia, adaptada ao teu estilo e tom de pele.",
    price: "desde €35",
    Icon: BrushIcon,
  },
  {
    name: "Depilação",
    description:
      "Depilação a cera com produtos suaves, pensada para o conforto e a duração do resultado.",
    price: "desde €12",
    Icon: LeafIcon,
  },
  {
    name: "Sobrancelhas & Pestanas",
    description:
      "Design de sobrancelhas, henna e extensão de pestanas para um olhar sempre definido.",
    price: "desde €15",
    Icon: EyeIcon,
  },
];

const reasons = [
  {
    title: "Cuidado pensado para ti",
    text: "Cada serviço começa com uma conversa sobre o que procuras, para um resultado que combina com o teu estilo e rotina.",
  },
  {
    title: "Espaço acolhedor",
    text: "Um salão pequeno com atenção grande: ambiente calmo, limpo e pensado para que te sintas bem tratada em cada visita.",
  },
  {
    title: "Profissionais experientes",
    text: "Equipa em formação contínua, com produtos de qualidade e técnicas atualizadas em cada área do salão.",
  },
];

const steps = [
  {
    number: "01",
    title: "Marca o teu horário",
    text: "Escreve-nos no WhatsApp com o serviço que procuras e escolhemos juntas o melhor dia e hora.",
  },
  {
    number: "02",
    title: "Conversa inicial",
    text: "Antes de começar, percebemos o que precisas: cabelo, unhas, pele ou combinação de serviços.",
  },
  {
    number: "03",
    title: "Sais como querias",
    text: "Terminamos com um resultado cuidado, dicas de manutenção e a próxima visita já agendada se quiseres.",
  },
];

const testimonials = [
  {
    quote:
      "Salão pequeno mas com um cuidado enorme. Saí com o cabelo e as unhas impecáveis, super recomendo.",
    author: "Marta S.",
  },
  {
    quote:
      "Marcar pelo WhatsApp é tão prático. A equipa é atenciosa e o resultado supera sempre as expectativas.",
    author: "Cátia R.",
  },
  {
    quote:
      "Fui para uma limpeza de pele e voltei para tudo. Ambiente calmo e profissionais muito competentes.",
    author: "Inês F.",
  },
];

const whatsappLink =
  "https://wa.me/351912345678?text=Olá! Gostaria de marcar um horário no salão.";

const salonAddress = "Rua das Flores, 123, 1200-001 Lisboa";
const salonPhone = "+351 912 345 678";
const openingHours = [
  ["Segunda a Sexta", "09:30 – 19:30"],
  ["Sábado", "09:30 – 17:00"],
  ["Domingo", "Encerrado"],
];

export const metadata: Metadata = {
  title: "Salão de Beleza | Cuidado, presença e confiança",
  description:
    "Landing page para um salão de beleza de bairro, com foco em cabelo, unhas, estética e conversão via WhatsApp.",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Salão de Beleza",
    title: "Salão de Beleza | Cuidado, presença e confiança",
    description:
      "Landing page para um salão de beleza de bairro, com foco em cabelo, unhas, estética e conversão via WhatsApp.",
  },
};

export default function SalaoBelezaPage() {
  return (
    <div className="min-h-screen bg-[#fbf6f3] text-[#2c2321] selection:bg-[#a9556b] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-[#a9556b]/12 bg-[#fbf6f3]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#a9556b] text-sm font-black tracking-widest text-[#a9556b]">
              SB
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c2321]">
              Salão de Beleza
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#6b5b56] md:flex">
            <a href="#sobre" className="transition hover:text-[#a9556b]">
              Sobre
            </a>
            <a href="#servicos" className="transition hover:text-[#a9556b]">
              Serviços
            </a>
            <a href="#processo" className="transition hover:text-[#a9556b]">
              Como funciona
            </a>
            <a href="#avaliacoes" className="transition hover:text-[#a9556b]">
              Avaliações
            </a>
            <a href="#contacto" className="transition hover:text-[#a9556b]">
              Contacto
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#a9556b] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#8f4256] sm:px-5 sm:tracking-[0.2em]"
          >
            Marcar horário
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#fbf6f3]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(169,85,107,0.12),transparent_45%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <h1 className="max-w-xl text-5xl font-black tracking-[-0.03em] text-[#2c2321] md:text-6xl lg:text-7xl">
                Cuidado que se nota, num salão de bairro.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6b5b56]">
                Cabelo, unhas, estética e maquilhagem com atenção pessoal,
                marcação simples pelo WhatsApp e um espaço pensado para te
                sentires bem cuidada.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a9556b] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#8f4256]"
                >
                  Agendar agora
                  <ArrowIcon className="h-4 w-4" />
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-full border border-[#a9556b]/35 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#a9556b] transition hover:border-[#a9556b] hover:bg-[#a9556b]/5"
                >
                  Ver serviços
                </a>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 text-left">
                {[
                  ["4.9/5", "Avaliação"],
                  ["800+", "Clientes"],
                  ["24h", "Para agendar"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#a9556b]/15 bg-white p-4"
                  >
                    <p className="text-2xl font-black text-[#a9556b]">
                      {value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#6b5b56]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-[#a9556b]/12 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-[#a9556b]/18 bg-white p-5 shadow-[0_20px_45px_-25px_rgba(44,35,33,0.35)]">
                <div className="mb-5 flex items-center justify-between border-b border-[#a9556b]/15 pb-4">
                  <div>
                    <p className="text-xl font-semibold text-[#2c2321]">
                      Agenda de hoje
                    </p>
                  </div>
                  <div className="rounded-full border border-[#a9556b]/30 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#a9556b]">
                    Hoje
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    ["Corte & Escova", "09:30"],
                    ["Manicure", "11:00"],
                    ["Design de sobrancelha", "13:30"],
                    ["Limpeza de pele", "16:00"],
                  ].map(([service, hour]) => (
                    <div
                      key={service}
                      className="flex items-center justify-between rounded-lg border border-[#a9556b]/10 bg-[#faf3f0] p-4"
                    >
                      <div>
                        <p className="text-sm font-semibold text-[#2c2321]">
                          {service}
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#6b5b56]">
                          Disponível
                        </p>
                      </div>
                      <span className="text-sm font-bold text-[#a9556b]">
                        {hour}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-[#a9556b]/20 bg-[linear-gradient(135deg,rgba(169,85,107,0.1),rgba(255,255,255,0.4))] p-5">
                  <p className="text-3xl font-black text-[#2c2321]">
                    Manicure + Escova
                  </p>
                  <p className="mt-2 text-sm text-[#6b5b56]">
                    Combo do dia por apenas €30
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          className="border-t border-[#a9556b]/10 bg-[#f6ece7] px-6 py-24 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="relative min-h-105 rounded-2xl border border-[#a9556b]/15 bg-[radial-gradient(circle_at_top,rgba(169,85,107,0.16),rgba(255,255,255,0.3)),linear-gradient(135deg,#ffffff,#f3e2da)] p-6">
              <div className="relative flex h-full flex-col justify-between">
                <span className="inline-flex w-fit rounded-full border border-[#a9556b]/25 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#a9556b]">
                  Salão de bairro desde 2015
                </span>
                <div className="space-y-4">
                  <p className="text-4xl font-black tracking-[-0.03em] text-[#2c2321]">
                    Mais do que um serviço.
                  </p>
                  <p className="text-lg leading-relaxed text-[#6b5b56]">
                    Uma experiência pensada para quem valoriza um cuidado
                    próximo, atencioso e com resultado visível.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="max-w-lg text-4xl font-black tracking-[-0.03em] text-[#2c2321] md:text-5xl">
                Cuidado e atenção em cada detalhe.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-[#6b5b56]">
                No nosso salão, cada cliente recebe atenção personalizada e um
                serviço pensado para refletir a melhor versão de si. Apostamos
                em técnicas atuais e num acompanhamento próximo, com o cuidado
                de um espaço pequeno e a qualidade de uma equipa experiente.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  ["6k+", "Serviços realizados"],
                  ["4.9 ★", "Satisfação"],
                  ["10 anos", "De experiência"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#a9556b]/15 bg-white p-5"
                  >
                    <p className="text-3xl font-black text-[#a9556b]">
                      {value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#6b5b56]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-[#fbf6f3] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-4xl font-black tracking-[-0.03em] text-[#2c2321] md:text-5xl">
                O que oferecemos
              </h2>
              <p className="max-w-xl text-sm text-[#6b5b56]">
                Serviços pensados para quem quer cuidar do visual com qualidade,
                conforto e um preço justo para o dia a dia.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map(({ Icon, ...service }) => (
                <article
                  key={service.name}
                  className="group rounded-2xl border border-[#a9556b]/15 bg-white p-6 transition hover:-translate-y-1 hover:border-[#a9556b]/35 hover:shadow-[0_20px_40px_-28px_rgba(169,85,107,0.5)]"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a9556b]/10 text-[#a9556b]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-lg font-black text-[#a9556b]">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-[#2c2321]">
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6b5b56]">
                    {service.description}
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#a9556b]/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#a9556b] transition hover:bg-[#a9556b] hover:text-white"
                  >
                    Reservar
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6ece7] px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="max-w-md text-4xl font-black tracking-[-0.03em] text-[#2c2321] md:text-5xl">
                Porque as clientes voltam sempre.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-[#6b5b56]">
                Um salão pequeno consegue dar o que um grande não dá: atenção
                real, à tua medida, visita após visita.
              </p>
            </div>

            <div className="divide-y divide-[#a9556b]/15 border-t border-[#a9556b]/15">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-5 py-7">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#a9556b] text-white">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#2c2321]">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#6b5b56]">
                      {reason.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="bg-[#fbf6f3] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-4xl font-black tracking-[-0.03em] text-[#2c2321] md:text-5xl">
                Um processo simples, do início ao fim
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-[#a9556b]/15 bg-white p-7"
                >
                  <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#a9556b]">
                    Passo {step.number}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-[#2c2321]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6b5b56]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-[#f6ece7] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-4xl font-black tracking-[-0.03em] text-[#2c2321] md:text-5xl">
                O que dizem as nossas clientes
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.author}
                  className="rounded-2xl border border-[#a9556b]/15 bg-white p-7"
                >
                  <p className="text-lg leading-relaxed text-[#3a2f2c]">
                    “{testimonial.quote}”
                  </p>
                  <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-[#a9556b]">
                    {testimonial.author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-[#fbf6f3] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10">
              <h2 className="text-4xl font-black tracking-[-0.03em] text-[#2c2321] md:text-5xl">
                Pronto para marcares o teu horário?
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-[#a9556b]/20 bg-[linear-gradient(135deg,rgba(169,85,107,0.1),rgba(255,255,255,0.6))] p-8 md:p-10">
                <p className="max-w-md text-lg leading-relaxed text-[#3a2f2c]">
                  A forma mais rápida de marcar é pelo WhatsApp: dizes o serviço
                  que procuras e respondemos com os horários disponíveis.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a9556b] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#8f4256]"
                  >
                    Falar no WhatsApp
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`tel:${salonPhone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#a9556b]/35 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#a9556b] transition hover:border-[#a9556b] hover:bg-[#a9556b]/5"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Ligar
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 rounded-2xl border border-[#a9556b]/15 bg-white p-6">
                  <PinIcon className="h-5 w-5 flex-none text-[#a9556b]" />
                  <div>
                    <p className="text-sm font-semibold text-[#2c2321]">
                      Morada
                    </p>
                    <p className="mt-1 text-sm text-[#6b5b56]">
                      {salonAddress}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-[#a9556b]/15 bg-white p-6">
                  <ClockIcon className="h-5 w-5 flex-none text-[#a9556b]" />
                  <div className="w-full">
                    <p className="mb-2 text-sm font-semibold text-[#2c2321]">
                      Horário
                    </p>
                    <dl className="space-y-1">
                      {openingHours.map(([day, hours]) => (
                        <div
                          key={day}
                          className="flex items-center justify-between text-sm text-[#6b5b56]"
                        >
                          <dt>{day}</dt>
                          <dd className="font-medium text-[#2c2321]">
                            {hours}
                          </dd>
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

      <footer className="border-t border-[#a9556b]/15 bg-[#f6ece7] px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[#6b5b56] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#a9556b] text-[10px] font-black tracking-widest text-[#a9556b]">
              SB
            </div>
            <span className="uppercase tracking-[0.15em] text-[#2c2321]">
              Salão de Beleza
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#servicos" className="transition hover:text-[#a9556b]">
              Serviços
            </a>
            <a href="#processo" className="transition hover:text-[#a9556b]">
              Como funciona
            </a>
            <span className="text-[#a9556b]/30">•</span>
            <span>{salonAddress}</span>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#a9556b]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
