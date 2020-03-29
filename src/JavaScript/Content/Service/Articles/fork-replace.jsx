import '../../../Css/index.css';
import React from 'react';
import Article from '../../../Page/PageElements/article.jsx';

const paragraphs = [
    <div>
        Treść artykułu.
    </div>
]

export default class ForkReplaceArticle extends React.Component {
    render() {
        return (
            <div>
                <Article
                    title="Wymiana widelca"
                    paragraphs={paragraphs}
                    backButtonLink='/service'
                />
            </div>
        );
    }
}