"use client";

import { useState } from "react";

// Replace with the client's contact number
const WHATSAPP_NUMBER = "351000000000";

const faqs = [
  {
    category: "Marcações",
    question: "Preciso de marcar com antecedência?",
    answer:
      "Recomendamos marcação prévia para garantir atendimento imediato. Pode contactar-nos via WhatsApp, email ou telefone.",
  },
  {
    category: "Marcações",
    question: "Como posso marcar um serviço?",
    answer:
      "A forma mais rápida é pelo WhatsApp ou por telefone. Também pode preencher o formulário de contacto no nosso website.",
  },
  {
    category: "Serviços",
    question: "Que serviços oferecem?",
    answer:
      "Oferecemos uma gama completa de serviços essenciais, premium e especiais. Consulte a nossa lista de serviços para todos os detalhes.",
  },
  {
    category: "Serviços",
    question: "Quanto tempo demora um serviço?",
    answer:
      "A duração varia conforme o serviço escolhido. Na marcação informamos a duração estimada para que possa planear a sua visita.",
  },
  {
    category: "Preços",
    question: "Quais são os preços?",
    answer:
      "Os preços variam conforme o serviço e podem ser consultados na nossa página de serviços. Contacte-nos para um orçamento personalizado.",
  },
  {
    category: "Preços",
    question: "Quais os métodos de pagamento aceites?",
    answer:
      "Aceitamos numerário, cartão de débito e crédito. Confirme as opções disponíveis aquando do seu contacto.",
  },
  {
    category: "Localização",
    question: "Onde estão localizados?",
    answer:
      "A nossa morada será disponibilizada após confirmação de marcação. Estamos numa localização central e de fácil acesso.",
  },
  {
    category: "Localização",
    question: "Há estacionamento disponível?",
    answer: "Há estacionamento disponível nas imediações do estabelecimento.",
  },
];

export default function FAQ() {
  const categories = [
    "Todas",
    ...Array.from(new Set(faqs.map((f) => f.category))),
  ];
  const [selectedCat, setSelectedCat] = useState("Todas");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered =
    selectedCat === "Todas"
      ? faqs
      : faqs.filter((f) => f.category === selectedCat);

  return (
    <section id="faq" className="py-28 px-6 lg:px-8 bg-brand-green">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-brand-gold/50" />
            <span className="text-brand-gold/50 text-xs tracking-[0.3em] uppercase">
              Dúvidas frequentes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            FAQ
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCat(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-1.5 text-xs tracking-widest uppercase font-semibold border transition-all ${
                selectedCat === cat
                  ? "bg-brand-gold text-brand-dark border-brand-gold"
                  : "border-brand-gold/20 text-brand-gold/40 hover:border-brand-gold/50 hover:text-brand-gold/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="divide-y divide-brand-gold/10">
          {filtered.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-5 flex items-start justify-between gap-4 text-left group"
              >
                <span
                  className={`text-base font-semibold tracking-wide transition-colors ${openIndex === i ? "text-brand-gold" : "text-brand-gold/60 group-hover:text-brand-gold"}`}
                >
                  {faq.question}
                </span>
                <span
                  className={`text-brand-gold/40 text-lg mt-0.5 flex-shrink-0 transition-transform ${openIndex === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <p className="pb-5 text-white/40 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 border border-brand-gold/15 p-10 text-center">
          <p className="text-white/40 text-sm mb-6">
            Ainda tem dúvidas? A nossa equipa está disponível.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Tenho uma questão sobre os vossos serviços.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-brand-gold text-brand-gold text-sm font-semibold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-dark transition-all"
          >
            Entrar em Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
