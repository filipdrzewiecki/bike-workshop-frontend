import '../../../Css/index.css';
import React from 'react';
import Article from '../../../Page/PageElements/article.jsx';

const paragraphs = [
    <div>
        Treść artykułu.
    </div>
]

export default class ForkArticle extends React.Component {
    render() {
        return (
            <div>
                <Article
                    title="Serwis widelca"
                    paragraphs={paragraphs}
                    back={true}
                    link='/service'
                />
            </div>
        );
    }
}