import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import './config/i18n.js'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/Auth/AuthProvider.jsx'
import { OverlayProvider } from './context/Overlay/OverlayProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <OverlayProvider>
          <App />
        </OverlayProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
