import React, { useState } from 'react'
import CommentForm from './forms/CommentForm'
import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import CommentCard from './cards/CommentCard'

const CommentSection = ({ blogId }) => {

    const queryClient = useQueryClient()

    const { isLoading, error, data } = useQuery({
        queryKey: ['comments'],
        queryFn: () =>
            axios
                .get(`${import.meta.env.VITE_SERVER_URL}/comment`)
                .then((res) => res.data),
    })

    const comments = data?.filter((c) => c.blogId === blogId)

    const [comment, setComment] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const mutation = useMutation({
        mutationFn: (newComment) =>
            axios.post(`${import.meta.env.VITE_SERVER_URL}/comment`, newComment),

        onSuccess: () => {
            queryClient.invalidateQueries(['comments'])
            setComment('')
            setEmail('')
            setName('')
        },
        onError: (error) => {
            console.error(error)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        mutation.mutate({
            email,
            name,
            comment,
            blogId
        })
    }


    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <section className='py-20'>
            <h2 className='text-3xl text-title font-bold mb-4'>
                Comments
            </h2>

            <CommentForm
                handleSubmit={handleSubmit}
                comment={comment}
                setComment={setComment}
                blogId={blogId}
                email={email}
                setEmail={setEmail}
                name={name}
                setName={setName}
            />

            <div className='flex flex-col gap-4 w-full'>
                {comments.map((comment) => (
                    <CommentCard comment={comment} key={comment._id} />
                ))}
            </div>
        </section>
    )
}

export default CommentSection