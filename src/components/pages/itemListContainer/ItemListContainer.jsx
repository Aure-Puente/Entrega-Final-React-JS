//Importaciones:
import { useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { db } from "../../../firebaseConfig.js"
import { collection, getDocs, query, where } from "firebase/firestore"

//Lógica:
const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {name} = useParams()

    useEffect(()=>{
        const productsCollection = collection(db, "products")
        let consulta = productsCollection
        if(name){
            consulta = query(productsCollection, where("category", "==", name))
        }
        getDocs(consulta).then((res)=>{
            let newArray = res.docs.map((doc)=>{
                return {id: doc.id, ...doc.data()}
            })
            setItems(newArray)
        })
    },[name])

//JSX:
    return (
        <ItemList items= {items}/>
    )
}

export default ItemListContainer