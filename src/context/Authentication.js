import React, { createContext, useEffect, useState } from 'react'

export const AuthenticationContext = createContext()

export function AuthenticationProvider({ children }) {
    const [accessToken, setAccessToken] = useState(null)

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem('access_token')

        if (!token && hash) {
            token = hash
                .substring(1)
                .split('&')
                .find((elem) => elem.startsWith('access_token'))
                .split('=')[1]

            window.location.hash = ''
            window.localStorage.setItem('access_token', token)
        }

        setAccessToken(token)
    }, [])

    return (
        <AuthenticationContext.Provider value={{ accessToken, setAccessToken }}>
            {children}
        </AuthenticationContext.Provider>
    )
}
