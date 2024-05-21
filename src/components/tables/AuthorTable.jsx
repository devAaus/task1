
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const AuthorTable = ({ authors, handleDeleteAuthor }) => {


    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr >
                        <th>S.N.</th>
                        <th>Author</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {/* row 1 */}
                    {authors.map((a, index) => (
                        <tr className='hover' key={a._id}>
                            <td>{index + 1}</td>

                            <td>{a.fullName} </td>

                            <td>{a.email} </td>

                            <td className='flex gap-2 items-center'>
                                <Link to={'/edit-blog'} className='text-blue-400'>
                                    <FaRegEdit size={17} />
                                </Link>

                                <button onClick={() => handleDeleteAuthor(a._id)}>
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

export default AuthorTable