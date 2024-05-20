import React, { useState } from 'react'
import Tab from '../../components/Tab'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import AuthorForm from '../../components/forms/AuthorForm'
import AuthorTable from '../../components/tables/AuthorTable'
import AdminLayout from './AdminLayout';

const Authors = () => {

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

    console.log(author);
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

        <AdminLayout>
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
        </AdminLayout>

    )
}

export default Authors