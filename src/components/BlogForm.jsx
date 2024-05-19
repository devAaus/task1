import React from 'react'

const BlogForm = ({ handlSubmitBlog }) => {

    return (


        <form
            className='flex flex-col gap-4'
            onSubmit={handlSubmitBlog}
        >

            <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />

            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Select Author</option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
            </select>

            <textarea className="textarea textarea-bordered" placeholder="Description"></textarea>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>

        </form>
    )
}

export default BlogForm