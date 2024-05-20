import React, { useState } from 'react'
import AuthorTable from './tables/AuthorTable'
import AuthorForm from './forms/AuthorForm'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const AuthorsTab = () => {

    const {
        isLoading,
        error,
        data: author,
    } = useQuery({
        queryKey: ['author'],
        queryFn: () =>
            axios
                .get(`${import.meta.env.VITE_SERVER_URL}/author`)
                .then((res) => res.data),
    });

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmitAuthor = (e) => {
        e.preventDefault();
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='flex flex-col gap-4'>
            <button
                className='w-fit ml-auto btn btn-xs btn-primary text-base'
                onClick={() => document.getElementById('modal_2').showModal()}
            >
                Add Author
            </button>

            <AuthorForm
                handleSubmitAuthor={handleSubmitAuthor}
                fullName={fullName}
                setFullName={setFullName}
                email={email}
                setEmail={setEmail}
            />

            <AuthorTable author={author} />
        </div>
    )
}

export default AuthorsTab