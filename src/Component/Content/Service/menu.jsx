import React from 'react';
import '../../Css/index.css';
import '../../Css/content.css';
import FrameIcon from '../../../resources/frame.png';
import DriveIcon from '../../../resources/drivetrain.png';
import WheelIcon from '../../../resources/wheel.png';
import ForkIcon from '../../../resources/fork.png';
import { Link } from "react-router-dom";

const ServiceMenu = () => {
    return (
        <div className="section-parent">
        <div className="section-block">
            <h1>Rama <img className="icon" src={FrameIcon} alt="frame"></img></h1>
            <ul>
                <li><Link to={'/service/headset'}> Wymiana sterów </Link></li>
                <li>Wymiana wkładu suportu - IN CONSTRUCTION</li>
                <li>Wymiana siodła - IN CONSTRUCTION</li>
                <li>Wymiana mostka - IN CONSTRUCTION</li>
            </ul>
        </div>,
    <div className="section-block">
            <h1>Napęd <img className="icon" src={DriveIcon} alt="frame"></img></h1>
            <ul>
                <li><a href="/service/headset/1">Sprawdzenie zużycia napędu - IN CONSTRUCTION</a></li>
                <li>Kaseta - IN CONSTRUCTION</li>
                <li>Wymiana łańcucha - IN CONSTRUCTION</li>
                <li>Wymiana zębatek korby - IN CONSTRUCTION</li>
            </ul>
        </div>,
    <div className="section-block">
        <h1>Amortyzator <img className="icon" src={ForkIcon} alt="frame"></img></h1>
            <ul>
                <li><a href="/service/headset/1">Czyszczenie - IN CONSTRUCTION</a></li>
                <li>Wymiana uszczelek - IN CONSTRUCTION</li>
                <li>Wymiana oleju - IN CONSTRUCTION</li>
                <li>Serwis miesięczny - IN CONSTRUCTION</li>
            </ul>
        </div>,
    <div className="section-block">
        <h1>Koła <img className="icon" src={WheelIcon} alt="frame"></img></h1>
            <ul>
                <li><a href="/service/headset/1">Centrowanie - IN CONSTRUCTION</a></li>
                <li>Zaplatanie - IN CONSTRUCTION</li>
                <li>Centrowanie - IN CONSTRUCTION</li>
                <li>Serwis piast - IN CONSTRUCTION</li>
            </ul>
        </div>
    </div>
    );
}

export default ServiceMenu;