import React from 'react'
import Add from './Add'
import MovieList from './MovieList'
import Filter from './Filter'


function Mouvies({movies,addMovie,text,setText,rate,setRate}) {
  return (
    <div>
       <Filter setText={setText} setRate={setRate}/>
      <Add addMovie={addMovie}/>
      <MovieList movies={movies} text={text} rate={rate} />
    </div>
  )
}

export default Mouvies