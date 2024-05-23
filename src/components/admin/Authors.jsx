
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import AuthorTable from '../tables/AuthorTable';
import toast from 'react-hot-toast';
import { deleteAuthor, getAuthors } from '@/services/axios.service';


const Authors = () => {

    const queryClient = useQueryClient();

    const { isLoading, error, data: authors } = useQuery({
        queryKey: ['authors'],
        queryFn: getAuthors
    });


    const deleteAuthormutation = useMutation({
        mutationFn: (id) => deleteAuthor(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['authors']);
            toast.success('Author Deleted!');
        },
        onError: (error) => {
            console.error(error);
            toast.error('Error while deleting author.');
        },
    })

    const handleDeleteAuthor = (id) => {
        deleteAuthormutation.mutateAsync(id)

    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <AuthorTable
            authors={authors}
            handleDeleteAuthor={handleDeleteAuthor}
        />
    );
};

export default Authors;
