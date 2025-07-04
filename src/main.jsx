import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './routers/Router.jsx'

import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './context/authcontext/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
              <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
