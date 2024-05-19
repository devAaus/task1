import React from 'react'

const BlogForm = ({ handleSubmit }) => {
    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <h2 className='text-4xl text-title font-bold'>
                Add Blog
            </h2>

            <input type="text" placeholder="Title" className="input input-primary w-full max-w-xs" />

            <select className="select select-primary w-full max-w-xs">
                <option disabled selected>Select Author</option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
            </select>

            <textarea className="textarea textarea-primary" placeholder="Description"></textarea>

            <input type="submit" value="Submit" className="btn" />

        </form>
    )
}

export default BlogForm