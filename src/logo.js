import React from 'react';
import './index.css';
import BikeLogo from './resources/BikeLogo.png';


const Logo = () => {
    return (
        <div className="logo">
            <img src={BikeLogo} alt="bikeLogo"></img>
            <div class="text-block">
    <           h4>Wszystko o rowerze w jednym miejscu</h4>
            </div>
        </div>
    );
}

export default Logo;