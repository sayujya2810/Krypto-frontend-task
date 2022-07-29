import React from 'react'
import { MdOutlineAddShoppingCart } from "react-icons/md"
import { FcLike } from "react-icons/fc"
import { AiFillStar } from "react-icons/ai"
import "../styles/Card.css"

const Card = (props) => {
  
  const arr = JSON.parse(localStorage.getItem(props.email)).orders
  const addToCart = () => {
    
    
    // console.log(JSON.parse(localStorage.getItem(props.email)).orders)
  }

  return (
    <div className='card-wrapper' id={props.id}>
        <img src={props.img} alt={props.title} />
        <div>
            <p>{props.title}</p>
            <div  className='price-rating'>
                <p>₹ {props.price}</p>
                <p>{props.rating} <AiFillStar style={{color:"yellow"}} /></p>
            </div>
        </div>
        <div className='add-fav'>
            <div><button className='addToCart-btn' onClick={addToCart} ><MdOutlineAddShoppingCart /></button></div>
            <div><button className='fav-btn'><FcLike /></button></div>
        </div>
    </div>
  )
}

export default Card