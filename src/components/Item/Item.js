import React from 'react'
import './Item.css'
import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <div className="card text-light mb-4 image__zoom col-md-4" >
        <Link to={ `/detail/${product.id}` } className='text-decoration-none' >
            <img src={`${product.img}`} alt={product.name} className="img-fluid"/>
            <div className="card-body">
                <div className="h1 mb-3">

                    <div className="lead my-1">
                        <span className="text-decoration-none d-flex flex-column">
                            <h2 className="lead my-1 text-center">{product.name}</h2>
                            <h2 className="lead my-1 text-center">${product.price}</h2>
                            <h3 className="lead my-1 text-center">{product.cuotas}</h3>
                            <span className="align-self-center py-3">
                                <div> <button className="int__button" style={{lineHeight: '0.3rem'}}>VER MÁS</button></div>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Item