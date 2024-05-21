import React from 'react'
import { formatDistanceToNow } from 'date-fns'

const CommentCard = ({ comment }) => {
    const createdAt = new Date(comment.createdAt)

    return (
        <div className='p-2 '>

            <div className='flex gap-2 items-center'>
                <div className="avatar placeholder">
                    <div className="bg-primary text-white rounded-full w-8 shadow-xl">
                        <span className="text-base font-bold capitalize">
                            {comment.name[0]}
                        </span>
                    </div>
                </div>

                <div className='flex flex-col justify-center'>

                    <h2 className='text-xl capitalize text-title font-bold'>
                        {comment.name}
                    </h2>

                    <span className='text-xs'>
                        {formatDistanceToNow(createdAt, { addSuffix: true })}
                    </span>

                </div>
            </div>

            <p className='text-lg text-[#ffb3d8]'>
                {comment.comment}
            </p>


        </div>
    )
}

export default CommentCard
