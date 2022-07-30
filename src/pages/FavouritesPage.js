import React from 'react'
import "../styles/CheckoutPage.css"
import Data from "../db.json"
import { MdDelete } from "react-icons/md"

const FavouritesPage = ({ email ,toggleCartFavs, setToggleCartFavs}) => {
  
  // let cart = []
  let favs = []
  // cart.push(JSON.parse(localStorage.getItem(`${email}_cart`))) 
  favs.push(JSON.parse(localStorage.getItem(`${email}_favs`))) 
  // console.log("cart : " ,cart)

  var total = 0;

//   const filteredCart = []


// for(var i = 0 ;i < Data.products.length ; i++){
//   for(var j = 0 ;j < cart.length ; j++){
//     if(cart[j] === Data.products[i].id){
//       filteredCart.push(Data.products[i])
//     }
//   }
// }

// console.log(filteredCart)

const deleteFromCartFavs = (id) => {

}

  const toggleFavs = () => {
    if(toggleCartFavs){
      setToggleCartFavs(false)
    }
    else{
      setToggleCartFavs(true)
    }
  }
  return (
    <div className='checkout-wrapper'>
      <div className='toggle-div'><button id='toggle-btn' onClick={toggleFavs}>Close CART</button></div>
      <table className='cart-table'>
        <tr className='head-row'>
          <td className='cell'>ID</td>
          <td className='cell'>TITLE</td>
          <td className='cell'>PRICE</td>
        </tr>
        {
          favs.map(item => (
            item.map(prod => (
              <tr>
                <td className='cell'><button id={prod.id} onClick={() => deleteFromCartFavs(prod.id)} className='del-btn'><MdDelete /></button>{prod.id}</td>
                <td className='cell'>{prod.title}</td>
                <td className='cell'>{prod.price}</td>

                {total += parseInt(prod.price)}
              </tr>
            ))
          ))
        }
      </table>

      <p style={{padding:"1rem"}}>Total : ₹{total}/-</p>
    </div>
  )
}

export default FavouritesPage