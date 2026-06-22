import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import UseContext from '../context/UserContext.jsx'

createRoot(document.getElementById('root')).render(


  <BrowserRouter>
<UseContext>
    <App />
</UseContext>
</BrowserRouter>
)
