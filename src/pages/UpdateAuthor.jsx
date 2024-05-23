import AuthorForm from '@/components/forms/AuthorForm'
import { getAuthorById, updateAuthor } from '@/services/axios.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UpdateAuthor = () => {
    const { id } = useParams();
    const queryClient = useQueryClient();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const { isLoading: isAuthorLoading, error: authorError, data: author } = useQuery({
        queryKey: ['author', id],
        queryFn: () => getAuthorById(id),
    });

    useEffect(() => {
        setFullName(author?.fullName);
        setEmail(author?.email);
    }, [author]);

    const updateAuthorMutation = useMutation({
        mutationFn: updateAuthor,
        onSuccess: () => {
            queryClient.invalidateQueries(['author']);
            toast.success('Author Updated!');
        },
        onError: (error) => {
            console.error(error);
            toast.error('Failed to update author.');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedAuthor = { id, fullName, email };
        updateAuthorMutation.mutate(updatedAuthor);
    };

    if (isAuthorLoading) {
        return <div>Loading...</div>
    }

    if (authorError) {
        return <div>Error: {authorError.message}</div>
    }

    return (
        <div>
            <h2 className='text-4xl text-title font-bold mb-6'>
                Update Author
            </h2>

            <AuthorForm
                handleSubmit={handleSubmit}
                fullName={fullName}
                setFullName={setFullName}
                email={email}
                setEmail={setEmail}
            />
        </div>
    )
}

export default UpdateAuthor
