import { Carousel } from './Carousel'

interface DepoimentosCarouselProps {
  images: string[]
  /** Duração em ms de cada slide no auto-advance (mobile). Padrão: 15s para dar tempo de ler. */
  autoSlideDuration?: number
}

export function DepoimentosCarousel({
  images,
  autoSlideDuration = 15000,
}: DepoimentosCarouselProps) {
  return (
    <Carousel
      items={images}
      renderSlide={(src, i) => (
        <div className="flex justify-center">
          <img
            src={src}
            alt={`Depoimento ${i + 1}`}
            className="w-[75%] object-cover"
          />
        </div>
      )}
      desktopContent={
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
      }
      autoSlideDuration={autoSlideDuration}
      ariaLabelPrefix="Ir para depoimento"
    />
  )
}
