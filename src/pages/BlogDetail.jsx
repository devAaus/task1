import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import CommentSection from '../components/CommentSection';
import { format } from 'date-fns';

const BlogDetail = () => {
    const { id } = useParams()


    //fetching blog data
    const {
        isLoading,
        error,
        data: blog,
    } = useQuery({
        queryKey: ['blog', id],
        queryFn: () =>
            axios
                .get(`${import.meta.env.VITE_SERVER_URL}/blog/${id}`)
                .then((res) => res.data.blog),
    });


    //fetching author data
    const authorId = blog?.author;
    const {
        isLoading: isLoadingAuthor,
        error: errorAuthor,
        data: author,
    } = useQuery({
        queryKey: ['author', authorId],
        queryFn: () =>
            axios
                .get(`${import.meta.env.VITE_SERVER_URL}/author/${authorId}`)
                .then((res) => res.data),
    });




    //formatting date
    const formattedDate = blog && blog.createdAt
        ? format(new Date(blog.createdAt), 'MMMM d, yyyy')
        : '';

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (isLoadingAuthor) {
        return <div>Loading...</div>;
    }

    if (errorAuthor) {
        return <div>Error: {errorAuthor.message}</div>;
    }


    return (
        <div className='flex flex-col'>
            <h2 className='text-5xl text-title font-bold'>
                {blog.title}
            </h2>

            <div className='flex gap-2 items-center font-medium mt-1'>
                <p className='text-sm text-gray-300 ml-1'>
                    by
                    <span className='ml-2 text-base text-gray-200'>{author.fullName}</span>
                </p>

                <p className='text-sm text-gray-300 ml-1'>
                    {formattedDate}
                </p>
            </div>

            <p className='text-base leading-7 mt-6 ml-1 font-medium'>
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </p>

            <CommentSection blogId={blog._id} />

        </div>
    )
}

export default BlogDetail