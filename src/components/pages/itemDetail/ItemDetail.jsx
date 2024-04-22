//Importaciones:
import "../itemDetail/ItemDetailContainer.css"


//JSX:
//Llega la informacion desde ItemDetailContainer.jsx y la usamos para pintarla en pantalla.
const ItemDetail = ({item}) => {
    return (
        <div className='detail-container'>
            <div>
                <img src={item.img} alt="guitarra" />
            </div>
            <div className="details">
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
                <h4>Precio: $ {item.price}-.</h4>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail