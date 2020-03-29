import '../../../Css/index.css';
import React from 'react';
import Article from '../../../Page/PageElements/article.jsx';

const paragraphs = [
    <div>
        Treść artykułu.
    </div>
]

export default class ChainArticle extends React.Component {
    render() {
        return (
            <div>
                <Article
                    title="Zwiększenie skoku widelca"
                    paragraphs={paragraphs}
                    backButtonLink='/service'
                />
            </div>
        );
    }
}