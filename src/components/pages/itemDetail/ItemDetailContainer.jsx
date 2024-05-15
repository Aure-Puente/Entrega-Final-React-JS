//Importaciones:
import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"
import { CartContext } from "../../../context/CartContext.jsx"
import { db } from "../../../firebaseConfig.js"
import { collection, doc, getDoc } from "firebase/firestore"


//Lógica:
const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item, setItem] = useState({})
    const {addToCart} = useContext(CartContext)

    useEffect(()=>{
        let productsCollection = collection(db, "products")
        let refDoc = doc(productsCollection, id)
        getDoc(refDoc).then((res)=>{
            setItem({id: res.id, ...res.data()})
        })
    },[id])

    const onAdd = (cantidad)=>{
        let product = {...item, quantity: cantidad}
        addToCart(product)
    }

    return <ItemDetail item={item} onAdd={onAdd} />
}

export default ItemDetailContainer