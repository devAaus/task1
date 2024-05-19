import React from 'react'

const BlogForm = ({ handlSubmitBlog }) => {
    return (

        <dialog id="modal_1" className="modal">
            <div className="modal-box">
                <h2 className='text-4xl text-title font-bold mb-6'>
                    Add Blog
                </h2>

                <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() => document.getElementById('modal_1').close()}
                >
                    ✕
                </button>

                <form className='flex flex-col gap-4' onSubmit={handlSubmitBlog}>

                    <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />

                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select Author</option>
                        <option>Game of Thrones</option>
                        <option>Lost</option>
                        <option>Breaking Bad</option>
                        <option>Walking Dead</option>
                    </select>

                    <textarea className="textarea textarea-bordered" placeholder="Description"></textarea>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
        </dialog>
    )
}

export default BlogForm