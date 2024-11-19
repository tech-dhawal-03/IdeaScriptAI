"use client"
import Image from 'next/image'
import React from 'react'
import { TEMPLATE } from './TemplatesList'
import { useState,useEffect } from 'react'
import Link from 'next/link'



function TemplateCard(item:TEMPLATE) {
  const colors = [
    "border-pink-600",
    "border-yellow-400",
    "border-cyan-400",
    "border-rose-600",
    "border-green-600",
    "border-purple-500",
    "border-amber-400",
    "border-lime-500",
    "border-emerald-600",
    "border-sky-400",
    "border-blue-600"

]

function getRandomColor(colorsArray:Array<string>) {
  const randomIndex = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[randomIndex];

}

const [shade, setShade] = useState<string>("");

  useEffect(() => {
    // Set an interval to update the color every 2 seconds (2000ms)
    const intervalId = setInterval(() => {
      setShade(getRandomColor(colors));
    }, 2000); // Adjust the interval time in milliseconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);



  return (

    <Link href={`/dashboard/generate-content/${item.slug}`}>
    <div className={`p-5 h-[90%] shadow-md rounded-lg border bg-white flex flex-col cursor-pointer hover:scale-105 transition-all ${shade} hover:border-4 `}>
        
        <Image 
            src={item.icon}
            alt="icon"
            width = {50}
            height = {50}
            unoptimized
             />

          <h2 className='font-medium text-lg mt-2'>{item.name}</h2>   

          <p className='text-gray-500 line-clamp-3 mt-2'>
            {item.desc}
          </p>

    </div>
    </Link>
  )
}

export default TemplateCard