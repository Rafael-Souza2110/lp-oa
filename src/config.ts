/**
 * Configurações centralizadas da página de vendas.
 * Atualize os links quando tiver os valores finais.
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

  /** Temporizador fixo (exibido na oferta) */
  countdown: {
    days: 3,
    hours: 12,
    minutes: 30,
  },
} as const
