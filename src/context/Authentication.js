import React, { createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'

export const AuthenticationContext = createContext()

export function AuthenticationProvider({ children }) {
    const navigate = useNavigate()
    const [accessToken, setAccessToken] = useLocalStorage('access_token', null)

    useEffect(() => {
        const hash = window.location.hash

        if (!accessToken && hash) {
            const token = hash
                .substring(1)
                .split('&')
                .find((elem) => elem.startsWith('access_token'))
                .split('=')[1]

            setAccessToken(token)
            navigate('/profile')
        }
    }, [])

    return (
        <AuthenticationContext.Provider value={{ accessToken, setAccessToken }}>
            {children}
        </AuthenticationContext.Provider>
    )
}
