import { useState } from 'react'
import { config } from '../config'

const faqs = [
  {
    pergunta: 'Isso é curso ou app?',
    resposta:
      'App de treino. Você não assiste aula — você pratica. É a diferença entre ler sobre academia e ir levantar peso.',
  },
  {
    pergunta: 'Funciona pra qualquer instrumento?',
    resposta:
      'Sim. O treino é de ouvido, não de dedo. Teclado, violão, guitarra ou baixo — todos se beneficiam.',
  },
  {
    pergunta: 'Onde acesso?',
    resposta:
      'Em qualquer celular Android, iPhone, tablet ou computador com internet. Só fazer login e começar.',
  },
  {
    pergunta: 'Por que pagar se tem tudo no YouTube?',
    resposta:
      'No YouTube você assiste. Aqui você treina com feedback real e um caminho estruturado. Não é a mesma coisa.',
  },
  {
    pergunta: 'Quanto tempo por dia?',
    resposta:
      '10 a 15 minutos já trazem resultado. O segredo é constância, não quantidade.',
  },
  {
    pergunta: 'E se eu for iniciante?',
    resposta:
      'Melhor ainda. O app começa do zero — sem teoria, sem campo harmônico, sem cifras.',
  },
  {
    pergunta: 'O que é o Plano Membro Fundador?',
    resposta:
      'Você está entre os primeiros usuários do app. Garante o menor preço (R$39,90) e trava esse valor pra sempre — além de acesso a todas as atualizações futuras.',
  },
]

function FAQItem({
  pergunta,
  resposta,
  id,
}: {
  pergunta: string
  resposta: string
  id: string
}) {
  const [aberto, setAberto] = useState(false)

  return (
    <div className="border-b border-[var(--color-border)] last:border-b-0">
      <button
        type="button"
        id={`${id}-btn`}
        onClick={() => setAberto(!aberto)}
        aria-expanded={aberto}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-[var(--color-foreground)] transition active:scale-[0.99] touch-manipulation"
      >
        {pergunta}
        <span
          className={`shrink-0 text-[#f97316] transition-transform duration-300 ${aberto ? 'rotate-45' : ''}`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={`${id}-btn`}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: aberto ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="pb-5 pr-8 text-[var(--color-muted)]">{resposta}</div>
        </div>
      </div>
    </div>
  )
}

export function Section13FAQ() {
  return (
    <section className="border-t border-[var(--color-border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-2xl font-extrabold text-[var(--color-foreground)] sm:text-3xl">
          Perguntas que todos fazem antes de assinar o{' '}
          <span className="text-[#f97316]">Ouvido Assembleiano</span>
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-sm">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              id={`faq-${i}`}
              pergunta={faq.pergunta}
              resposta={faq.resposta}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="mb-4 text-2xl font-extrabold text-[var(--color-foreground)]">
            Gostaria de tirar dúvidas antes de comprar?
          </h3>
          <p className="mb-6 text-[var(--color-muted)]">
            Fique à vontade para visualizar as perguntas mais frequentes logo acima ou falar
            diretamente com nossa equipe no whatsapp, basta clicar no botão abaixo!
          </p>
          <a
            href={config.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white transition active:scale-[0.98] hover:bg-[#20bd5a] touch-manipulation"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
