import React from 'react'
import Button from '../../components/ui/Button'

export default function Login() {
    return (
        <div className="h-screen flex items-center justify-center">
            <a
                href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`}
            >
                <Button title="Login to Spotify" />
            </a>
        </div>
    )
}
