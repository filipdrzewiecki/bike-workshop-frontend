import React from 'react';
import '../../Css/index.css';
import '../../Css/content.css';
import Page from '../../Page/PageElements/article.jsx';
import ServiceMenu from './menu';


const paragraphs = [ 
    <div >W tej sekcji dowiesz się jak w warunkach zarówno warsztatowych jak i domowych dokonać napraw lub usprawnień swojej maszyny.
    Artykuły są podzielone tematycznie, natomiast w ich treści odnajdziesz sekcje podzielone czterema kolorami,
    będącymi odzwierciedleniem poziomu skomplikowania zadania.Są to odpowiednio: </div>, 
    <div className = "challengeBar" > <div className = "challengeBar25" > </div></div > , <div>
    Zielony - wykonasz to, mając wyłącznie podstawową wiedzę o rowerze.Wymagane będą wyłącznie
    najprostsze narzędzia, takie jak zestaw kluczy imbusowych, zestaw kluczy płaskich czy śrubokręt </div>, 
    <div className = "challengeBar" > < div className = "challengeBar50" > </div></div > , <div> Żółty - naprawy wymagające znajomości roweru, pewnego doświadczenia oraz wprawy manualnej, a także
    narzędzi stricte rowerowych takich jak klucz do kasety lub klucze do konusów </div>, <div className = "challengeBar" > <div className = "challengeBar75" > </div></div > , 
    
    <div > Pomarańczowy - tym kolorem oznaczone są czynności, które wykonane nieumiejętnie mogą spowodować trwały uszkodzenie
        roweru lub któregoś z jego elementów.Narzędzia potrzebne do ich wykonania należą także do grupy rzadziej spotykanych
            w warunkach domowych.Z tego też względu, dwukrotnie przemyśl każdą próbą dokonania naprawy lub usprawnienia, oznaczonych na
        czerwono.Może się okazać, że wycieczka do serwisu będzie dużo szybsza i tańsza. </div>, 
        <div className = "challengeBar" > < div className = "challengeBar100" > </div></div > , 
        <div> Czerwony - porady i instrukcje przeznaczone wyłącznie dla mechaników oraz osób równie wprawionych. Kompletnie odradza się
        dokonywanie czynności oznaczonych tym kolorem w warunkach domowych - wymagają kosztownych narzędzi bez których naprawa
    nie będzie możliwa, a których zastąpienie lub pominięcie spowoduje nieodwracalne szkody w rowerze. SORRY. </div>, 
    <div > Mając te informacje, zapraszam do lektury! </div>,

    <ServiceMenu />
]

export default class Service extends React.Component {
    render() {
        return (
            <div>
                <Page
                    title="Porady serwisowe"
                    paragraphs={paragraphs}
                />
            </div>
        );
    }
}