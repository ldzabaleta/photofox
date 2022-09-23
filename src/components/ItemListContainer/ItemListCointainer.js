import { useEffect, useState } from "react"
import ItemList from "./ItemList"

//Firebase
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../FirebaseConfig";

const ItemListCointainer = ({category}) => {
    const [itemData, setItemData] = useState([])

    const getItems = async () => {
      let q = query(collection(db, "item"))
      const docs = [];

      if (category) q = query(q, where('category', '==', `${category}`))

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push( {...doc.data(),id: doc.id})
      });
      setItemData(docs)
    };

    useEffect(()=>{
        getItems()
    });

  return ( 
    <div>
      <ItemList items={itemData} />
    </div>
  )
}

export default ItemListCointainer
