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
                <h1>Regulacja <img className="icon" src={WrenchIcon} alt="wrench"></img></h1>
                <ul>
                    <li><Link to={'/maintenance/adjustments/play'}>Czy rower ma luzy</Link></li>
                    <li><Link to={'/maintenance/adjustments/tyre-preassure'}>Prawidłowe ciśnienie w kołach</Link></li>
                    <li><Link to={'/maintenance/adjustments/suspension-preassure'}>Prawidłowe ciśnienie amortyzatora</Link></li>
                    <li><Link to={'/maintenance/adjustments/drivetrain'}>Kiedy łańcuch i napęd są do wymiany</Link></li>
                    <li><Link to={'/maintenance/adjustments/tyres'}>Kiedy opony są do wymiany</Link></li>
                </ul>
            </div>,
            <div className="section-block-long">
                <h1>Czyszczenie i smarowanie <img className="icon" src={SpongeIcon} alt="sponge"></img></h1>
                <ul>
                    <li><Link to={'/maintenance/wash/bicycle'}>Jak myć rower</Link></li>
                    <li><Link to={'/maintenance/wash/drivetrain'}>Czeszczenie napędu</Link></li>
                    <li><Link to={'/maintenance/wash/chain-lubricating'}>Smarowanie łańcucha</Link></li>
                </ul>
            </div>
        </div>
    );

}

export default MaintenanceMenu;