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
            <div>
                <ArticleBody
                    title="Damper"
                    secondaryTitle="amortyzator na tył"
                    paragraphs={paragraphs}
                    backButtonLink='/compatibility'
                />
            </div>
        );
    }
}