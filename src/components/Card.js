import React from 'react'
import { MdOutlineAddShoppingCart } from "react-icons/md"
import { FcLike } from "react-icons/fc"
import { AiFillStar } from "react-icons/ai"
import "../styles/Card.css"

const Card = (props) => {
  return (
    <div className='card-wrapper'>
        <img src={props.img} alt={props.title} />
        <div>
            <p>{props.title}</p>
            <div  className='price-rating'>
                <p>₹ {props.price}</p>
                <p>{props.rating} <AiFillStar style={{color:"yellow"}} /></p>
            </div>
        </div>
        <div className='add-fav'>
            <div><button className='addToCart-btn'><MdOutlineAddShoppingCart /></button></div>
            <div><button className='fav-btn'><FcLike /></button></div>
        </div>
    </div>
  )
}

export default Card