import React from 'react'
import { Link } from 'react-router-dom'

const AuthorCard = ({ author }) => {
    return (
        <article className='py-1 hover:scale-[1.005] transition-all duration-300 ease-in-out cursor-pointer'>
            <Link to={`/author/${author._id}`}>
                <h2 className='text-case text-[#ffb3d8] font-semibold hover:underline'>
                    {author.fullName}
                </h2>
            </Link>
        </article>
    )
}

export default AuthorCard