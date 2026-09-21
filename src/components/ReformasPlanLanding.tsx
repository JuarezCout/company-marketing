import type { Metadata } from "next";
import { Archivo, Karla } from "next/font/google";
import { ArrowRight, Check, Clock, MapPin, Minus, Phone, Plus, Quotes, Wrench } from "@phosphor-icons/react/dist/ssr";
import plans from "@/content/reformas-plans.json";
import images from "@/content/images/reformas.json";

const archivo = Archivo({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const karla = Karla({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

type PlanKey = keyof typeof plans;

export function getReformasPlanMetadata(plan: PlanKey): Metadata {
  const content = plans[plan];
  return {
    title: `${content.name} | ${content.title}`,
    description: content.description,
  };
}

export default function ReformasPlanLanding({ plan }: { plan: PlanKey }) {
  const content = plans[plan];
  const isPremium = plan === "premium";
  const isPro = plan === "pro";
  const whatsapp = "https://wa.me/351223000000?text=Ola! Gostaria de saber mais sobre o plano " + content.plan + ".";

  return (
    <div className={`${archivo.variable} ${karla.variable} theme-reformas min-h-screen bg-(--page) font-(family-name:--font-body) text-(--text)`}>
      <header className="border-b border-[#241512]/10 bg-(--page)">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="/" className="font-(family-name:--font-display) text-sm font-bold uppercase tracking-widest text-[#241512]">Casa Certa</a>
          <span className="rounded-full bg-[#241512] px-4 py-2 text-xs font-semibold text-white">Plano {content.plan}</span>
        </div>
      </header>

      <main>
        <section className="bg-[#241512] px-6 py-20 text-white lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#e2793a]">{content.eyebrow}</p>
              <h1 className="max-w-2xl font-(family-name:--font-display) text-5xl font-extrabold uppercase leading-[0.98] md:text-7xl">{content.title}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">{content.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#e2793a] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c5622a] active:scale-[0.98]">{content.cta}<ArrowRight size={16} weight="bold" /></a>
                <a href="#servicos" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/60">Ver servicos</a>
              </div>
              <div className="mt-10 flex items-center gap-4 text-sm text-white/55"><span className="font-(family-name:--font-display) text-3xl font-bold text-[#e2793a]">{content.price}</span><span>desenvolvimento do website</span></div>
            </div>
            <div className="relative">
              <img src={images.hero.src} alt={images.hero.alt} className="h-80 w-full rounded-2xl object-cover lg:h-[460px]" />
              <div className="absolute -bottom-5 -left-5 rounded-xl bg-[#e2793a] px-5 py-4 text-sm font-semibold text-white">Construido para negocios reais</div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-[#fbe9d8] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between gap-6"><div><h2 className="font-(family-name:--font-display) text-4xl font-extrabold uppercase text-[#241512]">O que este plano apresenta</h2><p className="mt-3 max-w-xl text-sm text-[#5c4438]">Uma estrutura clara para transformar visitas em pedidos de contacto.</p></div><Wrench size={32} weight="light" className="hidden text-[#e2793a] sm:block" /></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {content.services.map((service, index) => <div key={service} className="rounded-2xl bg-white p-6"><span className="text-sm font-bold text-[#e2793a]">0{index + 1}</span><h3 className="mt-5 font-(family-name:--font-display) text-xl font-bold text-[#241512]">{service}</h3><p className="mt-2 text-sm text-[#5c4438]">Informacao clara sobre o servico e a forma de pedir ajuda.</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-[#241512] px-6 py-6 text-white lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 text-[11px] font-semibold uppercase tracking-widest text-white/55">
            {content.benefits.map((benefit) => <span key={benefit}>{benefit}</span>)}
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <img src={images.solutions.src} alt={images.solutions.alt} className="h-80 w-full rounded-2xl object-cover lg:h-[430px]" />
            <div><h2 className="font-(family-name:--font-display) text-4xl font-extrabold uppercase text-[#241512]">{isPremium ? "Uma presenca digital feita a medida" : isPro ? "Mais profundidade para mostrar o seu trabalho" : "Informacao essencial, bem organizada"}</h2><p className="mt-5 max-w-xl text-base leading-relaxed text-[#5c4438]">{isPremium ? "Para empresas com varias areas de atuacao, projetos complexos e necessidade de uma comunicacao digital propria." : isPro ? "Mostre servicos, areas de atuacao, trabalhos realizados e formas simples de pedir um orcamento." : "A base certa para apresentar a empresa, os servicos e os contactos sem complicar."}</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{content.features.map((feature) => <div key={feature} className="flex items-start gap-3 text-sm text-[#5c4438]"><Check size={18} weight="bold" className="mt-0.5 flex-none text-[#e2793a]" />{feature}</div>)}</div></div>
          </div>
        </section>

        {isPro || isPremium ? <section className="bg-[#241512] px-6 py-20 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><p className="text-xs font-semibold uppercase tracking-widest text-[#e2793a]">{isPremium ? "Personalizacao premium" : "Prova do trabalho"}</p><h2 className="mt-4 font-(family-name:--font-display) text-4xl font-extrabold uppercase">{isPremium ? "A sua reputacao merece mais do que uma pagina" : "Mostre porque devem escolher a sua empresa"}</h2><p className="mt-4 max-w-xl text-white/60">{isPremium ? "Portefolio, equipa, certificacoes, integracoes e uma experiencia pensada para a forma como a empresa vende." : "Inclua uma galeria de projetos, um caso de estudo e uma secao de perguntas para responder antes do primeiro contacto."}</p></div><img src={images.caseStudy.src} alt={images.caseStudy.alt} className="h-64 w-full rounded-2xl object-cover" /></div></section> : null}

        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <img src={images.caseStudy.src} alt={images.caseStudy.alt} className="h-72 w-full rounded-2xl object-cover lg:h-96" />
            <div>
              <h2 className="font-(family-name:--font-display) text-4xl font-extrabold uppercase text-[#241512]">Um trabalho apresentado com clareza</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5c4438]">{isPremium ? "Apresente projetos, equipa, certificacoes e areas de atuacao com uma estrutura pensada para gerar pedidos comerciais." : isPro ? "Mostre trabalhos realizados e explique o processo para criar confianca antes do primeiro contacto." : "Uma apresentacao direta para que o cliente perceba rapidamente o que faz a sua empresa."}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">{content.features.slice(0, isPremium ? 4 : isPro ? 3 : 2).map((feature) => <div key={feature} className="flex items-start gap-3 text-sm text-[#5c4438]"><Check size={18} weight="bold" className="mt-0.5 flex-none text-[#e2793a]" />{feature}</div>)}</div>
            </div>
          </div>
        </section>

        <section className="bg-[#fbe9d8] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center"><Quotes size={28} weight="fill" className="mx-auto text-[#e2793a]" /><p className="mt-5 text-xl leading-relaxed text-[#241512]">{content.testimonial}</p><p className="mt-5 text-sm font-semibold text-[#241512]">{content.testimonialAuthor}</p></div>
        </section>

        <section className="bg-[#241512] px-6 py-20 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3 lg:items-start"><div><h2 className="font-(family-name:--font-display) text-4xl font-extrabold uppercase">Fale connosco</h2><p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">Escolha o plano que corresponde ao momento atual da sua empresa.</p></div><div className="flex items-start gap-3 text-sm text-white/70"><MapPin size={20} className="mt-0.5 flex-none text-[#e2793a]" />Rua do Trabalho, 73<br />Coimbra</div><div className="flex items-start gap-3 text-sm text-white/70"><Phone size={20} className="mt-0.5 flex-none text-[#e2793a]" />+351 223 000 000<br />Seg - Sab</div></div>
        </section>

        <section className="bg-[#fbe9d8] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl"><h2 className="mb-8 font-(family-name:--font-display) text-4xl font-extrabold uppercase text-[#241512]">Perguntas sobre este plano</h2><div className="divide-y divide-[#241512]/10">{content.faq.map((item) => <details key={item.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-[#241512]">{item.question}<Minus size={16} className="hidden text-[#e2793a] group-open:block" /><Plus size={16} className="text-[#e2793a] group-open:hidden" /></summary><p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5c4438]">{item.answer}</p></details>)}</div></div>
        </section>

        <section id="contacto" className="bg-[#e2793a] px-6 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="font-(family-name:--font-display) text-4xl font-extrabold uppercase text-[#241512]">Pronto para apresentar melhor o seu negocio?</h2><p className="mt-3 max-w-xl text-sm text-[#241512]/70">Fale connosco e escolha a estrutura certa para a sua empresa.</p></div><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#241512] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1c0f0c]">Falar sobre o plano {content.plan}<ArrowRight size={16} weight="bold" /></a></div></section>
      </main>

      <footer className="bg-[#241512] px-6 py-10 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-white/55"><span>{content.name}</span><span className="flex items-center gap-2"><MapPin size={16} /> Coimbra <Clock size={16} /> Seg - Sab</span><a href={`tel:+351223000000`} className="flex items-center gap-2 text-[#e2793a]"><Phone size={16} /> +351 223 000 000</a></div></footer>
    </div>
  );
}
