/**
 * Configurações centralizadas da página de vendas.
 * Atualize os links quando tiver os valores finais.
 * Para SEO: atualize as meta tags Open Graph e Twitter em index.html com a URL final ao fazer deploy.
 */

export const config = {
  /** Link do checkout Hotmart */
  checkoutUrl: 'https://pay.hotmart.com/M103015699U?off=698mux4e&checkoutMode=10',

  /** Link do WhatsApp para suporte/dúvidas */
  whatsappUrl: 'https://wa.me/5585982269676',

  /** IDs dos vídeos do YouTube (apenas o ID, ex: "dQw4w9WgXcQ") */
  videos: {
    /** Seção 1 - Vídeo abaixo da sub headline */
    hero: 'xHqUfu1-css',
  },

  /** Temporizador regressivo (inicia quando o usuário acessa a página) */
  countdown: {
    hours: 3,
    minutes: 11,
    seconds: 28,
  },
} as const
