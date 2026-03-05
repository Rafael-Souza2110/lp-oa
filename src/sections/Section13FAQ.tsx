import { useState } from 'react'
import { config } from '../config'

const faqs = [
  {
    pergunta: 'Isso é um curso ou um aplicativo?',
    resposta:
      'O Ouvido Assembleiano é um aplicativo de treino auditivo, feito pra desenvolver o seu ouvido na prática, com situações reais — tipo cantor errando, tom mudando, ritmo variando. Você não assiste aula, você treina.',
  },
  {
    pergunta: 'Funciona pra qualquer instrumento?',
    resposta:
      'Sim! O método não é sobre dedo, é sobre ouvido. Se você toca teclado, violão, guitarra, baixo, bateria ou canta — o treino vai fortalecer a base que sustenta tudo: reconhecer o tom, os acordes e as variações musicais naturalmente.',
  },
  {
    pergunta: 'Em quais aparelhos o app funciona?',
    resposta:
      'Atualmente o Ouvido Assembleiano funciona em qualquer celular Android ou iPhone, tablet ou computador, com acesso à internet. Você só precisa fazer login com seu e-mail e já pode começar os treinos.',
  },
  {
    pergunta: 'Por que eu deveria pagar R$ 39,90 se tem tanto conteúdo de graça no YouTube?',
    resposta:
      'O YouTube é uma biblioteca fantástica, mas não é um método de treino. Nele, você assiste passivamente. No Ouvido Assembleiano, você pratica ativamente. É a diferença entre ver alguém levantando peso e ir para a academia levantar o peso você mesmo. Nosso app oferece um ambiente de simulação, feedback instantâneo e um caminho estruturado para a sua evolução, coisas que nenhum vídeo gratuito pode oferecer.',
  },
  {
    pergunta: 'Quanto tempo por dia eu preciso pra ver resultado?',
    resposta:
      'Com 10 a 15 minutos por dia, você já começa a perceber melhora real no seu ouvido em poucas semanas. O segredo é a constância, não o tempo. É treino curto e certeiro — igual academia pro ouvido.',
  },
  {
    pergunta: 'O que significa "Membro Fundador"?',
    resposta:
      'Ser Membro Fundador é estar entre os primeiros usuários a apoiar o projeto. Além de garantir o menor preço (R$39,90), você trava esse valor pra sempre — mesmo que o preço suba futuramente. É literalmente um "fundador" da comunidade do Ouvido Assembleiano.',
  },
  {
    pergunta: 'Vai ter conteúdo novo sempre?',
    resposta:
      'Sim. A gente atualiza o app com novos treinos, vozes, hinos e desafios periodicamente, pra você nunca parar de evoluir. O plano é crescer junto com o corpo de músicos da igreja — e você faz parte disso.',
  },
  {
    pergunta: 'E se eu for iniciante total?',
    resposta:
      'Melhor ainda. O Ouvido Assembleiano foi pensado pra começar do zero, sem precisar entender de campo harmônico, escalas ou cifras. você vai desenvolver o ouvido de forma natural, do jeito que os músicos mais experientes fazem sem nem perceber.',
  },
]

function FAQItem({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  const [aberto, setAberto] = useState(false)

  return (
    <div className="border-b border-[var(--color-border)] last:border-b-0">
      <button
        type="button"
        onClick={() => setAberto(!aberto)}
        aria-expanded={aberto}
        className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-[var(--color-foreground)]"
      >
        {pergunta}
        <span className="shrink-0 text-[#f97316]" aria-hidden>
          {aberto ? '−' : '+'}
        </span>
      </button>
      {aberto && (
        <div className="pb-5 pr-8 text-[var(--color-muted)]">{resposta}</div>
      )}
    </div>
  )
}

export function Section13FAQ() {
  return (
    <section className="border-t border-[var(--color-border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-2xl font-extrabold text-[var(--color-foreground)] sm:text-3xl">
          Perguntas que todos fazem antes de assinar o Ouvido Assembleiano
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-sm">
          {faqs.map((faq, i) => (
            <FAQItem key={i} pergunta={faq.pergunta} resposta={faq.resposta} />
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
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white transition hover:bg-[#20bd5a]"
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
