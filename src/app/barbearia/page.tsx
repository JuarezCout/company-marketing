import type { Metadata } from "next";

const services = [
  {
    name: "Corte Premium",
    description:
      "Corte moderno com acabamento impecável, definição de linhas e atenção total ao rosto e perfil.",
    price: "€22",
  },
  {
    name: "Barba Sculpt",
    description:
      "Modelagem precisa e acabamento refinado para uma barba definida, limpa e com presença.",
    price: "€16",
  },
  {
    name: "Combo Clássico",
    description:
      "Corte + barba + hidratação para um cuidado completo com o visual e a textura do cabelo.",
    price: "€35",
  },
  {
    name: "Corte + Lavagem",
    description:
      "Serviço completo com lavagem, corte e acabamento final para uma experiência premium.",
    price: "€28",
  },
  {
    name: "Hidratação & Tratamento",
    description:
      "Tratamento capilar para restaurar brilho, maciez e vitalidade no cabelo e no couro cabeludo.",
    price: "€18",
  },
  {
    name: "Manutenção Mensal",
    description:
      "Plano ideal para quem quer manter um visual sempre impecável, com prioridade e atenção.",
    price: "€49",
  },
];

const reasons = [
  {
    title: "Estilo que combina com a tua rotina",
    text: "Cortes pensados para o teu rosto, cabelo e personalidade, sempre com um acabamento premium.",
  },
  {
    title: "Ambiente premium",
    text: "Um espaço moderno, acolhedor e profissional, pensado para que te sintas bem desde o primeiro minuto.",
  },
  {
    title: "Atendimento atento",
    text: "Acompanhamento personalizado, recomendação certa e serviço que respeita o teu tempo e a tua imagem.",
  },
];

const steps = [
  {
    number: "01",
    title: "Marca a tua visita",
    text: "Fala connosco por WhatsApp e escolhe o melhor dia e hora para o teu atendimento.",
  },
  {
    number: "02",
    title: "Consulta de estilo",
    text: "O nosso especialista avalia o teu visual, cabelo e preferências para recomendar a melhor solução.",
  },
  {
    number: "03",
    title: "Resultado premium",
    text: "Recebe um acabamento impecável, cuidado e com atenção aos detalhes que fazem diferença.",
  },
];

const testimonials = [
  {
    quote:
      "O melhor corte que já tive. Ambiente impecável, equipa muito profissional e atendimento premium.",
    author: "Miguel P.",
  },
  {
    quote:
      "Fui pela recomendação e agora sou cliente fixo. O acabamento e a atenção ao detalhe são fantásticos.",
    author: "Rui A.",
  },
  {
    quote:
      "Além do corte impecável, o espaço transmite muito bom gosto e profissionalismo. Vale muito a pena.",
    author: "Daniel M.",
  },
];

const whatsappLink =
  "https://wa.me/351912345678?text=Olá! Gostaria de marcar uma visita na barbearia.";

export const metadata: Metadata = {
  title: "Barbearia Premium | Estilo, presença e precisão",
  description:
    "Landing page premium para uma barbearia moderna, com foco em cortes, barba, atendimento e conversão via WhatsApp.",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Barbearia Premium",
    title: "Barbearia Premium | Estilo, presença e precisão",
    description:
      "Landing page premium para uma barbearia moderna, com foco em cortes, barba, atendimento e conversão via WhatsApp.",
  },
};

export default function BarbeariaPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-stone-100">
      <header className="sticky top-0 z-50 border-b border-[#d4af37]/15 bg-[#0b0b0d]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border border-[#d4af37] text-sm font-black tracking-[0.25em] text-[#d4af37]">
              BP
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#d4af37]/70">
                Barbearia
              </p>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Premium
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-stone-300 md:flex">
            <a href="#sobre" className="transition hover:text-[#d4af37]">
              Sobre
            </a>
            <a href="#servicos" className="transition hover:text-[#d4af37]">
              Serviços
            </a>
            <a href="#processo" className="transition hover:text-[#d4af37]">
              Processo
            </a>
            <a href="#avaliacoes" className="transition hover:text-[#d4af37]">
              Avaliações
            </a>
            <a href="#contacto" className="transition hover:text-[#d4af37]">
              Contacto
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-[#d4af37] bg-[#d4af37] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#101010] transition hover:bg-[#e0bf61]"
          >
            Marcar visita
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#0b0b0d]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_40%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#d4af37]/80">
                Estilo, presença e precisão
              </p>
              <h1 className="max-w-xl text-5xl font-black tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
                A tua melhor versão começa aqui.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
                Barbearia premium para quem quer um visual impecável, uma
                experiência moderna e um atendimento que realmente faz a
                diferença.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-[#d4af37] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-[#111111] transition hover:bg-[#e2bf5a]"
                >
                  Agendar agora
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center border border-[#d4af37]/40 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37] transition hover:border-[#d4af37] hover:bg-[#d4af37]/5"
                >
                  Ver serviços
                </a>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 text-left">
                {[
                  ["4.9/5", "Avaliação"],
                  ["1.2k+", "Clientes"],
                  ["48h", "Para agendar"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="border border-[#d4af37]/15 bg-[#141419] p-4"
                  >
                    <p className="text-2xl font-black text-[#d4af37]">
                      {value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-stone-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-3xl" />
              <div className="relative overflow-hidden border border-[#d4af37]/20 bg-[#121214] p-5 shadow-[0_0_60px_rgba(212,175,55,0.08)]">
                <div className="mb-5 flex items-center justify-between border-b border-[#d4af37]/20 pb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#d4af37]/70">
                      Atendimento
                    </p>
                    <p className="mt-1 text-xl font-semibold text-white">
                      Agenda premium
                    </p>
                  </div>
                  <div className="rounded-full border border-[#d4af37]/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#d4af37]">
                    Hoje
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    ["Corte e barba", "09:30"],
                    ["Barba sculpt", "11:00"],
                    ["Combo premium", "14:00"],
                    ["Hidratação", "16:30"],
                  ].map(([service, hour]) => (
                    <div
                      key={service}
                      className="flex items-center justify-between border border-[#d4af37]/10 bg-[#18181b] p-4"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {service}
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-stone-400">
                          Disponível
                        </p>
                      </div>
                      <span className="text-sm font-bold text-[#d4af37]">
                        {hour}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-[#d4af37]/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.12),rgba(255,255,255,0.02))] p-5">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#d4af37]/80">
                    Especial
                  </p>
                  <p className="mt-4 text-3xl font-black text-white">
                    Combo Premium
                  </p>
                  <p className="mt-2 text-sm text-stone-300">
                    Corte + barba + hidratação por apenas €35
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          className="border-t border-[#d4af37]/10 bg-[#0f0f12] px-6 py-24 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="relative min-h-[420px] border border-[#d4af37]/15 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_rgba(17,17,17,0.2)),linear-gradient(135deg,#18181b,#0b0b0d)] p-6">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(212,175,55,0.08)_100%)]" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#d4af37]/80">
                    Desde 2015
                  </p>
                  <span className="rounded-full border border-[#d4af37]/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#d4af37]">
                    Premium
                  </span>
                </div>
                <div className="space-y-4">
                  <p className="text-4xl font-black tracking-[-0.04em] text-white">
                    Mais do que um corte.
                  </p>
                  <p className="text-lg leading-relaxed text-stone-300">
                    Uma experiência feita para quem valoriza presença, confiança
                    e acabamento impecável.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d4af37]/75">
                Sobre nós
              </p>
              <h2 className="max-w-lg text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
                Visão, precisão e cuidado em cada detalhe.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-stone-300">
                Na nossa barbearia, cada cliente recebe atenção personalizada e
                um serviço pensado para refletir a melhor versão de si.
                Apostamos em cortes clássicos e modernos, sempre com acabamento
                refinado e um ambiente que transmite confiança.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  ["10k+", "Cortes realizados"],
                  ["5 ★", "Satisfação"],
                  ["100%", "Foco no detalhe"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="border border-[#d4af37]/15 bg-[#141419] p-5"
                  >
                    <p className="text-3xl font-black text-[#d4af37]">
                      {value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-stone-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-[#101012] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#d4af37]/75">
                  Serviços
                </p>
                <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
                  O que oferecemos
                </h2>
              </div>
              <p className="max-w-xl text-sm text-stone-400">
                Serviços pensados para quem quer cuidar do visual com qualidade,
                conforto e acabamento premium.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.name}
                  className="group border border-[#d4af37]/15 bg-[#141419] p-6 transition hover:-translate-y-1 hover:border-[#d4af37]/35"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.32em] text-[#d4af37]/75">
                      Premium
                    </span>
                    <span className="text-2xl font-black text-[#d4af37]">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-300">
                    {service.description}
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 border border-[#d4af37]/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-[#111111]"
                  >
                    Reservar
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0d0d10] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#d4af37]/75">
                A nossa diferença
              </p>
              <h2 className="max-w-2xl text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
                Porque os nossos clientes voltam sempre.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="border border-[#d4af37]/15 bg-[#141419] p-7"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center border border-[#d4af37]/30 text-lg font-black text-[#d4af37]">
                    ✓
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-300">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="bg-[#101012] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#d4af37]/75">
                Como funciona
              </p>
              <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
                Um processo simples e eficiente
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="border-t border-[#d4af37]/20 pt-7"
                >
                  <p className="mb-6 text-6xl font-black text-[#d4af37]/30">
                    {step.number}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-300">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0d0d10] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex items-end justify-between gap-4">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#d4af37]/75">
                  Preços
                </p>
                <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
                  Valores simples e claros
                </h2>
              </div>
              <p className="hidden text-sm text-stone-400 md:block">
                Sem complicações, sem surpresas.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["Corte", "€22"],
                ["Barba", "€16"],
                ["Combo premium", "€35"],
              ].map(([name, price]) => (
                <div
                  key={name}
                  className="border border-[#d4af37]/15 bg-[#141419] p-8 text-center"
                >
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#d4af37]/75">
                    {name}
                  </p>
                  <p className="mt-6 text-5xl font-black text-white">{price}</p>
                  <p className="mt-3 text-sm text-stone-300">
                    Excelente qualidade e acabamento profissional.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-[#101012] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#d4af37]/75">
                Avaliações
              </p>
              <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
                O que dizem os nossos clientes
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.author}
                  className="border border-[#d4af37]/15 bg-[#141419] p-7"
                >
                  <p className="text-lg leading-relaxed text-stone-200">
                    “{testimonial.quote}”
                  </p>
                  <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                    {testimonial.author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-[#0d0d10] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl border border-[#d4af37]/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.08),rgba(255,255,255,0.02))] p-8 md:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#d4af37]/75">
                  Contacto
                </p>
                <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
                  Pronto para renovar o teu visual?
                </h2>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-[#d4af37] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-[#111111] transition hover:bg-[#e2bf5a]"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d4af37]/15 bg-[#0b0b0d] px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-[#d4af37] text-[10px] font-black tracking-[0.25em] text-[#d4af37]">
              BP
            </div>
            <span className="uppercase tracking-[0.2em] text-white">
              Barbearia Premium
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#servicos" className="transition hover:text-[#d4af37]">
              Serviços
            </a>
            <a href="#processo" className="transition hover:text-[#d4af37]">
              Processo
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#d4af37]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
