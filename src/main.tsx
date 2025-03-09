import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import Router from './router.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
)
