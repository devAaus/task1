import React from 'react'

const BlogCard = () => {
    return (
        <div className='py-4 hover:scale-[1.005] transition-all duration-300 ease-in-out flex flex-col items-start justify-center cursor-pointer'>
            <article>
                <h2 className='text-3xl text-title font-bold'>
                    The Two Reacts
                </h2>

                <div className='flex gap-2 font-medium'>
                    <p className='text-xs text-gray-300 ml-1'>
                        by Fransisco
                    </p>

                    <p className='text-xs text-gray-300 ml-1'>
                        December 21, 2022
                    </p>
                </div>

                <p className='text-base mt-1 ml-1 font-medium'>
                    The Limits of React....
                </p>

            </article>
        </div>
    )
}

export default BlogCard