import React from 'react'

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
            <textarea
                className="textarea textarea-secondary w-full h-20"
                placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            ></textarea>

            <div className='w-full flex gap-2'>
                <input
                    placeholder='Author Email'
                    type="text"
                    className='input input-secondary w-full max-w-sm'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder='Author Name'
                    type="text"
                    className='input input-secondary w-full max-w-sm'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <input
                placeholder='Blog Id'
                type="text"
                className='input input-secondary max-w-sm'
                value={blogId}
                readOnly
            />



            <button type='submit' className="btn btn-primary max-w-32">
                Submit
            </button>
        </form>
    )
}

export default CommentForm