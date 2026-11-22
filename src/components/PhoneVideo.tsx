import { useEffect, useRef, useState } from 'react'

interface PhoneVideoProps {
  mp4: string
  poster: string
  label: string
  className?: string
}

// Vídeo mudo em loop dentro de uma moldura de celular feita em CSS (serve nos dois temas da página).
// Só baixa o vídeo quando chega perto da tela; antes disso aparece o pôster (primeiro quadro).
// Com "reduzir movimento" ligado no aparelho, não toca sozinho: fica o pôster com os controles.
export function PhoneVideo({ mp4, poster, label, className = '' }: PhoneVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [carregar, setCarregar] = useState(false)
  const [reduzMovimento] = useState(
    () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setCarregar(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCarregar(true)
          io.disconnect()
        }
      },
      { rootMargin: '300px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // As fontes entram depois: o navegador só as lê com load()
  useEffect(() => {
    const el = ref.current
    if (!carregar || !el) return
    el.muted = true
    el.load()
    if (!reduzMovimento) el.play().catch(() => {})
  }, [carregar, reduzMovimento])

  return (
    <div
      className={`relative rounded-[2.6rem] bg-gradient-to-br from-[#3b3b42] via-[#1a1a1d] to-[#0d0d0f] p-[9px] shadow-[0_30px_60px_rgba(0,0,0,0.35),0_0_60px_rgba(249,115,22,0.15)] ${className}`}
    >
      <span aria-hidden className="absolute -left-[3px] top-[18%] h-10 w-[3px] rounded-l bg-[#2a2a2f]" />
      <span aria-hidden className="absolute -left-[3px] top-[26%] h-10 w-[3px] rounded-l bg-[#2a2a2f]" />
      <span aria-hidden className="absolute -right-[3px] top-[22%] h-16 w-[3px] rounded-r bg-[#2a2a2f]" />
      <div className="aspect-[540/1170] overflow-hidden rounded-[2.1rem] bg-[#fafafa]">
        <video
          ref={ref}
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          controls={reduzMovimento}
          aria-label={label}
          className="h-full w-full object-cover"
        >
          {carregar && <source src={mp4} type="video/mp4" />}
        </video>
      </div>
    </div>
  )
}
