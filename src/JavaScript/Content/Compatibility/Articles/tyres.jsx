import '../../../Css/index.css';
import React from 'react';
import Page from '../../../Page/PageElements/article.jsx';
import TableTyreDimensions from '../Component/table-tyre-to-rim'


const paragraphs = [
    <div>
    W tym artykule kompletnie pomijam aspekt związany z bieżnikiem, sensem instalowania pewnego rodzaju opon w różnych typach roweru, oraz jakie są najlepsze modele i marki.
    Na warsztat weźmiemy zatem wyłącznie aspekt techniczny, czyli jaki jest dopuszczalny i optymalny rozmiar opony w stosunku do obręczy i ramy. 
    Dla wszystkich, którzy są zieloni w kwestiach obowiązujących na rynku oznaczeniach szerokości pozostawiam poniższe tabelki.
    </div>,
    <TableTyreDimensions/>, 
    <div>
      W stosunku do tego samego rozmiaru możemy spotkać się z trzyma różnymi oznaczeniami. 
      Będzie to system ISO, który podaje średnicę obręczy w milimetrach np. 622. 
      Dalej mamy system cali, będący średnicą całego koła wraz z oponą np. 28”. 
      I wreszcie system francuski, który jest zewnętrzną średnicą koła razem z balonem w mm. 
      Poniżej kilka przykładów:
    </div>,
    <div>
      Wiemy już zatem jak odczytać rozmiar opony, w aspekcie jej wysokości lub średnicy. Co więc z szerokością? 
      Jest ona oznaczana zwyczajowo w milimetrach do ok. 42 lub w calach powyżej tej wartości, a więc od ok. 1,6 cala. 
      Bardzo często podane są wartości w obu miarach, aczkolwiek w praktyce przyjęło się używać tych konkretnych nazw w odniesieniu do wymienionych przedziałów. 
      Z czego to wynika? Opony wąskie, a więc szosowe, zostały wymyślone w Europie, natomiast szerokie, czyli rowery górskie w stanach zjednoczonych. 
    </div>,
    <div>
      Wracając jednak to właściwego tematu, jeżeli potrafimy już odczytać wysokość oraz szerokość opony, pozostaje nam tylko sprawdzić, czy damy radę ją umieścić w rowerze.  
      Wysokość jest dopasować łatwo – istnieje jedna właściwa dla danej obręczy i nie mamy tutaj pola do manewru. 
      Jeżeli więc mamy obręcz 622, to możemy założyć na nią oponę wyłącznie o tym samym wymiarze. 
      Nie ma możliwości naciągnięcia gumy tak, aby wpasowała się w większy typ obręczy, ani skurczenia jej dla mniejszych wersji.
    </div>,
    <div>
      Inną kwestią jest szerokość – na jedną obręcz wejdzie wiele opon o znacząco różnych od siebie szerokościach. 
      Są jednak pewne limity, a mianowicie dostępna przestrzeń widelca oraz ramy. 
      Te mają bardzo rzadko podany maksymalny rozmiar opony w swojej specyfikacji, ale na pomoc przychodzi nam tutaj suwmiarka. 
      Pamiętaj, że szerokość opony podana przez producenta, to estymowana szerokość w najszerszym jej miejscu, przy maksymalnym ciśnieniu. 
      Mając te informację, może mniej więcej ocenić ten punkty na widełkach tylnych swojej ramy. 
      Zmierz szerokość suwmiarką, zachowując przy tym bezpieczny margines – nie chcesz przecież, aby okazało się, że opona będzie się blokować lub trzeć o ramą. 
      Podobnie da się wymierzyć amortyzator lub widelec sztywny. 
    </div>,
    <div>
      To jednak nie koniec. W powyższy sposób jesteśmy w stanie ocenić maksymalny rozmiar opony, który wejdzie do ramy lub widelca. 
      Pytanie czy każda szerokość jest dobra? Czy są szerokości optymalne? Owszem są, ale tutaj będziemy potrzebowali kolejną informację, a więc wewnętrzną szerokość twojej obręczy. 
      Jeżeli nie chcesz zdejmować opony, aby to sprawdzić, możesz zmierzyć szerokość zewnętrzną, a następnie odjąć ok. 3-4 mm. 
      Pamiętaj jednak, że każda obręcz jest różna i takie podejście zawsze jest obarczone ryzykiem. 
      Dodatkowo, jeżeli masz markowe koła z dobrym wsparciem technicznym, prawdopodobnie w internecie znajdziesz ich pełną specyfikację – 
      wraz z szerokością zewnętrzną i wewnętrzną obręczy.
    </div>,
    <div>
      Jeżeli już dokonałeś pomiaru, lub zdobyłeś tę informację w jakikolwiek inny sposób, możesz sprawdzić w tabeli powyżej jakie są optymalne rozmiary opon dla twojej obręczy.
    </div>,
    <div>
      A teraz kilka zdań wyjaśnienia dlaczego właśnie te rozmiary są tymi najlepszymi. 
      Otóż opona nie ma dokładnie takiego samego kształtu na każdej obręczy. 
      Czym szersza jest obręcz w stosunku do opony, tym balon będzie bardziej spłaszczony, aż, przekraczając w końcu pewną granicę, będzie stawiał dodatkowe opory toczenia. 
      Z drugiej strony zbyt wąska obręcz może powodować, że opona nie będzie miała dostatecznego oparcia i w pewnym momencie wyślizgnie się z rantów. 
      Stosując podane powyżej wartości przy wyborze zarówno opony jak i obręczy, będziesz miał pewność, że balon ma prawidłowy kształt, a sama opona stawia minimalne możliwe opory. 
    </div>
]

const TyreToRimWidth = () => {
    return (
        <div>
        <Page 
            title={"Jak dobrać rozmiar opony do obręczy"}
            paragraphs={paragraphs}
        />
        </div>
    );
}

export default TyreToRimWidth;