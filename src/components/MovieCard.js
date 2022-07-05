import React from 'react'
import { Link } from 'react-router-dom';

function Moviecard({movie}) {
  return (

    <div className='movie-card'>
    <Link to={`/trailer/${movie.name}`}>
    <img src={movie.posterurl}></img>
    <h1>{movie.name}</h1>
    <p>{movie.description}</p>
    <button class="star">{movie.rating}</button>
    
    </Link>
    </div>

  )
}

export default Moviecard;