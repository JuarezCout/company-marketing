# L8 Studio — Template de Website Premium

Template de website de proposta para estabelecimentos de médio porte. Design elegante em preto, branco e dourado, construído com Next.js 15, React 19 e Tailwind CSS.

## Stack

- **Framework**: Next.js 15 com App Router
- **UI**: React 19 + TypeScript
- **Estilo**: Tailwind CSS v4 com tema customizado
- **Build**: Turbopack
- **Package Manager**: npm

## Estrutura

```
src/
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout raiz + metadata
│   └── globals.css       # Tema de cores (brand tokens)
├── components/
│   ├── Navigation.tsx    # Header com menu mobile
│   ├── Hero.tsx          # Hero section
│   ├── Problem.tsx       # Secção "Porquê Escolher-nos"
│   ├── Process.tsx       # Processo em 3 passos
│   ├── Portfolio.tsx     # Grelha de serviços com filtros
│   ├── FAQ.tsx           # FAQ com accordion
│   ├── CTA.tsx           # Call-to-action principal
│   ├── Contact.tsx       # Formulário + info de contacto
│   └── Footer.tsx        # Rodapé
└── data/
    └── services.json     # Serviços e preços
```

## Tema de Cores

Definido em `src/app/globals.css`:

| Token              | Valor     | Uso                       |
| ------------------ | --------- | ------------------------- |
| `brand-dark`       | `#080808` | Fundo principal (preto)   |
| `brand-green`      | `#111111` | Fundo secções alternadas  |
| `brand-green-mid`  | `#191919` | Hover de cards            |
| `brand-gold`       | `#c9a84c` | Cor de destaque (dourado) |
| `brand-gold-light` | `#d4b85e` | Hover dourado             |

## Comandos

```bash
npm install       # Instalar dependências
npm run dev       # Servidor de desenvolvimento (porta 3000)
npm run build     # Build de produção
npm run start     # Servir build de produção
npm run lint      # ESLint
```

## Personalização por Cliente

### 1. Informações de contacto

Em cada componente existe um comentário `// Replace with the client's...`. Os valores a substituir são:

- `WHATSAPP_NUMBER` / `CONTACT_NUMBER` — número real do cliente
- `CONTACT_EMAIL` — email real
- `MAPS_URL` — link Google Maps do estabelecimento

### 2. Identidade visual

Em `Navigation.tsx` e `Footer.tsx`:

- Sigla do logo (`EST`) → iniciais do cliente
- Label "Estabelecimento" → tipo de negócio
- Nome "O Seu Negócio" → nome do estabelecimento

### 3. Serviços e preços

Editar `src/data/services.json` — cada entrada tem:

```json
{
  "id": 1,
  "category": "Essencial",
  "title": "Nome do Serviço",
  "description": "Descrição",
  "price": 15,
  "details": ["detalhe 1", "detalhe 2"]
}
```

### 4. Conteúdo das secções

- **Hero** — `Hero.tsx`: título, subtítulo, tagline
- **Porquê Escolher-nos** — `Problem.tsx`: array `reasons`
- **Como Funciona** — `Process.tsx`: array `steps` + horário
- **FAQ** — `FAQ.tsx`: array `faqs`
- **CTA** — `CTA.tsx`: título, estatísticas
- **Metadata SEO** — `layout.tsx`: título e descrição da página

### 5. Formulário de contacto

Substituir `YOUR_FORMSPREE_ID` em `Contact.tsx` pelo ID real do [Formspree](https://formspree.io).

## Deploy

Pronto para Vercel (recomendado):

```bash
npx vercel
```

Ou qualquer plataforma com suporte a Next.js (Netlify, Railway, VPS).

---

© 2026 L8 Studio. Todos os direitos reservados.
