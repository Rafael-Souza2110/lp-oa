import { useState, useRef, useEffect, useLayoutEffect, useCallback } from 'react'

interface CarouselProps<T> {
  items: T[]
  renderSlide: (item: T, index: number) => React.ReactNode
  /** Layout para desktop (ex: grid). Se não informado, o carrossel mobile é usado em todas as telas. */
  desktopContent?: React.ReactNode
  /** Duração em ms de cada slide no auto-advance (mobile). Padrão: 10s. */
  autoSlideDuration?: number
  /** Prefixo para aria-label dos dots (ex: "Ir para situação") */
  ariaLabelPrefix?: string
}

export function Carousel<T>({
  items,
  renderSlide,
  desktopContent,
  autoSlideDuration = 10000,
  ariaLabelPrefix = 'Ir para item',
}: CarouselProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const autoSlideTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isJumpingRef = useRef(false)

  if (items.length === 0) {
    return (
      <div className="w-full">
        {desktopContent}
      </div>
    )
  }

  const loopItems = [items[items.length - 1], ...items, items[0]]
  const REAL_START = 1
  const REAL_END = items.length

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
      scrollToCard(next + 1)
    },
    [items.length, scrollToCard]
  )

  useLayoutEffect(() => {
    const el = scrollRef.current
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (!el || items.length <= 1 || !isMobile) return

    const card = cardRefs.current[REAL_START]
    if (card) {
      el.scrollLeft = Math.max(0, card.offsetLeft - (el.offsetWidth - card.offsetWidth) / 2)
    }
  }, [items.length])

  useEffect(() => {
    const el = scrollRef.current
    if (!el || items.length <= 1) return

    const handleScroll = () => {
      if (isJumpingRef.current) return

      const scrollLeft = el.scrollLeft
      const slideWidth = cardRefs.current[0]?.getBoundingClientRect().width ?? el.offsetWidth
      const gap = 16
      const rawIndex = Math.round(scrollLeft / (slideWidth + gap))

      if (rawIndex <= 0) {
        isJumpingRef.current = true
        setActiveIndex(items.length - 1)
        scrollToCard(REAL_END, false)
        setTimeout(() => {
          isJumpingRef.current = false
        }, 50)
      } else if (rawIndex >= loopItems.length - 1) {
        isJumpingRef.current = true
        setActiveIndex(0)
        scrollToCard(REAL_START, false)
        setTimeout(() => {
          isJumpingRef.current = false
        }, 50)
      } else {
        setActiveIndex(rawIndex - 1)
      }
    }

    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [items.length, scrollToCard])

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
          scrollToCard(next + 1)
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
    <div className="w-full" role="region" aria-roledescription="carousel" aria-live="polite">
      {/* Mobile: indicador de swipe */}
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
          aria-hidden
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
      {/* Mobile: carrossel horizontal */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden"
      >
        {loopItems.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el
            }}
            className="w-[calc(100vw-2.5rem)] max-w-full shrink-0 snap-center [scroll-snap-stop:always] sm:w-[calc(100vw-4rem)]"
          >
            {renderSlide(
              item,
              i === 0 ? items.length - 1 : i <= items.length ? i - 1 : 0
            )}
          </div>
        ))}
      </div>
      {/* Desktop: conteúdo customizado */}
      {desktopContent}
      {/* Dots - apenas no mobile. Bem compactos quando muitos itens (>6) para caber em telas pequenas */}
      <div className="mt-6 flex justify-center md:hidden">
        <div
          className={`flex items-center justify-center overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] ${
            items.length > 6 ? 'max-w-full gap-0.5 px-1' : 'gap-2'
          }`}
        >
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`flex shrink-0 items-center justify-center rounded-full transition-all active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] focus-visible:ring-offset-1 touch-manipulation ${
                items.length > 6
                  ? 'h-5 w-5 min-h-[20px] min-w-[20px] p-0.5'
                  : 'min-h-[44px] min-w-[44px] p-2'
              }`}
              aria-label={`${ariaLabelPrefix} ${i + 1}`}
            >
              <span
                className={`block rounded-full transition-all ${
                  items.length > 6
                    ? i === activeIndex
                      ? 'h-1.5 w-3 bg-[#f97316]'
                      : 'h-1 w-1 bg-[var(--color-border)]'
                    : i === activeIndex
                      ? 'h-2 w-5 bg-[#f97316]'
                      : 'h-1.5 w-1.5 bg-[var(--color-border)]'
                }`}
                aria-hidden
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
