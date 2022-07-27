import React from 'react'
import Spinner from './ui/Spinner'

export default function Suspense({ children, isLoading, error }) {
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center">
                <Spinner />
            </div>
        )
    }

    if (error) {
        return <span className="font-bold">{error.message} 😱</span>
    }

    return children
}
