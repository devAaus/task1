import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {

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
        const date = new Date(blog.createdAt);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }, [blog.createdAt]);

    if (isLoadingAuthor) {
        return <div>Loading...</div>;
    }

    if (errorAuthor) {
        return <div>Error: {errorAuthor.message}</div>;
    }

    return (
        <div className='py-4 hover:scale-[1.005] transition-all duration-300 ease-in-out flex flex-col items-start justify-center cursor-pointer'>
            <Link to={`/blog/${blog._id}`}>
                <article>
                    <h2 className='text-3xl text-title font-bold'>
                        {blog.title}
                    </h2>

                    <div className='flex items-center gap-2 font-medium'>
                        <p className='text-sm text-gray-300 ml-1'>
                            by
                            <span className='ml-2 text-base text-gray-200'>{author.fullName}</span>
                        </p>

                        <p className='text-xs text-gray-300 ml-1'>
                            {formattedDate}
                        </p>
                    </div>

                    <p className='text-base mt-1 ml-1 font-medium'>
                        {blog.content.substring(0, 30)}....
                    </p>

                </article>
            </Link>
        </div>
    )
}

export default BlogCard