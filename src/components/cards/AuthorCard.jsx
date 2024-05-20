import React from 'react'

const AuthorCard = ({ author }) => {
    return (
        <article className='py-1 hover:scale-[1.005] transition-all duration-300 ease-in-out cursor-pointer'>
            <h2 className='text-case text-[#ffb3d8] font-semibold hover:underline'>
                {author.fullName}
            </h2>
        </article>
    )
}

export default AuthorCard