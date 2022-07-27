import React, { useState } from 'react'
import Icon from '@mdi/react'
import { mdiAccountCircle, mdiMagnify } from '@mdi/js'
import useSpotify from '../../hooks/useSpotify'
import Chart from './Chart'
import IncrementalSearch from '../../components/form/IncrementalSearch'

export default function Artist() {
    const [searchedArtist, setSearchedArtist] = useState('')
    const [selectedArtist, setSelectedArtist] = useState(null)
    const searchEndpoint = searchedArtist === '' ? null : `/v1/search?type=artist&q=${searchedArtist}&limit=5`
    const relatedArtistEndpoint = selectedArtist ? `/v1/artists/${selectedArtist.id}/related-artists` : null
    const { data: artistsData } = useSpotify(searchEndpoint)
    const { data: relatedArtistData } = useSpotify(relatedArtistEndpoint)

    function itemTemplate(item) {
        return (
            <li
                key={item.id}
                className="flex items-center gap-2 cursor-pointer p-2"
                onClick={() => {
                    setSelectedArtist(item)
                    setSearchedArtist('')
                }}
            >
                {item.images[0]?.url && (
                    <img
                        className="w-10 h-10 rounded-full"
                        src={item.images[0]?.url}
                        alt="Artist"
                    />
                )}

                {!item.images[0]?.url && (
                    <Icon className="w-10 h-10" path={mdiAccountCircle} />
                )}

                <span>{item.name}</span>
            </li>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-5 mt-5">
                {!selectedArtist && (
                    <span className="text-sm font-semibold text-center">
                        Select an artist and discover artists like him/her
                    </span>
                )}

                <IncrementalSearch
                    className="w-64"
                    placeholder="Type an Artist"
                    icon={mdiMagnify}
                    value={searchedArtist}
                    setValue={setSearchedArtist}
                    items={artistsData?.artists.items}
                    itemTemplate={(item) => itemTemplate(item)}
                    debounceMode
                    debounceTimeout={1000}
                />
            </div>

            {relatedArtistData && (
                <Chart
                    rootArtist={selectedArtist}
                    artists={relatedArtistData.artists}
                />
            )}
        </div>
    )
}
