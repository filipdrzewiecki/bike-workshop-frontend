import '../../Css/index.css';
import React from 'react';
import SideMenu from './sideMenu.jsx';
import { Route, Switch, Link } from "react-router-dom";

//News
import Main from '../../Content/News/main.jsx';
//Service
import Service from '../../Content/Service/service.jsx';
import BottomBracketService from '../../Content/Service/Articles/bottom-bracket.jsx';
import HeadsetService from '../../Content/Service/Articles/headset.jsx';
import ForkReplace from '../../Content/Service/Articles/fork-replace.jsx';
import HandlebarService from '../../Content/Service/Articles/handlebar.jsx';
import CassetteService from '../../Content/Service/Articles/cassette.jsx';
import ChainService from '../../Content/Service/Articles/chain.jsx';
import CrankService from '../../Content/Service/Articles/crank.jsx';
import DerailleurService from '../../Content/Service/Articles/derailleur.jsx';
import ForkTravel from '../../Content/Service/Articles/fork-travel.jsx';
import ForkService from '../../Content/Service/Articles/fork.jsx';
import DamperService from '../../Content/Service/Articles/damper.jsx';
import SuspensionAdjustment from '../../Content/Service/Articles/suspension-adjustment.jsx';
import WheelTruing from '../../Content/Service/Articles/wheel-truing.jsx';
import WheelBuild from '../../Content/Service/Articles/wheel-build.jsx';
import SpokeReplace from '../../Content/Service/Articles/spoke-replace.jsx';
import FreeHubService from '../../Content/Service/Articles/freehub.jsx';

//Maintenance
import Maintenance from '../../Content/Maintenance/maintenance.jsx';
//Compatibility
import Compatibility from '../../Content/Compatibility/compatibility.jsx';
import HubCompatibilityArticle from '../../Content/Compatibility/Articles/hub.jsx';
import CassetteArticle from '../../Content/Compatibility/Articles/cassette.jsx';
import BottomBracketArticle from '../../Content/Compatibility/Articles/bottom-bracket.jsx';
import HeadsetType from '../../Content/Compatibility/Articles/headset.jsx';
import TyreToRim from '../../Content/Compatibility/Articles/tyres.jsx';
import SpokesArticle from '../../Content/Compatibility/Articles/spokes.jsx';
import WheelTypesArticle from '../../Content/Compatibility/Articles/wheel-types.jsx';

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
                <Route path="/service/frame/headset" exact component={HeadsetService} />
                <Route path="/service/frame/bottom-bracket" exact component={BottomBracketService} />
                <Route path="/service/frame/fork-replace" exact component={ForkReplace} />
                <Route path="/service/frame/handlebar" exact component={HandlebarService} />
                <Route path="/service/drivetrain/cassette" exact component={CassetteService} />
                <Route path="/service/drivetrain/chain" exact component={ChainService} />
                <Route path="/service/drivetrain/crank" exact component={CrankService} />
                <Route path="/service/drivetrain/derailleurs" exact component={DerailleurService} />
                <Route path="/service/suspension/fork" exact component={ForkService} />
                <Route path="/service/suspension/damper" exact component={DamperService} />
                <Route path="/service/suspension/travel-extension" exact component={ForkTravel} />
                <Route path="/service/suspension/adjustment" exact component={SuspensionAdjustment} />
                <Route path="/service/wheel/truing" exact component={WheelTruing} />
                <Route path="/service/wheel/building" exact component={WheelBuild} />
                <Route path="/service/wheel/freehub" exact component={FreeHubService} />
                <Route path="/service/wheel/spokes" exact component={SpokeReplace} />
                {/* MAINTENANCE */}
                <Route path="/maintenance" component={Maintenance} />
                {/* COMPATIBILITY */}
                <Route path="/compatibility" exact component={Compatibility} />
                <Route path="/compatibility/frame/headset" exact component={HeadsetType} />
                <Route path="/compatibility/frame/bottom-bracket" exact component={BottomBracketArticle} />
                <Route path="/compatibility/wheel/hub" exact component={HubCompatibilityArticle} />
                <Route path="/compatibility/wheel/tyre-to-rim" exact component={TyreToRim} />
                <Route path="/compatibility/wheel/types" exact component={WheelTypesArticle} />
                <Route path="/compatibility/wheel/spokes" exact component={SpokesArticle} />
                <Route path="/compatibility/drivetrain/cassette" exact component={CassetteArticle} />
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