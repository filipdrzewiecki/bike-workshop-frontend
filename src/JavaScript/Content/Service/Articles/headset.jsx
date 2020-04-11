import '../../../Css/index.css';
import React from 'react';

import Article from '../../../Page/PageElements/article.jsx';
import SubPage from '../../../Page/PageElements/section.jsx';


const introduction = [
    <div>Typowy niedzielny rowerzysta wie o sterach w swoim rowerze dokładnie tyle, ile problemu mu sprawiają.
    Jest to część (a raczej zestaw części), które w porównaniu do reszty roweru są mało awaryjna, w związku z czym nasza wiedza o nich sprowadza się do tego, że są.
    Co jednak w przypadku, kiedy po kilku latach użytkowania (lub jednej sesji z myjką ciśnieniową),
    kierownica nie kręci się już bez oporu, a okazyjnie wydaje z siebie podejrzane kliknięta i zgrzyty? Wtedy mamy dwie opcje:</div>,
    <ul>
        <li>Wymiana łożysk sterów</li>
        <li>Wymiana sterów w całości</li>
    </ul>,
    <div>Jeśli nie jesteś mechanikiem i nie masz do dyspozycji specjalistycznych narzędzi, zdecydowanie odradza się opcję drugą.
    Bez odpowiedniego przygotowania technicznego w najgorszym wypadku uszkodzisz konstrukcję sterów lub samej ramy. Ponadto w każdym wypadku
        polecam zapoznać się z artkułem dotyczącym typów sterów oraz istniejących standardów mocowania. <a href="/compatibility/headset/1">Stery</a>
    </div>
]

const paragraphs = [
    <SubPage
        title="Wymiana sterów"
        paragraphs={introduction}
    />
]

export default class ForkReplaceArticle extends React.Component {
    render() {
        return (
            <div>
                <Article
                    title="Wymiana sterów"
                    paragraphs={paragraphs}
                    backButtonLink='/service'
                />
            </div>
        );
    }
}