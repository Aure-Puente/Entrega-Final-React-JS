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
        <Card sx={{ maxWidth: 345, height: 550, display: "flex", flexDirection: "column", justifyContent: "space-around", border: "#f8ff86", borderStyle: 'inset'}}>
            <CardMedia
                sx={{ height: 300, backgroundSize: "contain" }}
                image={img}
                title="guitarra"
            />
            <CardContent
            sx={{backgroundColor: "#6d6d6d"}}>
                <Typography gutterBottom variant="h5" component="div" sx={{color: "#262626"}}>
                    {title}
                </Typography>
                <Typography variant="body2" color="#f6f6f6" fontSize={"15px"}>
                    {description}
                </Typography>
                <Typography variant="body2" color="#f6f6f6" fontSize={"20px"}>
                    $ {price}.-
                </Typography>
            </CardContent>
            <CardActions
            sx={{backgroundColor: "#5d5d5d"}}>
                <Link to={`/itemDetail/${id}`}>
                    <Button size="small"sx={{ color:"#f8ff86"}} variant='contained' >Detalles</Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default ProductCard