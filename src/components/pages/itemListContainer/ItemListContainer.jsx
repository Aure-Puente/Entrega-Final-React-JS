//Importaciones:
import { useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import { products } from "../../../productsMock.js"
import { useParams } from "react-router-dom"

//Lógica:
const ItemListContainer = () => {
    const [error, setError] = useState(null)
    const [items, setItems] = useState([])
    const {name} = useParams()

    useEffect(()=>{
        let productsFiltered = products.filter(product => product.category === name)
        const getProducts = new Promise ((resolve, reject)=>{
            let x = true
            if(x){
                resolve(name ? productsFiltered : products)
            }else{
                reject({status: 400, message: "Algo salio mal"})
            }
        })
        getProducts.then((res)=>setItems(res)).catch((error)=>setError(error))
    },[name])

//JSX:
    return (
        <ItemList items= {items} error={error}/>
    )
}

export default ItemListContainer