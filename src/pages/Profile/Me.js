import React from 'react'
import Icon from '@mdi/react'
import { mdiAccountCircle } from '@mdi/js'

export default function Me({ profile }) {
    return (
        <>
            {profile?.images && profile?.images[0]?.url ? (
                <img
                    className="w-36 h-36 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full"
                    src={profile?.images[0]?.url}
                    alt="Avatar"
                />
            ) : (
                <Icon
                    className="w-36 h-36 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full"
                    path={mdiAccountCircle}
                />
            )}
            <span className="text-lg font-bold">{profile?.display_name}</span>
            <span>{profile?.followers.total} Followers</span>
        </>
    )
}
