import '../../../Css/index.css';
import React from 'react';
import ArticleBody from '../../../Page/PageElements/article.jsx';
import Section from '../../../Page/PageElements/section.jsx';
import ChainChecker from '../../../../resources/drivetrain/chainChecker.PNG';
import ChainCheckerInAction from '../../../../resources/drivetrain/chainCheckerInAction.PNG';



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
    </div>
]

const section3 = [
    <div>
        Treść artykułu.
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
            <div>
                <ArticleBody
                    title="Kiedy łańcuch i napęd są do wymiany"
                    paragraphs={content}
                    backButtonLink='/maintenance'
                />
            </div>
        );
    }
}