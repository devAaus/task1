import React from 'react'

const AuthorForm = ({ handlSubmitAuthor, fullName, email, setEmail, setFullName }) => {
    return (
        <dialog id="modal_2" className="modal">
            <div className="modal-box">
                <h2 className='text-4xl text-title font-bold mb-6'>
                    Add Author
                </h2>

                <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() => document.getElementById('modal_2').close()}
                >
                    ✕
                </button>

                <form className='flex flex-col gap-4' onSubmit={handlSubmitAuthor}>

                    <input
                        type="text"
                        placeholder="FullName"
                        className="input input-bordered w-full max-w-xs"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full max-w-xs"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
        </dialog>
    )
}

export default AuthorForm