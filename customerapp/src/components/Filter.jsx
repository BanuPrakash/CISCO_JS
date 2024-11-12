import React from 'react'

export default function Filter(props) {
  return (
    <div>
      <input type='text' 
      onChange={(evt) => props.filterEvt(evt.target.value)}
      placeholder='search by name' />
    </div>
  )
}
