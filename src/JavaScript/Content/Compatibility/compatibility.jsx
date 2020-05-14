import React from 'react';
import '../../Css/index.css';
import Page from '../../Page/PageElements/article.jsx';
import CompatibilityMenu from './menu';

const paragraphs = [
    <div>Sekcja związana z zagadnieniami istniejących na rynku standardów rowerowych, dostępnych części oraz możliwych kompromisów i przyjściówek.</div>,
    <CompatibilityMenu />
]

export default class Compatibility extends React.Component {
    render() {
        return (
            <Page
                title="Kompendium wiedzy o częściach rowerowych"
                paragraphs={paragraphs}
                isBackButton={false}
            />
        );
    }
}