import React from 'react'
import { UseProductsContext } from '../CartContext/CartContext'
import CartBadge from '../CartBadge/CartBadge'
import cartIcon from './/cart-fill.svg'

const CartWidget = () => {
  return (
    <div>
      <CartBadge />
      {/* <img className='py-5' src={cartIcon} alt='Cart'></img> {CartList.cantidadTotal} */}
    </div>
    
  )
}

export default CartWidget

