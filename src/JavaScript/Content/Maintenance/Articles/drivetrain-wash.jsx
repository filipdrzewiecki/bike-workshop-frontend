import '../../../Css/index.css';
import React from 'react';
import Section from '../../../Page/PageElements/section.jsx';
import ArticleBody from '../../../Page/PageElements/article.jsx';
import ChainCleaningMachine from '../../../../resources/drivetrain/chainCleaningMachine.PNG';
import Fenwicks from '../../../../resources/drivetrain/fenwicks.PNG';



const section1 = [
    <div>
        Napęd to zdecydowanie jedna z najtrudniejszych do wyczyszczenia części rowerów. Jest to zajęcie niewdzięczne, czasochłonne, i wielokrotnie po prostu niewarte zachodu.
        Zawsze miej na uwadze, że jeżeli zabierzesz się do tego nieprawidłowo i zaczniesz używać byle jakich specyfików chemicznych, możesz wyrządzić swojemu rowerowi krzywdę.
    </div>
]

const section2 = [
    <div>
        Bardzo popularnym sposobem czyszczenia łańcucha, stosowanym wielu amatorów, oraz, o zgrozo, warsztaty rowerowe, jest mycie napędu w słoiku z benzyną ekstrakcyjną, co 
        <b>zdecydowanie odradzam</b>. Benzyna tak zastosowana zostawia brzydki nalot, czyści słabo oraz wysusza łańcuch i powoduje luz na ogniwach. Co innego w przypadku nanoszenia
        pewnych ilości [1] beznyny na szmatkę i przeszorowaniu wszystkiego ręcznie. Wciąż nie jest to super efektywny sposób, ale co nieco w ten sposób da się wyczyścić. W zasadzie
        niewiele więcej da się powiedzieć o wszelkiej maści [2] odtłuszczaczasz - są okej, ale istnieje sporo lepszych sposobów.
    </div>,
    <div>
        Na rynku mamy też [3] maszynki czyszczące. Ich plusem jest na pewno tego, że nie trzeba zdejmować łańcucha - można to robić na rowerze tak jak stoi. Muszę powiedzieć, że
        przy zastosowaniu z ropą, albo dobrym środkiem czyszczącym coś takiego sprawuje się naprawdę nieźle. 
    </div>,
    <div>
        <img className="photo-medium" src={ChainCleaningMachine} alt="chainCleaningMachine"></img>
    </div>,
    <div>
        Na sam koniec zostawiłem mój ulubiony sposób czyszczenia, czyli [4] pianka marki Fenwicks. Nie syfi wokół, bardzo ładnie pachnie i czyści wszelkie zabrudzenia i smary tak dobrze, 
        że używam jej z powodzeniem do wszystkich części napędu, wielu partii roweru, a także do czyszczenia wielu zabrudzeń nawet nie związanych z rowerem. Piankę wystarczy nałożyć
        na łańcuch, odczekać kilka minut i zacząć ścierać. Naprawdę polecam.
    </div>,
    <div>
        <img className="photo-medium" src={Fenwicks} alt="fenwicks"></img>
    </div>
]

const section3 = [
    <div>
        Koniec tego artykułu powinien być jednocześnie twoim punktem wyjścia w myśleniu o tym jak wyczyścić napęd. Każdy brud jaki zbiera się na twoim napędzie jest niczym innym
        jak efektem długoterminowego zaniedbania lub/oraz nieprawidłowo przesmarowanego łańcucha. Jest absolutną normą to, że przeciętny rowerzysta, jeżeli zaczyna smarować rower,
        to nakłada hektolitry oliwki, i niejednokrotnie nie tylko na łańcuch, ale i kasetę i korbę. Do tak zmagazynowanej, lepkiej cieczy przyklei się z łatwością każda jedna
        drobinka pyłu jaką napotkasz na drodze. Prawdopodobnie więc zamiast poświęcać godziny na czyszczeniu roweru, powinieneś skupić się na tym, aby łańcuch był przesmarowany
        prawidłowo.
    </div>
]

const content = [
    <Section paragraphs={section1} />,
    <Section paragraphs={section2} title={'Czym i jak czyścić?'} />,
    <Section paragraphs={section3} title={'Lepiej zapobiegać niż leczyć'} />
]

export default class Article extends React.Component {
    render() {
        return (
                <ArticleBody
                    title="Jak prawidłowo czyścić napęd"
                    paragraphs={content}
                    backButtonLink='/maintenance'
                />
        );
    }
}