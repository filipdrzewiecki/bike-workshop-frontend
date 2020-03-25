import React from 'react';
import NavbarButton from './navbarButton.jsx';
import CompanyLogo from '../../../resources/companyLogo.png';
import '../../Css/navbar.css';



const Navbar = () => {

    return (
        <div className="navbar-container" >
            <div className="navbar" >
                <div className="navbarLogo" >
                    <img src={CompanyLogo} alt="companyLogo" ></img>
                </div>

                <div className="navbarButtons" >
                    <NavbarButton adress="/" buttonName="News" />
                    <NavbarButton adress="/service" buttonName="Serwis" />
                    <NavbarButton adress="/maintenance" buttonName="Konserwacja" />
                    <NavbarButton adress="/compatibility" buttonName="Kompatybilność" />
                    <NavbarButton adress="/products" buttonName="Polecane produkty" />
                    <NavbarButton adress="/about" buttonName="O nas" />
                </div>
            </div>
        </div>
    );
}



export default Navbar;