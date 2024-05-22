import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
        <nav className='py-8'>

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
                                <Button variant="default" size="sm" className="self-end">
                                    Add Blog
                                </Button>
                            </Link>


                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar>
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                </DropdownMenuTrigger>

                                <DropdownMenuContent size="sm">
                                    <DropdownMenuItem>
                                        <Link to={'/profile'}>
                                            Profile
                                        </Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem>
                                        <Link to={'/dashboard'}>
                                            Dashboard
                                        </Link>
                                    </DropdownMenuItem>

                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        className="ml-1 mt-1"
                                        onClick={() => setIsLoggedIn(false)}
                                    >
                                        Logout
                                    </Button>

                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>

                    ) : (
                        <Link to={'/login'}>
                            <Button className='btn btn-sm btn-primary text-lg'>
                                Login
                            </Button>
                        </Link>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar