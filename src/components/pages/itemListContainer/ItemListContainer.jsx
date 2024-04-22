//Importaciones:
import { useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import { products } from "../../../productsMock.js"
import { useParams } from "react-router-dom"

//Lógica:
/*Declaramos primero 3 variables. La primera es un estado que cambia si hay un error y la promesa simulada no se
pudo ejecutar, la segunda es una variable con un array donde guardaremos los productos capturados por la promesa
resuelta, y por ultimo usamos el hook useParamos que captura la parte dinamica de la direccion.*/
const ItemListContainer = () => {
    const [error, setError] = useState(null)
    const [items, setItems] = useState([])
    const {name} = useParams()

    useEffect(()=>{
/*Dentro del useEffect lo primero que haremos es declarar una variable que a traves del metodo filter, filtre 
entre las catgegorias de nuestros productos y busque una coincidencia con el name, que en este caso el name
tendra la informacion del nombre de la categoria, capturada por useParamas. Luego simulamos que la promesa "sale bien"
ya que estamos haciendo todo de manera local, y hacemos que cuando se resuelve, nos devuelve un ternario que hace que
si en la direccion tenemos una categoria, nos devuelva el producto filtrado, sino es el caso, que nos devuelva todos
los productos en pantalla. Por ultimo capturamos la respuesta de la promesa, la seteamos y hacemos que en el array de dependencias
se dispare el useEffect cada vez que el name o categoria cambien, y se vuelva a pintar la pantalla-*/
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
/*Mandamos la informacions capturada y el "error" al presentacional para luego poder pintarlo en pantalla*/
    return (
        <ItemList items= {items} error={error}/>
    )
}

export default ItemListContainer