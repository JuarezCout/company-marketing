const reasons = [
  {
    number: "01",
    title: "Equipa Especializada",
    description: "Profissionais experientes e dedicados, garantindo sempre um resultado de excelência para cada cliente.",
  },
  {
    number: "02",
    title: "Qualidade Superior",
    description: "Utilizamos os melhores produtos e técnicas do mercado para que o resultado supere sempre as expectativas.",
  },
  {
    number: "03",
    title: "Experiência Premium",
    description: "Um espaço cuidado e acolhedor onde cada detalhe foi pensado para proporcionar o máximo conforto.",
  },
];

export default function Problem() {
  return (
    <section className="py-28 px-6 lg:px-8 bg-brand-green">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-brand-gold/50" />
            <span className="text-brand-gold/50 text-xs tracking-[0.3em] uppercase">A nossa diferença</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight max-w-xl">
            Porquê Escolher-nos
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-brand-gold/10">
          {reasons.map((r) => (
            <div key={r.number} className="bg-brand-green p-10 hover:bg-brand-green-mid transition-colors group">
              <p className="text-brand-gold/25 font-black text-5xl mb-8 group-hover:text-brand-gold/40 transition-colors">
                {r.number}
              </p>
              <h3 className="text-brand-gold font-bold text-lg tracking-wide mb-3">{r.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-px bg-brand-dark px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">Venha descobrir a diferença no seu negócio.</p>
          <a
            href="#servicos"
            className="text-brand-gold text-sm font-semibold tracking-widest uppercase border-b border-brand-gold/40 hover:border-brand-gold transition-colors pb-0.5"
          >
            Ver Serviços →
          </a>
        </div>

      </div>
    </section>
  );
}
