//Importaciones:
import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"
import { CartContext } from "../../../context/CartContext.jsx"
import { db } from "../../../firebaseConfig.js"
import { collection, doc, getDoc } from "firebase/firestore"
import { BeatLoader } from "react-spinners"


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

    if(Object.keys(item).length === 0){
        return <div className="loader">
                    <BeatLoader 
                        color="#f8ff86"
                        size={25}/>
        </div>
    }else{
        return <ItemDetail item={item} onAdd={onAdd} />
    }
}

export default ItemDetailContainer