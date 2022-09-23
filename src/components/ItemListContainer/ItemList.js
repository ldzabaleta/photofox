import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = ({items}) => {
  
  return (
    <div className="d-flex flex-wrap justify-content-evenly">
        {items.map((item, key) => (
          <Item product={item} key={key} />
        ))}
    </div>
  )
}

export default ItemList