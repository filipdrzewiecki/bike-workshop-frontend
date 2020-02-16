import React from 'react';
import ReactDOM from 'react-dom';
import '../../Css/index.css';
import Page from '../../Page/page';


const paragraphs = [
<div>
    Bike Workshop to strona w całości poświęcona rowerom.
    Znajdziesz tutaj kompletne informacje dotyczące serwisu, konserwacji i kompatybilności.
    Wszystkie informacje i poradniki są przeznaczone zarowóno dla całkowitych amatorów jak i profesjonalnych mechaników.
</div>,
<div>
    Wszystkie materiały są całkowicie darmowe i dostępne bez żadnych limitów. 
    Są efektem pasji do rowerów i wielu lat spędzonych w wielu profesjonalnych serwisach rowerowych.
</div>,

<div>
    Jeśli masz jakiekolwiek wątpliwości lub uwagi dotyczące treści poradników, skontaktuj się z nami poprzez dział O NAS - na pewno odpiszemy.
</div>
]

const Main = () => {
    return (
        <div>
        <Page 
            menu1="serws"
            menu2="serws"
            menu3="serwis"

            title="Siema pedalarzu!"
            paragraphs={paragraphs}

        />
        </div>
    );
}
 
ReactDOM.render(
    <Main/>,
    document.querySelector('#root')
);

export default Main;