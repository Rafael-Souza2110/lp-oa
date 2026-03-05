import { SituacoesCarousel } from '../components/SituacoesCarousel'
import { SituacaoIcons } from '../components/SituacaoIcons'

const situacoes = [
  {
    texto: `"Eita, que tom é esse? Sol? Não... Ré? Droga, também não. Tenta um Lá... nossa, passou longe. Eles já estão na segunda linha do hino! As pessoas estão esperando. Que vergonha... Achei! Meu Deus... o hino já acabou."`,
    icon: SituacaoIcons.pressao,
  },
  {
    texto: `"Meu Deus... A irmã Raimunda que vai cantar agora. Ela não respeita tempo e fica mudando de tom o hino inteiro. Aqui a minha vergonha está garantida!"`,
    icon: SituacaoIcons.tomVariavel,
  },
  {
    texto: `"Eu peguei o tom mas pra qual acorde a música vai agora? Eu conheço essa música mas eu não tô com a cifra aqui... Será que agora vai pra Fá? Ah não... Esse é o momento que tem aquele acorde maluco, vou jogar qualquer acorde aqui."`,
    icon: SituacaoIcons.acordeDuvida,
  },
  {
    texto: `"Deixa eu abrir a cifra rapidinho aqui… tá em Sol. Opa, o cantor começou em Fá. Transpõe, transpõe, transpõe! Todo mundo me olha. Eu sorrio com cara de bunda, mas por dentro só penso: 'Tom errado, acorde errado, vida errada.' DESISTO!"`,
    icon: SituacaoIcons.desistir,
  },
]

export function Section2Dor() {
  return (
    <section id="situacoes" className="relative overflow-x-hidden border-t border-[var(--color-border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-3xl overflow-x-hidden">
        <h2 className="mb-12 text-center text-2xl font-extrabold leading-tight text-[var(--color-foreground)] sm:text-3xl">
          Você já passou ou está passando por{' '}
          <span className="text-[#f97316]">alguma dessas situações?</span>
        </h2>
        <SituacoesCarousel items={situacoes} />
        <p className="mt-10 rounded-xl border border-[var(--color-border)] bg-[#f97316]/5 px-6 py-5 text-center text-base font-semibold leading-relaxed text-[var(--color-foreground)] sm:text-lg">
          Se você se identificou com qualquer um desses momentos, o problema não é falta de talento.{' '}
          <span className="text-[#f97316]">É falta do treino certo.</span>
        </p>
      </div>
    </section>
  )
}
