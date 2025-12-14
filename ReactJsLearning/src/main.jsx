import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ImOpt } from 'react-icons/im'
// import {App} from './App.jsx'
import { LoginForm } from "./FormHandling/ReactLoginForm"
// import { ShortCircuitPractice } from './ShortCircuitEvaluation/ShortCircuitPractice'
// import { ReactFormHandle } from './FormHandling/ReactFormHandle'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ReactFormHandle/> */}
    <LoginForm/>
   
  </StrictMode>
)
