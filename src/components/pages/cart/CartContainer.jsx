//Importaciones:
import Cart from "./Cart.jsx"


//Lógica:
/*Declaramos una variable con un array vacio que luego se irá llenando con los productos seleccionados
para la compra. Pasamos la informacion de los productos al presentacional a traves de props.*/
const CartContainer = () => {
    let productosAgregados = []

    return <Cart productosAgregados = {productosAgregados} />
}

export default CartContainer