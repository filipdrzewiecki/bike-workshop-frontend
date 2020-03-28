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
                    title="Centrowanie koła"
                    paragraphs={paragraphs}
                    back={true}
                    link='/service'
                />
            </div>
        );
    }
}