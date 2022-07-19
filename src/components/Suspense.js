import React from 'react'
import Spinner from './ui/Spinner'

export default function Suspense({ children, isLoading, error }) {
    if (isLoading) {
        return <Spinner />
    }

    if (error) {
        return <span className="font-bold">{error.message} 😱</span>
    }

    return children
}
