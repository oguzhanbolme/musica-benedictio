import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthenticationContext } from '../context/Authentication'

const base = 'https://api.spotify.com'

export default function useSpotify(endpoint) {
    const { accessToken, setAccessToken } = useContext(AuthenticationContext)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (endpoint && accessToken) {
            setLoading(true)
            setData(null)
            setError(null)

            axios({
                url: base + endpoint,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
                .then((response) => {
                    setLoading(false)
                    setData(response.data)
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        setAccessToken(null)
                    } else {
                        setLoading(false)
                        setError({
                            code: error.response.status,
                            message: error.message,
                        })
                    }
                })
        }
    }, [endpoint, accessToken])

    return { data, loading, error }
}
