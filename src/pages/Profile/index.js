import React from 'react'
import useSpotify from '../../hooks/useSpotify'
import Suspense from '../../components/Suspense'
import List from './List'
import Me from './Me'

export default function Profile() {
    const { data: profile, loading: profileLoading, error: profileError } = useSpotify('/v1/me')
    const { data: artists, loading: artistsLoading, error: artistsError } = useSpotify('/v1/me/top/artists?limit=10')
    const { data: tracks, loading: tracksLoading, error: tracksError } = useSpotify('/v1/me/top/tracks?limit=10')


    return (
        <div className="flex md:flex-row flex-col items-center justify-evenly mt-0 md:mt-10 pb-10 md:pb-0 gap-10 md:gap-0">
            <div className="flex flex-col items-center order-1 md:order-2">
                <Suspense isLoading={profileLoading} error={profileError}>
                    <Me profile={profile} />
                </Suspense>
            </div>

            <div className="order-3">
                <Suspense isLoading={artistsLoading} error={artistsError}>
                    <List type="artist" data={artists} title="Top Artists" />
                </Suspense>
            </div>

            <div className="order-2 md:order-1">
                <Suspense isLoading={tracksLoading} error={tracksError}>
                    <List type="track" data={tracks} title="Top Tracks" />
                </Suspense>
            </div>
        </div>
    )
}
