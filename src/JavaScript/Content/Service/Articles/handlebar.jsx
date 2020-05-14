import '../../../Css/index.css';
import React from 'react';
import Article from '../../../Page/PageElements/article.jsx';

const paragraphs = [
    <div>
        Treść artykułu.
    </div>
]

export default class HandlebarReplaceArticle extends React.Component {
    render() {
        return (
                <Article
                    title="Wymiana układu kierownicy"
                    paragraphs={paragraphs}
                    backButtonLink='/service'
                />
        );
    }
}