import React from 'react'
import AuthorCard from './cards/AuthorCard'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const AuthorSection = () => {

    const { isLoading, error, data: authors } = useQuery({
        queryKey: ['author'],
        queryFn: () => axios.get(`${import.meta.env.VITE_SERVER_URL}/author`).then((res) => res.data)
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className='shadow-xl p-4 rounded-xl'>
            <h2 className='text-2xl text-title font-bold'>
                Top Authors
            </h2>

            <div className='flex flex-col gap-2'>
                {authors.map((author) => (
                    <AuthorCard author={author} key={author._id} />
                ))}
            </div>
        </div>
    )
}

export default AuthorSection