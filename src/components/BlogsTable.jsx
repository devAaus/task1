import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const BlogsTable = ({ blog }) => {
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
                    {blog.map((b, index) => (
                        <tr className='hover' key={b._id}>
                            <th>{index + 1}</th>
                            <td>{b.title}</td>
                            <td>{b.author}</td>
                            <td className='flex gap-2 items-center'>
                                <Link to={'/edit-blog'} className='text-blue-400'>
                                    <FaRegEdit size={17} />
                                </Link>
                                <Link to={'/delete-blog'}>
                                    <MdDeleteOutline size={20} color='red' />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BlogsTable