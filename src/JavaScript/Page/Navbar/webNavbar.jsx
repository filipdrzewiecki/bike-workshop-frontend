import React from 'react';
import CompanyLogo from '../../../resources/companyLogo.png';
import './webNavbar.css';
import { Link } from "react-router-dom";



const Navbar = () => {

    return (
        <div className="navbar-container" >
            <div className="navbar_web" >
            
                <div className="navbarLogo_web" >
                    <Link to="/"><img src={CompanyLogo} alt="companyLogo" ></img></Link>
                </div>
                
                <div className="navbarButtons_web" >
                    <Link to = "/service" > Serwis </Link>
                    <Link to = "/maintenance" > Konserwacja </Link>
                    <Link to = "/compatibility" > Kompatybilność </Link>
                    <Link to = "/products" > Produkty </Link>
                </div>
            </div>
        </div>
    );
}



export default Navbar;