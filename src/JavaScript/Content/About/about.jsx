import '../../Css/index.css';
import React from 'react';

import ContentTile from '../../Page/ContentComponents/contentTile';
import Page from '../../Page/PageElements/article.jsx';

import FilPhoto from '../../../resources/creators/fil.png';
import LukePhoto from '../../../resources/creators/luke.png';


const paragraphs = [
    <div>
        Osoby tworzące tę stronę, to wieloletni zapaleńcy, którzy zęby zjedli na naprawach zarówno tych najdroższych , jak i najtańszych i najbardziej
        budżetowych rowerów. Jeśli masz jakieś sugestie odnośnie tego, jak działa ta strona, uwagi odnośnie prezentowanych tutaj artykułów, 
        lub po prostu chciałbyś podzielić się swoją opinią, uderzaj na email info@bike-workshop.com. 

    </div>,
    <ContentTile
        imageSource={FilPhoto}
        name="Filip"
        content={<div>
            Opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis
            opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis
            opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis
    </div>} />,
    <ContentTile
        imageSource={LukePhoto}
        name="Łukasz"
        content={<div>
            Opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis
            opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis
            opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis
    </div>} />
]

export default class Compatibility extends React.Component {
    render() {
        return (
            <div>
                <Page
                    title="My, pedalarze"
                    paragraphs={paragraphs}
                    isBackButton={false}
                />
            </div>
        );
    }
}