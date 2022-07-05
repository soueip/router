import React from 'react'
import { useParams } from 'react-router-dom'

function Trailer({movies}) {
    const params=useParams();
    console.log(params)

    const movie=movies.filter((el)=>el.name==params.name)[0]
    console.log(movie)
  return (
    <div  style={{color:"white"}}>
        <img src={movie.posterurl}/>
        <h1>{movie.name}</h1>
        <h1>{movie.description}</h1>
        <button class="star">{movie.rating}</button>
   
    </div>
  )
}

export default Trailer