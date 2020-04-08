import '../../../Css/index.css';
import React from 'react';
import Section from '../../../Page/PageElements/section.jsx';
import ArticleBody from '../../../Page/PageElements/article.jsx';

const section1 = [
    <div>
        Sprawdzenie, czy rower ma luzy to zgodnie z każdą książeczką gwarancyjną czynność, którą powinieneś obowiązkowo wykonywać przed każdą jazdą. Może aż tak
        często nie ma potrzeby, ale powinna to być dla ciebie swego rodzaju rutyna, powtarzana regularnie w ciągu sezonu. Tylko w ten sposób będziesz mieć pewność, że
        nie jeździsz na tykającej bombie. 
    </div>
]

const section2 = [
    <div>
        Naciśnij jedną ręką przedni hamulec, a drugą połóż na dolnej misce sterów. Następniej poruszaj rowerem w przód i w tył - jeżeli masz luz na sterach, widelcu lub mostku,
        wyczujesz, że widelec i rama nie są "złączone". 
    </div>
]

const section3 = [
    <div>
        Stojąc z boku roweru, chwyć jedną ręką mostek, a drugą przednie koło i poruszaj nim w przód i w tył. Jeżeli porusza się względem mostka, to ma luzy na osi piasty.
        Z tylnem kołem postępuj tak samo, ale zamiast mostka, chwyć siodełko.
    </div>
]

const content = [
    <Section paragraphs={section1} />,
    <Section paragraphs={section2} title={'Stery'} />,
    <Section paragraphs={section3} title={'Koła'} />
]

export default class Article extends React.Component {
    render() {
        return (
            <div>
                <ArticleBody
                    title="Sprawdzenie, czy rower ma luzy"
                    paragraphs={content}
                    backButtonLink='/maintenance'
                />
            </div>
        );
    }
}