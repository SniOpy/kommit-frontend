import { useQuery } from '@tanstack/react-query'

import ConnectionCheckCard from '@/components/pages/ConnectionCheck/ConnectionCheckCard'
import { connectionCheckTexts } from '@/data/connectionCheck'
import { fetchDbHealth } from '@/lib/api/dbHealth'
import { fetchHealth } from '@/lib/api/health'
import { queryKeys } from '@/lib/api/queryKeys'

export default function ConnectionCheck() {
  const health = useQuery({
    queryKey: queryKeys.health,
    queryFn: fetchHealth,
    enabled: false,
    retry: false,
  })
  const dbHealth = useQuery({
    queryKey: queryKeys.dbHealth,
    queryFn: fetchDbHealth,
    enabled: false,
    retry: false,
  })

  const isServerOk = health.data?.status === 'ok'
  const isDatabaseOk = dbHealth.data?.status === 'ok'
  const hasServerAnswered = health.isError || health.data !== undefined
  const hasDatabaseAnswered = dbHealth.isError || dbHealth.data !== undefined

  const { server, database } = connectionCheckTexts

  return (
    <main className="mx-auto flex max-w-xl flex-col gap-4 p-6">
      <h1 className="text-xl font-semibold">{connectionCheckTexts.title}</h1>
      <ConnectionCheckCard
        title={server.title}
        buttonLabel={server.button}
        outcome={
          health.isFetching ? 'checking' : !hasServerAnswered ? 'idle' : isServerOk ? 'ok' : 'ko'
        }
        message={isServerOk ? server.ok : server.ko}
        onCheck={() => void health.refetch()}
      />
      <ConnectionCheckCard
        title={database.title}
        buttonLabel={database.button}
        outcome={
          dbHealth.isFetching
            ? 'checking'
            : !hasDatabaseAnswered
              ? 'idle'
              : isDatabaseOk
                ? 'ok'
                : 'ko'
        }
        message={isDatabaseOk ? database.ok : database.ko}
        onCheck={() => void dbHealth.refetch()}
      />
    </main>
  )
}
