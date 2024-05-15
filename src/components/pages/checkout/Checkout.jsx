//Importaciones:
import { Button, TextField } from "@mui/material"
import "../checkout/CheckoutContainer.css"
import SendIcon from '@mui/icons-material/Send'
import { Link } from "react-router-dom"

//JSX:
const Checkout = ({handleSubmit, handleChange, orderId}) => {
    return (
        <div className="checkout">
            {orderId ? (<div className="order">
                    <h4 className="order-text">¡Muchas gracias por su compra!</h4>
                    <h4 className="order-id">Su orden de compra es: {orderId}</h4>
                        <h4 className="more-products">¿Desea seguir comprando?</h4>
                        <div className="buttom-home"><Link to="/"><Button variant="contained" color="secondary">mas productos</Button></Link></div>
                </div>) :
            <form onSubmit={handleSubmit} className="form" >
                <h4 className="checkout-text">Complete el formulario para finalizar la compra:</h4>
                <div className="inputs">
                    <TextField 
                        variant="standard" 
                        type="text" 
                        label="nombre" 
                        color="secondary"
                        InputProps={{
                            style: {
                                color: '#e7e7e7' }}}
                        onChange={handleChange}
                        sx={{
                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                borderColor: '#e7e7e7'
                            },
                            "&:focus-within .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                borderColor: '#f8ff86'
                            },
                            "&:not(:focus-within) .MuiInputLabel-root": {
                                color: '#e7e7e7'
                            }
                        }}
                        name="name" />
                    <TextField 
                        variant="standard" 
                        type="text" 
                        label="telefono" 
                        color="secondary" 
                        InputProps={{
                            style: {
                                color: '#e7e7e7' }}}
                        onChange={handleChange}
                        sx={{
                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                borderColor: '#e7e7e7'
                            },
                            "&:focus-within .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                borderColor: '#f8ff86'
                            },
                            "&:not(:focus-within) .MuiInputLabel-root": {
                                color: '#e7e7e7'
                            }
                        }}
                        name="phone" />
                    <TextField 
                        variant="standard" 
                        type="text" 
                        label="email" 
                        color="secondary" 
                        InputProps={{
                            style: {
                                color: '#e7e7e7' }}}
                        onChange={handleChange}
                        sx={{
                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                borderColor: '#e7e7e7'
                            },
                            "&:focus-within .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                borderColor: '#f8ff86'
                            },
                            "&:not(:focus-within) .MuiInputLabel-root": {
                                color: '#e7e7e7'
                            }
                        }}
                        name="email" />
                </div>
            <div className="send-button">
                <Button 
                    type="submit" 
                    variant= "contained" 
                    color="secondary" 
                    size="large"
                    endIcon={<SendIcon style={{ color: '#3d3d3d' }} />} >Enviar</Button>
            </div>
        </form>
            }
        </div>
    )
}

export default Checkout