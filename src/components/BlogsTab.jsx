import React from 'react'
import BlogsTable from './BlogsTable'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const BlogsTab = () => {

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
        <div className='flex flex-col gap-4'>
            <BlogsTable blog={blog} />
        </div>
    )
}

export default BlogsTab