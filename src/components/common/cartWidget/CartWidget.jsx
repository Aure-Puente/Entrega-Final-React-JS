//Importaciones:
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Badge } from "@mui/material"
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext.jsx';


//Lógica:
export const CartWidget = () => {

    const {cart}= useContext(CartContext)

    //JSX:
    return (
        <Box>
            <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon fontSize='large' sx={{color: "#e7e7e7"}} />
            </Badge>
        </Box>
    )
}