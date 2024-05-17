//Importaciones:
import { useContext } from "react"
import Cart from "./Cart.jsx"
import { CartContext } from "../../../context/CartContext.jsx"
import Swal from "sweetalert2"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


//Lógica:
const CartContainer = () => {
    const {cart, clearCart, deleteById, getTotalPrice} = useContext(CartContext)
    let total = getTotalPrice()

    const clearCartAlert = ()=>{
        Swal.fire({
            title: "<span style='color: #f8ff86; text-decoration: underline; text-decoration-color:  #f8ff86;'>¿Desea cancelar la compra?</span>",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3d3d3d",
            cancelButtonColor: "#f8ff86",
            confirmButtonText:"<span style='color: #f8ff86'>Vaciar carrito</span>",
            cancelButtonText: "<span style='color: #3d3d3d'>Volver</span>",
            }).then((result) => {
            if (result.isConfirmed) {
                clearCart()
                Swal.fire({
                title: "<span style='color: #f8ff86; text-decoration: underline; text-decoration-color:  #f8ff86;'>La compra fue cancelada</span>",
                icon: "success",
                confirmButtonColor: "#f8ff86",
                confirmButtonText:"<span style='color:#3d3d3d'>OK</span>"
                });
            }
            });
    }

    if(cart.length === 0){
        return <div className="empty-cart">
            <h4 className="empty-title fugaz-one-regular">!Tu carrito está vacío!</h4>
            <h5 className="empty-text roboto-regular">Empieza un carrito de compras sumando productos</h5>
            <Link to={"/"}><Button variant="contained" color="secondary" size="large" startIcon={<ShoppingBagIcon style={{ color: '#3d3d3d' }}/>} >Descubrir Productos</Button></Link>
        </div>
    }else{
        return <Cart cart={cart} deleteById={deleteById} total={total} clearCartAlert={clearCartAlert} />
    }
}

export default CartContainer