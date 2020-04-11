import React from 'react';
import '../../Css/index.css';
import '../../Css/content.css';
import FrameIcon from '../../../resources/icon/frame.png';
import DriveIcon from '../../../resources/icon/drivetrain.png';
import WheelIcon from '../../../resources/icon/wheel.png';
import ForkIcon from '../../../resources/icon/fork.png';
import { Link } from "react-router-dom";

const ServiceMenu = () => {
    return (
        <div className="section-parent">
            <div className="section-block">
                <h1>Rama <img className="icon" src={FrameIcon} alt="frame"></img></h1>
                <ul>
                    <li><Link to={'/service/frame/headset'}>Stery</Link></li>
                    <li><Link to={'/service/frame/bottom-bracket'}>Suport</Link></li>
                    <li><Link to={'/service/frame/fork-replace'}>Wymiana widelca</Link></li>
                    <li><Link to={'/service/frame/handlebar'}>Wymiana mostka i kierownicy</Link></li>
                </ul>
            </div>,
            <div className="section-block">
                <h1>Napęd <img className="icon" src={DriveIcon} alt="drivetrain"></img></h1>
                <ul>
                    <li><Link to={'/service/drivetrain/derailleurs'}>Regulacja przerzutek</Link></li>
                    <li><Link to={'/service/drivetrain/chain'}>Wymiana łańcucha</Link></li>
                    <li><Link to={'/service/drivetrain/cassette'}>Wymiana kasety</Link></li>
                    <li><Link to={'/service/drivetrain/crank'}>Wymiana korby</Link></li>
                </ul>
            </div>,
            <div className="section-block">
                <h1>Amortyzacja<img className="icon" src={ForkIcon} alt="suspension"></img></h1>
                <ul>
                    <li><Link to={'/service/suspension/travel-extension'}>Zwiększenie skoku widelca</Link></li>
                    <li><Link to={'/service/suspension/adjustment'}>Regulacja zawieszenia</Link></li>
                    <li><Link to={'/service/suspension/fork'}>Serwis amortyzatora</Link></li>
                    <li><Link to={'/service/suspension/damper'}>Serwis dampera</Link></li>
                </ul>
            </div>,
            <div className="section-block">
                <h1>Koła <img className="icon" src={WheelIcon} alt="frame"></img></h1>
                <ul>
                    <li><Link to={'/service/wheel/freehub'}>Serwis bębenka</Link></li>
                    <li><Link to={'/service/wheel/truing'}>Centrowanie</Link></li>
                    <li><Link to={'/service/wheel/building'}>Zaplot koła od zera</Link></li>
                    <li><Link to={'/service/wheel/spokes'}>Wymiana szprychy</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default ServiceMenu;