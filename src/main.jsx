import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BackgroundLayers from './BackgroundLayers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackgroundLayers/>
    <App />
  </StrictMode>,
)
