import React from 'react';
import '../../index.css';
import Page from '../../Page/page';
import ChallengeBox from '../challengeBox';

const list = [
    <div>Zestaw kluczy sześciokątnych</div>,
    <div>Smar montażowy</div>,
    <div>Szmatka</div>,
    <div>Młotek z gumową główką</div>
]

const list2 = [
    <div>Narzędzie do wybijania misek sterów – np. parktool RT-1 (nie dotyczy sterów zintegrowanych)</div>,
    <div>Narzędzia do osadzania misek sterów – np. parktool HPP-2 (nie dotyczy sterów zintegrowanych)</div>,
    <div>Narzędzie do osadzania bieżni na koronie widelca – np. parktool CRS</div>,
    <div>Narzędzie do usuwania bieżni korony widelca np. parktool CRP-1</div>,
    <div>Zestaw kluczy sześciokątnych</div>,
    <div>Smar montażowy</div>,
    <div>Szmatka</div>,
    <div>Suwmiarka</div>,
    <div>Młotek z gumową główką (opcjonalne)</div>
]

const paragraphs = [
    <div>Typowy niedzielny rowerzysta wie o sterach w swoim rowerze dokładnie tyle, ile problemu mu sprawiają. 
    Jest to część (a raczej zestaw części), które w porównaniu do reszty roweru są mało awaryjna, w związku z czym nasza wiedza o nich sprowadza się do tego, że są. 
    Co jednak w przypadku, kiedy po kilku latach użytkowania (lub jednej sesji z myjką ciśnieniową), 
    kierownica nie kręci się już bez oporu, a okazyjnie wydaje z siebie podejrzane kliknięta i zgrzyty? Wtedy mamy dwie opcje:</div>, 
    <ul>
        <li>Wymiana łożysk sterów</li>
        <li>Wymiana sterów w całości</li>
    </ul>, 
    <div>Jeśli nie jesteś mechanikiem i nie masz do dyspozycji specjalistycznych narzędzi, zdecydowanie odradza się opcję drugą. 
        Bez odpowiedniego przygotowania technicznego w najgorszym wypadku uszkodzisz konstrukcję sterów lub samej ramy. Ponadto w każdym wypadku
        polecam zapoznać się z artkułem dotyczącym typów sterów oraz istniejących standardów mocowania. <a href="/compatibility/headset/1">Stery</a>
    </div>,
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
    <h1>Pełna wymiana sterów:</h1>,
    <ChallengeBox
    skillLevel = "challengeBar75"
    toolLevel = "challengeBar100"
    list = {list2}
    />,
    <div>Początek jest dokładni taki sam jak przy zwykłej wymianie łożysk opisanej powyżej. Aby ‘dobrać’ się do łożysk będziesz musiał docelowo wyjąć widelec. 
        Bądź na to przygotowany, aby w trakcie demontażu nie zorientować się, że plątanina napiętych kabli ci to uniemożliwi, lub w znaczący sposób utrudni, wydłużając całą naprawę. 
        Prawdopodobnie dobrym rozwiązaniem jest też przygotowanie podpórki, aby ramą bez widelca oprzeć w bezpieczny i stabilny sposób. 
        Sugeruję także wyjęcie koła dla ułatwienia sobie manewrów wyjętymi komponentami.</div>,
    <div>
        <ul>
            <li>Poluzuj śruby boczne wspornika kierownicy (mostek),</li>
            <li>Odkręć zupełnie śrubę górną rury sterowej i wyjmij ją razem z kapslem,</li>
            <li>Zdejmij wspornik kierownicy z rury sterowej</li>
            <li>Zabezpiecz kierownicę w taki sposób, aby nie luźno wisząc na kablach nie porysowała ramy</li>
            <li>Zdejmij wszystkie podkładki z rury sterowej oraz górne podkładki sterów,</li>
            <li>Jeśli widelec nie wysuwa się z ramy i sterów, użyj młotka z gumową główką, lub innego podobnego narzędzia aby go wybić.</li>
            <li>Zabezpiecz Widelec w taki sposób, aby zwisając na kablach nie porysował ramy</li>
            <li>Wyjmij łożyska (są to albo wianki albo łożyska maszynowe),</li>
            <li>Wybij miski sterów narzędziem parktool RT-1. 
                a.	UWAGA: Ramy ze zintegrowanym systemem sterów mają miski wbudowane w ramę, więc w takim przypadku nie będzie to konieczne.</li>
            <li>Usuń bieżnię korony widelca narzędziem parktool CRP-1</li>
            <li>Zmierz suwmiarką średnicą wewnętrzną ramy w miejscu osadzenia misek sterów – na górze oraz na dole. 
                Na podstawie wartości dobierz właściwe stery z tabeli podanej na początku artykułu.
                    a.	Uwaga: musisz wziąć pod uwagę jeszcze wartość widelca. Może się zdarzyć, że masz ramę taperowaną, a rura sterowa widelca to 1 i 1/8” na całej długości. 
                    W takim wypadku będziesz potrzebował specjalne stery, stanowiące jednocześnie formę przejściówki</li>
            <li>Dokładnie wyczyść wewnętrzną część ramy. Nałóż cienką warstwę smaru montażowego.</li>
            <li>Osadź miski nowych sterów za pomocą narzędzia parktool HPP-2.
                a.	Miska musi wchodzić w ramę idealnie pod kątem prostym. Jeżeli podczas osadzania się ześlizgnie i straci dobry kąt – nie kontynuuj. Wybij miskę i zacznij od początku.
                b.	Najlepiej jedną miskę po drugiej – unikaj usadzania obu jednocześnie. 
                c.	Osadzając miski sterów bardzo łatwo jest uszkodzić ramę lub stery. Zachowaj szczególną ostrożność, działaj powoli i bez pośpiechu.</li>
            <li>Dokładnie wyczyść koronę widelca. Nałóż cienką warstwę smaru montażowego, a następnie osadź bieżnię na koronie widelca za pomocą narzędzia parktool CRS.</li>
            <li>Nałóż warstwę smaru na miski, umieść w nich łożyska, a następnie umieść jeszcze minimalną ilość smaru na górnej stronie samych łożysk,</li>
        </ul>
    </div>
]

const Headset = () => {
    return (
        <div>
        <Page 
            menu1="serws"
            menu2="serws"
            menu3="serwis"

            title="Wymiana sterów"
            paragraphs={paragraphs}
        />
        </div>
    );
}
 
export default Headset;