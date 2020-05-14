import '../../../Css/index.css';
import React from 'react';
import Article from '../../../Page/PageElements/article.jsx';

const paragraphs = [
    <div>
        Treść artykułu.
    </div>
]

export default class DerailleurServiceArticle extends React.Component {
    render() {
        return (
                <Article
                    title="Wymiana widelca"
                    paragraphs={paragraphs}
                    backButtonLink='/service'
                />
        );
    }
}