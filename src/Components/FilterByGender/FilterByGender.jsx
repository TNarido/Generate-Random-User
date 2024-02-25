import React from 'react';
import './FilterByGender.css'

const FilterByGender = ({getUsersByGender}) => {
  return (
    <select onChange={(e) => getUsersByGender(e.target.value)}>
        <option value = "">All</option>
        <option value = "male">Male</option>
        <option value = "female">Female</option>
    </select>
  );
}

export default FilterByGender;
