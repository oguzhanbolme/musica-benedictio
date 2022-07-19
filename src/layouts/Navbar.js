import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import {
    mdiAccountMusicOutline,
    mdiAccountOutline,
    mdiLogout,
    mdiMenu,
    mdiMusicCircleOutline,
} from '@mdi/js'
import { AuthenticationContext } from '../context/Authentication'
import { ThemeContext } from '../context/Theme'
import FormSwitch from '../components/form/FormSwitch'

export default function Navbar() {
    const { accessToken, setAccessToken } = useContext(AuthenticationContext)
    const { darkMode, toggleDarkMode } = useContext(ThemeContext)
    const [toggleNavbar, setToggleNavbar] = useState(false)

    return (
        <nav className="px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <img
                        src={require('../assets/music-notes.png')}
                        className="mr-3 h-6 sm:h-9"
                        alt="Music Notes"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap">
                        Spotify Benedictio
                    </span>
                </Link>

                <div onClick={() => setToggleNavbar(!toggleNavbar)}>
                    <Icon
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 cursor-pointer"
                        path={mdiMenu}
                        size={2}
                    />
                </div>

                <div
                    className={`${!toggleNavbar && 'hidden'} w-full md:block md:w-auto`}
                >
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        {accessToken && (
                            <>
                                <Link
                                    to="/profile"
                                    className="flex items-center"
                                >
                                    <Icon
                                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
                                        path={mdiAccountOutline}
                                        size={2}
                                    />
                                    <span className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 cursor-pointer">
                                        My Profile
                                    </span>
                                </Link>
                                <Link
                                    to="/discover-artist"
                                    className="flex items-center"
                                >
                                    <Icon
                                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
                                        path={mdiAccountMusicOutline}
                                        size={2}
                                    />
                                    <span className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 cursor-pointer">
                                        Discover Artist
                                    </span>
                                </Link>
                                <Link
                                    to="/track-analysis"
                                    className="flex items-center"
                                >
                                    <Icon
                                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
                                        path={mdiMusicCircleOutline}
                                        size={2}
                                    />
                                    <span className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 cursor-pointer">
                                        Track Analysis
                                    </span>
                                </Link>
                                <li
                                    onClick={() => setAccessToken(null)}
                                    className="flex items-center"
                                >
                                    <Icon
                                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
                                        path={mdiLogout}
                                        size={2}
                                    />
                                    <span className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 cursor-pointer">
                                        Logout
                                    </span>
                                </li>
                            </>
                        )}

                        <li className="flex items-center">
                            <div className="inline-flex items-center p-2 ml-3">
                                <FormSwitch
                                    checkStatus={darkMode}
                                    toggleCheckStatus={toggleDarkMode}
                                />
                                <span className="block py-2 pr-4 pl-3 rounded md:bg-transparent cursor-pointer">
                                    {darkMode ? 'Dark' : 'Light'}
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {toggleNavbar && <hr className="block md:hidden" />}
        </nav>
    )
}
