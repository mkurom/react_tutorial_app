import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { Todos } from './pages/Todos';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 300000,
    },
  },
});

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}
