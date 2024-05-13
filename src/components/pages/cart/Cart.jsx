//Importaciones:
import "../cart/CartContainer.css"
import {Link} from "react-router-dom"

//JSX:
const Cart = ({cart, clearCart, deleteById}) => {
    return (
        <div>
            {cart.map((product)=>(
                <div key={product.id}>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={()=>deleteById(product.id)}>Eliminar</button>
                </div>
            ))}
            <button onClick={clearCart}>Eliminar Todo</button>
            <Link to="/checkout" ><button>Finalizar Compra</button></Link>
        </div>
    )
}

export default Cart