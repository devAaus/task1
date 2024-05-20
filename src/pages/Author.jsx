import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BlogCard from '../components/cards/BlogCard'

const Author = () => {
    const { id } = useParams()

    const { isLoading, error, data: author } = useQuery({
        queryKey: ['author', id],
        queryFn: () =>
            axios
                .get(`${import.meta.env.VITE_SERVER_URL}/author/${id}`)
                .then((res) => res.data)
    })

    const { isLoading: isBlogsLoading, error: blogsError, data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: () =>
            axios
                .get(`${import.meta.env.VITE_SERVER_URL}/blog`)
                .then((res) => res.data),
    })

    const blog = blogs?.filter(b => b?.author === id) || [];


    if (isLoading || isBlogsLoading) {
        return <div>Loading...</div>
    }

    if (error || blogsError) {
        return <div>Error: {error?.message || blogsError?.message}</div>
    }

    return (
        <div className='flex flex-col'>
            <h2 className='text-3xl text-title font-bold'>
                {author.fullName}
            </h2>

            <h2 className='text-2xl text-title font-semibold'>
                Email:
                <span className='text-xl ml-2 font-normal text-gray-200'>{author.email}</span>
            </h2>

            <div role="tablist" className="tabs tabs-lifted mt-12">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Blogs" checked readOnly />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {blog.length > 0 ? (
                        blog.map((b) => (
                            <BlogCard blog={b} key={b._id} isHome={false} />
                        ))
                    ) : (
                        <div>No blogs found.</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Author
