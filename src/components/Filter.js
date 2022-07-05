import React from 'react'

function filter({setText,setRate}) {
  return (
    <div className='filter'>
        <input type="text" placeholder="search by title" onChange={(e)=>setText(e.target.value)}/>
        <input type="number" placeholder="search by rate"  onChange={(e)=>setRate(e.target.value)}/>

    </div>
  )
}

export default filter;