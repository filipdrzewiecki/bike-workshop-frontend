import '../../../Css/index.css';
import React from 'react';
import Article from '../../../Page/PageElements/article.jsx';

const paragraphs = [
    <div>
        Treść artykułu.
    </div>
]

export default class CassetteArticle extends React.Component {
    render() {
        return (
            <div>
                <Article
                    title="Serwis i wymiana kasety"
                    paragraphs={paragraphs}
                    backButtonLink='/service'
                />
            </div>
        );
    }
}