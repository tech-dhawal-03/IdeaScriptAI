"use client"
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dynamic from "next/dynamic";

interface PROPS
{
  aiOutput : string

}

function OutputSection({aiOutput} : PROPS) {
  const editorRef:any = useRef();

  useEffect(()=>
  {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);

  },[aiOutput])

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='p-5 flex justify-between'>
        <h2 className='font-bold text-lg'>Output</h2>
    
        <Button className='flex gap-2'>
          <Copy className='w-4 h-4' />
          Copy
        </Button>
      
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your Output will be shown here..."
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
    />
    </div>
  )
}

export default OutputSection