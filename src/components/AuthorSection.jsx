import React from 'react'
import AuthorCard from './AuthorCard'

const AuthorSection = () => {
    return (
        <div className='shadow-xl p-4 rounded-xl'>
            <h2 className='text-2xl text-title font-bold'>
                Top Authors
            </h2>

            <div className='flex flex-col gap-2'>
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
            </div>
        </div>
    )
}

export default AuthorSection