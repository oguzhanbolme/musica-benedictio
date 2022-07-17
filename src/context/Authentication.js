import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthenticationContext = createContext()

export function AuthenticationProvider({ children }) {
    const navigate = useNavigate()
    const [accessToken, setAccessToken] = useState(null)
    const updateAccessToken = (val) => {
        if (!val) window.localStorage.removeItem('access_token')
        setAccessToken(val)
    }

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem('access_token')

        if (!token && hash) {
            token = hash
                .substring(1)
                .split('&')
                .find((elem) => elem.startsWith('access_token'))
                .split('=')[1]

            window.localStorage.setItem('access_token', token)
            navigate('/profile')
        }

        updateAccessToken(token)
    }, [])

    return (
        <AuthenticationContext.Provider value={{ accessToken, updateAccessToken }}>
            {children}
        </AuthenticationContext.Provider>
    )
}
