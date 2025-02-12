import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";

import router from './Routes/router';
import AuthProvider from './Provider/Auth/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {UserInfoProvider} from './Provider/Auth/UserInfoProvider';
import { PriceProvider } from './Provider/PriceProvider';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <UserInfoProvider>
        <PriceProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        </PriceProvider>
      </UserInfoProvider>
    </AuthProvider>

  </StrictMode>,
)
