import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import { Avatar, AvatarFallback } from '../ui/avatar'

const CommentCard = ({ comment }) => {
    const createdAt = new Date(comment.createdAt)

    return (
        <div className='p-2 '>

            <div className='flex gap-2 items-center'>
                <Avatar>
                    <AvatarFallback className=" bg-primary text-neutral font-medium">
                        {comment.name[0]}
                    </AvatarFallback>
                </Avatar>

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
