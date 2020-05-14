import '../../../Css/index.css';
import React from 'react';
import Section from '../../../Page/PageElements/section.jsx';
import ArticleBody from '../../../Page/PageElements/article.jsx';
import ContinentalWornout from '../../../../resources/wheel/tyre/continentalWornout.PNG';
import TyreLowPreassureWornout from '../../../../resources/wheel/tyre/tyreLowPreassureWornout.PNG';

const section1 = [
    <div>
        Stopień zużycia opon jest w stanie ocenić każdy i to w domowych warunkach, jeśli tylko zna kilka podstawowych reguł. Te natomiast
        mogą się od siebie różnić, w zależności od typu roweru, opon oraz nawierzchni po której jeździsz. Czasami może wydawać się, że opona jest już do wyrzucenia, ale
        tak naprawdę posłuży jeszcze wiele kilometrów. Zacznijmy więc od identyfikacji typu opon, które masz. Przyjmijmy, że są trzy typy - [1] typowe górskie, z wyraźnym bieżnikiem i kostką,
        [2] crossowe, lub semi-slicki, które bieżnikiem mocno przypominają opony samochodowe - gładne, ale z licznymi wcięciami i "wzorkami", oraz [3] slicki, czyli zupełnie gładkie opony, spotykane
        zasadniczo wyłącznie w rowerach szosowych.
    </div> 
]

const section2 = [
    <div>
        Opony górskie to wielki balon z wieloma kostkami, które zapewniają odpowiednią trakcję na miękkim podłożu. Najłatwiej rozpoznać stopień zużycia takiej opony, obserwując bieżnik
        oraz sposób w jaki zmienia się wraz z coraz to kolejnymi wyjazdami. Jeżeli krawędzie kostek stają się mniej wyraźne, lub są wręcz poobrywane, to znak, że ich czas jest blisko.
        Jeżdżąc na miękkich oponach po zbyt twardym podłożu może wręcz się zdarzyć, że ząbku zupełnie się pourywają, zostawiając nieładne fragmenty drutu.
    </div>,
    <div>
        Bardzo popularnym defektem jest jazda na kołach o zbyt niskim ciśnieniu. Wtedy na ściankach bocznych opony można zauważyć wychodzące włókna, tak jak na obrazku poniżej. Nie musi
        to oczywiście oznaczać, że opona jest do wyrzucenia, ale jeżeli ścianki są już zbyt mocno zniszczone, taka opona może eksplodować.
    </div>,
    <div>
        <img className="photo-horizontal" src={TyreLowPreassureWornout} alt="tyreLowPreassureWornout"></img>
    </div>
]

const section3 = [
    <div>
        W przypadku tych opon sprawa jest dosć prosta, ponieważ wystarczy doglądać tego, czy opona pół-gładka nie stała się oponą gładką ;) Jeżeli wcięcia, rowki oraz wzory zanikają,
        to oznaka, że starła się już zbyt duża warstwa gumy.
    </div>
]

const section4 = [
    <div>
        Nowa opona typu slick zawsze będzie mieć ładny, okrągły profil. Zużywa się poprzez stopniowe ścieranie się kolejnych warstw gumy, poczynając od samego czubka.
        Jeżeli więc profil przestaje być okrągły, a zaczyna czubek jest "ścięty", opona jest do wymiany. Wielu producentów dodatkowo oznacza stopień zużycia opon. Poniżej przykład
        z opon continental, mających charakterystyczne dwa rowki. Jeżeli rowki w pewnym momencie znikną, to znaczy, że guma starła się już ponad normę i należy udać się do sklepu
        po nowe egzemplarze.
    </div>,
    <div>
        <img className="photo-horizontal" src={ContinentalWornout} alt="continentalWornout"></img>
    </div>
]

const content = [
    <Section paragraphs={section1} />,
    <Section paragraphs={section2} title={'Opony górskie'} />,
    <Section paragraphs={section3} title={'Opony crossowe'} />,
    <Section paragraphs={section4} title={'Opony gładkie'} />
]

export default class Article extends React.Component {
    render() {
        return (
                <ArticleBody
                    title="Zużycie opon"
                    paragraphs={content}
                    backButtonLink='/maintenance'
                />
        );
    }
}