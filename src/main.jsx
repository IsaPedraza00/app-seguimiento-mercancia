import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Encabezado from "./Encabezado"; //Exportado por defecto, por eso no lleva llavez. 
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Encabezado />
  </StrictMode>,
)
