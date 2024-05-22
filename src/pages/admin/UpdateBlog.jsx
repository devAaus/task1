import React, { useEffect, useState } from 'react';
import BlogForm from '@/components/forms/BlogForm';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getAuthors, getBlogById, updateBlog } from '@/services/axios.service';
import { useParams } from 'react-router-dom';

const UpdateBlog = () => {
    const { id } = useParams();
    const queryClient = useQueryClient();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorId, setAuthorId] = useState('');

    const { isLoading: isBlogLoading, error: blogError, data: blog } = useQuery({
        queryKey: ['blogs', id],
        queryFn: () => getBlogById(id),
    })

    useEffect(() => {
        setTitle(blog?.title);
        setContent(blog?.content);
        setAuthorId(blog?.author);
    }, [blog]);

    const updateBlogMutation = useMutation({
        mutationFn: updateBlog,
        onSuccess: () => {
            queryClient.invalidateQueries(['blogs']);
            toast.success('Blog updated successfully');
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content || !authorId) {
            toast.error('All fields are required');
            return;
        }
        const updatedBlog = { id, title, content, authorId };
        updateBlogMutation.mutate(updatedBlog);
    };


    if (isBlogLoading) {
        return <div>Loading...</div>;
    }

    if (blogError) {
        return <div>Error: {error ? error.message : blogError.message}</div>;
    }

    return (
        <div>
            <h2 className="text-4xl text-title font-bold mb-6">Edit Blog</h2>
            <BlogForm
                handleSubmit={handleSubmit}
                title={title}
                setTitle={setTitle}
                content={content}
                setContent={setContent}
                setAuthorId={setAuthorId}
                authorId={authorId}
            />
        </div>
    );
};

export default UpdateBlog;
