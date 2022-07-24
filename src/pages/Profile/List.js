import React, { useContext } from 'react'
import Icon from '@mdi/react'
import { mdiAccountMusicOutline, mdiMusicCircleOutline } from '@mdi/js'
import { ThemeContext } from '../../context/Theme'
import shortenText from '../../utils/shortenText'

export default function List({ data, title, type }) {
    const { darkMode } = useContext(ThemeContext)

    return (
        <>
            <div className="flex items-center text-lg gap-2 mb-1">
                <Icon path={type === 'artist' ? mdiAccountMusicOutline : mdiMusicCircleOutline} size={1.25} />
                <span>{title}</span>
            </div>
            <ul className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} w-60 text-sm font-medium rounded-lg border`}>
                {data?.items.map((item, index) => (
                    <li
                        key={item.id}
                        className={`flex items-center py-2 px-4 w-full rounded-t-lg border-b ${darkMode ? 'border-gray-600' : 'border-gray-300'} gap-2`}
                    >
                        <span className="text-lg">#{index + 1}</span>
                        <img
                            className="w-10 h-10 rounded-full"
                            src={type === 'artist' ? item.images[0].url : item.album.images[0].url}
                            alt={type === 'artist' ? 'artist' : 'track'}
                        />
                        {shortenText(item.name, 20)}
                    </li>
                ))}
            </ul>
        </>
    )
}
