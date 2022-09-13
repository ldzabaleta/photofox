import React from 'react'
import { UseProductsContext } from '../../CartContext/CartContext'
const Cart = () => {
    const { CartList }  = UseProductsContext()
    console.log(CartList)
    return (
        <div>Cart</div>
    )
}

export default Cart;