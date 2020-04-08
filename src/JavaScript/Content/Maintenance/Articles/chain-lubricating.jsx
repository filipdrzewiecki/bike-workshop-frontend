import '../../../Css/index.css';
import React from 'react';
import Section from '../../../Page/PageElements/section.jsx';
import ArticleBody from '../../../Page/PageElements/article.jsx';

const section1 = [
    <div>
        No jak to jak? <s> Bierzemy oliwkę, nanosimy grubą warstwę na łańcuch, a dla bezpieczeństwa również i kasetę i zębatki korby. Czym grubsza warstwa płynu, tym lepiej! </s> Otóż nie.
        Zbyt duża ilość oliwki do łańcucha szkodzi tak samo jak jej brak. Po prawidłowym nałożeniu powinna znajdować się wewnątrz ogniew, z zewnątrz natomiast łańcuch powinien być
        stosunkowo suchy. Jak to osiągnąć? Polecam nanieść jedną kroplę oliwki na każde ogniwo po kolei (zajmie ci to ok. 2 minuty) a następnie odczekać minimum godzinę. Najlepiej jednak
        zrobisz, jeśli zostawisz rower na noc w spokoju. Następnie nad ranem zatrzyj nadmiar oliwki szmatką. Tak przesmarowany napęd będzie chodził cicho, nie będąc jednocześnie lepem
        na brud.
    </div>,
    <div>
        Co ile nakładamy nową warstwę oliwki? Ok. 100 - 200 km. w zależności od marki i modelu. 
    </div>
]


const content = [
    <Section paragraphs={section1} />
]

export default class Article extends React.Component {
    render() {
        return (
            <div>
                <ArticleBody
                    title="Smarowanie łańcucha"
                    paragraphs={content}
                    backButtonLink='/maintenance'
                />
            </div>
        );
    }
}