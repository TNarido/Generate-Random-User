import React from 'react'
import FilterByGender from '../FilterByGender/FilterByGender'
import FilterByNumber from '../FilterByNumber/FilterByNumber'
import './NavBar.css'

const NavBar = ({getUsersByGender, getUsersByNumber}) => {
  return (
    <div className='NavBar'>
      {/* Filter Number*/}
        <FilterByNumber getUsersByNumber = {getUsersByNumber}/>

      {/* Filter Gender*/}
        <FilterByGender getUsersByGender = {getUsersByGender}/>
      
    </div>
  )
}

export default NavBar