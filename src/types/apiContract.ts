export type HealthResponse = {
  status: 'ok'
  uptime: number
  timestamp: string
}

export type DbHealthResponse = { status: 'ok'; latencyMs: number } | { status: 'unreachable' }
