import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import './config/i18n.js'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider.jsx'
import { ModalProvider } from './context/Modal/ModalProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
