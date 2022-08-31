import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListCointainer = () => {
    const [item, setItem] = useState([])

    useEffect(()=>{
        fetch('https://mocki.io/v1/5addbfae-cb81-4ce7-b334-a90d0e54bca9')
  .then(response => response.json())
  .then(json => setItem(json))
},[]);

  return (
    <div>
      <ItemList items={item} />
    </div>
  )
}

export default ItemListCointainer
