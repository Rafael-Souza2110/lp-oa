interface YouTubeEmbedProps {
  videoId: string
  title?: string
  className?: string
}

export function YouTubeEmbed({ videoId, title = 'Vídeo', className = '' }: YouTubeEmbedProps) {
  if (!videoId) {
    return (
      <div
        className={`flex aspect-video items-center justify-center rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-background)]/50 ${className}`}
      >
        <p className="text-sm text-[var(--color-muted)]">
          Link do vídeo será adicionado em breve
        </p>
      </div>
    )
  }

  return (
    <div className={`aspect-video w-full overflow-hidden rounded-2xl ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="h-full w-full"
      />
    </div>
  )
}
