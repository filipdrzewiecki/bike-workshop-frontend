import '../../../Css/index.css';
import React from 'react';
import Section from '../../../Page/PageElements/section.jsx';
import ArticleBody from '../../../Page/PageElements/article.jsx';

const section1 = [
    <div>
        Jazda rowerem jest bardzo przyjemna, ale prędzej czy później staniesz przed perspektywą jazdy na zapuszczonym brudasie, do którego
        poza wielką miłością, będziesz odczuwać także wstręt. Rowery niestety również trzeba myć, ale mało kto wie jak zrobić to dobrze w warunkach
        domowych, aby w żaden sposób go nie uszkodzić. Zdarza się przecież, że niejeden domorsły mechanik po urządzeniu takiego domowego SPA, po tygodniu
        zachodził w głowę dlaczego wszystko tak hałasuje, ma luzy i działa dużo gorzej niż wcześniej.
    </div>,
    <div>
        UWAGA: artykuł ten skupia się na myciu roweru jako całości - jeżeli chcesz wiedzieć jak prawidłowo umyć koła lub napęd, zapraszam do przeznaczonych tym
        zagadnieniom odrębnym artykułów.
    </div>
]

const section2 = [
    <div>
        Najbezpieczniejszy i zarazem najbardziej czasochłonny sposób. Polecam szmatkę oraz atomizer z wodą i dowolną chemią do czyszczenia. Ramę i koła w większości
        wyczyścisz w ten sposób bez najmniejszego problemu, ale do wielu miejsc po prostu nie dojdziesz i skończy się na tym, że będziesz bezskutecznie próbował dojść palcem
         trudno dostępne spawy w okolicach suportu. O dokładnym czyszczeniu hamulców lub piast też możesz zapomnieć.
    </div>
]

const section3 = [
    <div>
        Najefektywniejszy sposób czyszczenia rowerem, ale jednocześnie bardzo ryzykowny, jeżeli nie wiesz jak to zrobić prawidłowo. Myjką ciśnieniową bardzo łatwo jest
        wypłukać smar z suportu, piast oraz sterów, a przez to narazić rower na liczne defekty i niezbyt łatwe naprawy. Obowiązkowo więc omijaj wymienione miejsca, a wszystkie
        inne pryskaj, zachowując minimum jeden metr odległości. Zanim jednak w ogóle zaczniesz pryskać wodą, polecam znaleźć dobry środek czyszczący, usuwający smar i tłuszcz,
        spryskać nim cały rower a następnie odczekać ok. dwie minuty. Na sam koniec koniecznie wysusz rower pistoletem ze sprężonym powietrzem. Zakładam, że jeżeli używasz
        myjki ciśnieniowej, to do tego takżę będziesz mieć dojście. 
    </div>
]

const content = [
    <Section paragraphs={section1} />,
    <Section paragraphs={section2} title={'Mycie ręczne'} />,
    <Section paragraphs={section3} title={'Myjka ciśnieniowa'} />
]

export default class Article extends React.Component {
    render() {
        return (
            <div>
                <ArticleBody
                    title="Jak prawidłowo myć rower"
                    secondaryTitle="żeby go nie uszkodzić"
                    paragraphs={content}
                    backButtonLink='/maintenance'
                />
            </div>
        );
    }
}