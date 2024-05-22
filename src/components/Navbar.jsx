
import { Link } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import { Avatar, AvatarFallback, } from "@/components/ui/avatar"



const Navbar = () => {

    return (
        <nav className='py-8'>

            <div className='flex items-center justify-between '>

                <Link to="/">
                    <h2 className='text-2xl bg-gradient-to-br from-pink-300 to-purple-400 bg-clip-text text-transparent  font-bold'>
                        metaBlog
                    </h2>
                </Link>


                <div className='flex items-center justify-center gap-6 '>
                    <Link to={'/add-blog'}>
                        <Button variant="default" size="sm" className="self-end">
                            Add Blog
                        </Button>
                    </Link>

                    <Link to={'/login'}>
                        <Button variant="default" size="sm">
                            Add Author
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




            </div>
        </nav>
    )
}

export default Navbar