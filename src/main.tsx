import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './contexts/ThemeContext'
import App from './App'
import { config } from './config'
import { initMetaPixel } from './metaPixel'
import './index.css'

if (config.metaPixelId) initMetaPixel(config.metaPixelId)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
