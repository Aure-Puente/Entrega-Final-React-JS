//Importaciones:
import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"
import { CartContext } from "../../../context/CartContext.jsx"
import { db } from "../../../firebaseConfig.js"
import { collection, doc, getDoc } from "firebase/firestore"
import { BeatLoader } from "react-spinners"
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'


//Lógica:
const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item, setItem] = useState({})
    const [error, setError] = useState(null)
    const {addToCart} = useContext(CartContext)

    useEffect(()=>{
        let productsCollection = collection(db, "products")
        let refDoc = doc(productsCollection, id)
        getDoc(refDoc).then((res)=>{
            setItem({id: res.id, ...res.data()})
        }).catch((err)=>{setError(`Error al cargar los productos: ${err.message}`)})
    },[id])

    const onAdd = (cantidad)=>{
        let product = {...item, quantity: cantidad}
        addToCart(product)
        toast.success('Producto agregado al carrito', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            className: 'custom-toast',
            bodyClassName: 'custom-toast-body'
            });
    }

    if (error) {
        return <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>{error}</div>;
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