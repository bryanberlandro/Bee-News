import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navbar } from './components/organisms/Navbar.jsx'
import HomePage from './pages/home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <HomePage/>
  </React.StrictMode>,
)
