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
                    title="Typy amortyzatorów"
                    secondaryTitle="ze względu na dyscyplinę"
                    paragraphs={paragraphs}
                    backButtonLink='/compatibility'
                />
        );
    }
}