import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: React.ReactNode
  description?: string
  id?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, id, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <p
        className={cn(
          'flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-primary',
          align === 'center' && 'justify-center',
        )}
      >
        <span className="h-px w-8 bg-primary" aria-hidden="true" />
        {eyebrow}
        <span className="h-px w-8 bg-primary" aria-hidden="true" />
      </p>
      <h2
        id={id}
        className="mt-4 font-display text-4xl font-bold uppercase leading-none tracking-tight text-balance md:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">{description}</p>}
    </div>
  )
}
