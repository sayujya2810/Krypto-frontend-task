import { Grid } from '@mui/material'
import React from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar';
import Data from "../db.json";

const ProductGrid = ({email}) => {

  return (
    <>
    <NavBar />
    <div style={{marginTop:"1rem"}}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" alignContent="center" >
              {
                Data.products.map(obj => 
                  <Card id={obj.id} img={obj.image} title={obj.title} rating={obj.rating} price={obj.amount} email={email} />
                )
              }
            </Grid>
          </Grid>
    </div>
    </>
  )
}

export default ProductGrid