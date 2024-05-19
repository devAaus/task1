import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
        <nav className='py-8 px-4'>

            <div className='flex items-center justify-between'>

                <Link to="/">
                    <img src={Logo} alt='logo' className='h-7 w-30' />
                </Link>

                {isLoggedIn
                    ? (
                        <div className='flex items-center justify-center gap-6 '>
                            <Link to={'/add-blog'}>
                                <span className='btn btn-xs btn-primary text-base'>
                                    Add Blog
                                </span>
                            </Link>


                            <div className="dropdown dropdown-hover dropdown-end">
                                <div tabIndex={0}>
                                    <div className="avatar">
                                        <div className="w-8 rounded-full">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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

                                    <button className=' text-left ml-4 mt-2'>
                                        <Link to={'/'}>
                                            <span className='btn btn-sm btn-error'>Logout</span>
                                        </Link>
                                    </button>
                                </ul>
                            </div>
                        </div>

                    ) : (
                        <Link to={'/login'}>
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