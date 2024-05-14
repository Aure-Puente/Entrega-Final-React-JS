//Importaciones:
import { useFormik } from "formik"
import * as Yup from "yup"
import Checkout from "./Checkout"
import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import { addDoc, collection, updateDoc } from "firebase/firestore"
import { db } from "../../../firebaseConfig"


//Lógica:
const CheckoutContainer = () => {

    const {cart, getTotalPrice, clearCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    let total = getTotalPrice()


    const {handleChange, handleSumbit, errors} = useFormik({
        initialValues: {name: "", email: "", phone: ""},
        onSubmit:()=>{
            let obj = {

            }
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("Este campo es obligatorio"),
            email: Yup.string().email("El email es inválido").required("Este campo es obligatorio"),
            phone: Yup.number().required("Este campo es obligatorio")
            
        }),
        validateOnChange: false
    })




    return <Checkout handleChange={handleChange} handleSumbit={handleSumbit} errors={errors} />
}

export default CheckoutContainer