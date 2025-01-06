"use client"
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { Home,FileClock,UserRoundPen, LogOut } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Bottombar()
{


    

    const menuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },

        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },

        {
            name: 'Profile',
            icon: UserRoundPen,
            path: '/dashboard/profile'
        },


        

        

    ]

    const path = usePathname();

    return(
        <>

    
            <div className="flex flex-row gap-12 mx-2 my-2 bg-white w-screen">
                    {menuList.map((item,index) => (
                       <Link href={item.path} key={index}>
                            <div className={`p-4   hover:bg-primary hover:text-white rounded-lg cursor-pointer 
                                ${path==item.path && `bg-primary text-white`}`}
                        >
                            <item.icon />
                            
                        </div>
                        </Link>

                    ))}

                    <div className="flex p-5 hover:bg-primary hover:text-white rounded-lg cursor-pointer">
                        <SignedIn>
                            <SignOutButton>
                                <Link href="/">
                                     <LogOut />
                                </Link>
                            </SignOutButton>
                        </SignedIn>
                       
                    </div>


            </div>

        

        
       
        

        </>



        
       
    )
}