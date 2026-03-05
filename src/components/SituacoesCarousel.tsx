import { Carousel } from './Carousel'
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
  return (
    <Carousel
      items={items}
      renderSlide={(item) => <SituacaoCard texto={item.texto} icon={item.icon} />}
      desktopContent={
        <div className="hidden grid-cols-2 gap-5 md:grid">
          {items.map((item, i) => (
            <SituacaoCard key={i} texto={item.texto} icon={item.icon} />
          ))}
        </div>
      }
      autoSlideDuration={autoSlideDuration}
      ariaLabelPrefix="Ir para situação"
    />
  )
}
