import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const links = [
    {
        id: 1,
        name: 'Home',
        path: '/'
    },
    {
        id: 2,
        name: 'Blogs',
        path: '/blogs'
    }
]

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
        <nav className='py-6 px-4'>

            <div className='flex items-center justify-between'>

                <Link to="/" className='flex items-center gap-2'>
                    <img src={Logo} alt='logo' className='h-10 w-30' />
                </Link>

                <div className='flex items-center justify-center gap-4 md:gap-8'>
                    {links.map((link) => (
                        <Link to={link.path} key={link.id} className=' text-lg font-medium'>
                            {link.name}
                        </Link>
                    ))}

                    {isLoggedIn
                        ? (
                            <div className='flex items-center justify-center gap-4 md:gap-8'>
                                <Link to={'/add-blog'}>
                                    <span className='btn btn-sm btn-primary text-lg'>
                                        Add Blog
                                    </span>
                                </Link>


                                <div className="dropdown dropdown-hover dropdown-end">
                                    <div tabIndex={0}>
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-32">
                                        <li>
                                            <Link to={'/dashboard'}>
                                                Profile
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to={'/admin-dashboard'}>
                                                Dashboard
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to={'/'}>
                                                <span className='btn btn-sm btn-error'>Logout</span>
                                            </Link>
                                        </li>
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
            </div>

        </nav>
    )
}

export default Navbar