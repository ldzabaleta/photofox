import React, { useState } from 'react'
import './Home.css'
import ItemListCointainer from '../../ItemListContainer/ItemListCointainer'
import InProgress from '../../InProgress/InProgress.js'

const Home = () => {

  const [selected, setSelected] = useState('')
  const [isLoading, setIsLoading] = useState (false) 

  const handleChange = event => {
    setIsLoading(true)
    setSelected(event.target.value)
    setIsLoading(false)
    
  }  
  return (
    <div>
      <div className='col-md-3 pb-5 mx-5'>
          <select value={selected} className="form-select" aria-label="Default select example" onChange={handleChange}>
              <option value="">Todos los productos</option>
              <option value="presets">Lightroom Presets</option>
              <option value="talleres">Talleres Online</option>
          </select>
      </div> 
      <div>
      {isLoading ? <InProgress /> : <ItemListCointainer category={selected} />}
      </div>
    </div>
  )
}

export default Home