const steps = [
  {
    number: "01",
    title: "Entre em Contacto",
    description:
      "Contacte-nos por WhatsApp, email ou telefone. Respondemos com rapidez e sem complicações.",
    details: ["Via WhatsApp ou Email", "Resposta rápida", "Sem burocracia"],
  },
  {
    number: "02",
    title: "Escolha o Seu Serviço",
    description:
      "O nosso especialista aconselha-o sobre a melhor solução para as suas necessidades.",
    details: [
      "Consulta personalizada",
      "Ampla variedade",
      "Produtos e materiais premium",
    ],
  },
  {
    number: "03",
    title: "Resultado de Excelência",
    description:
      "Acabamento impecável e resultado garantido. Saia satisfeito em cada visita.",
    details: [
      "Resultado garantido",
      "Acabamento preciso",
      "Experiência à medida",
    ],
  },
];

export default function Process() {
  return (
    <section id="como-funciona" className="py-28 px-6 lg:px-8 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-brand-gold/50" />
            <span className="text-brand-gold/50 text-xs tracking-[0.3em] uppercase">
              O nosso processo
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Como Funciona
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-t border-brand-gold/20 pt-8"
            >
              <p className="text-brand-gold/20 font-black text-6xl mb-6">
                {step.number}
              </p>
              <h3 className="text-brand-gold font-bold text-xl tracking-wide mb-3">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                {step.description}
              </p>
              <ul className="space-y-2">
                {step.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 text-white/30 text-xs tracking-wide"
                  >
                    <div className="w-1 h-1 bg-brand-gold/40 rotate-45 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Info bar */}
        <div className="border border-brand-gold/20 p-8 md:p-10">
          <p className="text-brand-gold/40 text-xs tracking-[0.3em] uppercase mb-6">
            Horário de Funcionamento
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              ["Seg – Sex", "A definir"],
              ["Sábado", "A definir"],
              ["Domingo", "A definir"],
            ].map(([day, hrs]) => (
              <div
                key={day}
                className="border-l border-brand-gold/10 pl-4 first:border-l-0 first:pl-0"
              >
                <p className="text-brand-gold/40 text-xs tracking-widest uppercase mb-1">
                  {day}
                </p>
                <p className="text-brand-gold/60 font-bold tracking-wide">
                  {hrs}
                </p>
              </div>
            ))}
          </div>
          <p className="text-white/20 text-xs mt-6">
            * Horário a confirmar com o estabelecimento
          </p>
        </div>
      </div>
    </section>
  );
}
