"use client"
import React, { useState } from 'react'
import FormSection from './_components/FormSection'
import OutputSection from './_components/OutputSection'
import  { TEMPLATE } from '../../_components/TemplatesList'
import genIdeas from '@/app/(hero)/templates'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { chatSession } from '@/utils/AI_Modal'
import { saveToDB } from '@/lib/actions/content.actions'
import { useUser } from '@clerk/nextjs'


interface PROPS {
    params : {
        'template-slug' : string
    }
}




async function createNewContent (props : PROPS) {

let aiOutput="";
const {user} = useUser();
const selectedTemplate : TEMPLATE | undefined = genIdeas?.find((item)=>item.slug==props.params['template-slug'])
//fnding template here which is selected by the user

//# TO-DO : To generate AI content


const [loading,setLoading] = useState(false);
const [finalOutput,setFinalOutput] = useState<string>('');




const genAIContent = async (inputData : any)=>{
  
  // setEmail(user?.emailAddresses[0].emailAddress)

  const email = user?.emailAddresses[0].emailAddress;
  setLoading(true);
  // Getting AI prompt from our templates
  const selectedPrompt = selectedTemplate?.aiPrompt
  //Now merging user form data with our prompt

  const finalPrompt = JSON.stringify(inputData) + ", " + selectedPrompt
  
  //gemini code
  const output = await chatSession.sendMessage(finalPrompt)

  aiOutput = output.response.text();
  setFinalOutput(aiOutput)
  // value is set to aiOutput
  setLoading(false)
 


  //saving data to database
  if(email && aiOutput)
  {
      await saveToDB({
    
        formData : inputData,
        templateSlug : selectedTemplate?.slug,
        aiResponse : aiOutput,
        email : email
      }
    )


}
}
  

  return (
    <div className='p-5'>
      <Link href="/dashboard">
        <Button className='hover:scale-105'>
          <ArrowLeft /> Back
        </Button>
      </Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FormSection
          choosedTemplate = {selectedTemplate}
          userFormInput={(v:any)=>genAIContent(v)}
          loading = {loading} />
        <div className='col-span-2'>
            <OutputSection
              aiOutput = {finalOutput}/>
        </div>
    </div>

    </div>

  )
}

export default createNewContent