"use client"
import { SignedIn, SignedOut,SignOutButton } from "@clerk/nextjs";
import { FileClock, Home, UserRoundPen } from "lucide-react"
import Image from "next/image";
import { usePathname } from "next/navigation"
import Link from "next/link";


export default function LeftSidebar() {
    const menuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },

        {
            name: 'History',
            icon: FileClock,
            path: 'dashboard/history'
        },

        {
            name: 'Profile',
            icon: UserRoundPen,
            path: 'dashboard/user-personal-details'
        },

    ]

    const path = usePathname();



    return (
        <>

            {/* //this div is for logo... */}
            
            <div className="h-screen p-5 shadow-sm border bg-white flex flex-col">

                <div className="flex justify-center text-xl font-bold mb-10">
             
                 <Image  
                    src="/assets/logo-png.png"
                    alt="logo"
                    width={200}
                    height={350}
                    />
                
                </div>  


            
                <div className="flex flex-col gap-5">
                    {menuList.map((item,index) => (
                        <Link href={item.path} key={index}>
                        <div 
                           className={`flex gap-2 justify-start p-3 w-full hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path==item.path && 'bg-primary text-white'}`}>
                            <item.icon />
                            <h2>{item.name}</h2>
                        </div>
                        </Link>
                        ))}
                     
                </div>  

                         

                <div className="flex ml-3 mt-10">
                    <SignedIn>

                    <SignOutButton>
                        <Link href="/">
                    
                        <div className="flex w-full flex-row gap-2 cursor-pointer hover:text-white p-3 hover:scale-105  ">
                            <Image
                                src="/assets/logout.png"
                                alt="logout"
                                width={25}
                                height={25}
                                
                            />
                            <h2 className="text-black">Logout</h2>
                        </div>
                        </Link>    
                    </SignOutButton>

                    </SignedIn>
          
                </div>
    
    
            </div>

    


        </>


    )
}