import React from 'react'
import { useQuery } from '@tanstack/react-query'
import BlogCard from '../components/cards/BlogCard'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getBlogs } from '@/services/axios.service'

const Profile = () => {

    const { isLoading: isBlogsLoading, error: blogsError, data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: getBlogs
    })

    if (isBlogsLoading) {
        return <div>Loading...</div>
    }

    if (blogsError) {
        return <div>Error: {error?.message || blogsError?.message}</div>
    }

    return (
        <div className='flex flex-col gap-2'>

            <div className='flex items-center gap-4'>

                <Avatar className="w-20 h-20">
                    <AvatarFallback className="text-4xl font-semibold">
                        A
                    </AvatarFallback>
                </Avatar>

                <h2 className='text-3xl text-title font-bold'>
                    Aayush Ghimire
                </h2>
            </div>

            <span className='text-xl ml-2 font-normal text-gray-200'>
                aausgh@gmail.com
            </span>


            <Tabs defaultValue="blogs" className="w-full mt-12">
                <TabsList className="w-full">
                    <TabsTrigger value="blogs" className="w-full">
                        Blogs
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="blogs" className=" py-6 px-2 flex flex-col gap-4">
                    {blogs?.map((blog) => (
                        <BlogCard key={blog._id} blog={blog} isProfile={true} />
                    ))}
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Profile