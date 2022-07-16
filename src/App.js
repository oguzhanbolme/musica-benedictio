import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthenticationContext } from './context/Authentication'
import Navbar from './layouts/Navbar'
import PageContainer from './layouts/PageContainer'
import Artist from './pages/Artist'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Track from './pages/Track'

export default function App() {
    const { accessToken } = useContext(AuthenticationContext)

    return (
        <div className="h-screen bg-green-300">
            <Navbar />
            <PageContainer>
                <BrowserRouter>
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
                </BrowserRouter>
            </PageContainer>
        </div>
    )
}
