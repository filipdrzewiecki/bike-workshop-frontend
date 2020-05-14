import '../../../Css/index.css';
import React from 'react';
import ArticleBody from '../../../Page/PageElements/article.jsx';

const paragraphs = [
    <div>
        Treść artykułu.
    </div>
]

export default class Article extends React.Component {
    render() {
        return (
                <ArticleBody
                    title="Mostek"
                    secondaryTitle="czyli wspornik kierownicy bez tajemnic"
                    paragraphs={paragraphs}
                    backButtonLink='/compatibility'
                />
        );
    }
}