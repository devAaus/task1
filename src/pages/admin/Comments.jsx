import React from 'react'
import Tab from '../../components/Tab'
import CommentsTable from '../../components/tables/CommentsTable'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import AdminLayout from './AdminLayout';
import toast from 'react-hot-toast';

const Comments = () => {

    const queryClient = useQueryClient();

    const {
        isLoading,
        error,
        data: comments,
    } = useQuery({
        queryKey: ['comments'],
        queryFn: () =>
            axios
                .get(`${import.meta.env.VITE_SERVER_URL}/comment`)
                .then((res) => res.data),
    });

    const mutation = useMutation({
        mutationFn: (id) =>
            axios.delete(`${import.meta.env.VITE_SERVER_URL}/comment/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
        onError: (error) => {
            console.error(error);
        }
    });


    const deleteComment = (id) => {
        toast.promise(
            mutation.mutateAsync(id),
            {
                loading: 'Deleting Comment...',
                success: 'Comment Deleted!',
                error: 'Error While Deleting.',
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
        <AdminLayout>
            <CommentsTable comments={comments} deleteComment={deleteComment} />
        </AdminLayout>
    )
}

export default Comments