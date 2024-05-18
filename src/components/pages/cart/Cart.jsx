//Importaciones:
import "../cart/CartContainer.css"
import {Link} from "react-router-dom"
import "../cart/CartContainer.css"
import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { ToastContainer } from "react-toastify"


//JSX:
const Cart = ({cart, deleteById, total, clearCartAlert}) => {
    return (
        <div className="carrito">
            <ToastContainer/>
            {cart.map((product)=>(
                <div key={product.id} className="items">
                    <div className="title-img roboto-regular">
                        <div className="cart-img"><img className="miniatura" src={product.img} alt="guitarras" /></div>
                        <h4 className="product-title">{product.title}</h4>
                    </div>
                    <div>
                        <h5 className="roboto-regular">Unidades: {product.quantity}</h5>
                        <h5 className="roboto-regular">Precio por unidad: $ {product.price}</h5>
                    </div>
                    <Button color="secondary" variant="outlined" size="small" startIcon={<DeleteIcon />}
                        onClick={()=>deleteById(product.id)}>Eliminar</Button>
                </div>
            ))}
            <div className="total-container">
                <h3 className="total roboto-regular">Total: $ {total}-.</h3>
                <div className="buttons">
                    <Button color="secondary" variant="outlined" startIcon={<DeleteIcon />}
                        onClick={clearCartAlert}>Cancelar Compra</Button>
                    {cart.length > 0 &&(<Link to="/checkout" ><Button color="secondary" variant="contained" endIcon={<ShoppingBagIcon style={{ color: '#3d3d3d' }}/>} >Realizar Compra</Button></Link>)}
                </div>
            </div>
        </div>
    )
}

export default Cart