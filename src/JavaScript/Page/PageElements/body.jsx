import '../../Css/index.css';
import React from 'react';
import SideMenu from './sideMenu.jsx';
import { Route, Switch, Link } from "react-router-dom";

//News
import Main from '../../Content/News/main.jsx';
//Service
import Headset from '../../Content/Service/Articles/headset-article.jsx';
import ForkReplaceArticle from '../../Content/Service/Articles/fork-article.jsx';
import Service from '../../Content/Service/service.jsx';
//Maintenance
import Maintenance from '../../Content/Maintenance/maintenance.jsx';
//Compatibility
import Compatibility from '../../Content/Compatibility/compatibility.jsx';
import HubCompatibilityArticle from '../../Content/Compatibility/Articles/hub';
import CassetteArticle from '../../Content/Compatibility/Articles/cassette';
import BottomBracketArticle from '../../Content/Compatibility/Articles/bottom.bracket-article';
import HeadsetType from '../../Content/Compatibility/Articles/headset-article.jsx';
import TyreToRim from '../../Content/Compatibility/Articles/tyres';
import SpokesArticle from '../../Content/Compatibility/Articles/spokes-article';
import WheelTypesArticle from '../../Content/Compatibility/Articles/wheel.types-article';

//Products
import Products from '../../Content/Products/products.jsx';
//About
import About from '../../Content/About/about.jsx';

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
                <Route path="/service/frame/headset" exact component={Headset} />
                <Route path="/service/frame/fork-replace" exact component={ForkReplaceArticle} />
                {/* MAINTENANCE */}
                <Route path="/maintenance" component={Maintenance} />
                {/* COMPATIBILITY */}
                <Route path="/compatibility" component={Compatibility} />
                <Route path="/compatibility/frame/headset" component={HeadsetType} />
                <Route path="/compatibility/frame/bottom-bracket" component={BottomBracketArticle} />
                <Route path="/compatibility/wheel/hub" component={HubCompatibilityArticle} />
                <Route path="/compatibility/wheel/tyre-to-rim" component={TyreToRim} />
                <Route path="/compatibility/wheel/types" component={WheelTypesArticle} />
                <Route path="/compatibility/wheel/spokes" component={SpokesArticle} />
                <Route path="/compatibility/drivetrain/cassette" component={CassetteArticle} />
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