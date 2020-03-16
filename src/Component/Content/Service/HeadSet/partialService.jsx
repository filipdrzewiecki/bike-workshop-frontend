import React from 'react';
import '../../../Css/index.css';
import SubPage from '../../../Page/PageElements/section.jsx';
import ChallengeBox from '../../../Page/ContentComponents/challengeBox.jsx';

const list = [
    <div>Zestaw kluczy sześciokątnych</div>,
    <div>Smar montażowy</div>,
    <div>Szmatka</div>,
    <div>Młotek z gumową główką</div>
]

const paragraphs = [
<h1>Wymiana łożysk sterów:</h1>,
    <ChallengeBox
    skillLevel = "challengeBar50"
    toolLevel = "challengeBar25"
    list = {list}
    />,
    <div>Aby ‘dobrać’ się do łożysk będziesz musiał docelowo wyjąć widelec. 
        Bądź na to przygotowany, aby w trakcie demontażu nie zorientować się, że plątanina napiętych kabli ci to uniemożliwi, lub w znaczący sposób utrudni, wydłużając całą naprawę. 
        Prawdopodobnie dobrym rozwiązaniem jest też przygotowanie podpórki, aby ramą bez widelca oprzeć w bezpieczny i stabilny sposób. 
        Sugeruję także wyjęcie koła dla ułatwienia sobie manewrów wyjętymi komponentami.</div>,
    <div>
        <ul>
            <li>Poluzuj śruby boczne wspornika kierownicy (mostek)</li>
            <li>Odkręć zupełnie śrubę górną rury sterowej i wyjmij ją razem z kapslem,</li>
            <li>Zdejmij wspornik kierownicy z rury sterowej</li>
            <li>Zabezpiecz kierownicę w taki sposób, aby nie luźno wisząc na kablach nie porysowała ramy</li>
            <li>Zdejmij wszystkie podkładki z rury sterowej oraz górne podkładki sterów,</li>
            <li>Jeśli widelec nie wysuwa się z ramy i sterów, użyj młotka z gumową główką, lub innego podobnego narzędzia aby go wybić.</li>
                            <li>Zabezpiecz Widelec w taki sposób, aby zwisając na kablach nie porysował ramy</li>
            <li>Wyjmij łożyska (są to albo wianki albo łożyska maszynowe),</li>
            <li>Wyczyść dokładnie miski sterów oraz same łożyska szmatką do czysta. 
                a.	UWAGA: może się zdarzyć, że łożyska są w dobrej kondycji i kręcą się bez oporu. Dokładnie wyczyszczone mogą być używane dalej. 
                W przypadku wianków, których żywotność jest dużo niższa odradza się jednak ich ponowne zastosowanie.
                b.	Jeśli wciąż nie masz pojęcia z jakiego typu łożysk korzysta twój rower, możesz przeczytać oznacza na ściance łożyska maszynowego, 
                lub wymierzyć je suwmiarką</li>
            <li>Nałóż warstwę smaru na miski, umieść w nich łożyska, a następnie umieść jeszcze minimalną ilość smaru na górnej stronie samych łożysk,
                a.	Przy łożyskach maszynowych zaleca się nałożenie naprawdę symbolicznej ilości smarów. Przy wiankowych ilość ta powinna być na tyle duża, 
                aby osadzenie wianka w dolnej misce uniemożliwiało jego wypadnięcie.</li>
            <li>Nałóż widelec, nakładki sterów, dystanse oraz mostek,</li>
            <li>Nałóż kapsel, dokręć górną śrubę</li>
            <li>Wyprostuj mostek, dokręć śruby boczne mostka</li>
        </ul>
    </div>,
    ]

    const PartialService = () => {
        return (
            <div>
            <SubPage 
                title="Wymiana sterów"
                paragraphs={paragraphs}
            />
            </div>
        );
    }
     
    export default PartialService;