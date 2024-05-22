import React from 'react'
import CommentsTable from '../../components/tables/CommentsTable'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { deleteComment, getComments } from '@/services/axios.service';

const Comment = () => {

    const queryClient = useQueryClient();

    const {
        isLoading,
        error,
        data: comments,
    } = useQuery({
        queryKey: ['comments'],
        queryFn: getComments
    });

    const mutation = useMutation({
        mutationFn: (id) => deleteComment(id),
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
        onError: (error) => {
            console.error(error);
        }
    });


    const handledeleteComment = (id) => {
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
        <CommentsTable comments={comments} handledeleteComment={handledeleteComment} />
    )
}

export default Comment