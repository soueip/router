import React from 'react'
import { useState } from "react";

function Add({addMovie}) {
    const [show, setShow] = useState(false);
    const [movie, setMovie] = useState({
        name:"",
        description:"",
        posterurl:"",
        rating:""

    });

  return (
    <div className='add-movie' >
        <button className='ajout' onClick={()=>setShow(!show)}>Add new movie</button>
        {
            show ? ( <div className="modal-bg">
            <div className="modal-content">
              <button className="close-btn" onClick={()=>setShow(!show)}>X</button>
              <div className="inputs">
              <input type="text" placeholder="enter title" onChange={(e)=>setMovie({...movie,name:e.target.value})}/>
              <input type="text" placeholder="enter discription" onChange={(e)=>setMovie({...movie,description:e.target.value})}/>
              <input type="text" placeholder="enter image" onChange={(e)=>setMovie({...movie,posterurl:e.target.value})}/>
              <input type="number" placeholder="enter rating" onChange={(e)=>setMovie({...movie,rating:e.target.value})}/>
              <button className="add-btn" onClick={()=>{addMovie(movie);setShow(!show);}}>Add movie</button>
      
              </div>
            </div>
      
            </div>): null
        }
        


    </div>
  )
}

export default Add;