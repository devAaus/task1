import React from 'react'
import BlogForm from './BlogForm'
import BlogsTable from './BlogsTable'

const BlogsTab = () => {

    const handlSubmitBlog = (e) => {
        e.preventDefault()
    }

    return (
        <div className='flex flex-col gap-4'>
            <button
                className='w-fit ml-auto btn btn-xs btn-primary text-base'
                onClick={() => document.getElementById('modal_1').showModal()}
            >
                Add Blog
            </button>
            <BlogForm handleSubmitBlog={handlSubmitBlog} />
            <BlogsTable />
        </div>
    )
}

export default BlogsTab