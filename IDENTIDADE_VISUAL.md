# Identidade Visual — Ouvido Assembleiano

Guia completo para replicar ou evoluir a identidade visual da landing page em um novo projeto React + Tailwind CSS.

---

## 1. Paleta de Cores

### Variáveis CSS (`:root`)

```css
--color-primary: #f97316        /* Laranja vibrante — cor principal */
--color-primary-hover: #ea580c  /* Laranja escuro — hover */
--color-accent: #f94f06         /* Laranja saturado — destaque em textos */
--color-background: #fafafa     /* Branco off-white — fundo light */
--color-foreground: #0a0a0a     /* Preto quase puro — texto light */
--color-muted: #737373          /* Cinza médio — texto secundário */
--color-border: #e5e5e5         /* Cinza claro — bordas */
--color-success: hsl(142, 76%, 36%)
--color-error: hsl(0, 72%, 51%)
--color-streak: hsl(262, 83%, 58%)
```

### Modo Escuro (`.dark`)

```css
--color-background: #0a0a0a
--color-foreground: #fafafa
--color-muted: #a3a3a3
--color-border: #262626
```

### Cores Utilitárias

| Uso | Valor |
|---|---|
| CTA / Botão principal | `#f97316` → `#ea580c` (gradiente) |
| Sucesso / "Para você" | `green-500` / `green-400` |
| Erro / "Não para você" | `red-500` / `red-400` |
| WhatsApp | `#25D366` com hover `#20bd5a` |
| Seções alternadas (light) | Gradient `#242424` → `#161616` |
| Seções alternadas (dark) | Gradient `#f5f5f5` → `#fafafa` |

---

## 2. Tipografia

### Famílias

```css
--font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif
--font-script: "Feeling Passionate", "Dancing Script", cursive
```

- **Plus Jakarta Sans** (Google Fonts): pesos 400, 500, 600, 700, 800 — fonte principal de toda a página
- **Dancing Script** (Google Fonts): fallback para a fonte script decorativa
- **Feeling Passionate** (local — `/fonts/Feeling Passionate.otf`): usada em palavras-chave do título e nome do produto

### Tamanhos Recorrentes

| Elemento | Classe Tailwind |
|---|---|
| H1 Hero | `text-xl sm:text-2xl md:text-3xl` |
| H2 Seções | `text-2xl sm:text-3xl` |
| H3 Subtítulos | `text-xl sm:text-2xl` |
| Corpo | `text-base sm:text-lg` |
| Muted / Label | `text-sm`, `text-xs` |
| Preço | `text-4xl font-extrabold` |

### Pesos

- `font-extrabold` — H1, H2, H3, preço
- `font-bold` — destaques inline, botões
- `font-semibold` — subtextos importantes
- `font-medium` / `font-normal` — corpo de texto

---

## 3. Botão CTA

### Classe completa

```
inline-flex items-center justify-center rounded-xl
bg-gradient-to-r from-[#f97316] to-[#ea580c]
px-8 py-4 font-bold text-white shadow-lg
transition active:scale-[0.98]
hover:opacity-90 hover:shadow-xl
focus-visible:outline-none focus-visible:ring-2
focus-visible:ring-[#f97316] focus-visible:ring-offset-2
touch-manipulation
```

### Detalhes

- Gradiente horizontal laranja: `from-[#f97316] to-[#ea580c]`
- Borda: `rounded-xl` (12px)
- Padding: `px-8 py-4`
- Texto: branco, bold
- Hover: `opacity-90` + `shadow-xl`
- Ativo: `scale-[0.98]`
- Focus: ring 2px laranja com offset 2px

---

## 4. Cards e Containers

### Card padrão

```
border border-[var(--color-border)]
bg-[var(--color-background)]/80
rounded-xl p-6
```

### Card destacado (oferta, seção principal)

```
border-2 border-[#f97316]/50
bg-[#f97316]/5
rounded-2xl
ring-2 ring-[#f97316]/20 ring-offset-2
shadow-lg
```

### Card "Para você" (verde)

```
border-2 border-green-500/50 bg-green-500/5 rounded-xl
```

### Card "Não para você" (vermelho)

```
border-2 border-red-500/50 bg-red-500/5 rounded-xl
```

### Card com destaque lateral

```
border border-[var(--color-border)] border-l-4 border-l-[#f97316]
rounded-xl p-4
```

### Container de seção (FAQ, acordeões)

```
rounded-2xl border border-[var(--color-border)]
bg-[var(--color-background)] p-6 shadow-sm
```

---

## 5. Espaçamentos Padrão

### Seções

```
py-16 sm:py-20   /* vertical: 64px mobile, 80px desktop */
px-4 sm:px-6     /* horizontal: 16px mobile, 24px desktop */
```

### Largura máxima de containers

| Tipo | Classe |
|---|---|
| Seções padrão (texto) | `max-w-3xl` |
| Seções médias | `max-w-4xl` |
| Grids e layouts amplos | `max-w-5xl` |

### Espaçamentos internos comuns

- Entre cards em grid: `gap-4`, `gap-6`, `gap-8`
- Entre itens de lista: `space-y-3`, `space-y-5`
- Margem título → conteúdo: `mb-6`, `mb-8`, `mb-10`, `mb-12`

---

## 6. Gradientes

```css
/* Botão CTA e barras de progresso */
bg-gradient-to-r from-[#f97316] to-[#ea580c]

/* Timeline vertical */
bg-gradient-to-b from-[#f97316] via-[#f97316]/60 to-[#f97316]/30

/* Seções alternadas — light mode */
background: linear-gradient(135deg, #242424 0%, #1c1c1c 40%, #1a1a1a 70%, #161616 100%)

/* Seções alternadas — dark mode */
background: linear-gradient(165deg, #f5f5f5 0%, #fafafa 40%, #f8f8f8 70%, #fafafa 100%)
```

---

## 7. Ícones e Elementos Decorativos

### Ícone em círculo/quadrado arredondado

```
flex h-12 w-12 items-center justify-center rounded-xl
bg-[#f97316]/10 text-[#f97316]
```

### Checkmark de benefícios

```
flex h-5 w-5 items-center justify-center rounded-full
bg-[#f97316] text-white
```

### Barra de progresso de leitura

- Posicionada no topo (`fixed top-0`)
- Fina (`h-1`)
- Gradiente laranja

---

## 8. Animações

```css
/* Pulsação sutil de elementos CTA */
pulse-subtle: opacity 1→0.92, scale 1→1.02 (3s, ease-in-out)

/* Hint de scroll */
scroll-hint: translateY 0→6px, opacity 0.6→1 (2s, ease-in-out)

/* Hint de swipe (carrossel) */
swipe-hint: translateX 0→8px, opacity 0.7→1 (2s, ease-in-out)

/* Entrada fade */
fade-up-in: opacity 0→1, translateY -12px→0 (0.4s)

/* Pulso do countdown */
countdown-pulse: scale 1→1.04→1 (0.25s)
```

Todas as animações respeitam `prefers-reduced-motion`.

---

## 9. Estrutura da Página (ordem das seções)

1. **Header** — Logo (troca entre branca/preta conforme tema) + toggle light/dark
2. **Barra de progresso** — `fixed top-0`, fina, laranja, acompanha scroll
3. **Hero** — Headline principal + vídeo YouTube embed + botão CTA
4. **Dor** — Carrossel de situações de frustração do músico (4 cards)
5. **Reframe** — Timeline mostrando os passos errados de treino
6. **Agitação** — Comparação lado a lado: Treino Fantasia vs Realidade ao vivo
7. **Solução** — Apresentação do app com GIF de demonstração
8. **Benefícios** — Lista de 5 benefícios com checkmarks laranja
9. **Público** — Grid "Para você" (verde) vs "Não é para você" (vermelho)
10. **Depoimentos** — Carrossel de 12 prints de depoimentos reais
11. **Objeção Preço** — Comparação de custos (professor particular, cursos, etc.)
12. **Oferta** — Card principal: countdown regressivo + preço + lista de benefícios + CTA
13. **FAQ** — Acordeão com perguntas frequentes + CTA WhatsApp
14. **Footer** — CTA final + copyright

---

## 10. Assets

| Asset | Caminho |
|---|---|
| Logo light (branca) | `/logos/LOGO BRANCA.png` |
| Logo dark (preta) | `/logos/LOGO PRETA.png` |
| GIF demo do app | `/images/demo-app-gif.gif` |
| Depoimentos | `/images/depoimento1-oa.png` até `depoimento12-oa.png` |
| Fonte decorativa | `/fonts/Feeling Passionate.otf` |

---

## 11. Tom Visual Geral

- **Estilo:** Minimalista e moderno. Muito espaço em branco, hierarquia clara de informação.
- **Contraste:** Seções alternadas entre fundo claro e fundo escuro (charcoal) criam ritmo de leitura.
- **Cor de destaque:** Laranja (`#f97316`) é usada em absolutamente tudo que importa: CTAs, títulos-chave, ícones, checkmarks, bordas de destaque, barras de progresso.
- **Tipografia script:** A fonte *Feeling Passionate* aparece apenas em palavras estratégicas do nome do produto e headline, nunca em blocos de texto.
- **Mobile-first:** Breakpoint principal em `sm:` (640px). Layout de coluna única no mobile, grid no desktop.
- **Acessibilidade:** Focus rings visíveis em todos os elementos interativos, suporte a `prefers-reduced-motion`, `aria-label` nos botões e acordeões.

---

## 12. Stack Técnica

- **Framework:** React + TypeScript
- **Estilização:** Tailwind CSS v4
- **Build:** Vite
- **Fontes:** Google Fonts (Plus Jakarta Sans, Dancing Script) + fonte local (Feeling Passionate)
- **Hospedagem:** Vercel (deploy automático via push na `main`)
