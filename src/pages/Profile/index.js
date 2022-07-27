import React, { useContext } from 'react'
import { ProfileContext } from './Context'
import Suspense from '../../components/Suspense'
import List from './List'
import Me from './Me'

export default function Profile() {
    const { profile, artists, tracks } = useContext(ProfileContext)

    return (
        <div className="flex md:flex-row flex-col items-center justify-evenly mt-0 md:mt-10 pb-10 md:pb-0 gap-10 md:gap-0">
            <div className="flex flex-col items-center order-1 md:order-2">
                <Suspense isLoading={profile.loading} error={profile.error}>
                    <Me profile={profile.data} />
                </Suspense>
            </div>

            <div className="order-3">
                <Suspense isLoading={artists.loading} error={artists.error}>
                    <List type="artist" data={artists.data} title="Top Artists" />
                </Suspense>
            </div>

            <div className="order-2 md:order-1">
                <Suspense isLoading={tracks.loading} error={tracks.error}>
                    <List type="track" data={tracks.data} title="Top Tracks" />
                </Suspense>
            </div>
        </div>
    )
}
