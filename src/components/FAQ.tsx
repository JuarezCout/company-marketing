"use client";

import { useState } from "react";
import homeContent from "@/content/home.json";

// Replace with the client's contact number
const WHATSAPP_NUMBER = "351000000000";
const faqs = homeContent.faq.items;

export default function FAQ() {
  const categories = homeContent.faq.categories;
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
              {homeContent.faq.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {homeContent.faq.title}
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
                  className={`text-brand-gold/40 text-lg mt-0.5 shrink-0 transition-transform ${openIndex === i ? "rotate-45" : ""}`}
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
            {homeContent.faq.contactCta}
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Tenho uma questão sobre os vossos serviços.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-brand-gold text-brand-gold text-sm font-semibold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-dark transition-all"
          >
            {homeContent.faq.contactButton}
          </a>
        </div>
      </div>
    </section>
  );
}
