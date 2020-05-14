import '../../Css/index.css';
import React from 'react';
import Page from '../../Page/PageElements/article.jsx';


const paragraphs = [
    <div>
        Osoby tworzące tę stronę, to wieloletni zapaleńcy, którzy zęby zjedli na naprawach zarówno tych najdroższych , jak i najtańszych i najbardziej
        budżetowych rowerów. Jeśli masz jakieś sugestie odnośnie tego, jak działa ta strona, uwagi odnośnie prezentowanych tutaj artykułów,
        lub po prostu chciałbyś podzielić się swoją opinią, uderzaj na email <b>bike.workshop.info@gmail.com</b> .
    </div>
]

export default class Compatibility extends React.Component {
    render() {
        return (
            <Page
                title="Kontakt"
                paragraphs={paragraphs}
                isBackButton={false}
            />
        );
    }
}