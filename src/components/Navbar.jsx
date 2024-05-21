import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
        <nav className='py-8 px-4'>

            <div className='flex items-center justify-between '>

                <Link to="/">
                    <h2 className='text-2xl bg-gradient-to-br from-pink-300 to-purple-400 bg-clip-text text-transparent  font-bold'>
                        metaBlog
                    </h2>
                </Link>

                {isLoggedIn
                    ? (
                        <div className='flex items-center justify-center gap-6 '>
                            <Link to={'/add-blog'}>
                                <span className='btn btn-sm btn-primary text-base px-1'>
                                    Add Blog
                                </span>
                            </Link>


                            <div className="dropdown dropdown-hover dropdown-end">

                                <div tabIndex={0}>
                                    <div className="avatar placeholder">
                                        <div className="bg-primary text-white rounded-full w-8 shadow-xl">
                                            <span className="text-base font-bold">U</span>
                                        </div>
                                    </div>
                                </div>

                                <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-32">
                                    <li>
                                        <Link to={'/profile'}>
                                            Profile
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={'/dashboard'}>
                                            Dashboard
                                        </Link>
                                    </li>

                                    <button
                                        className=' text-left ml-4 mt-2'
                                        onClick={() => setIsLoggedIn(false)}
                                    >
                                        <Link
                                            to={'/'}
                                            className='btn btn-sm btn-error'
                                        >
                                            Logout
                                        </Link>
                                    </button>
                                </ul>
                            </div>
                        </div>

                    ) : (
                        <Link to={'/'} onClick={() => setIsLoggedIn(true)}>
                            <span className='btn btn-sm btn-primary text-lg'>
                                Login
                            </span>
                        </Link>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar