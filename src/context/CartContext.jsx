//Importaciones:
import { createContext, useState } from "react";
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'


//Lógica:
export const CartContext = createContext()

const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    //Función para agregar productos al carrito:
    const addToCart = (product)=>{
        let exist = isInCart(product.id)
        if(exist){
            let newArray = cart.map((elemento)=>{
                if(elemento.id === product.id){
                    return{...elemento, quantity: product.quantity}
                }else{
                    return elemento
                }
            })
            setCart(newArray)
        }else{
            setCart([...cart, product])
        }
    }

    //Función para limpiar el carrito:
    const clearCart = ()=>{
        setCart([])
    }

    //Función para eliminar un producto:
    const deleteById = (id)=>{
        let newArray = cart.filter(product => product.id !== id)
        setCart(newArray)
        toast.info('Producto eliminado del carrito', {
            position: "top-left",
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

    //Función para corroborar si ya se encuentra el producto en el carrito:
    const isInCart = (id)=>{
        let bool = cart.some(product => product.id === id)
        return bool
    }

    //Función que determina las unidades agregadas del producto al carrito:
    const getQuantityById = (id)=>{
        let product = cart.find(el => el.id === id)
        return product?.quantity
    }

    //Función que determina el precio total:
    const getTotalPrice = ()=>{
        let total = cart.reduce((acc, elemento)=>{
            return acc + (elemento.quantity * elemento.price)
        }, 0)
        return total
    }

    //Función que determina cuantos productos tenemos en el carrito:
    const getTotalItems = ()=>{
        let total = cart.reduce((acc, elemento)=>{
            return acc + elemento.quantity
        }, 0)
        return total
    }

    //Variable que contiene toda la información del contexto:
    let data = {cart, addToCart, clearCart, deleteById, getQuantityById, getTotalPrice, getTotalItems}

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export default CartContextProvider