import React, { useState } from 'react'
import './Home.css'
import ItemListCointainer from '../../ItemListContainer/ItemListCointainer'

const Home = () => {

  const [selected, setSelected] = useState('')

  const handleChange = event => {
    setSelected(event.target.value)
  }  
  return (
    <div>
      <div className='col-md-3 pb-5 mx-5'>
          <select value={selected} className="form-select" aria-label="Default select example" onChange={handleChange}>
              <option value=""></option>
              <option value="presets">Lightroom Presets</option>
              <option value="talleres">Talleres Online</option>
          </select>
      </div> 
      <div>
        <ItemListCointainer category={selected} />
      </div>
    </div>
  )
}

export default Home