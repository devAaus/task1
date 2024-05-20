import React from 'react'
import BlogForm from '../components/forms/BlogForm'

const AddBlog = () => {

    const handlSubmitBlog = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h2 className='text-4xl text-title font-bold mb-6'>
                Add Blog
            </h2>
            <BlogForm handlSubmitBlog={handlSubmitBlog} />
        </div>
    )
}

export default AddBlog