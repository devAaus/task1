import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import AuthorForm from '../../components/forms/AuthorForm'
import AuthorTable from '../../components/tables/AuthorTable'
import AdminLayout from './AdminLayout';
import toast from 'react-hot-toast';

const Authors = () => {

    const queryClient = useQueryClient();

    const { isLoading, error, data: authors, } = useQuery({
        queryKey: ['authors'],
        queryFn: () =>
            axios
                .get(`${import.meta.env.VITE_SERVER_URL}/author`)
                .then((res) => res.data),
    });


    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const addAuthormutation = useMutation({
        mutationFn: (newAuthor) => axios.post(`${import.meta.env.VITE_SERVER_URL}/author`, newAuthor),

        onSuccess: () => {
            queryClient.invalidateQueries(['author']);
            setFullName('');
            setEmail('');
            document.getElementById('modal_2').close();
        },
    });

    const deleteAuthormutation = useMutation({
        mutationFn: (id) =>
            axios.delete(`${import.meta.env.VITE_SERVER_URL}/author/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries('authors');
        },
        onError: (error) => {
            console.error(error);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAuthor = { fullName, email };
        toast.promise(
            addAuthormutation.mutateAsync(newAuthor),
            {
                loading: 'Adding Author...',
                success: 'Author Added!',
                error: 'Error While Adding.',
            }
        );
    };

    const handleDeleteAuthor = (id) => {
        toast.promise(
            deleteAuthormutation.mutateAsync(id),
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
            <button
                className='w-fit ml-auto btn btn-xs btn-primary text-base'
                onClick={() => document.getElementById('modal_2').showModal()}
            >
                Add Author
            </button>

            <AuthorForm
                handleSubmit={handleSubmit}
                fullName={fullName}
                setFullName={setFullName}
                email={email}
                setEmail={setEmail}
            />

            <AuthorTable
                authors={authors}
                handleDeleteAuthor={handleDeleteAuthor}
            />
        </AdminLayout>

    )
}

export default Authors