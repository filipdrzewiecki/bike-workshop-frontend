import React from 'react';
import '../../Css/index.css';
import '../../Css/content.css';
import FrameIcon from '../../../resources/icon/frame.png';
import DriveIcon from '../../../resources/icon/drivetrain.png';
import WheelIcon from '../../../resources/icon/wheel.png';
import ForkIcon from '../../../resources/icon/fork.png';
import { Link } from "react-router-dom";

const CompatibilityMenu = () => {
    return (
        <div className="section-parent">
            <div className="section-block-long">
                <div className="section-block-symbol"><img src={FrameIcon} alt="frame"></img></div>
                <ul>
                    <li><Link to={'/compatibility/frame/bottom-bracket'}>Suport</Link></li>
                    <li><Link to={'/compatibility/frame/headset'}>Stery</Link></li>
                    <li><Link to={'/compatibility/frame/seatpost'}>Sztyca</Link></li>
                    <li><Link to={'/compatibility/frame/stem'}>Mostek</Link></li>
                    <li><Link to={'/compatibility/frame/handlebar'}>Kierownica</Link></li>
                    <li><Link to={'/compatibility/frame/technologies/hollowtech'}>[Technologia] Hollowtech</Link></li>
                </ul>
            </div>,
            <div className="section-block-long">
                <div className="section-block-symbol"> <img src={DriveIcon} alt="drivetrain"></img></div>
                <ul>
                    <li><Link to={'/compatibility/drivetrain/cassette'}>Kaseta</Link></li>
                    <li><Link to={'/compatibility/drivetrain/rear-derailleur'}>Przerzutka tylna</Link></li>
                    <li><Link to={'/compatibility/drivetrain/front-derailleur'}>Przerzutka przednia</Link></li>
                    <li><Link to={'/compatibility/drivetrain/crank'}>Korba</Link></li>
                </ul>
            </div>,
            <div className="section-block-long">
                <div className="section-block-symbol"> <img src={ForkIcon} alt="frame"></img></div>
                <ul>
                    <li><Link to={'/compatibility/suspension/disciplines'}>Dyscypliny amortyzatorów</Link></li>
                    <li><Link to={'/compatibility/suspension/fork-types'}>Typy amortyzatorów</Link></li>
                    <li><Link to={'/compatibility/suspension/steering-tube'}>Rura sterowa</Link></li>
                    <li><Link to={'/compatibility/suspension/damper'}>Dampery</Link></li>
                </ul>
            </div>,
            <div className="section-block-long">
                <div className="section-block-symbol"> <img src={WheelIcon} alt="wheel"></img></div>
                <ul>
                    <li><Link to={'/compatibility/wheel/types'}>Typy kół</Link></li>
                    <li><Link to={'/compatibility/wheel/tyre-to-rim'}>Stosunek szerokości do obręczy</Link></li>
                    <li><Link to={'/compatibility/wheel/hub'}>Piasty</Link></li>
                    <li><Link to={'/compatibility/wheel/spokes'}>Szprychy i nyple</Link></li>
                    <li><Link to={'/compatibility/wheel/rim'}>Obręcze</Link></li>
                    <li><Link to={'/compatibility/wheel/technologies/tubeless'}>[Technologia] Tubeless</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default CompatibilityMenu;