import { getJson } from '@/lib/api/apiClient'
import type { DbHealthResponse } from '@/types/apiContract'

export function fetchDbHealth() {
  return getJson<DbHealthResponse>('/db-health')
}
