/**
 * Meta Pixel (Facebook) carregado sob demanda.
 * Só é ativado quando VITE_META_PIXEL_ID está definido no ambiente —
 * usado apenas no projeto lp-oa-embaixador (pixel do afiliado).
 */

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void
  queue: unknown[]
  push: Fbq
  loaded: boolean
  version: string
}

declare global {
  interface Window {
    fbq?: Fbq
    _fbq?: Fbq
  }
}

export function initMetaPixel(pixelId: string) {
  if (!/^\d+$/.test(pixelId) || window.fbq) return

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args)
    else fbq.queue.push(args)
  } as Fbq
  fbq.push = fbq
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.queue = []
  window.fbq = fbq
  window._fbq = fbq

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)

  fbq('init', pixelId)
  fbq('track', 'PageView')
}
