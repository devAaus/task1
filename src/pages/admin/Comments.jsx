import React from 'react'
import Tab from '../../components/Tab'
import CommentsTable from '../../components/tables/CommentsTable'

const Comments = () => {
    return (
        <div className='flex flex-col justify-center gap-4'>
            <h2 className='text-4xl text-title font-bold mb-6 text-center'>
                Admin Dashboard
            </h2>

            <Tab />

            <CommentsTable />

        </div>
    )
}

export default Comments