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
                    title="Typy amortyzatorów"
                    secondaryTitle="ze względu na budowę i zastosowane technologie"
                    paragraphs={paragraphs}
                    backButtonLink='/compatibility'
                />
            </div>
        );
    }
}