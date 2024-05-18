//Importaciones:
import { CartWidget } from '../../common/cartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';
import "../navbar/Navbar.css"


//JSX:
const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='logo'>
                <Link to="/"><h1 className= "fugaz-one-regular">GUITAR SHOP</h1></Link>
            </div>
            <ul className='navbar russo-one-regular'>
                <Link to="/">TODAS</Link>
                <Link to="category/acústicas">Acústicas</Link>
                <Link to="category/eléctricas">Eléctricas</Link>
                <Link to="category/electroacústicas">Electroacústicas</Link>
            </ul>
            <Link to="/cart" className='cart'><CartWidget /></Link>
        </div>
    )
}

export default Navbar