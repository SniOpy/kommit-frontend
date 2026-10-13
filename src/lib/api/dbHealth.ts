import { getJson } from '@/lib/api/apiClient'

type DbHealthResponse = { status: 'ok'; latencyMs: number } | { status: 'unreachable' }

export function fetchDbHealth() {
  return getJson<DbHealthResponse>('/db-health')
}
