import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,
)
