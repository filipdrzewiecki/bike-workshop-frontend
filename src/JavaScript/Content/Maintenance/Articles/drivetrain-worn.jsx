import '../../../Css/index.css';
import React from 'react';
import ArticleBody from '../../../Page/PageElements/article.jsx';
import Section from '../../../Page/PageElements/section.jsx';
import ChainChecker from '../../../../resources/drivetrain/chainChecker.PNG';
import ChainCheckerInAction from '../../../../resources/drivetrain/chainCheckerInAction.PNG';
import ChainringWornout from '../../../../resources/drivetrain/chainringWornout.PNG';




const section1 = [
    <div>
        Zanim przejdziemy do właściwej części artykułu, odpowiedzmy sobie dlaczego w ogóle powinno kontrolować się zużycie napędu i wymieniać jego komponenty.
        My, ludzie, jesteśmy przyzwyczajeni do myślenia, że jak coś działa aktualnie dobrze, to nie trzeba tego wymieniać aż do momentu, kiedy coś zacznie działać nie tak
        jak sobie byśmy tego życzyli. To jednak nie do końca tak jest. Podobnie jak z zębami, bywa, że mimo występujące próchnicy, żaden ból nie występuje. Natomiast kiedy już zacznie
        występować, okazuje się, że jest już za późno i trzeba np. zatruć ząb.
    </div>,
    <div>
        Dlatego stan zębów jak i napędu polecam kontrolować regularnie, po to, aby ewentualna naprawa była szybka i tania. Jeżeli w porę zauważysz, że twój łańcuch jest już zużyty,
        czeka cię wymiana jedynie tego, relatywnie taniego kompontentu, którego cena to ok. 80 PLN. Jeżeli zignorujesz temat, zużyty łańcuch zacznie najpierw niszczyć zęby kasety,
        a następnie zębatki korby. Wtedy będziesz zmuszony wymienić nie tylko łańcuch, ale także kasetę, której rozrzut cenowy to 100-400 PLN, oraz zębatki korby, czyli kolejne kilkaset złotych -
        a są to kwoty, które nie uwzględniają robocizny. <b>Zgodzisz się chyba, że 80 PLN co pół roku jest lepszą opcją niż 500 raz na rok, prawda?</b>
    </div>
]

const section2 = [
    <div>
        Sprawdzenie zużycia łańcucha jest czynnością szybką i niesamowicie łatwą. Wymaga natomiast użycia pewnego taniego narzędzia, którym jest przymiar do łańcucha.
    </div>,
    <div>
        <img className="photo-horizontal" src={ChainChecker} alt="chainChecker"></img>
    </div>,
    <div>
        Jest to niesamowicie proste i użyteczne narzędzie. Powinno mieć haczyk do zaczepienia o ogniwo łańcucha, oraz dwa ząbki wskazujące procentowe zużycie łańcucha. Aby go użyć wystarczy
        nasadzić na łańcuch w sposób przedstawiony poniżej:
    </div>,
    <div>
        <img className="photo-medium" src={ChainCheckerInAction} alt="chainCheckerInAction"></img>
    </div>,
    <div>
        Zaprezentowany powyżej przyrząd parktool CC-3.2, który wskazuje 0.5% oraz 0.75% zużycia łańcucha. W zasadzie każdy producent łańcuchów ma własne wytyczne, jaki % zużycia
        jest właściwym momentem do wymiany i w razie wątpliwości polecam sprawdzić jakiej firmy masz kompontenty i poszukać w dokumentacji. Bezpiecznie jest natomiast przyjąć, że
        łańcuchy do 10 rzędów dobrze jest zmienić przy 0.75, natomiast 11 rzędowe przy 0.5.
    </div>
]

const section3 = [
    <div>
        Niestety nie ma żadnego narzędzia, które mierzyłoby dokładny poziom zużycia kasety lub zębatek korby. Natomiast jest kilka sposób, aby chociaż mniej więcej ocenić, czy
        napęd nadaje się do wymiany. Po pierwsze, jeżeli łańcuch jest zużyty dość mocno, to możemy z całą pewnością założyć, że reszta też jest w podobnym stanie. Przymiar, który wskazuje
        0.75% i więcej powinien już być alarmującym sygnałem. Dodatkowo, możemy spojrzeć jak łańcuch układa się na zębatkach z tyłu i z przodu. Jeżeli nie siedzi ciasno, tylko zaznaczają się
        wyraźne przerwy, tak jak na zdjęciu poniżej, to znaczy, że któryś komponent umiera.
    </div>,
    <div>
        <img className="photo-medium" src={ChainringWornout} alt="ChainringWornout"></img>
    </div>,
    <div>
        Na sam koniec warto poruszyć jeszcze jedną ważną kwestię - jeżeli wszystkie znaki na niebie, ziemi i przymiarze wskazują na to, że masz zużyty cały napęd, a nie tylko łańcuch, to
        nie zgrywaj Poznaniaka i nie staraj się zaoszczędzić, kupując wyłącznie łańcuch. Nowy łańcuch na zużytej kasecie będzie przeskakiwał między ogniwami - przy każdym większym obciążeniu będzie
        się po prostu ślizgał i zużyje się w mgnieniu oka. W takiej sytuacji lepiej jest albo kupić cały napęd nowy ALBO nie wymieniać go w ogóle. Dlaczego? Skoro zużyty działa sam ze sobą dość dobrze, 
        to możesz już zajechać go na amen i dopiero wtedy wymienić całość. Wymiana samego łańcucha, w przypadku, gdy kaseta również nadaje się na śmietnik jest tylko wyrzucaniem pieniędzy w błoto. 
    </div>
]

const content = [
    <Section paragraphs={section1} />,
    <Section paragraphs={section2} title={'Łańcuch'} />,
    <Section paragraphs={section3} title={'Inne części napędu'} />
]

export default class Article extends React.Component {
    render() {
        return (
                <ArticleBody
                    title="Kiedy łańcuch i napęd są do wymiany"
                    paragraphs={content}
                    backButtonLink='/maintenance'
                />
        );
    }
}