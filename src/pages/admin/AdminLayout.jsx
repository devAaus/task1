import React from 'react'
import Tab from '../../components/Tab'

const AdminLayout = ({ children }) => {
    return (
        <div className='flex flex-col justify-center gap-4'>
            <h2 className='text-4xl text-title font-bold mb-6 text-center'>
                Admin Dashboard
            </h2>

            <Tab />

            <div className='flex flex-col gap-4'>
                {children}
            </div>
        </div>
    )
}

export default AdminLayout