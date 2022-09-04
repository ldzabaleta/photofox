import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import './ItemDetail.css'


const ItemDetail = () => {
    const [item, setItem] = useState([])
    let {id} = useParams()

    useEffect(()=>{
        fetch(`https://630feac036e6a2a04ee38c80.mockapi.io/api/v1/items/${id}`)
  .then(response => response.json())
  .then(json => setItem(json))
},[id]);

    

    return (
      < div className="text-light mb-4 image__zoom d-flex justify-content-center" >
              
        <div className="d-flex justify-content-around">
            <div className="">
            <img src={`../${item.image}`} alt={item.name} className="img-fluid"/>
            </div>
                
            <div className="lead my-1">
                <span className="text-decoration-none d-flex flex-column px-5">
                    <h1 className="lead my-1 text-center fs-2 fw-bold">{item.name}</h1>
                    <h3 className="lead my-1 text-center text__container">{item.description}</h3>
                    <h1 className="lead my-1 text-center fs-4 fw-bold">${item.price}</h1>
                    <span className="align-self-center py-3">
                        <div> <button className="int__button" style={{lineHeight: '0.3rem'}}>COMPRAR</button></div>
                    </span>
                </span>
            </div>
        </div>
    </div>
    )
  }

export default ItemDetail
