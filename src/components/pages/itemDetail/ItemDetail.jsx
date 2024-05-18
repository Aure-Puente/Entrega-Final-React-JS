//Importaciones:
import { ToastContainer } from "react-toastify"
import { CounterContainer } from "../../common/counter/CounterContainer.jsx"
import "../itemDetail/ItemDetailContainer.css"


//JSX:
const ItemDetail = ({item, onAdd}) => {
    return (
        <div className='detail-container'>
            <ToastContainer/>
            <div>
                <img src={item.img} alt="guitarra" />
            </div>
            <div className="details">
                <h2 className="roboto-regular">{item.title}</h2>
                <h3 className="roboto-regular">{item.description}</h3>
                <h4 className="roboto-regular">Precio: $ {item.price}-.</h4>
                <CounterContainer stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail