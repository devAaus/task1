import React from 'react'
import BlogsTab from '../../components/BlogsTab'
import Tab from '../../components/Tab'



const Dashboard = () => {


    return (
        <div className='flex flex-col justify-center gap-4'>
            <h2 className='text-4xl text-title font-bold mb-6 text-center'>
                Admin Dashboard
            </h2>

            <Tab />

            <BlogsTab />

        </div>
    )
}

export default Dashboard