//Importaciones:
import { CartWidget } from '../../common/cartWidget/CartWidget.jsx';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import { Link } from 'react-router-dom';
import "../navbar/Navbar.css"


//JSX:
const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='logo'>
            <Link to="/">            
                <QueueMusicIcon color="secondary"sx={{display: { xs: 'none', md: 'flex' }, mr: 1,}}/>
            </Link>
            <Link to="/"><h2>GUITAR SHOP</h2></Link>
            </div>
            <ul className='navbar'>
                <Link to="/">TODAS</Link>
                <Link to="category/acústicas">Acústicas</Link>
                <Link to="category/eléctricas">Eléctricas</Link>
                <Link to="category/electroacústicas">Electroacústicas</Link>
            </ul>
            <Link to="/" className='cart'><CartWidget /></Link>
        </div>
    )
}

export default Navbar