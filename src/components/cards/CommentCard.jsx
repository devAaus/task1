import React from 'react'
import { formatDistanceToNow } from 'date-fns'

const CommentCard = ({ comment }) => {
    const createdAt = new Date(comment.createdAt)

    return (
        <div className='p-2 w-full shadow-xl rounded-md'>
            <h2 className='text-2xl capitalize text-title font-bold'>
                {comment.name}
            </h2>

            <span className='text-xs ml-1'>
                {formatDistanceToNow(createdAt, { addSuffix: true })}
            </span>

            <p className='text-lg text-[#ffb3d8] font-semibold ml-1'>
                {comment.comment}
            </p>
        </div>
    )
}

export default CommentCard
