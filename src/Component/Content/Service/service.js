import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import Page from '../../Page/page';
import FrameIcon from '../../../resources/frame.png';

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
            <li><a href="/service/headset/1">Wymiana sterów</a></li>
            <li>Wymiana wkładu suportu</li>
            <li>Wymiana siodła</li>
            <li>Wymiana mostka</li>
        </ul>
    </div>,
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
 
ReactDOM.render(
    <Service/>,
    document.querySelector('#root')
);

export default Service;