import '../../Css/index.css';
import React from 'react';
import Page from '../../Page/PageElements/article.jsx';

import CompatibilityMenu from './menu';


const paragraphs = [
    <div>
        Jest to sekcja w której umieszczone zostały wszelkie porady związane z konserwacją zarówno części rowerowych, jak i 
        wszystkich innych rzeczy okołorowerowych. Znajdziesz więc tutaj tutoriale o tym, jak prawdidłowo wyczyścić rower i 
        przesmarować łańcuch, ale również zadbać o odzież treningową, oraz zrobić prawidłowo rozgrzewkę. 
    </div>,
    <div>
        Wszystkie materiały zostały uszeregowane w odpowiednich, tematycznych działach.
    </div>,
    <CompatibilityMenu/>
]

export default class Compatibility extends React.Component {
    render() {
        return (
            <div>
                <Page
                    title="Praktyczne porady jak utrzymać rower"
                    secondaryTitle="w zdrowiu i czystości"
                    paragraphs={paragraphs}
                    isBackButton={false}
                />
            </div>
        );
    }
}