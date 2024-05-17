//Importaciones:
import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext.jsx"
import { db } from "../../../firebaseConfig.js"
import { addDoc, collection, updateDoc, doc } from "firebase/firestore"
import Checkout from "./Checkout.jsx"


//Lógica:
const CheckoutContainer = () => {

    const {cart, getTotalPrice, clearCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [error, SetError] = useState(null)

    let total = getTotalPrice()

    const [info, setInfo] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const handleChange = (event)=>{
        let {name, value} = event.target
        setInfo({...info, [name]: value})
    }

    const handleSumbit = (event)=>{
        event.preventDefault()
        let obj ={
            buyer: info,
            items: cart,
            total: total
        }

        let ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, obj).then((res)=>setOrderId(res.id)).catch((err)=>SetError(`Error al actualizar el stock: ${err.message}`))

        cart.forEach((product)=>{
            let refDoc = doc(db, "products", product.id)
            updateDoc(refDoc, {stock: product.stock - product.quantity})
        })
        clearCart()
    }

return (
    <Checkout handleSubmit={handleSumbit} handleChange={handleChange} orderId={orderId} error={error} />
)
}

export default CheckoutContainer