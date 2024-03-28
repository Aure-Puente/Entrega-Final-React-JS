//Importaciones
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Badge } from "@mui/material"

//Utilizamos los iconos del carrito con el badge desde la libreria de Material UI
export const CartWidget = () => {
    return (
        <Box>
            <Badge badgeContent={1} color="secondary">
                <ShoppingCartIcon fontSize='large' />
            </Badge>
        </Box>
    )
}
