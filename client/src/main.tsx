import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { StoreProvider } from './context/StoreContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
