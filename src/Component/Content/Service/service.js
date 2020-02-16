import React from 'react';
import '../../index.css';
import Page from '../../Page/page';
import FrameIcon from '../../../resources/frame.png';
import DriveIcon from '../../../resources/drivetrain.png';
import WheelIcon from '../../../resources/wheel.png';
import ForkIcon from '../../../resources/fork.png';
import {Link} from "react-router-dom";


const paragraphs = [
    <div>W tej sekcji dowiesz się jak w warunkach zarówno warsztatowych jak i domowych dokonać napraw lub usprawnień swojej maszyny. 
        Artykuły są podzielone tematycznie, natomiast w ich treści odnajdziesz sekcje podzielone czterema kolorami, 
        będącymi odzwierciedleniem poziomu skomplikowania zadania. Są to odpowiednio:</div>, 
    <div className="challengeBar"><div className="challengeBar25"></div></div>,
    <div>
    Zielony - wykonasz to, mając wyłącznie podstawową wiedzę o rowerze. Wymagane będą wyłącznie
            najprostsze narzędzia, takie jak zestaw kluczy imbusowych, zestaw kluczy płaskich czy śrubokręt</div>,
    <div className="challengeBar"><div className="challengeBar50"></div></div>,
    <div>Żółty - naprawy wymagające znajomości roweru, pewnego doświadczenia oraz wprawy manualnej, a także
            narzędzi stricte rowerowych takich jak klucz do kasety lub klucze do konusów</div>,
    <div className="challengeBar"><div className="challengeBar75"></div></div>,
    <div>Pomarańczowy - tym kolorem oznaczone są czynności, które wykonane nieumiejętnie mogą spowodować trwały uszkodzenie
            roweru lub któregoś z jego elementów. Narzędzia potrzebne do ich wykonania należą także do grupy rzadziej spotykanych
            w warunkach domowych. Z tego też względu, dwukrotnie przemyśl każdą próbą dokonania naprawy lub usprawnienia, oznaczonych na
            czerwono. Może się okazać, że wycieczka do serwisu będzie dużo szybsza i tańsza.</div>,
    <div className="challengeBar"><div className="challengeBar100"></div></div>,
    <div>Czerwony - porady i instrukcje przeznaczone wyłącznie dla mechaników oraz osób równie wprawionych. Kompletnie odradza się
            dokonywanie czynności oznaczonych tym kolorem w warunkach domowych - wymagają kosztownych narzędzi bez których naprawa
            nie będzie możliwa, a których zastąpienie lub pominięcie spowoduje nieodwracalne szkody w rowerze. SORRY.</div>,
    <div>Mając te informacje, zapraszam do lektury!</div>,

    <div><h1>Rama <img className="icon" src={FrameIcon} alt="frame"></img></h1>
        <ul>
            <li><Link to={'/service/headset/1'}> Wymiana sterów </Link></li>
            <li>Wymiana wkładu suportu - IN CONSTRUCTION</li>
            <li>Wymiana siodła - IN CONSTRUCTION</li>
            <li>Wymiana mostka - IN CONSTRUCTION</li>
        </ul>
    </div>,
    <div><h1>Napęd <img className="icon" src={DriveIcon} alt="frame"></img></h1>
    <ul>
        <li><a href="/service/headset/1">Sprawdzenie zużycia napędu - IN CONSTRUCTION</a></li>
        <li>Kaseta - IN CONSTRUCTION</li>
        <li>Wymiana łańcucha - IN CONSTRUCTION</li>
        <li>Wymiana zębatek korby - IN CONSTRUCTION</li>
    </ul>
</div>,
<div><h1>Amortyzator <img className="icon" src={ForkIcon} alt="frame"></img></h1>
        <ul>
            <li><a href="/service/headset/1">Czyszczenie - IN CONSTRUCTION</a></li>
            <li>Wymiana uszczelek - IN CONSTRUCTION</li>
            <li>Wymiana oleju - IN CONSTRUCTION</li>
            <li>Serwis miesięczny - IN CONSTRUCTION</li>
        </ul>
    </div>,
    <div><h1>Koła <img className="icon" src={WheelIcon} alt="frame"></img></h1>
    <ul>
        <li><a href="/service/headset/1">Centrowanie - IN CONSTRUCTION</a></li>
        <li>Zaplatanie - IN CONSTRUCTION</li>
        <li>Centrowanie - IN CONSTRUCTION</li>
        <li>Serwis piast - IN CONSTRUCTION</li>
    </ul>
</div>
]

    
const Service = () => {
    return (
        <div>
        <Page 
            menu1="serws"
            menu2="serws"
            menu3="serwis"

            title="Porady serwisowe"
            paragraphs={paragraphs}
        />
        </div>
    );
}
 
export default Service;