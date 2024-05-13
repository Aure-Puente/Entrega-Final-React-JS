//Importaciones:
import "../cart/CartContainer.css"
import {Link} from "react-router-dom"

//JSX:
const Cart = ({cart, clearCart, deleteById, total}) => {
    return (
        <div>
            {cart.map((product)=>(
                <div key={product.id}>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <h5>{product.quantity}</h5>
                    <button onClick={()=>deleteById(product.id)}>Eliminar</button>
                </div>
            ))}
            <h2>EL total es $ {total}</h2>
            <button onClick={clearCart}>Eliminar Todo</button>
            {cart.length > 0 &&(<Link to="/checkout" ><Button variant="contained">Finalizar Compra</Button></Link>)}
        </div>
    )
}

export default Cart