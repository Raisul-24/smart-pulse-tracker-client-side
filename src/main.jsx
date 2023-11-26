import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <div className="max-w-screen-2xl mx-auto bg-white">
    <RouterProvider router={router} />
    <Toaster />
    </div>
    </AuthProvider>
  </React.StrictMode>,
)
