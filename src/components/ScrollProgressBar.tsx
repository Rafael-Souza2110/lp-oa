import { useEffect, useState } from 'react'

/**
 * Barra fina no topo que indica o progresso de leitura da página.
 * Usa transform (GPU-friendly) e respeita prefers-reduced-motion.
 */
export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (reduceMotion) return

    const updateProgress = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const linear = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0
      // Curva front-loaded: avança MUITO no início, desacelera no fim (1 - (1-x)^4)
      const value = linear >= 1 ? 1 : 1 - Math.pow(1 - linear, 4)
      setProgress(value)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <div
      className="fixed left-0 right-0 top-0 z-50 h-[3px] bg-[var(--color-border)]/30"
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progresso de leitura da página"
    >
      <div
        className="h-full bg-gradient-to-r from-[#f97316] to-[#ea580c] transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})`, transformOrigin: 'left' }}
      />
    </div>
  )
}
