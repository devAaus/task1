import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback } from '../ui/avatar'

const AuthorCard = ({ author }) => {
    return (

        <Link to={`/author/${author._id}`} className='p-1 rounded-md flex items-center gap-2 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer'>

            <Avatar>
                <AvatarFallback className=" bg-primary font-bold">
                    {author.fullName[0]}
                </AvatarFallback>
            </Avatar>

            <h2 className='text-case text-[#ffb3d8] font-semibold'>
                {author.fullName}
            </h2>
        </Link>

    )
}

export default AuthorCard