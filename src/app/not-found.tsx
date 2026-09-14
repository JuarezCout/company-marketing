import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-dark px-6 text-center">
      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-brand-gold/60">
          404
        </p>
        <h1 className="text-4xl font-black text-white md:text-5xl">
          Template não encontrado
        </h1>
        <p className="mt-4 text-white/60">
          Este exemplo ainda não existe no portfólio.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex border border-brand-gold/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold hover:bg-brand-gold/10"
        >
          Voltar ao portfólio
        </Link>
      </div>
    </main>
  );
}
