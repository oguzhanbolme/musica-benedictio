import React, { useState } from 'react'
import Icon from '@mdi/react'
import { mdiMagnify, mdiMusicCircleOutline } from '@mdi/js'
import useSpotify from '../../hooks/useSpotify'
import Chart from './Chart'
import IncrementalSearch from '../../components/form/IncrementalSearch'
import shortenText from '../../utils/shortenText'

export default function Track() {
    const [searchedTrack, setSearchedTrack] = useState('')
    const [selectedTrack, setSelectedTrack] = useState(null)
    const searchEndpoint = searchedTrack === '' ? null : `/v1/search?type=track&q=${searchedTrack}&limit=5`
    const trackFeatureEndpoint = selectedTrack ? `/v1/audio-features/${selectedTrack.id}` : null
    const { data: tracksData } = useSpotify(searchEndpoint)
    const { data: trackFeatureData } = useSpotify(trackFeatureEndpoint)

    function itemTemplate(item) {
        return (
            <li
                key={item.id}
                className="flex items-center gap-2 cursor-pointer p-2"
                onClick={() => {
                    setSelectedTrack(item)
                    setSearchedTrack('')
                }}
            >
                {item.album.images[0]?.url && (
                    <img
                        className="w-10 h-10 rounded-full"
                        src={item.album.images[0]?.url}
                        alt="Artist"
                    />
                )}

                {!item.album.images[0]?.url && (
                    <Icon className="w-10 h-10" path={mdiMusicCircleOutline} />
                )}

                <span>{item.name}</span>
            </li>
        )
    }

    return (
        <div className="lg:columns-2">
            <div className="lg:min-h-screen flex flex-col items-center justify-center gap-5 lg:my-0 my-10">
                {selectedTrack && (
                    <div className="flex items-center gap-5">
                        {selectedTrack.album.images[0]?.url && (
                            <img
                                className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full border"
                                src={selectedTrack.album.images[0].url}
                                alt="Artist"
                            />
                        )}

                        {!selectedTrack.album.images[0]?.url && (
                            <Icon path={mdiMusicCircleOutline} />
                        )}

                        <div className="flex flex-col">
                            <span className="text-sm md:text-lg lg:text-xl font-light">
                                {shortenText(selectedTrack.artists[0].name, 25)}
                            </span>
                            <span className="text-lg md:text-xl lg:text-2xl font-bold">
                                {shortenText(selectedTrack.name, 25)}
                            </span>
                        </div>
                    </div>
                )}

                {!selectedTrack && <span className="text-sm font-semibold">Select a track and let us analyze</span>}

                <IncrementalSearch
                    className="w-3/4"
                    placeholder="Type a Track"
                    icon={mdiMagnify}
                    value={searchedTrack}
                    setValue={setSearchedTrack}
                    items={tracksData?.tracks.items}
                    itemTemplate={(item) => itemTemplate(item)}
                    debounceMode
                    debounceTimeout={1000}
                />
            </div>

            <Chart data={trackFeatureData} />
        </div>
    )
}
