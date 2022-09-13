import React from 'react'
import { UseProductsContext } from '../../ProductsContext/ProductsContext'
const Cart = () => {
    const {CartList}  = UseProductsContext()
    console.log(CartList)
    return (
        <div>Cart</div>
    )
}

export default Cart