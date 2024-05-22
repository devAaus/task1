
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


const AuthorTable = ({ authors, handleDeleteAuthor }) => {
    return (

        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">S.N.</TableHead>
                    <TableHead>Authors</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {authors.map((a, index) => (
                    <TableRow key={a._id}>
                        <TableCell className="font-medium">
                            {index + 1}
                        </TableCell>

                        <TableCell>
                            <Link to={`/author/${a._id}`}>
                                {a.fullName}
                            </Link>
                        </TableCell>

                        <TableCell>{a.email}</TableCell>

                        <TableCell className="flex gap-2 items-center">
                            <Link to={'/edit-blog'} className='text-blue-400'>
                                <FaRegEdit size={17} />
                            </Link>

                            <button onClick={() => handleDeleteAuthor(a._id)}>
                                <MdDeleteOutline size={20} color='red' />
                            </button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AuthorTable