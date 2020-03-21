import '../../Css/index.css';
import '../../Css/content.css';
import React from 'react';

import WrenchIcon from '../../../resources/icon/wrench.png';
import SpongeIcon from '../../../resources/icon/sponge.png';
import { Link } from "react-router-dom";

const ProductsMenu = () => {
    return (
        <div className="section-parent">
            <div className="section-block-long">
                <h1>Narzędzia <img className="icon" src={WrenchIcon} alt="wrench"></img></h1>
                <ul>
                    <li><Link to={'/products/tools/headset'}>Czy rower ma luzy</Link></li>
                    <li><Link to={'/products/tools/seatpost'}>Prawidłowe ciśnienie w kołach</Link></li>
                    <li><Link to={'/products/tools/stem'}>Kiedy łańcuch i napęd są do wymiany</Link></li>
                    <li><Link to={'/products/tools/handlebar'}>Kiedy opony są do wymiany</Link></li>
                </ul>
            </div>,
            <div className="section-block-long">
                <h1>Akcesoria <img className="icon" src={SpongeIcon} alt="sponge"></img></h1>
                <ul>
                    <li><Link to={'/products/accessories/bottom-bracket'}>Jak myć rower</Link></li>
                    <li><Link to={'/products/accessories/cassette'}>Czeszczenie i smarowanie łańcucha</Link></li>
                    <li><Link to={'/products/accessories/rearDerailleur'}>Jak wyczyścić zębatki</Link></li>
                    <li><Link to={'/products/accessories/frontDerailleur'}>Czyszczenie przerzutek</Link></li>
                    <li><Link to={'/products/accessories/crank'}>Czyszczenie kół</Link></li>
                </ul>
            </div>,
            <div className="section-block-long">
                <h1>Ubrania <img className="icon" src={SpongeIcon} alt="sponge"></img></h1>
                <ul>
                    <li><Link to={'/products/clothing/bottom-bracket'}>Jak myć rower</Link></li>
                    <li><Link to={'/products/clothing/cassette'}>Czeszczenie i smarowanie łańcucha</Link></li>
                    <li><Link to={'/products/clothing/rearDerailleur'}>Jak wyczyścić zębatki</Link></li>
                    <li><Link to={'/products/clothing/frontDerailleur'}>Czyszczenie przerzutek</Link></li>
                    <li><Link to={'/products/clothing/crank'}>Czyszczenie kół</Link></li>
                </ul>
            </div>,
            <div className="section-block-long">
                <h1>Części <img className="icon" src={SpongeIcon} alt="sponge"></img></h1>
                <ul>
                    <li><Link to={'/products/parts/bottom-bracket'}>Jak myć rower</Link></li>
                    <li><Link to={'/products/parts/cassette'}>Czeszczenie i smarowanie łańcucha</Link></li>
                    <li><Link to={'/products/parts/rearDerailleur'}>Jak wyczyścić zębatki</Link></li>
                    <li><Link to={'/products/parts/frontDerailleur'}>Czyszczenie przerzutek</Link></li>
                    <li><Link to={'/products/parts/crank'}>Czyszczenie kół</Link></li>
                </ul>
            </div>
        </div>
    );

}

export default ProductsMenu;