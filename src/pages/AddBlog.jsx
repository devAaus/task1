import React, { useState } from 'react';
import BlogForm from '../components/forms/BlogForm';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { addBlog, getAuthors } from '@/services/axios.service';

const AddBlog = () => {
    const queryClient = useQueryClient();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorId, setAuthorId] = useState('');

    const { isLoading, error, data: authors } = useQuery({
        queryKey: ['authors'],
        queryFn: getAuthors,
    });

    const addBlogMutation = useMutation({
        mutationFn: addBlog,
        onSuccess: () => {
            queryClient.invalidateQueries(['blogs']);
            setTitle('');
            setContent('');
            setAuthorId('');
        },
        onError: (error) => {
            console.error(error);
            toast.error('Error while adding the blog');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content || !authorId) {
            toast.error('All fields are required');
            return;
        }
        const newBlog = { title, content, authorId };
        toast.promise(
            addBlogMutation.mutateAsync(newBlog),
            {
                loading: 'Adding Blog...',
                success: 'Blog Added!',
                error: 'Error While Adding.',
            }
        );
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2 className="text-4xl text-title font-bold mb-6">Add Blog</h2>
            <BlogForm
                handleSubmit={handleSubmit}
                title={title}
                setTitle={setTitle}
                content={content}
                setContent={setContent}
                setAuthorId={setAuthorId}
                authors={authors}
            />
        </div>
    );
};

export default AddBlog;
