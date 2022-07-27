import React from 'react'
import Icon from '@mdi/react'
import { mdiCrown, mdiHatFedora } from '@mdi/js'

export default function Me({ profile }) {
    return (
        <>
            <Icon
                path={profile?.product === 'premium' ? mdiCrown : mdiHatFedora}
                size={2}
            />
            <img
                className="w-36 h-36 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full"
                src={'https://www.angrymetalguy.com/wp-content/uploads/2017/05/chris-cornell.jpg' || profile?.images[0].url}
                alt="Avatar"
            />
            <span className="text-lg font-bold">{profile?.display_name}</span>
            <span>{profile?.followers.total} Followers</span>
        </>
    )
}
