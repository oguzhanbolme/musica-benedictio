import React from 'react'
import './style.css'

export default function FormSwitch({ checkStatus, toggleCheckStatus }) {
    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={checkStatus}
                onChange={() => toggleCheckStatus(!checkStatus)}
            />
            <span className="slider round"></span>
        </label>
    )
}
