# Ouvido Assembleiano — Página de Vendas

Landing page de vendas para o aplicativo Ouvido Assembleiano.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

## Build para produção

```bash
npm run build
```

Os arquivos estarão em `dist/`.

## O que você precisa adicionar

### 1. Assets (em `public/`)

- **`public/logos/`**
  - `logo-lightmode.png` — logo para tema claro
  - `logo-darkmode.png` — logo para tema escuro
  - `icone.png` — ícone (favicon)

- **`public/fonts/`**
  - `Feeling-Passionate.otf` — fonte decorativa

### 2. Configurações (em `src/config.ts`)

- `checkoutUrl` — link do checkout Hotmart
- `whatsappUrl` — link do WhatsApp para suporte
- `videos.apresentacao` — ID do vídeo YouTube (Seção 5)
- `videos.comparacao` — ID do vídeo YouTube (Seção 6 - comparação)
- `videos.porDentro` — ID do vídeo YouTube (Seção 6 - por dentro)
- `countdown` — valores do temporizador (dias, horas, minutos)

### 3. Depoimentos (em `src/sections/Section9Depoimentos.tsx`)

Adicione os depoimentos no array `depoimentos` quando tiver o conteúdo.

## Estrutura do projeto

```
src/
├── components/     # Header, Footer, CTAButton, etc.
├── contexts/       # ThemeContext (light/dark)
├── sections/       # As 13 seções da página
├── config.ts       # Links e configurações
├── App.tsx
└── main.tsx
```

## Tema

A página suporta modo claro e escuro. O toggle fica no header. A preferência é salva no `localStorage`.
