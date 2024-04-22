//Importaciones:
import { Link } from "react-router-dom"
import "../footer/Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';


//JSX:
const Footer = () => {
    return (
        <div className="footer">
            <div className="logos">
                <Link to= "/"><FacebookIcon fontSize='large' color="secondary"/></Link>
                <Link to= "/"><InstagramIcon fontSize='large' color="secondary"/></Link>
                <Link to= "/"><YouTubeIcon fontSize='large' color="secondary"/></Link>
                <Link to= "/"><XIcon fontSize='large' color="secondary"/></Link>
                <Link to= "/"><MailIcon fontSize='large' color="secondary"/></Link>
                <Link to= "/"><CallIcon fontSize='large' color="secondary"/></Link>
            </div>
            <div className="logofooter">
                <Link><QueueMusicIcon fontSize='large' color="secondary"/></Link>
            </div>
            <div className="links">
                <Link to="/">Información Legal</Link>
                <Link to="/">Política de privacidad</Link>
            </div>
        </div>
    )
}

export default Footer