import React from 'react'
import AuthorTable from './AuthorTable'
import AuthorForm from './AuthorForm'

const AuthorsTab = () => {

    const handlSubmitAuthor = (e) => {
        e.preventDefault()
    }

    return (
        <div className='flex flex-col gap-4'>
            <button
                className='w-fit ml-auto btn btn-xs btn-primary text-base'
                onClick={() => document.getElementById('modal_2').showModal()}
            >
                Add Author
            </button>
            <AuthorForm handleSubmitAuthor={handlSubmitAuthor} />
            <AuthorTable />
        </div>
    )
}

export default AuthorsTab