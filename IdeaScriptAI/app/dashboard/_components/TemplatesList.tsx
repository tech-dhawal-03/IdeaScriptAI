import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'
import genIdeas from '@/app/(hero)/templates'


//this has implemented dashboard top gradient and serach functinality
export interface TEMPLATE {
  name : string,
  desc : string,
  icon : string,
  category : string,
  slug : string,
  aiPrompt : string,
  form?:FORM[]

}

export interface FORM{
  label : string,
  field : string,
  name : string,
  required? : boolean
}

function TemplatesList({searchInput}:any) {

  const [templateList,setTemplateList] = useState(genIdeas);
  const [error,setError] = useState(false);

  useEffect(()=>{
    setError(false)
    if(searchInput)
    {
      const filteredData = genIdeas.filter(item=>{
        return item.name.toLowerCase().includes(searchInput.toLowerCase())
      })

      if(filteredData.length>0) setTemplateList(filteredData);

      else {
        setError(true);
        
        
        setTemplateList([
          {
            name: 'Sorry, No Such Template Exists!!',
            desc: '',
            icon: '/assets/warning.png',
            category: '',
            slug: '',
            aiPrompt: '',
            form: [
                
            ]
        }
        ]); // Customize this object as needed
      }

    
    }

    else{
      setTemplateList(genIdeas)
    }

  

  },[searchInput])
  //render this when searchInput changes

  return (
    //this has implemented template cards...
    // <div>TemplatesList</div>
    <div className={`${error ? 'relative top-80 mx-28 md:mx-40 lg:mx-96 lg:top-96':'relative top-96 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 my-5 mx-4'} `}>
      {templateList.map((item:TEMPLATE,index:number)=>(
        <TemplateCard key={index} {...item}   />
        
      ))}
      
    
    </div>
  )
}

export default TemplatesList