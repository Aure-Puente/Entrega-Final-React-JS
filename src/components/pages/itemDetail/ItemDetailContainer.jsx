//Importaciones:
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { products } from "../../../productsMock.js"
import ItemDetail from "./ItemDetail.jsx"


//Lógica:
const ItemDetailContainer = () => {
/*Declaramos dos variables, la primera con el hook UseParamas, que viene desde la libreria de ract-router-dom para
poder capturar la parte dinamica de la direccion, luego usamos el hook UseState para capturar el valo de la respuesta
y setearlo. */
    const {id} = useParams()
    const [item, setItem] = useState({})

/*Hacemos lo siguente dentro del hook UseEfect: declaramos una variable, que usa el metodo find para buscar
coincidencias del ID dentro de nuestros productos, con el ID que aparecera en la parte dinamica de nuestra direccion.
luego, ralizamos una promesa, cuando esta se resuelve, nos devuelve como respuesta el item encontrado con la coincidencia previa
Despues, con el metodo then capturamos esa respuesta que contiene la informacion del item y la seteamos en la variable del UseState.
Por ultimo, declarmos en el array de dependencias el ID ya que queremos que se recargue la pantalla y se pinten
los detalles cada vez que el id en nuestra direccion cambia.*/
    useEffect(()=>{
        let itemEncontrado = products.find((product)=>product.id === +id)
        const getProduct = new Promise((resolve, reject)=>{
            resolve(itemEncontrado)
        })
        getProduct.then((res)=>setItem(res))
    },[id])

    //JSX:
    /* Pasamos la informacion capturada al ItemDetail presentacional para pintarla y mostrarla en pantalla. */
    return <ItemDetail item={item} />
}

export default ItemDetailContainer