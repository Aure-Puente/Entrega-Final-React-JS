//Importaciones:
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


//JSX:
const ItemDetail = ({item}) => {
    return (
        (
            <Card sx={{ maxWidth: 345, height: 550, display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                <CardMedia
                    sx={{ height: 300, backgroundSize: "contain" }}
                    image={item.img}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        $ {item.price}.-
                    </Typography>
                </CardContent>
            </Card>
        )
    )
}

export default ItemDetail