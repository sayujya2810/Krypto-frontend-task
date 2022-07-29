import React from 'react'
import "../styles/NavBar.css"


const NavBar = () => {
  return (
    <div className='nav-container'>
        <div className='nav-left'><a className='nav-links' href='/'>Home</a></div>
        <div  className='nav-right'>
            <div>user</div>
            <a className='nav-links' href='/favourite'>Favs</a>
            <a className='nav-links' href='/checkout'>Cart</a>
        </div>
    </div>
  )
}

export default NavBar