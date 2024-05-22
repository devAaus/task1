import React from 'react'
import AuthorCard from './cards/AuthorCard'
import { useQuery } from '@tanstack/react-query'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { getAuthors } from '@/services/axios.service'


const AuthorSection = () => {

    const { isLoading, error, data: authors } = useQuery({
        queryKey: ['author'],
        queryFn: getAuthors
    })


    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (

        <Card>
            <CardHeader>
                <CardTitle className='text-2xl text-title font-bold'>
                    Top Authors
                </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                {authors.map((author) => (
                    <AuthorCard author={author} key={author._id} />
                ))}
            </CardContent>
        </Card>

    )
}

export default AuthorSection