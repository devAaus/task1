import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const AuthorTable = ({ author }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr >
                        <th>S.N.</th>
                        <th>Author</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {/* row 1 */}
                    {author.map((a, index) => (
                        <tr className='hover' key={a._id}>
                            <td>{index + 1}</td>

                            <td>{a.fullName} </td>

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

export default AuthorTable