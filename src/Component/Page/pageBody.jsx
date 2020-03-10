import '../Css/page.css';
import React from 'react';
import SideMenu from './sideMenu.jsx';
import { Route, Switch, Link } from "react-router-dom";

//News
import Main from '../Content/News/main';
//Service
import Headset from '../Content/Service/HeadSet/headset.jsx';
import Service from '../Content/Service/service';
//Maintenance
import Maintenance from '../Content/Maintenance/maintenance';
//Compatibility
import Compatibility from '../Content/Compatibility/main.jsx';
import HubCompatibilityArticle from '../Content/Compatibility/Hub/hub';
import CassetteArticle from '../Content/Compatibility/Cassette/cassette';
import BottomBracketArticle from '../Content/Compatibility/BottomBracket/article';
import HeadsetType from '../Content/Compatibility/Headset/article.jsx';
import TyreToRim from '../Content/Compatibility/Tyres/tyres';
//Products
import Products from '../Content/Products/products';
//About
import About from '../Content/About/about';

const LeftMenu = () => {
    return (
        <SideMenu
            paragraphs={[
                <Link to={'/service/headset'}>Serwis sterów</Link>,
                <Link to={'/compatibility/wheel/tyre-to-rim'}>Jak dobrać opony</Link>,
                <Link to={'/compatibility/drivetrain/cassette'}>Jak dobrać kasetę</Link>
            ]}
        />
    );
}

const RightMenu = () => {
    return (
        <SideMenu
            paragraphs={[
                <Link to={'/service/headset'}>BikeAdvice App</Link>,
                <Link to={'/service/headset'}>Sklepy w twojej okolicy</Link>,
                <Link to={'/service/headset'}>Lokalne wyścigi</Link>
            ]}
        />
    );
}

const PageBody = () => {
    return (
        <div className="pageBody">
            <LeftMenu />
            <Switch>
                {/* NEWS */}
                <Route path="/" exact component={Main} />
                {/* SERVICE */}
                <Route path="/service" exact component={Service} />
                <Route path="/service/headset" exact component={Headset} />
                {/* MAINTENANCE */}
                <Route path="/maintenance" component={Maintenance} />
                {/* COMPATIBILITY */}
                <Route path="/compatibility/frame/headset" component={HeadsetType} />
                <Route path="/compatibility/frame/bottom-bracket" component={BottomBracketArticle} />
                <Route path="/compatibility/wheel/hub" component={HubCompatibilityArticle} />
                <Route path="/compatibility/wheel/tyre-to-rim" component={TyreToRim} />
                <Route path="/compatibility/drivetrain/cassette" component={CassetteArticle} />
                <Route path="/compatibility" component={Compatibility} />
                {/* PRODUCTS */}
                <Route path="/products" component={Products} />
                {/* ABOUT */}
                <Route path="/about" component={About} />
            </Switch>
            <RightMenu />
        </div>
    );
}

export default PageBody;