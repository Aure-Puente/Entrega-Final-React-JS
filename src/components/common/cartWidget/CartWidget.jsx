//Importaciones:
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Badge } from "@mui/material"


//JSX:
export const CartWidget = () => {
    return (
        <Box>
            <Badge badgeContent={1} color="secondary">
                <ShoppingCartIcon fontSize='large' />
            </Badge>
        </Box>
    )
}