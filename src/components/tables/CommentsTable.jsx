import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CommentsTable = ({ comments, deleteComment }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>S.N.</th>
                        <th>Comment</th>
                        <th>UserName</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((c, index) => (
                        <tr className='hover' key={c._id}>

                            <th>{index + 1}</th>

                            <td>{c.comment}</td>

                            <td>{c.name}</td>

                            <td className='flex gap-2 items-center'>
                                <Link
                                    to={'/edit-blog'}
                                    className='text-blue-400'
                                >
                                    <FaRegEdit size={17} />
                                </Link>

                                <button onClick={() => deleteComment(c._id)}>
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

export default CommentsTable