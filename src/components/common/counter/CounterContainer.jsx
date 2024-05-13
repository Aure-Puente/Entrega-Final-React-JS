//Importaciones:
import { useState } from "react"
import Counter from "./Counter.jsx"


//Lógica:
export const CounterContainer = ({stock, initial=1, onAdd}) => {
    const [contador, setContador] = useState(initial)

    const sumar = ()=>{
        if(contador < stock){
            setContador(contador + 1)
        }else{
            alert("stock maximo")
        }
    }

    const restar = ()=>{
        if(contador > 1){
            setContador(contador - 1)
        }else{
            alert("no se puede menos de un producto")
        }
    }

    let objectProps = {
        restar, sumar, contador, onAdd
    }

    //JSX:
    return <Counter {...objectProps} />
}
