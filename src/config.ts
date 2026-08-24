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
  /** Link do checkout Hotmart */
  checkoutUrl: getConfigValue('VITE_CHECKOUT_URL', 'https://pay.hotmart.com/M103015699U?off=698mux4e&checkoutMode=10'),

  /** Link do WhatsApp para suporte/dúvidas */
  whatsappUrl: getConfigValue('VITE_WHATSAPP_URL', 'https://wa.me/5585982269676'),

  /** IDs dos vídeos do YouTube (apenas o ID, ex: "dQw4w9WgXcQ") */
  videos: {
    hero: getConfigValue('VITE_VIDEO_HERO', 'xHqUfu1-css'),
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
