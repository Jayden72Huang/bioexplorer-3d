import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPage from './components/LandingPage.jsx'
import './components/LandingPage.css'

function Root() {
  const [showApp, setShowApp] = useState(() => {
    return window.location.hash === '#app' || localStorage.getItem('bio-entered-app') === '1'
  })

  function handleEnterApp() {
    localStorage.setItem('bio-entered-app', '1')
    window.location.hash = '#app'
    setShowApp(true)
  }

  if (showApp) return <App />

  const lang = localStorage.getItem('bio-demo-lang') || 'zh'
  return <LandingPage onEnterApp={handleEnterApp} lang={lang} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
