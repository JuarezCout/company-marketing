"use client";

import { useState, FormEvent } from "react";

// Replace with the client's real contact info
const WHATSAPP_NUMBER = "351000000000";
const CONTACT_EMAIL = "contacto@onegocio.pt";
const MAPS_URL = "https://www.google.com/maps";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace YOUR_FORMSPREE_ID with a real Formspree form ID
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", phone: "", service: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-transparent border border-brand-gold/20 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-gold/60 transition-colors";

  return (
    <section id="contacto" className="py-28 px-6 lg:px-8 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-brand-gold/50" />
            <span className="text-brand-gold/50 text-xs tracking-[0.3em] uppercase">
              Fale connosco
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Contacto
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-10">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os vossos serviços.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-t border-brand-gold/15 pt-6 hover:border-brand-gold/40 transition-colors"
            >
              <p className="text-brand-gold/30 text-xs tracking-[0.3em] uppercase mb-1">
                WhatsApp
              </p>
              <p className="text-brand-gold font-semibold group-hover:text-brand-gold-light transition-colors">
                +351 000 000 000
              </p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group block border-t border-brand-gold/15 pt-6 hover:border-brand-gold/40 transition-colors"
            >
              <p className="text-brand-gold/30 text-xs tracking-[0.3em] uppercase mb-1">
                Email
              </p>
              <p className="text-brand-gold font-semibold group-hover:text-brand-gold-light transition-colors">
                {CONTACT_EMAIL}
              </p>
            </a>

            {/* Location */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-t border-brand-gold/15 pt-6 hover:border-brand-gold/40 transition-colors"
            >
              <p className="text-brand-gold/30 text-xs tracking-[0.3em] uppercase mb-1">
                Localização
              </p>
              <p className="text-brand-gold font-semibold group-hover:text-brand-gold-light transition-colors">
                A sua cidade, Portugal
              </p>
              <p className="text-white/20 text-xs mt-1">Ver no Google Maps →</p>
            </a>

            {/* Hours */}
            <div className="border-t border-brand-gold/15 pt-6">
              <p className="text-brand-gold/30 text-xs tracking-[0.3em] uppercase mb-3">
                Horário
              </p>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-white/40">
                  <span>Segunda – Sexta</span>
                  <span className="text-brand-gold/60">A definir</span>
                </div>
                <div className="flex justify-between text-white/40">
                  <span>Sábado</span>
                  <span className="text-brand-gold/60">A definir</span>
                </div>
                <div className="flex justify-between text-white/40">
                  <span>Domingo</span>
                  <span className="text-white/20">A definir</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Nome"
              className={inputClass}
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Telefone"
              className={inputClass}
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`${inputClass} appearance-none`}
            >
              <option value="" className="bg-brand-dark">
                Serviço de interesse
              </option>
              {[
                "Serviço Essencial",
                "Serviço Premium",
                "Pacote VIP",
                "Plano Mensal",
                "Outro",
              ].map((s) => (
                <option key={s} value={s} className="bg-brand-dark">
                  {s}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Mensagem"
              className={inputClass}
            />
            <button
              type="submit"
              className="w-full py-3 bg-brand-gold text-brand-dark font-bold text-sm tracking-widest uppercase hover:bg-brand-gold-light transition-colors"
            >
              Enviar Mensagem
            </button>
            {submitted && (
              <p className="text-brand-gold/70 text-sm text-center border border-brand-gold/20 py-3">
                Mensagem enviada. Em breve entraremos em contacto.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
