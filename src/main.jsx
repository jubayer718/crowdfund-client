import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './Routers/Routers.jsx'
import AuthProvider from './Components/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <ToastContainer></ToastContainer>
         <RouterProvider router={routes}></RouterProvider>

</AuthProvider>
  </StrictMode>,
)
