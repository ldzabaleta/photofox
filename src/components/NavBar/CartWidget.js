import React from 'react'
import { UseProductsContext } from '../CartContext/CartContext'
import cartIcon from './/cart-fill.svg'

const CartWidget = () => {
  const { CartList }  = UseProductsContext()
  return (
    <div>
      <img className='py-5' src={cartIcon} alt='Cart'></img> {CartList.cantidadTotal}
    </div>
    
  )
}

export default CartWidget