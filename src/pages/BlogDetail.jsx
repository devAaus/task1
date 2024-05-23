import { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import { format } from 'date-fns';
import { getAuthorById, getBlogById, increaseLikesCount, decreaseLikesCount } from '@/services/axios.service';
import { Button } from '@/components/ui/button';
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { Separator } from '@/components/ui/separator';

const BlogDetail = () => {
    const { id } = useParams();
    const queryClient = useQueryClient();

    const { isLoading, error, data: blog } = useQuery({
        queryKey: ['blog', id],
        queryFn: () => getBlogById(id),
    });

    const authorId = blog?.author;
    const { isLoading: isLoadingAuthor, error: errorAuthor, data: author } = useQuery({
        queryKey: ['author', authorId],
        queryFn: () => getAuthorById(authorId),
    });

    const [likesCount, setLikesCount] = useState(0);

    useEffect(() => {
        if (blog) {
            setLikesCount(blog.likes_count);
        }
    }, [blog]);

    const likeMutation = useMutation({
        mutationFn: () => increaseLikesCount(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['blog', id]);
            setLikesCount(likesCount + 1);
        },
    });

    const dislikeMutation = useMutation({
        mutationFn: () => decreaseLikesCount(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['blog', id]);
            setLikesCount(likesCount - 1);
        },
    });

    const handleLike = () => {
        likeMutation.mutate();
    };

    const handleDislike = () => {
        dislikeMutation.mutate();
    };

    const formattedDate = blog && blog.createdAt ? format(new Date(blog.createdAt), 'MMMM d, yyyy') : '';

    if (isLoading || isLoadingAuthor) {
        return <div>Loading...</div>;
    }

    if (error || errorAuthor) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="flex flex-col">
            <h2 className="text-5xl text-title font-bold">{blog.title}</h2>

            <div className="flex gap-2 items-center font-medium mt-1">
                <p className="text-sm text-gray-300 ml-1">
                    by
                    <span className="ml-2 text-base text-gray-200">{author.fullName}</span>
                </p>

                <p className="text-sm text-gray-300 ml-1">{formattedDate}</p>
            </div>

            <div className="flex items-center gap-4 mt-2 max-w-60 border border-primary rounded-2xl px-2">
                <div className='flex items-center justify-between'>
                    <Button
                        variant="outline"
                        size="icon"
                        className="border-none hover:text-primary"
                        onClick={handleLike}
                    >
                        <BiSolidUpvote className="h-5 w-5" />
                    </Button>

                    <span className="ml-1 text-base">{likesCount}</span>
                </div>

                <Separator orientation="vertical" className="h-5" />

                <Button
                    variant="outline"
                    size="icon"
                    className="border-none hover:text-destructive"
                    onClick={handleDislike}
                >
                    <BiSolidDownvote className="h-5 w-5" />
                </Button>

                <Separator orientation="vertical" className="h-10" />

                <div className='flex items-center gap-2'>
                    <FaEye className="h-5 w-5" />

                    <span className="ml-1 text-base">{blog.view_count}</span>
                </div>
            </div>


            <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="text-base leading-7 mt-6 ml-1 font-medium"
            />


            <CommentSection blogId={blog._id} />
        </div>
    );
};

export default BlogDetail;
