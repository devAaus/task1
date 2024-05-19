import React from 'react'
import BlogForm from '../components/BlogForm'

const AddBlog = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <BlogForm handleSubmit={handleSubmit} />
    )
}

export default AddBlog