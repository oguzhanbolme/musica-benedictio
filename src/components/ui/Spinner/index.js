import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/Theme'
import './style.css'

export default function Spinner() {
    const { darkMode } = useContext(ThemeContext)

    return (
        <div
            className={`lds-hourglass lds-${darkMode ? 'dark' : 'light'}-theme`}
        ></div>
    )
}
