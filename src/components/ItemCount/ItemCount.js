import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial}) => {
    const [counter, setCounter] = useState(parseInt(initial));
    

    const CounterUp = () => {
      if (counter < stock) setCounter(counter + 1)
    }
  
    const CounterDown = () => {
      if (counter >= 1) setCounter(counter - 1)
    }
    

return (
    <div className='d-flex flex-column m-5'>
      <p className='text-center'>Stock: {stock} </p>
      <div className='d-flex justify-content-center'>
        <button className='int__button align-self-center py-3' onClick={CounterUp}>+</button>
        <p className='text-center align-self-center m-3'>Contador: {counter}</p>
        <button className='int__button align-self-center py-3' onClick={CounterDown}>-</button> 
      </div> 
    </div>
    
  )
}


export default ItemCount

