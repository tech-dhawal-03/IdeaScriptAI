"use client"
import { TEMPLATE } from '@/app/dashboard/_components/TemplatesList'
import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useState } from 'react'

interface PROPS  {
    
   choosedTemplate?:TEMPLATE
   userFormInput : any
   loading : boolean
}

function FormSection({choosedTemplate,userFormInput,loading} : PROPS) {

    const [input,setInput] = useState<any>();

    const handleInputChange=(e:any)=>
    {
        const {name,value} = e.target;
        setInput({...input,[name]:value})
        


    }
    const submittingValues = (e:any)=>
    {
        e.preventDefault();
        userFormInput(input)
        // console.log(input);
       
        

    }

    return (
        <div className='p-5 shadow-md border rounded-lg bg-white'>
    
        <Image 
        // @ts-ignore
         src ={choosedTemplate?.icon}
         alt = "icon"
         height={72}
         width = {72}
        />
        <h1 className='font-bold text-primary my-1 text-xl'>
            {choosedTemplate?.name}
        </h1>

        <p className='text-small text-gray-500 my-1'>
            {choosedTemplate?.desc}

        </p>

        <form className='mt-6' onSubmit={submittingValues}>
            {choosedTemplate?.form?.map((item,index)=>(

                <div className='flex flex-col gap-2  mb-7'>
                    <label className='font-semibold'>
                        {item.label}
                    </label>

                    {
                        item.field == 'input' ? 
                            <Input
                             name={item.name}
                             required = {item.required}
                             onChange={handleInputChange}
                             className='hover:scale-105 border-black' 
                             />
                        : item.field == 'textarea' ? 
                            <Textarea
                             name = {item.name}
                             required = {item.required}
                             onChange={handleInputChange}
                             className='hover:scale-105 border-black' />
                              
                        : null
                    }
                    
                </div>
                
                
            ))}

            <Button 
             type='submit'
             className='flex gap-2 w-full font-bold p-2 text-md rounded-lg hover:opacity-90 '
             disabled={loading}>
                {/* <Loader2 className="animate-spin" /> */}
                {loading && <Loader2 className='animate-spin' />}
                    Generate Content...
            </Button>



        </form>


    </div>
  )
}

export default FormSection