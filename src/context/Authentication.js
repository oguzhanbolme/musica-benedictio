import React, { createContext } from 'react'

export const AuthenticationContext = createContext()

export function AuthenticationProvider({ children }) {
    return (
        <AuthenticationContext.Provider value={0}>
            {children}
        </AuthenticationContext.Provider>
    )
}
