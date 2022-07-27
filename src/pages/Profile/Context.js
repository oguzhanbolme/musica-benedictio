import React, { createContext } from 'react'
import useSpotify from '../../hooks/useSpotify'

export const ProfileContext = createContext()

export function ProfileProvider({ children }) {
    const profile = useSpotify('/v1/me')
    const artists = useSpotify('/v1/me/top/artists?limit=10')
    const tracks = useSpotify('/v1/me/top/tracks?limit=10')

    return (
        <ProfileContext.Provider value={{ profile, artists, tracks }}>
            {children}
        </ProfileContext.Provider>
    )
}
