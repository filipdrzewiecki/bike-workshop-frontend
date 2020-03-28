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
                    title="Szprychy"
                    paragraphs={paragraphs}
                    back={true}
                    link='/compatibility'
                />
            </div>
        );
    }
}