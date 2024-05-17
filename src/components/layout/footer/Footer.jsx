//Importaciones:
import { Link } from "react-router-dom"
import "../footer/Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';


//JSX:
const Footer = () => {
    return (
        <div className="footer">
            <div className="logos">
                <Link to= "/" className="social"><FacebookIcon fontSize='large' color="secondary"/></Link>
                <Link to= "/" className="social"><InstagramIcon fontSize='large' color="secondary"/></Link>
                <Link to= "/" className="social"><YouTubeIcon fontSize='large' color="secondary"/></Link>
                <Link to= "/" className="social"><XIcon fontSize='large' color="secondary"/></Link>
                <Link to= "/" className="social"><MailIcon fontSize='large' color="secondary"/></Link>
                <Link to= "/" className="social"><CallIcon fontSize='large' color="secondary"/></Link>
            </div>
            <div className="logofooter">
                <h3 className="siglas fugaz-one-regular">GS</h3>
            </div>
            <div className="links">
                <Link to="/"className="legal roboto-regular">Información Legal</Link>
                <Link to="/"className="legal roboto-regular">Política de privacidad</Link>
            </div>
        </div>
    )
}

export default Footer