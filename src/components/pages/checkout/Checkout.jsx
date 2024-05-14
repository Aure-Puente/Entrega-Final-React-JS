//Importaciones:
import { Button, TextField } from "@mui/material"


//JSX:
const Checkout = ({handleSubmit, handleChange, errors}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField 
                    variant="outlined" 
                    type="text" label="nombre" 
                    onChange={handleChange} 
                    name="name" 
                    error={errors.name ? true : false}
                    helperText={errors.name} />

                <TextField 
                    variant="outlined" 
                    type="text" 
                    placeholder="email" 
                    onChange={handleChange} 
                    name="email" 
                    error={errors.email ? true : false} 
                    helperText={errors.email} />

                <TextField 
                    variant="outlined" 
                    type="text" placeholder="teléfono" 
                    onChange={handleChange} 
                    name="phone" 
                    error={errors.phone ? true : false} 
                    helperText={errors.phone} />


                <Button type="submit" variant= "container" >Enviar</Button>
            </form>
        </div>
    )
}

export default Checkout

