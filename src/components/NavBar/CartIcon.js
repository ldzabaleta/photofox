import React from 'react'
import cartIcon from './/cart-fill.svg'

const CartWidget = () => {
  return (
    <div>
      <img className='py-5' src={cartIcon} alt='Cart'></img>
    </div>
    
  )
}

export default CartWidget