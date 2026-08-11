// Replace with the client's contact number and address
const WHATSAPP_NUMBER = "351000000000";
const MAPS_URL = "https://www.google.com/maps";

export default function CTA() {
  return (
    <section className="py-28 px-6 lg:px-8 bg-brand-dark">
      <div className="max-w-5xl mx-auto">
        {/* Main CTA block */}
        <div className="border border-brand-gold/20 p-12 md:p-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-brand-gold/30" />
            <div className="w-1.5 h-1.5 bg-brand-gold/40 rotate-45" />
            <div className="h-px w-12 bg-brand-gold/30" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Pronto para
          </h2>
          <h2 className="text-4xl md:text-6xl font-black text-brand-gold tracking-tight mb-10">
            Começar?
          </h2>

          <p className="text-white/30 text-sm max-w-md mx-auto mb-12 leading-relaxed">
            Contacte-nos via WhatsApp ou venha directamente ao nosso
            estabelecimento. Estamos prontos para o receber.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os vossos serviços.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3.5 bg-brand-gold text-brand-dark font-bold text-sm tracking-widest uppercase hover:bg-brand-gold-light transition-colors"
            >
              Entrar em Contacto
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3.5 border border-brand-gold/30 text-brand-gold/60 text-sm font-semibold tracking-widest uppercase hover:border-brand-gold hover:text-brand-gold transition-all"
            >
              Como Chegar
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <div className="h-px w-12 bg-brand-gold/30" />
            <div className="w-1.5 h-1.5 bg-brand-gold/40 rotate-45" />
            <div className="h-px w-12 bg-brand-gold/30" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-px bg-brand-gold/10 mt-px">
          {[
            ["+ 500", "Clientes satisfeitos"],
            ["5 ★", "Avaliação média"],
            ["100%", "Dedicação"],
          ].map(([val, label]) => (
            <div key={label} className="bg-brand-dark py-8 text-center">
              <p className="text-brand-gold font-black text-2xl mb-1">{val}</p>
              <p className="text-white/25 text-xs tracking-widest uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
