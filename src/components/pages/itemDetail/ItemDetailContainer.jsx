//Importaciones:
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { products } from "../../../productsMock.js"
import ItemDetail from "./ItemDetail.jsx"


//Lógica:
const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item, setItem] = useState({})

    useEffect(()=>{
        let itemEncontrado = products.find((product)=>product.id === +id)
        const getProduct = new Promise((resolve, reject)=>{
            resolve(itemEncontrado)
        })
        getProduct.then((res)=>setItem(res))
    },[id])

    //JSX:
    return <ItemDetail item={item} />
}

export default ItemDetailContainer