import '../../Css/index.css';
import '../../Css/content.css';
import React from 'react';

import WrenchIcon from '../../../resources/icon/wrench.png';
import SpongeIcon from '../../../resources/icon/sponge.png';
import { Link } from "react-router-dom";

const MaintenanceMenu = () => {
    return (
        <div className="section-parent">
            <div className="section-block-long">
                <h1>Usterki <img className="icon" src={WrenchIcon} alt="wrench"></img></h1>
                <ul>
                    <li><Link to={'/maintenance/defects/play'}>Czy rower ma luzy</Link></li>
                    <li><Link to={'/maintenance/defects/wheel-preassure'}>Prawidłowe ciśnienie w kołach</Link></li>
                    <li><Link to={'/maintenance/defects/fork-preassure'}>Prawidłowe ciśnienie amortyzatora</Link></li>
                    <li><Link to={'/maintenance/defects/damper-preassure'}>Prawidłowe ciśnienie dampera</Link></li>
                    <li><Link to={'/maintenance/defects/drivetrain'}>Kiedy łańcuch i napęd są do wymiany</Link></li>
                    <li><Link to={'/maintenance/defects/tyres'}>Kiedy opony są do wymiany</Link></li>
                </ul>
            </div>,
            <div className="section-block-long">
                <h1>Czyszczenie i smarowanie <img className="icon" src={SpongeIcon} alt="sponge"></img></h1>
                <ul>
                    <li><Link to={'/maintenance/wash/bicycle'}>Jak myć rower</Link></li>
                    <li><Link to={'/maintenance/wash/chain'}>Czeszczenie i smarowanie łańcucha</Link></li>
                    <li><Link to={'/maintenance/wash/gears'}>Jak wyczyścić zębatki</Link></li>
                    <li><Link to={'/maintenance/wash/derailleurs'}>Czyszczenie przerzutek</Link></li>
                    <li><Link to={'/maintenance/wash/wheels'}>Czyszczenie kół</Link></li>
                </ul>
            </div>
        </div>
    );

}

export default MaintenanceMenu;