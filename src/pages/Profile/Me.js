import React from 'react'

export default function Me({ profile }) {
    return (
        <>
            <img
                className="w-36 h-36 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full"
                src={profile?.images[0].url}
                alt="Avatar"
            />
            <span className="text-lg font-bold">{profile?.display_name}</span>
            <span>{profile?.followers.total} Followers</span>
        </>
    )
}
