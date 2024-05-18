//Importaciones:
import { Button } from "@mui/material"
import "../counter/CounterContainer.css"


//JSX:
const Counter = ({sumar, restar, contador, onAdd}) => {
    return (
        <div>
            <div className="contador">
                <Button color="secondary" size="small" style={{ fontSize: '40px',  }}
                    onClick={restar}>-</Button>
                <h4>{contador}</h4>
                <Button color="secondary" size="small" style={{ fontSize: '40px',  }}
                    onClick={sumar}>+</Button>
            </div>
            <div className="agregar">
                <Button color="secondary"variant="outlined" size="large"
                    onClick={()=>{
                        onAdd(contador)}} >Agregar al Carrito</Button>
            </div>
        </div>
    )
}

export default Counter