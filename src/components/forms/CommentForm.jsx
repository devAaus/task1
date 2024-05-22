import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

const CommentForm = ({
    handleSubmit,
    comment,
    setComment,
    blogId,
    email,
    setEmail,
    name,
    setName
}) => {
    return (
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <Textarea
                className='min-h-[20px]'
                placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            ></Textarea>

            <div className='w-full flex gap-2'>
                <Input
                    placeholder='Author Email'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder='Author Name'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <Input
                placeholder='Blog Id'
                type="text"
                value={blogId}
                readOnly
            />



            <Button type='submit' size="sm">
                Submit
            </Button>
        </form>
    )
}

export default CommentForm