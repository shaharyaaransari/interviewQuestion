import React from 'react'

import { TfiSearch } from "react-icons/tfi";
export const Search = ({search,setSearch,handleClick}) => {
  return (
    <div>
        
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search Movies and Series'/>
          <span onClick={handleClick}>
          <TfiSearch  className='search'/>
          </span>
            
    </div>
  )
}
