import '../../../Css/index.css';
import React from 'react';
import Article from '../../../Page/PageElements/article.jsx';

const paragraphs = [
    <div>
        Treść artykułu.
    </div>
]

export default class BottomBracketReplaceArticle extends React.Component {
    render() {
        return (
                <Article
                    title="Serwis i wymiana wkładu suportu"
                    paragraphs={paragraphs}
                    backButtonLink='/service'
                />
        );
    }
}