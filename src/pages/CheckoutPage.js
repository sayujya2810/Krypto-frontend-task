import React from 'react'
import "../styles/CheckoutPage.css"
import Data from "../db.json"
import { MdDelete } from "react-icons/md"
import { areOptionsEqual } from '@mui/base'

const CheckoutPage = ({ email ,toggleCart, setToggleCart}) => {
  
  let cart = []
  let favs = []
  cart.push(JSON.parse(localStorage.getItem(`${email}_cart`))) 
  favs.push(JSON.parse(localStorage.getItem(`${email}_favs`))) 
  console.log("cart : " ,cart)

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

const deleteFromCart = (id) => {
  // cart.map(item => (
  //           item.map(prod => {
  //             if(prod.id === id){
  //               // alert(`${prod.id} , ${id}`)
  //               Array.remove()
  //             }
  //           }
  //         )
  // ))
}


  const toggle = () => {
    if(toggleCart){
      setToggleCart(false)
    }
    else{
      toggleCart(true)
    }
  }
  return (
    <div className='checkout-wrapper'>
      <div className='toggle-div'><button id='toggle-btn' onClick={toggle}>Close CART</button></div>
      <table className='cart-table'>
        <tr className='head-row'>
          <td className='cell'>ID</td>
          <td className='cell'>TITLE</td>
          <td className='cell'>PRICE</td>
        </tr>
        {
          cart.map(item => (
            item.map(prod => (
              <tr>
                <td className='cell'><button id={prod.id} onClick={() => deleteFromCart(prod.id)} className='del-btn'><MdDelete /></button>{prod.id}</td>
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

export default CheckoutPage