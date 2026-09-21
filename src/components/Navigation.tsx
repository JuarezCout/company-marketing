"use client";

import { useState } from "react";
import homeContent from "@/content/home.json";

const CONTACT_URL =
  "https://wa.me/351000000000?text=Ola! Gostaria de saber mais.";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 border border-brand-gold/60 flex items-center justify-center">
            <span className="text-brand-gold font-black text-xs tracking-widest">
              EST
            </span>
          </div>
          <div className="leading-none">
            <span className="block text-brand-gold/60 text-[10px] tracking-[0.25em] uppercase">
              {homeContent.navigation.brandKicker}
            </span>
            <span className="block text-brand-gold font-bold text-sm tracking-[0.15em] uppercase">
              {homeContent.navigation.brandName}
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            ["#servicos", homeContent.navigation.services],
            ["#como-funciona", homeContent.navigation.process],
            ["#faq", homeContent.navigation.faq],
            ["#contacto", homeContent.navigation.contact],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-brand-gold/60 text-sm tracking-wide hover:text-brand-gold transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-brand-gold text-brand-gold text-sm font-semibold tracking-wide hover:bg-brand-gold hover:text-brand-dark transition-all"
          >
            {homeContent.navigation.contact}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-brand-gold/70 hover:text-brand-gold p-1"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-gold/20 bg-brand-dark px-6 py-4 space-y-4">
          {[
            ["#servicos", homeContent.navigation.services],
            ["#como-funciona", homeContent.navigation.process],
            ["#faq", homeContent.navigation.faq],
            ["#contacto", homeContent.navigation.contact],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block text-brand-gold/60 text-sm tracking-wide hover:text-brand-gold"
            >
              {label}
            </a>
          ))}
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-brand-gold text-brand-gold text-sm font-semibold tracking-wide text-center py-2 hover:bg-brand-gold hover:text-brand-dark transition-all"
          >
            {homeContent.navigation.contact}
          </a>
        </div>
      )}
    </nav>
  );
}
