import React from 'react'
import AuthorsTab from '../../components/AuthorsTab'
import Tab from '../../components/Tab'

const Authors = () => {
    return (
        <div className='flex flex-col justify-center gap-4'>
            <h2 className='text-4xl text-title font-bold mb-6 text-center'>
                Admin Dashboard
            </h2>

            <Tab />

            <AuthorsTab />

        </div>
    )
}

export default Authors