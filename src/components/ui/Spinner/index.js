import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/Theme'
import './style.css'

export default function Spinner() {
    const { darkMode } = useContext(ThemeContext)

    return (
        <div
            className={`lds-hourglass ${darkMode ? 'lds-dark-theme' : 'lds-light-theme'}`}
        ></div>
    )
}
