import '../../../Css/index.css';
import React from 'react';
import Article from '../../../Page/PageElements/article.jsx';

const paragraphs = [
    <div>
        Treść artykułu.
    </div>
]

export default class CrankArticle extends React.Component {
    render() {
        return (
                <Article
                    title="Serwis i wymiana korby"
                    paragraphs={paragraphs}
                    backButtonLink='/service'
                />
        );
    }
}