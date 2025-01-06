import React from 'react'
import { Search } from 'lucide-react'

function SearchSection({onSearchInput}:any) {
  return (

    <div className='pb-16 flex flex-col md:h-[20%] md:pb-0 lg:h-[20%] gap-4 w-screen md:w-[100%] bg-gradient-to-r from-sky-400 to-fuchsia-500 via-blue-700 md:overflow-clip mt-10 my-4 rounded-xl absolute min-h-[250px] '>
    
      <h2 className='flex text-white text-3xl font-bold justify-center mt-10'>Browse All Templates...</h2>
      <h1 className='flex text-white text-xl font-semibold justify-center'>What's on your mind ?</h1>
      <div className='flex justify-center' >
        <div className='flex gap-3 border rounded-lg p-2 w-[50%] md:w-[30%] bg-white mt-1 '>
            <Search className='text-primary' />
            <input
              type="text"
              placeholder="Search Here..."
              className="outline-none bg-transparent"
              onChange={(event)=>onSearchInput(event.target.value)}/> 
        </div>               
      </div>
    </div>
  )
}

export default SearchSection