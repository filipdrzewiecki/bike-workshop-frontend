import '../../../../Css/index.css';
import React from 'react';
import Page from '../../../../Page/PageElements/article.jsx';

const paragraphs = [<div>dsadsadsa</div>]

const SpokesArticle = () => {
    return (
        <div>
        <Page 
            title={"Jak dobrać rozmiar opony do obręczy"}
            paragraphs={paragraphs}
        />
        </div>
    );
}

export default SpokesArticle;