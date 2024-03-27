import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Badge } from "@mui/material"

export const CartWidget = () => {
    return (
        <Box>
            <Badge badgeContent={1} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </Box>
    )
}
