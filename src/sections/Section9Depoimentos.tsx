/**
 * Seção de depoimentos.
 * Adicione os depoimentos no array abaixo quando tiver o conteúdo.
 * Estrutura: { nome, texto, foto? (opcional) }
 */

interface Depoimento {
  nome: string
  texto: string
  foto?: string
}

const depoimentos: Depoimento[] = [
  // Exemplo de estrutura (descomente e preencha quando tiver os depoimentos):
  // { nome: "João Silva", texto: "O app mudou minha forma de tocar na igreja...", foto: "/depoimentos/joao.jpg" },
]

export function Section9Depoimentos() {
  if (depoimentos.length === 0) {
    return (
      <section className="border-t border-[var(--color-border)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-extrabold text-[var(--color-foreground)] sm:text-3xl">
            O que os músicos que já usam o OUVIDO <span className="font-script text-[#f94f06]">Assembleiano</span> estão falando?
          </h2>
          <div className="rounded-2xl border-2 border-dashed border-[var(--color-border)] bg-[var(--color-background)]/50 p-12 text-center">
            <p className="text-[var(--color-muted)]">
              Depoimentos serão adicionados em breve.
            </p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Adicione os depoimentos no arquivo Section9Depoimentos.tsx
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="border-t border-[var(--color-border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-2xl font-extrabold text-[var(--color-foreground)] sm:text-3xl">
          O que os músicos que já usam o OUVIDO <span className="font-script text-[#f94f06]">Assembleiano</span> estão falando?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {depoimentos.map((d, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-sm"
            >
              <p className="mb-4 text-[var(--color-foreground)]">"{d.texto}"</p>
              <footer className="flex items-center gap-3">
                {d.foto && (
                  <img
                    src={d.foto}
                    alt={d.nome}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                )}
                <span className="font-semibold text-[var(--color-foreground)]">{d.nome}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
