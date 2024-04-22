//Importaciones:
import "../cart/CartContainer.css"

//JSX:
/*A traves de props, desde CartContainer, llega un array con los productos seleccionados para la compra y
mas tarde podremos pintar la página del carrito con la informacion y los detalles necesarios.*/
const Cart = ({productosAgregados}) => {
    return (
        <div className="cart-container">
            <h2>Este es el carrito</h2>
        </div>
    )
}

export default Cart