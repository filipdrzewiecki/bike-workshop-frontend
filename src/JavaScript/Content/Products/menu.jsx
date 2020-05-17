import '../../Css/index.css';
import '../../Css/content.css';
import React from 'react';

import WrenchIcon from '../../../resources/icon/wrench.png';
import ClothingIcon from '../../../resources/icon/hanger.png';
import AccesoriesICon from '../../../resources/icon/torch.png';
import PartsIcon from '../../../resources/icon/cogwheel.png';
import { Link } from "react-router-dom";

const ProductsMenu = () => {
    return (
        <div className="section-parent">
            <div className="section-block-long">
                <div className="section-block-symbol"> <img src={WrenchIcon} alt="wrench"></img></div>
                <ul>
                    <li><Link to={'/products/tools/basic-tools'}>Zestaw podstawowych narzędzi do codziennych napraw</Link></li>
                    <li><Link to={'/products/tools/brands'}>Dobre i złe marki</Link></li>
                    <li><Link to={'/products/tools/house-workshop'}>Warsztat domowy</Link></li>
                </ul>
            </div>,
            <div className="section-block-long">
                <div className="section-block-symbol"> <img src={AccesoriesICon} alt="accessories"></img></div>
                <ul>
                    <li><Link to={'/products/accessories/multitool'}>Multitool</Link></li>
                    <li><Link to={'/products/accessories/lights'}>Lampki</Link></li>
                    <li><Link to={'/products/accessories/travel-bag'}>Sakwy i torby podróżne</Link></li>
                    <li><Link to={'/products/accessories/small-bag'}>Małe torby</Link></li>
                    <li><Link to={'/products/accessories/carrier'}>Bagażniki</Link></li>
                </ul>
            </div>,
            <div className="section-block-long">
                <div className="section-block-symbol"><img src={ClothingIcon} alt="clothing"></img></div>
                <ul>
                    <li><Link to={'/products/clothing/shoes'}>Buty</Link></li>
                    <li><Link to={'/products/clothing/pads'}>Pieluchy</Link></li>
                    <li><Link to={'/products/clothing/helmet'}>Kaski</Link></li>
                    <li><Link to={'/products/clothing/lycra'}>Komplety rowerowe z lycry</Link></li>
                    <li><Link to={'/products/clothing/casual'}>Luźne i codzienne stroje</Link></li>
                    <li><Link to={'/products/clothing/enduro'}>Stroje enduro</Link></li>
                </ul>
            </div>,
            <div className="section-block-long">
                <div className="section-block-symbol"> <img src={PartsIcon} alt="parts"></img></div>
                <ul>
                    <li><Link to={'/products/parts/brands'}>Główne marki napędu</Link></li>
                </ul>
            </div>
        </div>
    );

}

export default ProductsMenu;