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

const CommentsTable = ({ comments, handledeleteComment }) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">S.N.</TableHead>
                    <TableHead>Comment</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {comments.map((c, index) => (
                    <TableRow key={c._id}>
                        <TableCell className="font-medium">
                            {index + 1}
                        </TableCell>

                        <TableCell>{c.comment}</TableCell>

                        <TableCell>{c.name}</TableCell>

                        <TableCell className="flex gap-2 items-center">
                            <Link to={'/edit-blog'} className='text-blue-400'>
                                <FaRegEdit size={17} />
                            </Link>

                            <button onClick={() => handledeleteComment(c._id)}>
                                <MdDeleteOutline size={20} color='red' />
                            </button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default CommentsTable