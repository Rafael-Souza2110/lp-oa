/**
 * Configurações centralizadas da página de vendas.
 * Use variáveis de ambiente (VITE_*) para override em diferentes ambientes.
 * Para SEO: atualize as meta tags Open Graph e Twitter em index.html com a URL final ao fazer deploy.
 */

const env = import.meta.env

function getConfigValue<T>(envKey: string, fallback: T): T {
  const value = env[envKey as keyof typeof env]
  if (value !== undefined && typeof value === 'string' && value.trim() !== '') {
    return value as T
  }
  return fallback
}

export const config = {
  /** Link do checkout Greenn */
  checkoutUrl: getConfigValue(
    'VITE_CHECKOUT_URL',
    'https://payfast.greenn.com.br/200977/offer/vIUsit?ch_id=133321&b_id_1=66609&b_offer_1=RonEui&b_id_2=66196&b_offer_2=KSbreW'
  ),

  /** Link do WhatsApp para suporte/dúvidas */
  whatsappUrl: getConfigValue('VITE_WHATSAPP_URL', 'https://wa.me/5585982269676'),

  /** ID do Meta Pixel (vazio = pixel desativado). Definido só no projeto do embaixador. */
  metaPixelId: getConfigValue('VITE_META_PIXEL_ID', ''),

  /** IDs dos vídeos do YouTube (apenas o ID, ex: "dQw4w9WgXcQ") */
  videos: {
    hero: getConfigValue('VITE_VIDEO_HERO', '2UP4JmsvXvI'),
  },

  /** Temporizador regressivo (inicia quando o usuário acessa a página) */
  countdown: {
    hours: 3,
    minutes: 11,
    seconds: 28,
  },
} as const

// Validação em dev: avisa se URLs parecem inválidas
if (import.meta.env.DEV) {
  const { checkoutUrl, whatsappUrl } = config
  if (!checkoutUrl.startsWith('http')) {
    console.warn('[config] checkoutUrl deve começar com http:', checkoutUrl)
  }
  if (!whatsappUrl.startsWith('http')) {
    console.warn('[config] whatsappUrl deve ser uma URL válida:', whatsappUrl)
  }
}
