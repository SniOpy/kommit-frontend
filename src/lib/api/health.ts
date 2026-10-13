import { getJson } from '@/lib/api/apiClient'

type HealthResponse = {
  status: 'ok'
  uptime: number
  timestamp: string
}

export function fetchHealth() {
  return getJson<HealthResponse>('/health')
}
