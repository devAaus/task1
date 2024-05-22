import { getAuthorById } from '@/services/axios.service';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog, isHome, isProfile }) => {

    const authorId = blog?.author;
    const {
        isLoading: isLoadingAuthor,
        error: errorAuthor,
        data: author,
    } = useQuery({
        queryKey: ['author', authorId],
        queryFn: () => getAuthorById(authorId),
    });

    const formattedDate = blog && blog.createdAt
        ? format(new Date(blog.createdAt), 'MMMM d, yyyy')
        : '';


    if (isLoadingAuthor) {
        return <div>Loading...</div>;
    }

    if (errorAuthor) {
        return <div>Error: {errorAuthor.message}</div>;
    }

    return (
        <div className='py-4 hover:scale-[1.005] transition-all duration-300 ease-in-out flex flex-col items-start justify-center cursor-pointer'>
            <Link to={`/blog/${blog._id}`}>
                <article>
                    <h2 className='text-3xl text-title font-bold'>
                        {blog.title}
                    </h2>

                    <div className='flex items-center gap-2 font-medium'>
                        {isHome && <p className='text-sm text-gray-300 ml-1'>
                            by
                            <span className='ml-2 text-base text-gray-200'>{author.fullName}</span>
                        </p>}

                        {isProfile && <p className='text-xs text-gray-300 ml-1'>
                            {formattedDate}
                        </p>}
                    </div>

                </article>
            </Link>
        </div>
    )
}

export default BlogCard