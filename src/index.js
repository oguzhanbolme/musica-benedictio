import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './assets/global.css'
import { AuthenticationProvider } from './context/Authentication'
import { ThemeProvider } from './context/Theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <AuthenticationProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </AuthenticationProvider>
)

reportWebVitals()
