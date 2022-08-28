import { useEffect, useState } from "react"
import './ItemList.css'

const ItemList = () => {
    const [item, setItem] = useState([])

    useEffect(()=>{
        fetch('https://mocki.io/v1/5addbfae-cb81-4ce7-b334-a90d0e54bca9')
  .then(response => response.json())
  .then(json => setItem(json))
},[]);

  return (
    <div className="d-flex flex-wrap justify-content-evenly">
        {item.map((product, index) => {
            return (
            <div className="card text-light mb-4 image__zoom col-md-4" key={index} >
                                    <a href="# "><img src={`${product.image}`} alt={product.name} className="img-fluid"/></a>
                                        <div className="card-body">
                                            <div className="h1 mb-3">
    
                                                <div className="lead my-1">
                                                    <a href="# " className="text-decoration-none d-flex flex-column">
                                                        <h2 className="lead my-1 text-center">{product.name}</h2>
                                                        <h2 className="lead my-1 text-center">${product.price}</h2>
                                                        <h3 className="lead my-1 text-center">{product.cuotas}</h3>
                                                        <span className="align-self-center py-3">
                                                            <div> <button className="int__button" style={{lineHeight: '0.3rem'}}>COMPRAR</button></div>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                </div>)
        })
    }
    </div>
  )
}

export default ItemList