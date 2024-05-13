//Importaciones:
import { useContext } from "react"
import Cart from "./Cart.jsx"
import { CartContext } from "../../../context/CartContext.jsx"


//Lógica:
const CartContainer = () => {
    const {cart, clearCart, deleteById} = useContext(CartContext)
    return <Cart cart={cart} clearCart={clearCart} deleteById={deleteById} />
}

export default CartContainer