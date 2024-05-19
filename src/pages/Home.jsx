import React from 'react'
import BlogCard from '../components/BlogCard'

const Home = () => {
    return (
        <div className='flex flex-col gap-8 items-start'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    )
}

export default Home