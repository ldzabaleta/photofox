import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListCointainer = ({category}) => {
    const [item, setItem] = useState([])

    useEffect(()=>{
        fetch('https://630feac036e6a2a04ee38c80.mockapi.io/api/v1/items')
  .then(response => response.json())
  .then(json => setItem(json))
},[]);

  return (
    <div>
      <ItemList items={item} category={category} />
    </div>
  )
}

export default ItemListCointainer
