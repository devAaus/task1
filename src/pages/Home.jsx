import React from 'react'
import BlogCard from '../components/BlogCard'
import AuthorSection from '../components/AuthorSection'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Home = () => {

    const {
        isLoading,
        error,
        data: blog,
    } = useQuery({
        queryKey: ['blog'],
        queryFn: () =>
            axios
                .get(`${import.meta.env.VITE_SERVER_URL}/blog`)
                .then((res) => res.data),
    });


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-2 flex flex-col gap-8 items-start'>
                {blog.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
            </div>

            <div className='col-span-1'>
                <AuthorSection />
            </div>
        </div>
    )
}

export default Home