import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './assets/global.css'
import { AuthenticationProvider } from './context/Authentication'
import { ThemeProvider } from './context/Theme'
import { ProfileProvider } from './pages/Profile/Context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <AuthenticationProvider>
            <ThemeProvider>
                <ProfileProvider>
                    <App />
                </ProfileProvider>
            </ThemeProvider>
        </AuthenticationProvider>
    </BrowserRouter>
)

reportWebVitals()
