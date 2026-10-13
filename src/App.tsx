import { QueryClientProvider } from '@tanstack/react-query'

import ConnectionCheck from '@/components/pages/ConnectionCheck/ConnectionCheck'
import { queryClient } from '@/lib/queryClient'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConnectionCheck />
    </QueryClientProvider>
  )
}
