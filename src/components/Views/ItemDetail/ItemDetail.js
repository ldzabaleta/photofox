import React, { useState } from 'react'
import '../ItemDetailContainer/ItemDetailContainer.css'
import ItemCount from '../../ItemCount/ItemCount.js'
import { Link } from 'react-router-dom'
import { UseProductsContext } from '../../CartContext/CartContext'

const ItemDetail = ({item}) => {
    const [itemQuantity, setItemQuantity] = useState(1)
    const [seAgregoAlCarrito, setSeAgregarAlCarrito] = useState(false)
    const { AddProduct }  = UseProductsContext()
    const onAdd = (quantityToAdd) => {
        setItemQuantity(quantityToAdd);
    }
    const addToCart= () => {
        setSeAgregarAlCarrito(true)
        AddProduct(item, itemQuantity)
    }

    const agregarAlCarrito = seAgregoAlCarrito ? '' : <div> <button className="int__button" style={{lineHeight: '0.3rem'}} onClick={addToCart}>AÑADIR AL CARRITO {itemQuantity} </button></div>
    const irAlCarrito = seAgregoAlCarrito ? <Link to="/cart">
    <div> <button className="int__button" style={{lineHeight: '0.3rem'}}>IR AL CARRITO</button></div>
</Link> : '';

    const seguirComprando = seAgregoAlCarrito ? <Link to="/">
    <div> <button className="int__button" style={{lineHeight: '0.3rem'}}>SEGUIR COMPRANDO</button></div>
</Link> : '';

return (
    
        <div className="d-flex justify-content-around">
            <div className="">
            <img src={`${item.img}`} alt={item.name} className="img-fluid"/>
            </div>
                
            <div className="lead my-1">
                <span className="text-decoration-none d-flex flex-column px-5">
                    <h1 className="lead my-1 text-center fs-2 fw-bold">{item.name}</h1>
                    <h3 className="lead my-1 text-center text__container">{item.description}</h3>
                    <h1 className="lead my-1 text-center fs-4 fw-bold">${item.price}</h1>
                    <div>
                        <ItemCount stock={10} initial={1} onAdd={onAdd} />
                    </div>
                    <span className="align-self-center py-3">
                        
                    <div className='d-flex justify-content-space-between'>
                        {agregarAlCarrito} 
                        {seguirComprando} 
                        {irAlCarrito}
                    </div>
                    </span>
                </span>
            </div>
        </div>
)
}

export default ItemDetail;