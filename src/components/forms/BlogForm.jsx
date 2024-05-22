import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const BlogForm = ({
    handleSubmit,
    title,
    setTitle,
    content,
    setContent,
    setAuthorId,
    authors
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

            <Select onValueChange={(value) => setAuthorId(value)}>
                <SelectTrigger className="max-w-xs">
                    <SelectValue placeholder="Select Author" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {authors.map((author) => (
                            <SelectItem key={author._id} value={author._id}>
                                {author.fullName}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>


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