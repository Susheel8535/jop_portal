import { Link } from 'react-router-dom' // ← Add this
import React from 'react'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar" 
import { LogOut, User2 } from 'lucide-react'

const Navbar = () => {
    const user = false;

    return (


        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl front-bold'>Job <span className='text-[#8302]'>Portal</span></h1>
                </div>
                <div className='flex item-center gap-12'>
                    <ul className='flex font-medium item-center gap-5'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/browse">Browse</Link></li>
                       

                    </ul>
                    {
                         !user ? (
                            <div className="flex items-center gap-2">
                                <Link to="/login"> <Button variant="outline" className="cursor-pointer">Login</Button></Link>
                                 <Link to="/signup"><Button className="bg-[#6A38C2] cursor-pointer hover:bg-[#360b81]">Signup</Button></Link>
                               
                                
                            </div>
                         ) : (

                         <Popover >
                        <PopoverTrigger asChild>
                            <Avatar className='cursor-pointer'>
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                    className="grayscale"
                                />
                                
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className='w-80'>
                            <div className=''>
                            <div className='flex gap-4 space-y-2'>
                                 <Avatar className='cursor-pointer'>
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                    className="grayscale"
                                />
                                
                            </Avatar>
                            <div>
                                <h4 className='font-medium'>Susheel MERN Stack</h4>
                                <p className='text-sm text-muted-foreground '>Lorem ipsum dolor sit amet.</p>

                                
                            </div>

                            </div>
                            <div className='flex flex-col my-2 text-gray-600'>
                                <div className='flex  w-fit items-center gap-2 cursor-pointer'>
                                  
                                  <User2 />

                                <Button variant="link">View Profile</Button>
                                </div>
                                <div className='flex w-fit items-center gap-2 cursor-pointer'>

                                    <LogOut />
                                     <Button variant="link">Loguot</Button>
                                </div>
                               
                            </div>
                        </div>
                           
                        </PopoverContent>
                    </Popover>

                         )
                    }

                    
                </div>
            </div>


        </div>


    )
}

export default Navbar;


