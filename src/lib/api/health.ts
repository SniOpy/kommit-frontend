import { getJson } from '@/lib/api/apiClient'
import type { HealthResponse } from '@/types/apiContract'

export function fetchHealth() {
  return getJson<HealthResponse>('/health')
}
