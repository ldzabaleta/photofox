import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    let {id} = useParams()

    useEffect(()=>{
        fetch(`https://630feac036e6a2a04ee38c80.mockapi.io/api/v1/items/${id}`)
  .then(response => response.json())
  .then(json => setItem(json))
},[id]);

    

    return (
    < div className="text-light mb-4 image__zoom d-flex justify-content-center" >
        < ItemDetail item={item} />
    </div>
    )
  }

export default ItemDetailContainer

