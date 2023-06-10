import React from 'react'

import RemoveIcon from "../assets/images/icon-remove.svg"

const FilterTag = ({filterTag}) => {
  return (
    <div className='filter-tag'> <div className="content">{filterTag}</div> <img src={RemoveIcon} className='remove-icon' alt="" /> </div>
  )
}

export default FilterTag