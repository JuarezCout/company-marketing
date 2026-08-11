// Replace with the client's contact number
const CONTACT_NUMBER = "351000000000";

export default function Hero() {
  return (
    <section className="min-h-screen bg-brand-dark flex flex-col justify-center relative overflow-hidden">
      {/* Subtle gold gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Thin gold rule */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-brand-gold/40" />
          <span className="text-brand-gold/50 text-xs tracking-[0.3em] uppercase">
            A sua cidade · Portugal
          </span>
          <div className="h-px w-16 bg-brand-gold/40" />
        </div>

        {/* Brand name */}
        <p className="text-brand-gold/50 text-sm tracking-[0.4em] uppercase mb-3">
          Estabelecimento Premium
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none mb-4">
          O Seu
        </h1>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-brand-gold tracking-tight leading-none mb-6">
          Negócio
        </h1>

        <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12">
          Excelência em cada detalhe. Serviços de qualidade superior com a
          atenção personalizada que os seus clientes merecem.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#servicos"
            className="px-8 py-3 bg-brand-gold text-brand-dark font-bold text-sm tracking-widest uppercase hover:bg-brand-gold-light transition-colors"
          >
            Ver Serviços
          </a>
          <a
            href={`https://wa.me/${CONTACT_NUMBER}?text=Olá! Gostaria de saber mais sobre os vossos serviços.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-brand-gold/50 text-brand-gold font-semibold text-sm tracking-widest uppercase hover:border-brand-gold transition-colors"
          >
            Entrar em Contacto
          </a>
        </div>

        {/* Bottom rule */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-8 bg-brand-gold/20" />
          <div className="w-1 h-1 bg-brand-gold/30 rotate-45" />
          <div className="h-px w-8 bg-brand-gold/20" />
        </div>
      </div>
    </section>
  );
}
