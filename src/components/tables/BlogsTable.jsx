import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const BlogsTable = ({ blogs, deleteBlog }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>S.N.</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {blogs.map((b, index) => (
                        <tr className='hover' key={b._id}>
                            <td>{index + 1}</td>

                            <td>
                                <Link to={`/blog/${b._id}`}>
                                    {b.title}
                                </Link>
                            </td>

                            <td>{b.author}</td>

                            <td className='flex gap-2 items-center'>
                                <Link to={'/edit-blog'} className='text-blue-400'>
                                    <FaRegEdit size={17} />
                                </Link>

                                <button onClick={() => deleteBlog(b._id)}>
                                    <MdDeleteOutline size={20} color='red' />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BlogsTable