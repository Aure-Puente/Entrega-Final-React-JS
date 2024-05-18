//Importaciones: 
import { Outlet } from "react-router-dom"
import Navbar from "./navbar/Navbar.jsx"
import Footer from "./footer/Footer.jsx"


//JSX:
export const Layout = () => {
    return (
        <div>
            <Navbar />
            <div style={{minHeight: "calc(100vh - 330px"}}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}