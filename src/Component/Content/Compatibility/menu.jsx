import React from 'react';
import '../../Css/index.css';
import '../../Css/content.css';
import FrameIcon from '../../../resources/frame.png';
import DriveIcon from '../../../resources/drivetrain.png';
import WheelIcon from '../../../resources/wheel.png';
import ForkIcon from '../../../resources/fork.png';
import { Link } from "react-router-dom";

const CompatibilityMenu = () => {
    return (
        <div className="section-parent">
            <div className="section-block">
                <h1>Rama <img className="icon" src={FrameIcon} alt="frame"></img></h1>
                <ul>
                    <li><Link to={'/compatibility/frame/bottom-bracket'}>Suport</Link></li>
                    <li><Link to={'/compatibility/frame/headset'}>Stery</Link></li>
                    <li>Szerokość opony i obręczy - IN CONSTRUCTION</li>
                    <li>Mostek rowerowy - IN CONSTRUCTION</li>
                </ul>
            </div>,
    <div className="section-block">
                <h1>Napęd <img className="icon" src={DriveIcon} alt="frame"></img></h1>
                <ul>
                    <li><Link to={'/compatibility/drivetrain/cassette'}>Kaseta</Link></li>
                    <li>Kaseta - IN CONSTRUCTION</li>
                    <li>Wymiana łańcucha - IN CONSTRUCTION</li>
                    <li>Wymiana zębatek korby - IN CONSTRUCTION</li>
                </ul>
            </div>,
    <div className="section-block">
                <h1>Amortyzator <img className="icon" src={ForkIcon} alt="frame"></img></h1>
                <ul>
                    <li><Link to={'/service/frame/headset'}>Czyszczenie</Link></li>
                    <li>Wymiana uszczelek - IN CONSTRUCTION</li>
                    <li>Wymiana oleju - IN CONSTRUCTION</li>
                    <li>Serwis miesięczny - IN CONSTRUCTION</li>
                </ul>
            </div>,
    <div className="section-block">
                <h1>Koła <img className="icon" src={WheelIcon} alt="frame"></img></h1>
                <ul>
                    <li><Link to={'/compatibility/wheel/tyre-to-rim'}>Stosunek szerokości do obręczy</Link></li>
                    <li><Link to={'/compatibility/wheel/hub'}>Piasty</Link></li>
                    <li><Link to={'/compatibility/wheel/types'}>Typy kół</Link></li>
                    <li><Link to={'/compatibility/wheel/spokes'}>Szprychy i nyple</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default CompatibilityMenu;