import { useEffect, useRef } from 'react'
import { config } from '../config'

/**
 * Player da VTurb (vídeo de vendas do topo), a partir do embed "JavaScript" do painel.
 *
 * O HTML do player entra por innerHTML, fora do React: o script da VTurb troca o
 * placeholder pelo player, e o React não pode tentar mexer nesses filhos depois.
 * Os preloads do mesmo vídeo ficam no <head> do index.html.
 */
export function VturbPlayer({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    const { playerId, scriptUrl } = config.vsl

    if (!container.querySelector('vturb-smartplayer')) {
      container.innerHTML =
        `<vturb-smartplayer id="${playerId}" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;">` +
        '<div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 177.77777777777777% 0 0; z-index: 0; background-color: black;"></div>' +
        '</vturb-smartplayer>'
    }

    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const s = document.createElement('script')
      s.src = scriptUrl
      s.async = true
      document.head.appendChild(s)
    }
  }, [])

  return <div ref={ref} className={className} />
}
