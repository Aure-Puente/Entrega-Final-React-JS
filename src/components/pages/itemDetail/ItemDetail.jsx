//Importaciones:
import { CounterContainer } from "../../common/counter/CounterContainer"
import "../itemDetail/ItemDetailContainer.css"


//JSX:
const ItemDetail = ({item, onAdd}) => {
    return (
        <div className='detail-container'>
            <div>
                <img src={item.img} alt="guitarra" />
            </div>
            <div className="details">
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
                <h4>Precio: $ {item.price}-.</h4>
                <CounterContainer stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail