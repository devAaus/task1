import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import BlogCard from '../components/cards/BlogCard'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAuthorById, getBlogs } from '@/services/axios.service'

const Author = () => {
    const { id } = useParams()

    const { isLoading: isAuthorLoading, error: authorError, data: author } = useQuery({
        queryKey: ['author', id],
        queryFn: () => getAuthorById(id)
    })

    const { isLoading: isBlogsLoading, error: blogsError, data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: getBlogs
    })

    const blog = blogs?.filter(b => b?.author === id) || [];


    if (isAuthorLoading || isBlogsLoading) {
        return <div>Loading...</div>
    }

    if (authorError || blogsError) {
        return <div>Error: {error?.message || blogsError?.message}</div>
    }

    return (
        <div className='flex flex-col gap-2'>

            <div className='flex items-center gap-4'>

                <Avatar className="w-20 h-20">
                    <AvatarFallback className="text-4xl font-semibold">
                        {author.fullName[0]}
                    </AvatarFallback>
                </Avatar>

                <h2 className='text-3xl text-title font-bold'>
                    {author.fullName}
                </h2>
            </div>

            <span className='text-xl ml-2 font-normal text-gray-200'>
                {author.email}
            </span>


            <Tabs defaultValue="blogs" className="w-full mt-12">
                <TabsList className="w-full">
                    <TabsTrigger value="blogs" className="w-full">
                        Blogs
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="blogs">
                    {blog.length > 0 ? (
                        blog.map((b) => (
                            <BlogCard blog={b} key={b._id} isHome={false} />
                        ))
                    ) : (
                        <div>No blogs found.</div>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Author
