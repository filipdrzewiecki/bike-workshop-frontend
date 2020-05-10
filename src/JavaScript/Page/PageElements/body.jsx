import './body.css';
import React from 'react';
import SideMenuLeft from './sideMenuLeft.jsx';
import SideMenuRight from './sideMenuRight.jsx';
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
import BicycleWash from '../../Content/Maintenance/Articles/bicycle-wash.jsx';
import DrivetrainWash from '../../Content/Maintenance/Articles/drivetrain-wash.jsx';
import DrivetrainWorn from '../../Content/Maintenance/Articles/drivetrain-worn.jsx';
import Play from '../../Content/Maintenance/Articles/play.jsx';
import SuspensionPreassure from '../../Content/Maintenance/Articles/suspension-preassure.jsx';
import TyrePreassure from '../../Content/Maintenance/Articles/tyre-preassure.jsx';
import TyreWorn from '../../Content/Maintenance/Articles/tyre-worn.jsx';
import ChainLubricating from '../../Content/Maintenance/Articles/chain-lubricating.jsx';
//Compatibility
import Compatibility from '../../Content/Compatibility/compatibility.jsx';
import HubCompatibilityArticle from '../../Content/Compatibility/Articles/hub.jsx';
import CassetteArticle from '../../Content/Compatibility/Articles/cassette.jsx';
import BottomBracketArticle from '../../Content/Compatibility/Articles/bottom-bracket.jsx';
import HeadsetType from '../../Content/Compatibility/Articles/headset.jsx';
import TyreToRim from '../../Content/Compatibility/Articles/tyres.jsx';
import SpokesArticle from '../../Content/Compatibility/Articles/spokes.jsx';
import WheelTypesArticle from '../../Content/Compatibility/Articles/wheel-types.jsx';
import RimCompatibility from '../../Content/Compatibility/Articles/rim.jsx';
import SeatpostCompatibility from '../../Content/Compatibility/Articles/seatpost.jsx';
import StemCompatibility from '../../Content/Compatibility/Articles/stem.jsx';
import HandlebarCompatibility from '../../Content/Compatibility/Articles/handlebar.jsx';
import RearDerailleurCompatibility from '../../Content/Compatibility/Articles/rear-derailleur.jsx';
import FrontDerailleurCompatiblity from '../../Content/Compatibility/Articles/front-derailleur.jsx';
import CrankCompatiblity from '../../Content/Compatibility/Articles/crank.jsx';
import SuspensionDisciplines from '../../Content/Compatibility/Articles/suspension-disciplines.jsx';
import ForkTypes from '../../Content/Compatibility/Articles/fork-types.jsx';
import DamperCompatibility from '../../Content/Compatibility/Articles/damper.jsx';
import TubelessTechnology from '../../Content/Compatibility/Articles/tubeless.jsx';
import HollowetechTechnology from '../../Content/Compatibility/Articles/hollowtech.jsx';
import SteeringTubeCompatibility from '../../Content/Compatibility/Articles/steering-tube.jsx';
//Products
import Products from '../../Content/Products/products.jsx';
import BasicTools from '../../Content/Products/Articles/basic-tools.jsx';
import ToolsBrands from '../../Content/Products/Articles/brands.jsx';
import Carrier from '../../Content/Products/Articles/carrier.jsx';
import ClothesCasual from '../../Content/Products/Articles/clothes-casual.jsx';
import ClothesEnduro from '../../Content/Products/Articles/clothes-enduro.jsx';
import ClothesLycra from '../../Content/Products/Articles/clothes-lycra.jsx';
import DrivetrainBrands from '../../Content/Products/Articles/drivetrain-brands.jsx';
import Helmet from '../../Content/Products/Articles/helmet.jsx';
import HomeWorkshop from '../../Content/Products/Articles/home-workshop.jsx';
import Lights from '../../Content/Products/Articles/lights.jsx';
import Multitool from '../../Content/Products/Articles/multitool.jsx';
import ClothingPads from '../../Content/Products/Articles/pads.jsx';
import Shoes from '../../Content/Products/Articles/shoes.jsx';
import SmallBags from '../../Content/Products/Articles/small-bags.jsx';
import TravelBags from '../../Content/Products/Articles/travelling-bags.jsx';
//About
import About from '../../Content/About/about.jsx';

const LeftMenu = () => {
    return (
        <SideMenuLeft
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
        <SideMenuRight
            paragraphs={[
                <Link to={'/service/headset'}>Serwis sterów</Link>,
                <Link to={'/compatibility/wheel/tyre-to-rim'}>Jak dobrać opony</Link>,
                <Link to={'/compatibility/drivetrain/cassette'}>Jak dobrać kasetę</Link>
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
                <Route path="/maintenance" exact component={Maintenance} />
                <Route path="/maintenance/adjustments/play" exact component={Play} />
                <Route path="/maintenance/adjustments/tyre-preassure" exact component={TyrePreassure} />
                <Route path="/maintenance/adjustments/suspension-preassure" exact component={SuspensionPreassure} />
                <Route path="/maintenance/adjustments/drivetrain" exact component={DrivetrainWorn} />
                <Route path="/maintenance/adjustments/tyres" exact component={TyreWorn} />
                <Route path="/maintenance/wash/bicycle" exact component={BicycleWash} />
                <Route path="/maintenance/wash/drivetrain" exact component={DrivetrainWash} />
                <Route path="/maintenance/wash/chain-lubricating" exact component={ChainLubricating} />
                {/* COMPATIBILITY */}
                <Route path="/compatibility" exact component={Compatibility} />
                <Route path="/compatibility/frame/headset" exact component={HeadsetType} />
                <Route path="/compatibility/frame/bottom-bracket" exact component={BottomBracketArticle} />
                <Route path="/compatibility/frame/seatpost" exact component={SeatpostCompatibility} />
                <Route path="/compatibility/frame/stem" exact component={StemCompatibility} />
                <Route path="/compatibility/frame/handlebar" exact component={HandlebarCompatibility} />
                <Route path="/compatibility/frame/technologies/hollowtech" exact component={HollowetechTechnology} />
                <Route path="/compatibility/drivetrain/cassette" exact component={CassetteArticle} />
                <Route path="/compatibility/drivetrain/rear-derailleur" exact component={RearDerailleurCompatibility} />
                <Route path="/compatibility/drivetrain/front-derailleur" exact component={FrontDerailleurCompatiblity} />
                <Route path="/compatibility/drivetrain/crank" exact component={CrankCompatiblity} />
                <Route path="/compatibility/suspension/disciplines" exact component={SuspensionDisciplines} />
                <Route path="/compatibility/suspension/fork-types" exact component={ForkTypes} />
                <Route path="/compatibility/suspension/steering-tube" exact component={SteeringTubeCompatibility} />
                <Route path="/compatibility/suspension/damper" exact component={DamperCompatibility} />
                <Route path="/compatibility/wheel/hub" exact component={HubCompatibilityArticle} />
                <Route path="/compatibility/wheel/tyre-to-rim" exact component={TyreToRim} />
                <Route path="/compatibility/wheel/types" exact component={WheelTypesArticle} />
                <Route path="/compatibility/wheel/spokes" exact component={SpokesArticle} />
                <Route path="/compatibility/wheel/rim" exact component={RimCompatibility} />
                <Route path="/compatibility/wheel/technologies/tubeless" exact component={TubelessTechnology} />
                {/* PRODUCTS */}
                <Route path="/products" exact component={Products} />
                <Route path="/products/tools/basic-tools" exact component={BasicTools} />
                <Route path="/products/tools/brands" exact component={ToolsBrands} />
                <Route path="/products/tools/house-workshop" exact component={HomeWorkshop} />
                <Route path="/products/accessories/multitool" exact component={Multitool} />
                <Route path="/products/accessories/lights" exact component={Lights} />
                <Route path="/products/accessories/travel-bag" exact component={TravelBags} />
                <Route path="/products/accessories/small-bag" exact component={SmallBags} />
                <Route path="/products/accessories/carrier" exact component={Carrier} />
                <Route path="/products/clothing/shoes" exact component={Shoes} />
                <Route path="/products/clothing/pads" exact component={ClothingPads} />
                <Route path="/products/clothing/helmet" exact component={Helmet} />
                <Route path="/products/clothing/lycra" exact component={ClothesLycra} />
                <Route path="/products/clothing/casual" exact component={ClothesCasual} />
                <Route path="/products/clothing/enduro" exact component={ClothesEnduro} />
                <Route path="/products/parts/brands" exact component={DrivetrainBrands} />
                {/* ABOUT */}
                <Route path="/about" component={About} />
            </Switch>
            <RightMenu />
        </div>
    );
}

export default PageBody;