import AuthorForm from '@/components/forms/AuthorForm';
import { addAuthor } from '@/services/axios.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'

const Login = () => {

    const queryClient = useQueryClient();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const addAuthormutation = useMutation({
        mutationFn: addAuthor,
        onSuccess: () => {
            queryClient.invalidateQueries(['authors']);
            setFullName('');
            setEmail('');
            toast.success('Author Added!');
            setIsDialogOpen(false);
        },
        onError: (error) => {
            console.error(error);
            toast.error('Error while adding author.');
        },
    });

    const handleSubmit = () => {
        const newAuthor = { fullName, email };
        addAuthormutation.mutateAsync(newAuthor)
    };


    return (
        <div>
            <h2 className='text-4xl text-title font-bold mb-6'>
                Add Author
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

export default Login