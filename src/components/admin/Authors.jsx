import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import AuthorForm from '../forms/AuthorForm';
import AuthorTable from '../tables/AuthorTable';
import toast from 'react-hot-toast';
import { Button } from '../ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { addAuthor, deleteAuthor, getAuthors } from '@/services/axios.service';

const Authors = () => {

    const queryClient = useQueryClient();

    const { isLoading, error, data: authors } = useQuery({
        queryKey: ['authors'],
        queryFn: getAuthors
    });

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const addAuthormutation = useMutation({
        mutationFn: addAuthor,
        onSuccess: () => {
            queryClient.invalidateQueries(['authors']);
            setFullName('');
            setEmail('');
            setIsDialogOpen(false);
        },
    });

    const deleteAuthormutation = useMutation({
        mutationFn: (id) => deleteAuthor(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['authors']);
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAuthor = { fullName, email };
        toast.promise(
            addAuthormutation.mutateAsync(newAuthor),
            {
                loading: 'Adding Author...',
                success: () => {
                    setIsDialogOpen(false);
                    return 'Author Added!';
                },
                error: 'Error While Adding.',
            }
        );
    };

    const handleDeleteAuthor = (id) => {
        toast.promise(
            deleteAuthormutation.mutateAsync(id),
            {
                loading: 'Deleting Author...',
                success: 'Author Deleted!',
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
        <div className='flex flex-col gap-4'>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                    <Button variant="default" size="sm" className="self-end" onClick={() => setIsDialogOpen(true)}>
                        Add Author
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-xs bg-bg">
                    <DialogHeader>
                        <DialogTitle className='text-2xl text-center text-title font-bold '>
                            Add Author
                        </DialogTitle>
                    </DialogHeader>
                    <AuthorForm
                        handleSubmit={handleSubmit}
                        fullName={fullName}
                        setFullName={setFullName}
                        email={email}
                        setEmail={setEmail}
                    />
                </DialogContent>
            </Dialog>

            <AuthorTable
                authors={authors}
                handleDeleteAuthor={handleDeleteAuthor}
            />
        </div>
    );
};

export default Authors;
