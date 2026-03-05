import { useState, useRef, useEffect, useCallback } from 'react'

interface DepoimentosCarouselProps {
  images: string[]
  /** Duração em ms de cada slide no auto-advance (mobile). Padrão: 15s para dar tempo de ler. */
  autoSlideDuration?: number
}

export function DepoimentosCarousel({
  images,
  autoSlideDuration = 15000,
}: DepoimentosCarouselProps) {
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
      const next = Math.max(0, Math.min(index, images.length - 1))
      setActiveIndex(next)
      scrollToCard(next)
    },
    [images.length, scrollToCard]
  )

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft
      const slideWidth = cardRefs.current[0]?.getBoundingClientRect().width ?? el.offsetWidth
      const index = Math.round(scrollLeft / (slideWidth + 16))
      setActiveIndex(Math.min(Math.max(0, index), images.length - 1))
    }

    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [images.length])

  useEffect(() => {
    const el = scrollRef.current
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (!el || images.length <= 1 || !isMobile) return

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
          const next = prev >= images.length - 1 ? 0 : prev + 1
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
  }, [images.length, autoSlideDuration, scrollToCard])

  return (
    <div className="w-full">
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
      <div className="md:hidden">
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {images.map((src, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el
              }}
              className="flex w-[calc(100vw-2.5rem)] shrink-0 snap-center justify-center [scroll-snap-stop:always] sm:w-[calc(100vw-4rem)]"
            >
              <img
                src={src}
                alt={`Depoimento ${i + 1}`}
                className="w-[75%] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden grid-cols-2 justify-items-center gap-6 md:grid lg:grid-cols-3">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Depoimento ${i + 1}`}
            className="w-[75%] object-cover"
          />
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-2 md:hidden">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === activeIndex ? 'w-6 bg-[#f97316]' : 'w-2 bg-[var(--color-border)]'
            }`}
            aria-label={`Ir para depoimento ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
