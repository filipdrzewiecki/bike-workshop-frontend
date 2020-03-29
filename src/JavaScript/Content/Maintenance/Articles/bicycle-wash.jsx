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
                    title="Jak prawidłowo myć rower"
                    secondaryTitle="żeby go nie uszkodzić"
                    paragraphs={paragraphs}
                    backButtonLink='/maintenance'
                />
            </div>
        );
    }
}