import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../FirebaseConfig";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    let {id} = useParams()

  const getItemDetail = async (itemId) => {
    const docRef = doc(db, "item", `${itemId}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setItem({id: docSnap.id, ...docSnap.data()})
        } 
  }

    useEffect(() => {
      getItemDetail(id);      
    }, [id]);

    

    return (
    < div className="text-light mb-4 image__zoom d-flex justify-content-center" >
        < ItemDetail item={item} />
    </div>
    )
  }

export default ItemDetailContainer;

