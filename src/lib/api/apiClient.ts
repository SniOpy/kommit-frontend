const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

// Pas de contrôle de response.ok : le backend renvoie un 503 avec un corps exploitable (/db-health).
export async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${apiUrl}${path}`)

  return (await response.json()) as T
}
