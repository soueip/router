import React from 'react'
import Mouviecard from './MovieCard'

function MovieList({movies,text,rate}) {
  return (
    <div className='list'>
{
    movies
    .filter(
        el=>el.name.toLowerCase().includes(text.toLowerCase()) && 
    el.rating>=rate
    )
    .map((el)=>(
    <Mouviecard movie={el} />
    ))}
       
    
    </div>
  )
}

export default MovieList