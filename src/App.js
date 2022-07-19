import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthenticationContext } from './context/Authentication'
import { ThemeContext } from './context/Theme'
import Navbar from './layouts/Navbar'
import PageContainer from './layouts/PageContainer'
import Artist from './pages/Artist'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Track from './pages/Track'

export default function App() {
    const { accessToken } = useContext(AuthenticationContext)
    const { darkMode } = useContext(ThemeContext)

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <Navbar />
            <PageContainer>
                <Routes>
                    <Route exact path="/" element={!accessToken ? <Login /> : <Navigate to="/profile" />} />
                    {accessToken && (
                        <>
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/discover-artist" element={<Artist />} />
                            <Route path="/track-analysis" element={<Track />} />
                        </>
                    )}
                    <Route path="*" element={!accessToken ? <Login /> : <Navigate to="/profile" />} />
                </Routes>
            </PageContainer>
        </div>
    )
}
