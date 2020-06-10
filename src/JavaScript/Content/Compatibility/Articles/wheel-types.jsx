import '../../../Css/index.css';
import React from 'react';
import ArticleBody from '../../../Page/PageElements/article.jsx';
import TableTyres from '../Component/table-wheel-types'

const paragraphs = [
    <div>
        Na koło składa się:
        <ul>
            <li>Piasta</li>
            <li>Obręcz</li>
            <li>Szprychy</li>
            <li>Opona</li>
        </ul>
    </div>,
    <div>
        Każdy z tych komponentów ma swoje określone przeznaczenie. Dopuszczalne, a nawet powszechne jest też mieszanie komponentów o odmiennym
        przeznaczeniu. Być może sam kiedyś założyłeś oponę trekkingową, albo szosową do roweru MTB. 
    </div>,
    <div>
        Jak określić do jakiego typu roweru nadaje się koło? <b> Koło MTB z oponą szosową, będzie kołem do jazdy górskiej, czy szosowej? </b> 
        Z pewnością będzie kiepskim kołem MTB do jazdy po utwardzanej nawierzchni.
    </div>,
    <div>
        Jeżeli więc chcesz złożyć dobre koło do jazdy po ścieżkach górskich, dopilnuj, aby każdy komponent był przeznaczony do tego typu użytkowania.
        Jeżeli dobierzesz 'wszystko z innej parafii' to nie będzie działało tak dobrze, jak w przypadku sprzętu dedykowanego.
    </div>,
    <div>
        Poniżej tabelka przedstawiające <b>typowe</b> wymiary części dedykowanych na konkretny typ terenu. Poniższe obrazki symbolizują kolejno:
        miasto i szosy, trasy leśne, ścieżki ze wzniesieniami oraz trasy górskie. 
    </div>,
    <TableTyres/>,
    <div>
        Pamiętaj jednak, że komponenty jakie kupujesz muszą być kompatybilne z ramą i widelcem. Przykładowo, do górala za 2000 PLN włożysz wyłącznie
        piastę o wymiarach 135 x 9.
    </div>

]

export default class Article extends React.Component {
    render() {
        return (
                <ArticleBody
                    title="Typy kół"
                    paragraphs={paragraphs}
                    backButtonLink='/compatibility'
                />
        );
    }
}