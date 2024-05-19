import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetail = () => {
    const { id } = useParams()

    const {
        isLoading,
        error,
        data: blog,
    } = useQuery({
        queryKey: ['blog', id],
        queryFn: () =>
            axios
                .get(`${import.meta.env.VITE_SERVER_URL}/blog/${id}`)
                .then((res) => res.data.blog),
    });


    const authorId = blog?.author;
    const {
        isLoading: isLoadingAuthor,
        error: errorAuthor,
        data: author,
    } = useQuery({
        queryKey: ['author', authorId],
        queryFn: () =>
            axios
                .get(`${import.meta.env.VITE_SERVER_URL}/author/${authorId}`)
                .then((res) => res.data),
    });

    const formattedDate = useMemo(() => {
        if (!blog) return '';
        const date = new Date(blog.createdAt);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }, [blog]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (isLoadingAuthor) {
        return <div>Loading...</div>;
    }

    if (errorAuthor) {
        return <div>Error: {errorAuthor.message}</div>;
    }


    return (
        <div>
            <h2 className='text-5xl text-title font-bold'>
                {blog.title}
            </h2>

            <div className='flex gap-2 items-center font-medium mt-1'>
                <p className='text-sm text-gray-300 ml-1'>
                    by
                    <span className='ml-2 text-base text-gray-200'>{author.fullName}</span>
                </p>

                <p className='text-sm text-gray-300 ml-1'>
                    {formattedDate}
                </p>
            </div>

            <p className='text-base leading-7 mt-6 ml-1 font-medium'>
                {blog.content}
            </p>
        </div>
    )
}

export default BlogDetail