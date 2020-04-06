import '../../../Css/index.css';
import React from 'react';
import ArticleBody from '../../../Page/PageElements/article.jsx';
import Section from '../../../Page/PageElements/section.jsx';
import { Link } from "react-router-dom";

const section1 = [
    <div>
        Uwaga, artykuł tego zawiera informacje przydatne przy regulacji zawieszenia, <b>które nadaje się do regulacji</b>. W celu identyfikacji tego, 
        czy posiadasz takowe, zapoznaj się z artykułem o <Link to={'/compatibility/suspension/fork-types'}>amortyzatorach</Link>. W skrócie regulować dają się
        amortyzatory powietrzne, natomiast najtańsze, wyposażone jedynie w amortyzację sprężynową, z zasady żadnej regulacji nie posiadają.
    </div>,
    <div>
        Aby w ogóle zacząć, potrzebować będziemy <b>pompki do amortyzatorów</b>. Uprzedzając twoje pytanie - nie, zwykła pompka rowerowa, ani kompresor się do tego nie nadają.
        Regulacja amortyzatora wygląda niemal dokładnie tak samo jak regulacja dampera, a konkretne różnice zostaną wyraźnie zaznaczone w tekście. Nie ma też znaczenia jakiej marki
        masz amortyzator - wszystkie reguluje się w ten sam sposób. Dodatkowo potrzebna nam będzie znajomość kilku podstawowych pojęć - SAG, tłumienie oraz kompresja.
    </div>
]

const section2 = [
    <div>
        SAG to w dużym skrócie stopień ugięcia amortyzacji pod twoim ciężarem. Zwyczajowo określa się go procentowo, w związku z czym przydatna okaże się tutaj miara.
        W chwili obecnej spora część amortyzatorów marki Rock Shox ma taką miarkę nadrukowaną na goleniach, więc jeśli jesteś właścicielem takowego masz na starcie nieco z górki.
        W przypadku wszystkich innych amortyzatorów zmierz długość goleni. Jest to tzw. <b>skok amortyzatora</b>. Możesz też sprawdzić w specyfikacji roweru. 
        W przypadku przytłaczającej większości rowerów górskich będzie to 100 mm.
    </div>,
    <div>
        <b>UWAGA: jeśli amortyzator jest zbyt słabo napompowany, to golenie będą mocno siedziały w środku, przez co wynik będzie niedokładny.</b>
    </div>,
    <div>
        Następnie wejdź na rower (w warunkach domowych najlepiej jeśli ktoś ci go przytrzyma) i usiądź na nim w najzwyklejszy możliwy sposób. Wartość SAGu to nic innego
        jak stopień w którym golenie weszły w środek amortyzatora. No dobrze, ale teraz jak to zmierzyć? Jeżeli twój amortyzator ma o-ring, czyli gumkę umieszczoną na goleni, umieść
        ją na samym dole, aby dotykała uszczelek. Po zejściu z roweru amortyzator wróci do swojej normalnej pozycji, a o-ring znajdzie się gdzieś po środku, wskazując jak mocno
        ugiął się pod tobą. Jeżeli masz amortyzator bez o-ringu, musisz to niestety zmierzyc na oko samemu, np. zaznaczając ten punkty pisakiem. 
    </div>,
    <div>
        Czyli jaki procent sagu jest prawidłowy? Bezpiecznie jest przyjąć 20% na przód oraz 25-30% na tył. Jeżeli jeździsz szybko, prawdopodobnie chcesz obniżyć te wartości, natomiast
        do jazdy wyczynowej z częstymi skokami, SAG może być odrobinę większy.
    </div>
]

const section3 = [
    <div>
        W budowie.
    </div>
]

const section4 = [
    <div>
        W budowie.
    </div>
]

const content = [
    <Section paragraphs={section1} />,
    <Section paragraphs={section2} title={'SAG'} />,
    <Section paragraphs={section3} title={'Tłumienie'} />,
    <Section paragraphs={section4} title={'Kompresja'} />
]

export default class Article extends React.Component {
    render() {
        return (
            <div>
                <ArticleBody
                    title="Ustawienie ciśnienia amortyzacji"
                    paragraphs={content}
                    backButtonLink='/maintenance'
                />
            </div>
        );
    }
}