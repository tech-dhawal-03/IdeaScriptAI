"use client"
import { Home,FileClock,UserRoundPen } from "lucide-react"
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
            path: 'dashboard/history'
        },

        {
            name: 'Profile',
            icon: UserRoundPen,
            path: 'dashboard/user-personal-details'
        },

    ]

    const path = usePathname();

    return(

        
            <div className="flex flex-row gap-10 mx-2 my-2">
                    {menuList.map((item,index) => (
                        <div className={`gap-10 p-3 w-full hover:bg-primary hover:text-white rounded-lg cursor-pointer 
                        ${path==item.path && `bg-primary text-white`}`}
                        key={index}>
                            <item.icon />
                        </div>

                    ))}
                </div>    
        
       
    )
}