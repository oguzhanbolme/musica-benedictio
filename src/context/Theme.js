import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', true)
    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}
