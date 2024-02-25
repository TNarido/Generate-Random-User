import React from 'react'
import './FilterByNumber.css'

const FilterByNumber = ({getUsersByNumber}) => {
  return (
    <select onChange = {(e) => getUsersByNumber(e.target.value)}>
        <option selected disabled>Show # users</option>
        <option value="100">All</option>
        <option value="30">30</option>
        <option value="20">20</option>
        <option value="10">10</option>
        <option value="5">5</option>
    </select>
  )
}

export default FilterByNumber
