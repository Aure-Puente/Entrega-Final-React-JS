//Importaciones:
import { useState } from "react"
import Counter from "./Counter.jsx"
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'


//Lógica:
export const CounterContainer = ({stock, initial=1, onAdd}) => {
    const [contador, setContador] = useState(initial)

    const maxAlert=()=>{
        toast.info('Alcanzaste el máximo de stock', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            className: 'custom-toast',
            bodyClassName: 'custom-toast-body'
            });
    }

    const minAlert=()=>{
        toast.info('El mínimo permitido es de una unidad', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            className: 'custom-toast',
            bodyClassName: 'custom-toast-body'
            });
    }

    const sumar = ()=>{
        if(contador < stock){
            setContador(contador + 1)
        }else{
            maxAlert()
        }
    }

    const restar = ()=>{
        if(contador > 1){
            setContador(contador - 1)
        }else{
            minAlert()
        }
    }

    let objectProps = {
        restar, sumar, contador, onAdd
    }

    return <Counter {...objectProps} />
}
