import React from 'react'

const Tag = ({tag,addFilterTag}) => {
  return (
    <div className='tag' onClick={()=> addFilterTag(tag)}>{tag}</div>
  )
}

export default Tag