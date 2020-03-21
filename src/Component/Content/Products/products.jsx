import '../../Css/index.css';
import React from 'react';

import Page from '../../Page/PageElements/article.jsx';
import ProductsMenu from './menu';

const paragraphs = [
    <div>
        W tej sekcji znajdziesz recenzje wszelkiego typu produktów rowerowych i okołorowerowych. Wszystko jest kwestią gustu i podejścia, ale niektóre
        części bądź marki są wyjątkowo lubiane i polecane przez nas. Trafią wtedy do kategorii polecane.

    </div>,
    <ProductsMenu />
]

export default class Compatibility extends React.Component {
    render() {
        return (
            <div>
                <Page
                    title="Recenzje i opinie o produktach rowerowych"
                    paragraphs={paragraphs}
                />
            </div>
        );
    }
}