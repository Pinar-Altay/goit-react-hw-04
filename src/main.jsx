import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
      position='top-right'
      reverseOrder={false}
      toastOptions={{
        className: ".toaster",
        duration: 2000,
      }}
    />
  </StrictMode>,
)