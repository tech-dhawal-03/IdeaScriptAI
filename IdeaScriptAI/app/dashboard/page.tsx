"use client"
import SearchSection from "./_components/SearchSection";
import TemplatesList from "./_components/TemplatesList";
import React, { useState } from "react";

export default function Dashbord()
{
    const [searchInput,setSearchInput] = useState<string>();

    return(
        <div>
            {/* Welcome to Dashboard */}
    
            
            <SearchSection onSearchInput={(value:string)=>setSearchInput(value)}/>
            
    
            <TemplatesList searchInput={searchInput} />
            

        </div>
    )
}