import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {GlobalStyle} from './Estilos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
)
