import React from 'react'

const BlogForm = ({ handleSubmit, title, setTitle, content, setContent, authorId, setAuthorId }) => {

    return (


        <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit}
        >

            <input
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered w-full max-w-xs"
            />

            {/* <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Select Author</option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
            </select> */}

            <input
                type='text'
                value={authorId}
                placeholder='Author Id'
                onChange={(e) => setAuthorId(e.target.value)}
                className='input input-bordered w-full max-w-xs'
            />

            <textarea
                className="textarea textarea-bordered"
                placeholder="Description"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>

            <button
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>

        </form>
    )
}

export default BlogForm