import { CircleCheckIcon, CircleXIcon, LoaderCircleIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

type ConnectionCheckCardProps = {
  title: string
  buttonLabel: string
  outcome: 'idle' | 'checking' | 'ok' | 'ko'
  message?: string
  onCheck: () => void
}

export default function ConnectionCheckCard({
  title,
  buttonLabel,
  outcome,
  message,
  onCheck,
}: ConnectionCheckCardProps) {
  return (
    <section className="flex flex-col items-start gap-3 rounded-lg border p-4">
      <h2 className="text-base font-medium">{title}</h2>
      <Button onClick={onCheck} disabled={outcome === 'checking'}>
        {buttonLabel}
      </Button>
      {outcome === 'checking' && <LoaderCircleIcon className="size-4 animate-spin" />}
      {outcome === 'ok' && (
        <p className="flex items-center gap-2 text-emerald-600">
          <CircleCheckIcon className="size-4" />
          {message}
        </p>
      )}
      {outcome === 'ko' && (
        <p className="flex items-center gap-2 text-red-600">
          <CircleXIcon className="size-4" />
          {message}
        </p>
      )}
    </section>
  )
}
