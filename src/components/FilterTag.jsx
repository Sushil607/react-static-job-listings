import React from 'react'

import RemoveIcon from "/images/icon-remove.svg"

const FilterTag = ({filterTag,removeFilterTag}) => {
  return (
    <div className='filter-tag'> <div className="content">{filterTag}</div> <img onClick={()=> removeFilterTag(filterTag)} src={RemoveIcon} className='remove-icon' alt="remove icon" /> </div>
  )
}

export default FilterTag