/**
 * Configurações centralizadas da página de vendas.
 * Atualize os links quando tiver os valores finais.
 */

export const config = {
  /** Link do checkout Hotmart */
  checkoutUrl: '#CHECKOUT_HOTMART',

  /** Link do WhatsApp para suporte/dúvidas */
  whatsappUrl: 'https://wa.me/5585982269676',

  /** IDs dos vídeos do YouTube (apenas o ID, ex: "dQw4w9WgXcQ") */
  videos: {
    /** Seção 1 - Vídeo abaixo da sub headline */
    hero: 'xHqUfu1-css',
    /** Seção 5 - Apresentação do produto / como é o app por dentro */
    apresentacao: '',
  },

  /** Temporizador fixo (exibido na oferta) */
  countdown: {
    days: 3,
    hours: 12,
    minutes: 30,
  },
} as const
