
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import BlogsTable from '../tables/BlogsTable';
import toast from 'react-hot-toast';
import { deleteBlog, getBlogs } from '@/services/axios.service';

const Blogs = () => {
    const queryClient = useQueryClient();

    const {
        isLoading,
        error,
        data: blogs,
    } = useQuery({
        queryKey: ['blogs'],
        queryFn: getBlogs
    });


    const mutation = useMutation({
        mutationFn: (id) => deleteBlog(id),
        onSuccess: () => {
            queryClient.invalidateQueries('blogs');
        },
        onError: (error) => {
            console.error(error);
        }
    });


    const handledeleteBlog = (id) => {
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
        <BlogsTable blogs={blogs} handledeleteBlog={handledeleteBlog} />
    )
}

export default Blogs