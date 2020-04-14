import React from 'react';
import NavbarButton from './navbarButton.jsx';
import CompanyLogo from '../../../resources/companyLogo.png';
import './navbar.css';



const Navbar = () => {

    return (
        <div className="navbar-container" >
            <div className="navbar_web" >
                <div className="navbarLogo_web" >
                    <img src={CompanyLogo} alt="companyLogo" ></img>
                </div>

                <div className="navbarButtons_web" >
                    <NavbarButton adress="/" buttonName="News" />
                    <NavbarButton adress="/service" buttonName="Serwis" />
                    <NavbarButton adress="/maintenance" buttonName="Konserwacja" />
                    <NavbarButton adress="/compatibility" buttonName="Kompatybilność" />
                    <NavbarButton adress="/products" buttonName="Produkty" />
                    <NavbarButton adress="/about" buttonName="Kontakt" />
                </div>
            </div>
        </div>
    );
}



export default Navbar;