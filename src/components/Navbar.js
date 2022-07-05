import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul >
      <Link to='/'> <li>Movies</li></Link>
      <Link to='/Contact'> <li>Contact</li></Link>
      <Link to='/About'> <li>About</li></Link>

      </ul>
    </div>
  )
}

export default Navbar;