import React from 'react'

import FilterTag from './FilterTag'

const FilterTagList = ({filterTagsList,removeFilterTag,clearFilterTags}) => {
  return (
    <div className='filter-tag-list'>
        <div className="filter-tags">
            {filterTagsList.map((filterTag,index) => <FilterTag key={index} filterTag={filterTag} removeFilterTag={removeFilterTag}/>)}
        </div>
        <button className="clear-filter-tag-list-btn" onClick={()=> clearFilterTags()}>Clear</button>
    </div>
  )
}

export default FilterTagList