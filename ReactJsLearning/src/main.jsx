import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { ShortCircuitPractice } from './ShortCircuitEvaluation/ShortCircuitPractice'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <div style={{
      display:"flex",
            justifyContent:"center",
            alignItems:"center",
            
    }}>
    <ShortCircuitPractice/>
    </div>
  </StrictMode>,
)
