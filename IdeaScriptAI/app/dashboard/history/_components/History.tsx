"use client"
import React from 'react'
import genIdeas from "@/app/(hero)/templates";
import { Copy} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface PROPS{
    history : any
}


function History({history}:PROPS) {

  
    

    const copyToClipboard = async (text : string) => {
        try {
          await navigator.clipboard.writeText(text);
          alert("Copied to clipboard!"); // Optional: Provide user feedback
        } catch (err) {
          console.error("Failed to copy text:", err);
        }
      }

  return (
    
    <div className='w-full p-10 m-4  border-black  shadow-xl h-screen rounded-md '>
       <Link href="/dashboard">
        <Button className='hover:scale-105'>
          <ArrowLeft /> Back
        </Button>
      </Link>
    
      <h1 className='text-2xl font-bold mt-2'>History</h1>
      <p className='text-slate-400 py-5'>Know your previous content generations</p>
    <div className="grid grid-cols-10 border border-gray-300">

{/* Header */}

        <div className="grid col-span-2 md:col-span-2 p-3 font-bold text-xl border-b text-left border-gray-300">Id</div>
        <div className="col-span-2 md:col-span-2 p-3 font-bold text-xl border-b text-center  border-gray-300">Template</div>
        <div className="col-span-2 md:col-span-2 p-3 font-bold text-xl border-b text-center  border-gray-300">Date</div>
        <div className="col-span-2 md:col-span-3 p-3 font-bold text-xl border-b border-gray-300 text-center">Output</div>
        <div className="col-span-2 md:col-span-1 p-3 font-bold text-xl border-b border-gray-300 text-center "></div>

    </div>    

{/* Row 1 */}
{
history.map((item:any,index:number)=>{
  const temp = genIdeas.find(data_item => data_item.slug === item.templateSlug)
  console.log("temp is ",temp);
    

  return(

<div key={item._id || index} className="grid grid-cols-10 hover:bg-cyan-400 hover:scale-105 hover:rounded-lg">

  {/* for each item */}
  

  

    <div className="col-span-2 md:col-span-2 p-2 border-b text-left  border-gray-300">{item._id}</div>
    <div className="col-span-2 md:col-span-2 p-2 border-b text-center border-gray-300 w-full">
      <div className='flex flex-col ml-12 p-2 gap-1'>
      {
        temp?.icon && <Image
      // @ts-ignore
      src={temp?.icon} 
      alt={"icon"}
      width={50}
      height={50}
      className='hover:bg-white ml-10'
      
      
      />}

      <h2 className='flex text-bold ml-6 p-2'>{temp?.name}</h2>
      </div>
      </div>



    <div className="col-span-2 md:col-span-2 p-2 border-b text-center border-gray-300"> {new Date(item.createdAt).toLocaleString()}</div>
    <div className="col-span-2 md:col-span-3 p-2 border-b  border-gray-300 whitespace-normal break-words text-center">
      {item.aiResponse.slice(0,100)}
    </div>
    <div className="col-span-2 md:col-span-1 p-2 border-b  border-gray-300 whitespace-normal break-words text-right hover:scale-110 mt-4 pl-5">
      <Button
       onClick={()=>{copyToClipboard(item.aiResponse)}}
       className="bg-white text-black hover:bg-white">
      {<Copy />}
      </Button>
    </div>
    
</div>    

  )

})
}


</div>



  )
}

export default History