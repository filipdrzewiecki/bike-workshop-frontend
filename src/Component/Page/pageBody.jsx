import React from 'react';
import '../Css/index.css';
import Service from '../Content/Service/service';
import Compatibility from '../Content/Compatibility/compatibility.jsx';
import Maintenance from '../Content/Maintenance/maintenance';
import About from '../Content/About/about';
import Products from '../Content/Products/products';
import Main from '../Content/News/main';
import Headset from '../Content/Service/HeadSet/headset.jsx';
import HeadsetType from '../Content/Compatibility/headsetType.jsx';
import TyreToRim from '../Content/Compatibility/tyres';
import BottomBracketArticle from '../Content/Compatibility/bottomBracket';
import CassetteArticle from '../Content/Compatibility/cassette';
import HubCompatibilityArticle from '../Content/Compatibility/hub';
import SideMenu from './sideMenu';
import {Route, Switch } from "react-router-dom";

const PageBody = () => {
    return (
        <div className="pageBody">
                        <SideMenu
                            menu1='link1'
                            menu2='link2'
                            menu3='link3'
                        />
                        <Switch>
                            <Route path="/service" exact component={Service} />
                            <Route path="/service/headset" exact component={Headset} />
                            <Route path="/compatibility/frame/headset" component={HeadsetType} />
                            <Route path="/compatibility/frame/bottom-bracket" component={BottomBracketArticle} />
                            <Route path="/compatibility/wheel/hub" component={HubCompatibilityArticle} />
                            <Route path="/compatibility/wheel/tyre-to-rim" component={TyreToRim} />
                            <Route path="/compatibility/drivetrain/cassette" component={CassetteArticle} />
                            <Route path="/compatibility" component={Compatibility} />
                            <Route path="/maintenance" component={Maintenance} />
                            <Route path="/about" component={About} />
                            <Route path="/products" component={Products} />
                            <Route path="/" exact component={Main} />
                        </Switch>
                        <SideMenu
                            menu1='adres1'
                            menu2='adres2'
                            menu3='adres3'
                        />
                    </div>
    );
}

export default PageBody;