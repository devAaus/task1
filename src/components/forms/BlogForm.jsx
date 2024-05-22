import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const BlogForm = ({
    handleSubmit,
    title,
    setTitle,
    content,
    setContent,
    setAuthorId,
    authorId
}) => {

    return (


        <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit}
        >

            <Input
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <Input
                type="text"
                placeholder="AuthorId"
                name="author"
                value={authorId}
                onChange={(e) => setAuthorId(e.target.value)}
            />


            <ReactQuill
                theme="bubble"
                value={content}
                onChange={setContent}
                placeholder='Description'
                className='min-h-[80px] w-full rounded-md border border-primary bg-bg text-sm'
            />


            <Button
                type="submit"
                variant="default"
                size="lg"
            >
                Submit
            </Button>

        </form>
    )
}

export default BlogForm