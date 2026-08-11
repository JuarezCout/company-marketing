# 🚀 Guia de Configuração - L8 Studio

Bem-vindo! Este guia vai ajudá-lo a configurar sua loja online em 3D.

## 1️⃣ Configuração do WhatsApp

### Passo 1: Obter seu número de WhatsApp

1. Use seu número de WhatsApp com o código de país
2. Exemplo: `+351935667858` (Portugal)

### Passo 2: Adicionar o WhatsApp em toda a aplicação

Procure e substitua `YOUR_WHATSAPP_NUMBER` pelos seguintes arquivos:

- `src/components/Portfolio.tsx` - Links dos produtos
- `src/components/Contact.tsx` - Formulário de contato
- `src/components/Hero.tsx` - Botão hero

**Exemplo:**

```
https://wa.me/+351935667858?text=Olá!
```

---

## 2️⃣ Configuração das Fotos (Google Drive)

### Passo 1: Criar pasta no Google Drive

1. Acesse [Google Drive](https://drive.google.com)
2. Clique em "Novo" → "Pasta"
3. Nomeie como "L8 Studio - Produtos"
4. Clique direito na pasta → "Partilhar"
5. Mude para "Qualquer pessoa com o link"

### Passo 2: Upload de Fotos

1. Arraste suas fotos para a pasta
2. Para cada foto:
   - Clique direito → "Obter link"
   - Copie o link (será algo como: `https://drive.google.com/file/d/XXXXXXXXXXXX/view?usp=sharing`)

### Passo 3: Extrair o ID da Foto

O ID está entre `/d/` e `/view`:

```
Exemplo: https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing
ID: 1a2b3c4d5e6f7g8h9i0j
```

### Passo 4: Adicionar ao products.json

1. Abra `src/data/products.json`
2. Substitua `PLACEHOLDER_IMAGE_X` pelo ID real:

```json
{
  "id": 1,
  "image": "https://drive.google.com/uc?export=view&id=SEU_ID_AQUI"
}
```

---

## 3️⃣ Configuração do Email (Formulário de Contato)

### Opção 1: Formspree (Recomendado - Grátis até 50 mensagens/mês)

1. Acesse [Formspree.io](https://formspree.io)
2. Criar conta gratuita
3. Clique em "Create" → escolha "Form"
4. Copie seu ID do formulário
5. Nos arquivos, substitua `YOUR_FORMSPREE_ID` em:
   - `src/components/Contact.tsx`

**Exemplo:**

```
https://formspree.io/f/mrgvnwke
```

### Opção 2: EmailJS (Alternativa)

- Acesse [EmailJS.com](https://www.emailjs.com)
- Crie conta gratuita
- Configure seu email de receção
- Adicione as chaves API nos componentes

---

## 4️⃣ Editar Produtos

### Adicionar/Editar Produtos

Abra `src/data/products.json` e adicione:

```json
{
  "id": 13,
  "category": "Luminárias",
  "title": "Seu Produto",
  "description": "Descrição do produto",
  "price": 99.9,
  "image": "https://drive.google.com/uc?export=view&id=SEU_ID",
  "specs": ["Especificação 1", "Especificação 2"]
}
```

**Categorias disponíveis:**

- Luminárias
- Peças Cosplay
- Objetos decorativos
- Peças personalizadas

---

## 5️⃣ Editar Informações da Empresa

### Footer e Metadados

1. Abra `src/components/Footer.tsx`
2. Atualize:
   - Email
   - Telefone
   - Links de redes sociais
   - Horário de funcionamento

### Metadados do Site

Abra `src/app/layout.tsx` e atualize:

- `title`
- `description`
- `keywords`

---

## 6️⃣ Seções do Site (Customizáveis)

### Problem.tsx

- Problemas/Necessidades do cliente

### Process.tsx

- Explicar seu processo de trabalho

### FAQ.tsx

- Perguntas frequentes

### CTA.tsx

- Chamada para ação final

---

## 7️⃣ Deploy na Vercel

### Passo 1: Preparar o Git

```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

### Passo 2: Fazer Deploy

1. Acesse [Vercel.com](https://vercel.com)
2. Clique em "Add New..." → "Project"
3. Selecione seu repositório GitHub
4. Clique em "Deploy"
5. Seu site estará em `https://seu-projeto.vercel.app`

### Passo 3: Domínio Personalizado

1. Em Vercel, vá a "Settings" → "Domains"
2. Adicione seu domínio (ex: `minha-loja-3d.com`)
3. Siga as instruções de DNS

---

## 📝 Checklist de Configuração

- [ ] WhatsApp configurado em todos os botões
- [ ] Fotos carregadas no Google Drive
- [ ] Links de imagens adicionados ao `products.json`
- [ ] Email/Formspree configurado
- [ ] Informações da empresa atualizadas
- [ ] Descrições dos produtos completas
- [ ] Site testado no mobile
- [ ] Deploy na Vercel realizado

---

## 🎨 Customização de Cores

No Tailwind CSS, as cores principais são:

- **Azul**: `blue-500`, `blue-600`
- **Roxo**: `purple-500`, `purple-600`
- **Verde**: `green-500` (WhatsApp)

Para mudar, procure e substitua esses valores nos componentes.

---

## 📚 Recursos Úteis

- [Google Drive](https://drive.google.com)
- [Formspree](https://formspree.io)
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)

---

## ❓ Dúvidas Frequentes

**P: As fotos não aparecem?**
R: Verifique se o ID do Google Drive está correto e se a pasta está compartilhada publicamente.

**P: O formulário não envia?**
R: Verifique se seu ID do Formspree está correto em `Contact.tsx`.

**P: WhatsApp não abre?**
R: Certifique-se de usar o formato `+351935667858` (com código de país).

---

**Bom negócio! 🚀**
