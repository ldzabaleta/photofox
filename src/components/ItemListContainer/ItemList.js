import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = ({items, category}) => {
  return (
    <div className="d-flex flex-wrap justify-content-evenly">
        {items.filter(item => {
          if (category) return item.category === category
          return item
        }).map((item, key) => (
          <Item product={item} key={key} />
        ))}
    </div>
  )
}

export default ItemList