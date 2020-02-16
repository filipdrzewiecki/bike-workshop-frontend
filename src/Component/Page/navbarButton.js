import React from 'react';
import '../Css/index.css';
import { Link } from "react-router-dom";


const NavbarButton = (props) => {
    return (
        <Link to={props.adress}>{props.buttonName}</Link>
    );
}

export default NavbarButton;