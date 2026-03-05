import { useState, useRef, useEffect, useCallback } from 'react'
import { SituacaoCard } from './SituacaoCard'

interface Item {
  texto: string
  icon: React.ReactNode
}

interface SituacoesCarouselProps {
  items: Item[]
  /** Duração em ms de cada slide no auto-advance (mobile). Padrão: 10s para dar tempo de ler. */
  autoSlideDuration?: number
}

export function SituacoesCarousel({ items, autoSlideDuration = 10000 }: SituacoesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const autoSlideTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const scrollToCard = useCallback(
    (index: number, smooth = true) => {
      const el = scrollRef.current
      const card = cardRefs.current[index]
      if (!el || !card) return
      const targetScroll = card.offsetLeft - (el.offsetWidth - card.offsetWidth) / 2
      el.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: smooth ? 'smooth' : 'auto',
      })
    },
    []
  )

  const goTo = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(index, items.length - 1))
      setActiveIndex(next)
      scrollToCard(next)
    },
    [items.length, scrollToCard]
  )

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft
      const slideWidth = cardRefs.current[0]?.getBoundingClientRect().width ?? el.offsetWidth
      const index = Math.round(scrollLeft / (slideWidth + 16))
      setActiveIndex(Math.min(Math.max(0, index), items.length - 1))
    }

    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [items.length])

  useEffect(() => {
    const el = scrollRef.current
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (!el || items.length <= 1 || !isMobile) return

    const stopAutoSlide = () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current)
        autoSlideTimerRef.current = null
      }
    }

    const startAutoSlide = () => {
      stopAutoSlide()
      autoSlideTimerRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          const next = prev >= items.length - 1 ? 0 : prev + 1
          scrollToCard(next)
          return next
        })
      }, autoSlideDuration)
    }

    const carouselContainer = el.parentElement
    if (!carouselContainer) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          startAutoSlide()
        } else {
          stopAutoSlide()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(carouselContainer)

    const handleUserScroll = () => {
      stopAutoSlide()
      startAutoSlide()
    }

    el.addEventListener('scroll', handleUserScroll, { passive: true })
    return () => {
      stopAutoSlide()
      observer.disconnect()
      el.removeEventListener('scroll', handleUserScroll)
    }
  }, [items.length, autoSlideDuration, scrollToCard])

  return (
    <div className="w-full">
      {/* Mobile: indicador de swipe para usuários leigos */}
      <div className="mb-4 flex items-center justify-center gap-2 md:hidden">
        <span className="text-sm text-[var(--color-muted)]">Deslize para ver mais</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 animate-swipe-hint text-[#f97316]"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
      {/* Mobile: carrossel horizontal com swipe */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden"
      >
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el }}
            className="w-[calc(100vw-2.5rem)] max-w-full shrink-0 snap-center [scroll-snap-stop:always] sm:w-[calc(100vw-4rem)]"
          >
            <SituacaoCard texto={item.texto} icon={item.icon} />
          </div>
        ))}
      </div>
      {/* Desktop: grid 2 colunas */}
      <div className="hidden grid-cols-2 gap-5 md:grid">
        {items.map((item, i) => (
          <SituacaoCard key={i} texto={item.texto} icon={item.icon} />
        ))}
      </div>
      {/* Dots indicadores - apenas no mobile */}
      <div className="mt-6 flex justify-center gap-2 md:hidden">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === activeIndex ? 'w-6 bg-[#f97316]' : 'w-2 bg-[var(--color-border)]'
            }`}
            aria-label={`Ir para situação ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
