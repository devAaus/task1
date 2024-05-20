import React, { useState } from 'react'
import BlogForm from '../components/forms/BlogForm'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axios from 'axios';

const AddBlog = () => {

    const queryClient = useQueryClient();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorId, setAuthorId] = useState('');

    const addBlogmutation = useMutation({
        mutationFn: (newAuthor) => axios.post(`${import.meta.env.VITE_SERVER_URL}/blog`, newAuthor),

        onSuccess: () => {
            queryClient.invalidateQueries(['blogs']);
            setTitle('');
            setContent('');
            setAuthorId('');
        },

        onError: (error) => {
            console.log(error);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = { title, content, authorId };
        toast.promise(
            addBlogmutation.mutateAsync(newBlog),
            {
                loading: 'Adding Blog...',
                success: 'Blog Added!',
                error: 'Error While Adding.',
            }
        );
    };

    return (
        <div>
            <h2 className='text-4xl text-title font-bold mb-6'>
                Add Blog
            </h2>
            <BlogForm handleSubmit={handleSubmit} title={title} setTitle={setTitle} content={content} setContent={setContent} authorId={authorId} setAuthorId={setAuthorId} />
        </div>
    )
}

export default AddBlog