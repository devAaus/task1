import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const TableRow = ({ blog, index, deleteBlog }) => {
    const {
        isLoading: isLoadingAuthor,
        error: errorAuthor,
        data: author,
    } = useQuery({
        queryKey: ['author', blog.author],
        queryFn: () =>
            axios
                .get(`${import.meta.env.VITE_SERVER_URL}/author/${blog.author}`)
                .then((res) => res.data),
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
        <tr className='hover' key={blog._id}>
            <td>{index + 1}</td>
            <td>
                <Link to={`/blog/${blog._id}`}>
                    {blog.title}
                </Link>
            </td>

            <td>{author.fullName}</td>

            <td className='flex gap-2 items-center'>
                <Link to={'/edit-blog'} className='text-blue-400'>
                    <FaRegEdit size={17} />
                </Link>

                <button onClick={() => deleteBlog(blog._id)}>
                    <MdDeleteOutline size={20} color='red' />
                </button>
            </td>
        </tr>
    );
};


const BlogsTable = ({ blogs, deleteBlog }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>S.N.</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) => (
                        <TableRow
                            key={blog._id}
                            blog={blog}
                            index={index}
                            deleteBlog={deleteBlog}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BlogsTable;
