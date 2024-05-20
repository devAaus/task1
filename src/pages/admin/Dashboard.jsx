

import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import BlogsTable from '../../components/tables/BlogsTable';
import AdminLayout from './AdminLayout';
import toast from 'react-hot-toast';


const Dashboard = () => {
    const queryClient = useQueryClient();

    const {
        isLoading,
        error,
        data: blogs,
    } = useQuery({
        queryKey: ['blogs'],
        queryFn: () =>
            axios
                .get(`${import.meta.env.VITE_SERVER_URL}/blog`)
                .then((res) => res.data),
    });


    const mutation = useMutation({
        mutationFn: (id) =>
            axios.delete(`${import.meta.env.VITE_SERVER_URL}/blog/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries('blogs');
        },
        onError: (error) => {
            console.error(error);
        }
    });


    const deleteBlog = (id) => {
        toast.promise(
            mutation.mutateAsync(id),
            {
                loading: 'Deleting Blog...',
                success: 'Blog Deleted!',
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

            <BlogsTable blogs={blogs} deleteBlog={deleteBlog} />

        </AdminLayout>
    )
}

export default Dashboard