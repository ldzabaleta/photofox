import React, { useState } from 'react'
import { UseProductsContext } from '../../CartContext/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import BasicTextFields from '../../Form/Form';
const Cart = () => {
    const { CartList, RemoveProduct }  = UseProductsContext()
    const [finalizarCompra, setFinalizarCompra] = useState(0)

    const DeleteItem = (item) => {
        RemoveProduct(item)
    }
    return (
        <div>
            {!finalizarCompra ? 
            <><table>
                    <tbody>
                        {CartList.items.length ?
                            CartList.items.map((item, key) => (
                                <tr key={key}>
                                    <td>
                                        <div className="px-3 pb-3"><img src={item.img} alt={item.name} width="48" /></div>
                                    </td>
                                    <td>
                                        <div className="align-middle px-sm-5"><h2 className="lead my-1">{item.name}</h2></div>
                                    </td>
                                    <td>
                                        <div className="align-middle lead">Cant.{item.cantidad}</div>
                                    </td>
                                    <td>
                                        <div className="px-4"><h2 className="lead my-1">${item.price}</h2></div>
                                    </td>
                                    <td>
                                        <div className="">
                                            <span>
                                                <div className="p-2">
                                                    <DeleteIcon onClick={() => DeleteItem(item)}></DeleteIcon>
                                                </div>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))
                            :
                            <><tr>
                                <td className='px-3'>El carrito está vacío</td>
                            </tr>
                            </>}
                        {CartList.items.length ?
                            <tr>
                                <td>
                                    <h5 className='mx-3'>Total</h5>
                                </td>
                                <td>
                                    ${CartList.total.toFixed(2)}
                                </td>
                            </tr> : ''}
                    </tbody>
                </table> 
                <Link to="/">
                    <div> <button className="int__button my-1 mx-2" style={{ lineHeight: '0.3rem' }}>SEGUIR COMPRANDO</button></div>
                </Link>
                { CartList.items.length ?
                    <div> <button onClick={()=> setFinalizarCompra(1)} className="int__button mx-2" style={{ lineHeight: '0.3rem' }}>FINALIZAR COMPRA</button></div> 
                    : ''
                }        </>
                
            : 
            <BasicTextFields items={CartList.items} total={CartList.total.toFixed(2)} /> 
            }
            
        </div>
    )
}


export default Cart;