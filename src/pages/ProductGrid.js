import { Grid } from '@mui/material'
import React, { useState } from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar';
import Data from "../db.json";
import CheckoutPage from './CheckoutPage';

const ProductGrid = ({email}) => {

  const [cartToggle, setCartToggle] = useState(false)

  const toggle = () => {
    if(cartToggle){
      setCartToggle(false)
    }
    else{
      setCartToggle(true)
    }
  }

  return (
    <>
    {/* <NavBar email={email} /> */}
    <div style={{marginTop:"1rem"}}>
      <div>
        <button onClick={toggle}>Show CART</button>
      </div>
          <Grid item xs={12}>
            <Grid container justifyContent="center" alignContent="center" >
              {
                Data.products.map(obj => 
                  <Card id={obj.id} img={obj.image} title={obj.title} rating={obj.rating} price={obj.amount} email={email} />
                )
              }
            </Grid>
          </Grid>
          {
            cartToggle ? <CheckoutPage email={email} toggleCart={cartToggle} setToggleCart={setCartToggle} /> : console.log("")
          }
    </div>
    </>
  )
}

export default ProductGrid