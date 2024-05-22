import React from 'react'
import BlogCard from '../components/cards/BlogCard'
import AuthorSection from '../components/AuthorSection'
import { useQuery } from '@tanstack/react-query';
import { getBlogs } from '@/services/axios.service';


const Home = () => {

    const {
        isLoading,
        error,
        data: blog,
    } = useQuery({
        queryKey: ['blog'],
        queryFn: getBlogs
    });


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='grid grid-cols-7 gap-2'>
            <div className='col-span-5 flex flex-col gap-8 items-start'>
                {blog.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} isHome={true} />
                ))}
            </div>

            <div className='col-span-2'>
                <AuthorSection />
            </div>
        </div>
    )
}

export default Home