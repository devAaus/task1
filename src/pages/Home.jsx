import React from 'react'
import BlogCard from '../components/BlogCard'
import AuthorSection from '../components/AuthorSection'

const Home = () => {
    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-2 flex flex-col gap-8 items-start'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>

            <div className='col-span-1'>
                <AuthorSection />
            </div>
        </div>
    )
}

export default Home