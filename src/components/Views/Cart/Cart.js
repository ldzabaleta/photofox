import React, { useState } from 'react'
import { UseProductsContext } from '../../CartContext/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
const Cart = () => {
    const { CartList, RemoveProduct }  = UseProductsContext()
    const [cartList, setCartList] = useState(CartList)

const DeleteItem = (item) => {
    RemoveProduct(item)
    setCartList(CartList)
    console.log(CartList)
    console.log(cartList);
}
    console.log(CartList)
    return (
        <div>
            <table>
                <tbody>
                {cartList.items.length ? 
                cartList.items.map((item, key) => (
                    <tr key={key}>
                        <td>
                            <div className="px-3 pb-3"><img src={item.image} alt={item.name} width="48" /></div>
                        </td>
                        <td>
                            <div className="align-middle px-sm-5"><h2 className="lead my-1">{item.name}</h2></div>
                        </td>
                        <td>
                            <div className="align-middle lead">Cant. {item.cantidad}</div>
                        </td>
                        <td>
                            <div className="px-4"><h2 className="lead my-1">${item.price}</h2></div>
                        </td>
                        <td>
                            <div className="">
                                <span>
                                    <div className="p-2"> 
                                        
                                        <DeleteIcon onClick={() => DeleteItem(item)}></DeleteIcon>
                                                
                                                {/* onClick={removeProduct({index})} */}    
                                    </div>
                                </span>
                            </div>
                        </td>
                    </tr>
                ))
            : 
            <><tr>
                        <td>El carrito está vacío</td>
                    </tr><tr>
                            <td>
                                <Link to="/">
                                    <div> <button className="int__button" style={{ lineHeight: '0.3rem' }}>SEGUIR COMPRANDO</button></div>
                                </Link>
                            </td>
                        </tr></>
            } 
            {
                cartList.items.length ? 
                <tr>
                    <td>
                    <h5>Total</h5>
                </td>
                <td>
                    ${cartList.total.toFixed(2)}
                </td>
            </tr>  : ''          }
            </tbody>
            </table>
        </div>
    )
}


export default Cart;