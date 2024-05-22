import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { getAuthorById } from '@/services/axios.service'

const TableDetail = ({ blog, index, handledeleteBlog }) => {
    const {
        isLoading: isLoadingAuthor,
        error: errorAuthor,
        data: author,
    } = useQuery({
        queryKey: ['author', blog.author],
        queryFn: () => getAuthorById(blog.author),
    });

    if (isLoadingAuthor) {
        return (
            <tr>
                <td colSpan="4">Loading...</td>
            </tr>
        );
    }

    if (errorAuthor) {
        return (
            <tr>
                <td colSpan="4">Error: {errorAuthor.message}</td>
            </tr>
        );
    }

    return (
        <TableRow className='hover' key={blog._id}>
            <TableCell className="font-medium">
                {index + 1}
            </TableCell>

            <TableCell>
                <Link to={`/blog/${blog._id}`}>
                    {blog.title.substring(0, 50) + '...'}
                </Link>
            </TableCell>

            <TableCell>{author.fullName}</TableCell>

            <TableCell className='flex gap-2 items-center'>
                <Link to={'/edit-blog'} className='text-blue-400'>
                    <FaRegEdit size={17} />
                </Link>

                <button onClick={() => handledeleteBlog(blog._id)}>
                    <MdDeleteOutline size={20} color='red' />
                </button>
            </TableCell>
        </TableRow>
    );
};


const BlogsTable = ({ blogs, handledeleteBlog }) => {
    return (

        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">S.N.</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {blogs.map((blog, index) => (
                    <TableDetail
                        key={blog._id}
                        blog={blog}
                        index={index}
                        handledeleteBlog={handledeleteBlog}
                    />
                ))}
            </TableBody>
        </Table>
    );
}

export default BlogsTable;
