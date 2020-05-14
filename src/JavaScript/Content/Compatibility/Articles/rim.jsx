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
                    title="Obręcz koła"
                    paragraphs={paragraphs}
                    backButtonLink='/compatibility'
                />
        );
    }
}