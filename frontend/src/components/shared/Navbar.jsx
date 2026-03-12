import { Link, useNavigate } from 'react-router-dom' // ← Add this
import React from 'react'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar" 
import { LogOut, User2 } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import {USER_API_END_POINT } from '@/utils/constant'
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";



const Navbar = () => {
    
    const {user} = useSelector(store=>store.auth);
    const  dispatch  =useDispatch();
    const navigate= useNavigate();



    const logoutHandler = async () =>{
        try{

            const res = await axios.get(`${USER_API_END_POINT}/logout`, {withCredentials:true});
            if(res.data.success){
               dispatch(setUser(null));
               navigate("/");
               toast.error(res.data.message);


            }

        }catch(error){
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (


        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Job <span className='text-[#830002]'>Portal</span></h1>
                </div>
                <div className='flex item-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
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
                                    src={user?.profile?.profilePhoto}
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
                                    src={user?.profile?.profilePhoto}
                                    alt="@shadcn"
                                    className="grayscale"
                                />
                                
                            </Avatar>
                            <div>
                                <h4 className='font-medium'>{user?.fullname}</h4>
                                <p className='text-sm text-muted-foreground '>{user?.bio}</p>

                                
                            </div>

                            </div>
                            <div className='flex flex-col my-2 text-gray-600'>
                                <div className='flex  w-fit items-center gap-2 cursor-pointer'>
                                  
                                  <User2 />

                                <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                                </div>
                                <div className='flex w-fit items-center gap-2 cursor-pointer'>

                                    <LogOut />
                                     <Button variant="link" className="cursor-pointer" onClick={logoutHandler}>Logout</Button>
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


