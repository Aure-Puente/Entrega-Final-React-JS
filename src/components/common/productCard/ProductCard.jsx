//Importaciones:
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


//JSX:
const ProductCard = ({title, description, price, img, id}) => {
    return (
        <Card sx={{ maxWidth: 345, height: 550, display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
            <CardMedia
                sx={{ height: 300, backgroundSize: "contain" }}
                image={img}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    $ {price}.-
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/itemDetail/${id}`}>
                    <Button size="small">Detalles</Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default ProductCard