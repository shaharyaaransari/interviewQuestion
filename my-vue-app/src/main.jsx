import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
    import {BrowserRouter} from "react-router-dom"
import { ThemProvider } from './context/ThemProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
     <ThemProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
     </ThemProvider>
 
)
