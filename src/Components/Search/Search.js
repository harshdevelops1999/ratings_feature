import React from 'react'
import "./Search.css"
import searchIcon from "../../Assets/search.svg"
function Search() {
  return (
    <div className='search'>
      <div className='searchLogo'>
       <img src={searchIcon} alt="" />
      </div>
      <div className='verticalLine'></div>
     <input type="text" className='searchInput'/>
    </div>
  )
}

export default Search