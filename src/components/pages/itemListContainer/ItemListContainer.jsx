//Importacion:
import "../itemListContainer/ItemListContainer.css"

//Utilizamos las props para recibir el saludo de bienvenida
export const ItemListContainer = ({greetings}) => {    
    return (
        <div>
            <h3 className="saludo">{greetings}</h3>
        </div>
    )
}