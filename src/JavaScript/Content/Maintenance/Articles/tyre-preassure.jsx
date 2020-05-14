import '../../../Css/index.css';
import React from 'react';
import ArticleBody from '../../../Page/PageElements/article.jsx';
import Section from '../../../Page/PageElements/section.jsx';
import PreassureInfo from '../../../../resources/wheel/tyre/preassureTyreInfoPrint.PNG';
import PompWithBarometer from '../../../../resources/wheel/tyre/pompWithBarometer.jpg';
import ValveAdapter from '../../../../resources/wheel/tyre/valveAdapter.PNG';
import ElectronicBarometer from '../../../../resources/wheel/tyre/electronicBarometer.PNG';
import Barometer from '../../../../resources/wheel/tyre/barometer.jpg';

const section1 = [
    <div>
        Jakie powinno być prawidłowe ciśnienie w kołach? Od czego wysokość ciśnienia zależy, w jakich jednostkach przedstawia się ciśnienie oraz
        jakie są optymalne wartości dla różnych rodzajów rowerów? Tego i jeszcze więcej dowiesz się poniżej.
    </div>,
    <div>
        Każda opona na bocznej ścianie na podaną informację o prawidłowym ciśnieniu, podaną w co najmniej jednej z trzech jednostek miary: PSI, BAR lub rzadziej KPA.
        Przykład na oponie szosowej:
    </div>,
    <div>
        <img className="photo-horizontal" src={PreassureInfo} alt="info"></img>
    </div>,
    <div>
        Informacja ta może być w formie maksymalnego ciśnienia [ max 8 BAR ], albo w formie zakresu, [ 2 - 4 BAR ] .
    </div>
]

const section2 = [
    <div>
        Do kontroli ciśnienia służą barometry. Na rynku jest szeroki wybór pompek z wbudowanym barometrem, i to zarówno drużych, pionowych, jak i ręcznych.
        Praktycznie zawsze posiadają nadrukowaną skalę zarówno BAR jak i PSI.
        Aby sprawdzić sięnienie wystarczy nałożyć wlot na wentyl a wskazówka barometru od razu powinna przesunąć się na liczbę z aktualnym wynikiem.
    </div>,
    <div>
        UWAGA: barometr będzie wskazywał ciśnienie tylko, kiedy dętka jest nałożona na oponę i koło. Zdarza się, że ludzie, chcąc sprawdzić, czy zakupiony barometr działa,
        pompują dętkę poza rowerem. Taka dętka bez opony, które blokuje jej "rozrost" będzie jednak po prostu rosła tak długo aż pęknie, a ciśnienie na barometrze będzie cały czas
        pokazywało zero. Pracując w sklepie rowerowym, przyjąłem bardzo wiele reklamacji tego typu ;)
    </div>,
    <div>
        <img className="photo-medium" src={PompWithBarometer} alt="pompBarometer"></img>
        <img className="photo-medium" src={Barometer} alt="barometer"></img>
    </div>,
    <div>
        Dodatkowo istnieją elektroniczne barometry, którymi co prawda nie napompujemy koła, ale sprawdzimy aktualne ciśnienie i spuścimy powietrze do pożądanej wartości.
        Są szczególnie przydatne, jeżeli nie chcemy brać ze sobą w drogę pompki ręcznej, a wciąż z jakiegoś wzgędu chcemy kontrolować ciśnienie. Szczególnie na rowerach górskich
        zdarzają się sytacje w którym wjeżdża się na górę z wysokim ciśnienie, aby na jej szczycie spuścić powietrze i przez to zyskać na przyczepności i amortyzacji podczas zjazdu.
    </div>,
    <div>
        <img className="photo-medium" src={ElectronicBarometer} alt="electronicBarometer"></img>
    </div>
]

const section3 = [
    <div>
        Jeśli nie masz barometru w żadnej postaci, to możesz zawsze podjechać na najbliższą stację beznynową i skorzystać z kompresora, który zawsze jest wyposażony w miernik ciśnienia. Jeżeli twór rower ma wentyle typu
        Shreder, czyli samochodowe, zrobisz to bez żadnego problemu. Jeśli natomiast masz wentyle typu presta lub rowerowe, polecam zaopatrzyć się w przejściówkę.
    </div>,
    <div>
        <img className="photo-medium" src={ValveAdapter} alt="valveAdapter"></img>
    </div>,
    <div>
        Doświadczone w temacie osoby, są w stanie z dość dużą precyzją określić ciśnienie "na palec". Natomiast każdemu i w każdym jednym wypadku polecam sprawdzić ciśnienie przed jazdą rowerem,
        szczególnie jeżeli wsiadasz na rower po pewnej przerwie. Prawidłowe ciśnienie w kołach zapewni ci łatwą i optymalną jazdę, podczas gdy nawet najdroższy rower z niewłaściwym ciśnieniem będzie
        prowadził się jak najgorszy złom, a być może nawet stanowił zagrożenie.
    </div>
]

const content = [
    <Section paragraphs={section1} />,
    <Section paragraphs={section2} title={'Skąd mam wiedzieć jak mocno napompowałem?'} />,
    <Section paragraphs={section3} title={'Nie mam barometru, co mi pozostaje?'} />
]

export default class Article extends React.Component {
    render() {
        return (
                <ArticleBody
                    title="Prawidłowe ciśnienie w kołach"
                    paragraphs={content}
                    backButtonLink='/maintenance'
                />
        );
    }
}