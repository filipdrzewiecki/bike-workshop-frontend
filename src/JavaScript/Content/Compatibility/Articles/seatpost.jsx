import '../../../Css/index.css';
import React from 'react';
import ArticleBody from '../../../Page/PageElements/article.jsx';
import TableSeatpost from '../Component/table-seatpost.jsx';
import Section from '../../../Page/PageElements/section.jsx';
import SeatpostAdapter from '../../../../resources/seatpost/seatpostAdapter.PNG';
import SeatpostSuntour from '../../../../resources/seatpost/seatpostSuspensionSuntour.PNG';
import SeatpostCaneCreek from '../../../../resources/seatpost/seatpostSuspensionCaneCreek.PNG';
import Reverb from '../../../../resources/seatpost/seatpostReverb.PNG';



const section1 = [
    <div>
        Wspornik siodła, zwany potocznie sztycą jest elementem statycznym i jeśli przyjdzie nam go kiedykolwiek kupować, to
        dlatego, że stary się złamał, albo szukamy jakiegoś upgradu.
    </div>,
    <div>
        Waga tego komponentu może wynosić 350 - 200 g. przy aluminium lub 200 - 150 g. przy karbonie.
    </div>
]

const section2 = [
    <div>
        Sztycę dobiera się pod wymiary ramy. Musi mieć średnicę wewnętrznego otworu rury podsiodłowej w ramie. Dodatkowo sztyca wymaga zacisku, który
        to z kolei musi mieć wymiar równy zewnętrznej średnicy rury podsiodłowej. Średnice te muszą pokrywać się co do milimetra. Poniżej tabela z najpularniejszymi
        wymiarami zarówno sztycy jak i obejmy. UWAGA - najpopularniejszy nie oznacza, że nie występują inne konfiguracje. Weź to pod uwagę i przed zakupem
        koniecznie wymierz ramę.
    </div>,
    <div>
        <TableSeatpost />
    </div>,
    <div>
        Problem zbyt wąskiej sztycy w stosunku do rury podsiodłowej można rozwiązać specjalną przejściówką.
    </div>,
    <div>
        <img className="photo" src={SeatpostAdapter} alt="adapter"></img>
    </div>
]

const section3 = [
    <div>
        Ciężkie, brzydkie i drogie. Mają jednak rzeszę swoich miłośników. Problemem większości wsporników tego typu jest to, że nic nie amortyzują, za 
        to istotnie zwiększają masę roweru. Jeśli już nosisz się z zakupem, to polecam konstrukcje pantografowe, a zwłaszcza dwa modele:
    </div>,
    <div>
        <b>Suntour NCX</b> - wysoka waga, bo prawie 800 gramów, ale za to w przedziale cenowym 350-450 PLN.
    </div>,
    <div>
        <img className="photo" src={SeatpostSuntour} alt="suntour"></img>
    </div>,
    <div>
        <b>Cane Creek Thudbuster</b> - niska waga 550 g., okupiona ceną rzędu 700-900 PLN. Dodatkowo amortyzacja opiera się na elastomerach, które
        można wymieniać i personalizować. Świetny wybór do górala.
    </div>,
    <div>
        <img className="photo" src={SeatpostCaneCreek} alt="canecreek"></img>
    </div>
]

const section4 = [
    <div>
        Sztyce regulowane są wciąż w powszechnej świadomości rowerzystów czymś nieznanym. Jakie jest ich główne zastosowanie i sposób działania? 
        Jeździmy na maksymalnie wypuszczonej sztycy, natomiast po naduszeniu przycisku na kierownicy (połączonym metalową linką ze sztycą) wspornik opuszcza
        się o kilka-kilkanaście centrymetrów. 
    </div>,
    <div>
        Mechanizmy tego typu mają zastosowanie głównie w rowerach o pełnej amortyzacji - podjazdy robimy na sztycy o pełnej długości, natomiast zjazdy na sztycy
        opuszczonej. Dzięki temu wjeżdżamy łatwiej, mając lepsze przełożenie w nogach, a zjeżdżamy mając pod sobą więcej przestrzeni i mogąc łatwiej balansować
        ciężarem ciała. 
    </div>,
    <div>
        Waga może wahać się pomiędzy 600 a 900 gramów. Na ten wydatek trzeba przeznaczyć średnio ok. 1000 - 1600 PLN. Poniżej jedna z najpopularniejszych sztyc 
        tego typu, Rock Shox Reverb:
    </div>,
    <div>
        <img className="photo" src={Reverb} alt="reverb"></img>
    </div>
]

const content = [
    <Section paragraphs={section1} />,
    <Section paragraphs={section2} title={'Wymiary i zacisk'} />,
    <Section paragraphs={section3} title={'Sztyce amortyzowane'} />,
    <Section paragraphs={section4} title={'Sztyce regulowane'} />
]

export default class Article extends React.Component {
    render() {
        return (
            <ArticleBody
                title="Sztyca"
                paragraphs={content}
                backButtonLink='/compatibility'
            />
        );
    }
}