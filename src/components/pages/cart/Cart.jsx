//Importaciones:
import "../cart/CartContainer.css"
import {Link} from "react-router-dom"
import "../cart/CartContainer.css"
import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


//JSX:
const Cart = ({cart, clearCart, deleteById, total}) => {
    return (
        <div className="carrito">
            {cart.map((product)=>(
                <div key={product.id} className="items">
                    <div className="title-img">
                        <div className="cart-img"><img className="miniatura" src={product.img} alt="guitarras" /></div>
                        <h4>{product.title}</h4>
                    </div>
                    <h5>Unidades: {product.quantity}</h5>
                    <h5>Precio por unidad: $ {product.price}</h5>
                    <Button color="secondary" variant="outlined" size="small" startIcon={<DeleteIcon />}
                        onClick={()=>deleteById(product.id)}>Eliminar</Button>
                </div>
            ))}
            <div className="total-container">
                <h3 className="total">El Total es $ {total}-.</h3>
                <div className="buttons">
                    <Button color="secondary" variant="outlined" startIcon={<DeleteIcon />}
                        onClick={clearCart}>Cancelar Compra</Button>
                    {cart.length > 0 &&(<Link to="/checkout" ><Button color="secondary" variant="contained" startIcon={<ShoppingBagIcon style={{ color: '#3d3d3d' }}/>} >Realizar Compra</Button></Link>)}
                </div>
            </div>
        </div>
    )
}

export default Cart