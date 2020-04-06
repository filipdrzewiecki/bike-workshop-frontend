import '../../../Css/index.css';
import React from 'react';
import Section from '../../../Page/PageElements/section.jsx';
import ArticleBody from '../../../Page/PageElements/article.jsx';

const section1 = [
    <div>
        Treść artykułu.
    </div>
]

const section2 = [
    <div>
        Treść artykułu.
    </div>
]

const section3 = [
    <div>
        Treść artykułu.
    </div>
]

const content = [
    <Section paragraphs={section1} />,
    <Section paragraphs={section2} title={'Sekcja'} />,
    <Section paragraphs={section3} title={'Sekcja'} />
]

export default class Article extends React.Component {
    render() {
        return (
            <div>
                <ArticleBody
                    title="Czyszczenie kół"
                    paragraphs={content}
                    backButtonLink='/maintenance'
                />
            </div>
        );
    }
}