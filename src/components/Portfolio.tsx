"use client";

import { useState } from "react";
import services from "@/data/services.json";

// Replace with the client's contact number
const WHATSAPP_NUMBER = "351000000000";

export default function Portfolio() {
  const categories = [
    "Todos",
    ...Array.from(new Set(services.map((s) => s.category))),
  ];
  const [selected, setSelected] = useState("Todos");

  const filtered =
    selected === "Todos"
      ? services
      : services.filter((s) => s.category === selected);

  return (
    <section className="py-28 px-6 lg:px-8 bg-brand-green">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-brand-gold/50" />
            <span className="text-brand-gold/50 text-xs tracking-[0.3em] uppercase">
              O que oferecemos
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Serviços
            </h2>
            {/* Update with real pricing */}
            <p className="text-white/30 text-sm">
              Preços ilustrativos — a personalizar com o cliente
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-1.5 text-xs tracking-widest uppercase font-semibold border transition-all ${
                selected === cat
                  ? "bg-brand-gold text-brand-dark border-brand-gold"
                  : "border-brand-gold/20 text-brand-gold/40 hover:border-brand-gold/50 hover:text-brand-gold/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-gold/10 mb-px">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="bg-brand-green p-8 hover:bg-brand-green-mid transition-colors group flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <p className="text-brand-gold/20 font-black text-xs tracking-[0.3em] uppercase">
                  {service.category}
                </p>
                <p className="text-brand-gold font-black text-2xl">
                  €{service.price}
                </p>
              </div>
              <h3 className="text-brand-gold font-bold text-lg tracking-wide mb-2">
                {service.title}
              </h3>
              <p className="text-brand-gold/50 text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <ul className="space-y-1.5 mb-6">
                {service.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-2 text-white/30 text-xs"
                  >
                    <div className="w-1 h-1 bg-brand-gold/30 rotate-45 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre ${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border border-brand-gold/30 text-brand-gold/60 text-xs font-semibold tracking-widest uppercase py-2.5 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all"
              >
                Saber Mais
              </a>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="bg-brand-dark px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">Não encontrou o que procura?</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Tenho uma questão sobre os serviços.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold text-sm font-semibold tracking-widest uppercase border-b border-brand-gold/40 hover:border-brand-gold transition-colors pb-0.5"
          >
            Falar Connosco →
          </a>
        </div>
      </div>
    </section>
  );
}
