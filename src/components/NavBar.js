import React from 'react'
import "../styles/NavBar.css"
import { BsCart2 } from "react-icons/bs"
import { MdFavorite } from "react-icons/md"
import { FaUserAlt } from "react-icons/fa"


const NavBar = () => {
  return (
    <div className='nav-container'>
        <div className='nav-left'><a className='nav-links' href='/'>Home</a></div>
        <div  className='nav-right'>
            <div ><FaUserAlt /></div>
            <a className='nav-links' href='/favourite'><MdFavorite /></a>
            <a className='nav-links' href='/checkout'><BsCart2 /></a>
        </div>
    </div>
  )
}

export default NavBar