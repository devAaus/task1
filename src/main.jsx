import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {
   QueryClient,
   QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         staleTime: 10000,
      },
   },
})

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <BrowserRouter>
            <Toaster
               position="top-right"
               reverseOrder={false}
            />
            <App />
         </BrowserRouter>
      </QueryClientProvider>
   </React.StrictMode>,
)
