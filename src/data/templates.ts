export type TemplateItem = {
  slug: string;
  name: string;
  category: string;
  label: string;
  tagline: string;
  description: string;
  accent: string;
  accentSoft: string;
  heroTitle: string;
  heroSubtitle: string;
  theme: {
    page: string;
    panel: string;
    panelStrong: string;
    text: string;
    muted: string;
    border: string;
    buttonText: string;
    gradient: string;
  };
  services: { title: string; description: string }[];
  process: string[];
  stats: { value: string; label: string }[];
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
  };
};

export const templates: TemplateItem[] = [
  {
    slug: "barbearia",
    name: "Barbearia Premium",
    category: "Estilo e presença",
    label: "Barbearia",
    tagline: "Precisão, presença e reputação.",
    description:
      "Template premium para barbearias que querem transmitir confiança, autoridade e uma experiência de alto padrão.",
    accent: "#d4af37",
    accentSoft: "rgba(212, 175, 55, 0.14)",
    heroTitle: "Mais que uma barbearia — uma referência na zona.",
    heroSubtitle:
      "Cortes de excelência, atendimento premium e uma marca que impressiona na primeira visita.",
    theme: {
      page: "#0b0b0d",
      panel: "#17171a",
      panelStrong: "#1d1d22",
      text: "#f8f5ef",
      muted: "#d7d1c5",
      border: "rgba(212,175,55,0.24)",
      buttonText: "#0d0d0d",
      gradient:
        "linear-gradient(135deg, rgba(212,175,55,0.18), rgba(0,0,0,0.15))",
    },
    services: [
      {
        title: "Corte Premium",
        description: "Corte clássico ou moderno com acabamento impecável.",
      },
      {
        title: "Barba e Bigode",
        description: "Modelagem de precisão para um visual cuidado e forte.",
      },
      {
        title: "Pacote de Manutenção",
        description:
          "Fidelização para clientes que valorizam presença e rotina.",
      },
    ],
    process: [
      "Consulta de estilo e preferências",
      "Execução com acabamento profissional",
      "Follow-up para retenção e indicação",
    ],
    stats: [
      { value: "4.9/5", label: "avaliação média" },
      { value: "+1.2k", label: "clientes ativos" },
      { value: "48h", label: "para agendar" },
    ],
    contact: {
      phone: "+351 210 000 000",
      whatsapp: "351210000000",
      email: "hello@barbeariapremium.pt",
      address: "Rua da Estética, 42 · Lisboa",
    },
  },
  {
    slug: "salao-beleza",
    name: "Salão de Beleza Feminino",
    category: "Luxo e cuidado",
    label: "Salão de beleza",
    tagline: "Estética, conforto e confiança.",
    description:
      "Template sofisticado para salões femininos com foco em experiência, presença online e conversão de novos clientes.",
    accent: "#f4a9c6",
    accentSoft: "rgba(244, 169, 198, 0.16)",
    heroTitle: "Um espaço que transmite luxo desde o primeiro clique.",
    heroSubtitle:
      "Cuidamos da imagem da sua cliente com um ambiente premium, cuidado e identidade forte.",
    theme: {
      page: "#140d12",
      panel: "#1d1318",
      panelStrong: "#2a1a22",
      text: "#fff5f8",
      muted: "#f3dbe4",
      border: "rgba(244,169,198,0.22)",
      buttonText: "#1a1015",
      gradient:
        "linear-gradient(135deg, rgba(244,169,198,0.18), rgba(255,255,255,0.04))",
    },
    services: [
      {
        title: "Tratamentos faciais",
        description: "Rituais de cuidado com resultados visíveis e duradouros.",
      },
      {
        title: "Cabelo e styling",
        description: "Penteados e tratamentos personalizados para cada rosto.",
      },
      {
        title: "Pacotes femininos",
        description: "Experiências premium com convite à fidelização.",
      },
    ],
    process: [
      "Diagnóstico do objetivo da cliente",
      "Tratamento ou serviço personalizado",
      "Recomendação de manutenção e upgrades",
    ],
    stats: [
      { value: "85%", label: "retorno de clientes" },
      { value: "+900", label: "agendamentos mensais" },
      { value: "2.5x", label: "mais conversão" },
    ],
    contact: {
      phone: "+351 216 000 000",
      whatsapp: "351216000000",
      email: "bem@salaoelegance.pt",
      address: "Avenida da Beleza, 18 · Porto",
    },
  },
  {
    slug: "reformas",
    name: "Reformas & Construção",
    category: "Confiabilidade e execução",
    label: "Reformas",
    tagline: "Qualidade, entrega e confiança.",
    description:
      "Template para empresas de reformas que querem mostrar organização, rigor técnico e reputação sólida.",
    accent: "#8ecae6",
    accentSoft: "rgba(142, 202, 230, 0.16)",
    heroTitle: "Transformamos espaços com rigor, qualidade e presença.",
    heroSubtitle:
      "A sua marca ganha confiança com um site que comunica experiência, organização e resultados duradouros.",
    theme: {
      page: "#0d1217",
      panel: "#121d26",
      panelStrong: "#182833",
      text: "#edf7ff",
      muted: "#bdd9e9",
      border: "rgba(142,202,230,0.24)",
      buttonText: "#09161d",
      gradient:
        "linear-gradient(135deg, rgba(142,202,230,0.2), rgba(8,16,22,0.2))",
    },
    services: [
      {
        title: "Reformas integrais",
        description:
          "Transformações completas com acompanhamento profissional.",
      },
      {
        title: "Obras de acabamento",
        description: "Detalhes refinados que elevam qualquer espaço.",
      },
      {
        title: "Projetos personalizados",
        description: "Soluções adaptadas às necessidades do cliente.",
      },
    ],
    process: [
      "Diagnóstico e orçamento transparente",
      "Execução com planeamento claro",
      "Entrega final e acompanhamento pós-obra",
    ],
    stats: [
      { value: "12 anos", label: "de experiência" },
      { value: "230+", label: "projetos concluídos" },
      { value: "100%", label: "orçamento claro" },
    ],
    contact: {
      phone: "+351 223 000 000",
      whatsapp: "351223000000",
      email: "projeto@reformasarq.pt",
      address: "Rua do Trabalho, 73 · Coimbra",
    },
  },
  {
    slug: "banho-e-cozinha",
    name: "Banho & Cozinha",
    category: "Especialistas em acabamento",
    label: "Banho e cozinha",
    tagline: "Funcionalidade com design premium.",
    description:
      "Template pensado para marcas de remodelação de cozinhas e casas de banho com foco em estética, qualidade e persuasão.",
    accent: "#f9c74f",
    accentSoft: "rgba(249, 199, 79, 0.18)",
    heroTitle: "Mais valor, mais conforto e mais beleza no seu espaço.",
    heroSubtitle:
      "Um site pensado para transformar pedidos em decisões de compra com confiança total.",
    theme: {
      page: "#17120d",
      panel: "#201a17",
      panelStrong: "#2e241f",
      text: "#fff5ea",
      muted: "#f4dcc3",
      border: "rgba(249,199,79,0.26)",
      buttonText: "#17120d",
      gradient:
        "linear-gradient(135deg, rgba(249,199,79,0.18), rgba(255,130,78,0.08))",
    },
    services: [
      {
        title: "Remodelação de cozinhas",
        description: "Soluções funcionais e visualmente premium.",
      },
      {
        title: "Casas de banho",
        description: "Ambientes modernos, acolhedores e altamente funcionais.",
      },
      {
        title: "Projeto completo",
        description: "Planeamento, execução e acabamento com toque premium.",
      },
    ],
    process: [
      "Reunião inicial e objetivos",
      "Design do projeto e materiais",
      "Execução e acabamento final",
    ],
    stats: [
      { value: "7 dias", label: "para proposta" },
      { value: "300+", label: "obras concluídas" },
      { value: "4.8/5", label: "satisfação" },
    ],
    contact: {
      phone: "+351 219 000 000",
      whatsapp: "351219000000",
      email: "hello@bcdesign.pt",
      address: "Av. do Design, 99 · Sintra",
    },
  },
  {
    slug: "canalizacao",
    name: "Canalização & Assistência",
    category: "Resposta rápida e profissional",
    label: "Canalização",
    tagline: "Solucionar problemas com rapidez e segurança.",
    description:
      "Template para empresas de canalização e assistência técnica, com foco em urgência, reputação e conversão imediata.",
    accent: "#7dd3fc",
    accentSoft: "rgba(125, 211, 252, 0.16)",
    heroTitle: "A urgência precisa de uma resposta profissional e imediata.",
    heroSubtitle:
      "Comunicar rapidez, conhecimento técnico e confiança desde o primeiro contacto.",
    theme: {
      page: "#0d1419",
      panel: "#101c25",
      panelStrong: "#122432",
      text: "#ebf8ff",
      muted: "#cfeafc",
      border: "rgba(125,211,252,0.24)",
      buttonText: "#0d1419",
      gradient:
        "linear-gradient(135deg, rgba(125,211,252,0.18), rgba(13,20,25,0.2))",
    },
    services: [
      {
        title: "Urgências domésticas",
        description: "Atendimento rápido para situações de pressão e risco.",
      },
      {
        title: "Manutenção preventiva",
        description: "Soluções que evitam falhas futuras e custos inesperados.",
      },
      {
        title: "Projetos e substituições",
        description: "Instalações novas e upgrades completos.",
      },
    ],
    process: [
      "Contacto e diagnóstico da situação",
      "Visita técnica e plano de ação",
      "Execução e garantia do serviço",
    ],
    stats: [
      { value: "24/7", label: "atendimento" },
      { value: "1.500+", label: "intervenções" },
      { value: "98%", label: "satisfação" },
    ],
    contact: {
      phone: "+351 211 000 000",
      whatsapp: "351211000000",
      email: "resolva@canalizacaorapida.pt",
      address: "Rua da Água, 5 · Vila Nova de Gaia",
    },
  },
  {
    slug: "saude",
    name: "Saúde & Bem-Estar",
    category: "Credibilidade e acolhimento",
    label: "Saúde",
    tagline: "Acesso, confiança e experiência humana.",
    description:
      "Template premium para clínicas, centros de saúde e serviços de bem-estar com foco em credibilidade e cuidado.",
    accent: "#a7f3d0",
    accentSoft: "rgba(167, 243, 208, 0.16)",
    heroTitle:
      "A sua clínica merece uma presença que transmite confiança desde o início.",
    heroSubtitle:
      "Uma marca que acolhe, informa e converte visitas em confiança e compromisso.",
    theme: {
      page: "#0d1512",
      panel: "#101d18",
      panelStrong: "#152c24",
      text: "#f1fff7",
      muted: "#d5f6e2",
      border: "rgba(167,243,208,0.24)",
      buttonText: "#0d1512",
      gradient:
        "linear-gradient(135deg, rgba(167,243,208,0.18), rgba(13,21,18,0.2))",
    },
    services: [
      {
        title: "Consulta inicial",
        description: "Acolhimento profissional e diagnóstico claro.",
      },
      {
        title: "Tratamentos personalizados",
        description: "Planos adaptados ao paciente e às suas metas.",
      },
      {
        title: "Follow-up e manutenção",
        description: "Acompanhamento contínuo para melhores resultados.",
      },
    ],
    process: [
      "Avaliação e esclarecimento do objetivo",
      "Plano de tratamento ou aconselhamento",
      "Acompanhamento e manutenção do bem-estar",
    ],
    stats: [
      { value: "4.9/5", label: "experiência" },
      { value: "+700", label: "pacientes por mês" },
      { value: "90%", label: "retorno" },
    ],
    contact: {
      phone: "+351 214 000 000",
      whatsapp: "351214000000",
      email: "info@saudebemestar.pt",
      address: "Praça da Saúde, 10 · Faro",
    },
  },
];

export function getTemplateBySlug(slug: string) {
  return templates.find((template) => template.slug === slug);
}
