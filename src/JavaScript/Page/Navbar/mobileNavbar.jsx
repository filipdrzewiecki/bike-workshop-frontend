import React, { Component } from 'react';
import './mobileNavbar.css';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import CompanyLogo from '../../../resources/companyLogo.png';
import { Link } from "react-router-dom";

import SideDrawer from './SideDrawer/SideDrawer.jsx';
import Backdrop from './Backdrop/Backdrop.jsx';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
        <div className="navbarLogo_web" >
                    <Link to="/"><img src={CompanyLogo} alt="companyLogo" ></img></Link>
                </div>
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>

        </nav>
    </header>
);

export default class Navbar extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div style={{ height: '100%' }}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}

            </div>
        );
    }
}