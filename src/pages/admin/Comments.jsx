import React from 'react'
import Tab from '../../components/Tab'
import CommentsTable from '../../components/tables/CommentsTable'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import AdminLayout from './AdminLayout';

const Comments = () => {

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

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <AdminLayout>
            <CommentsTable comments={comments} />
        </AdminLayout>
    )
}

export default Comments