import '../../../Css/index.css';
import React from 'react';
import ArticleBody from '../../../Page/PageElements/article.jsx';

import ContentTile from '../../../Page/ContentComponents/contentTile';

import ImageSquare from '../../../../resources/bottomBracket/square.jpg';
import ImageOctalink from '../../../../resources/bottomBracket/octalink.png';
import ImageIntegratedThreaded from '../../../../resources/bottomBracket/integratedThreaded.jpg';
import ImagePressFit from '../../../../resources/bottomBracket/pressFit.jpg';

import TableThreadedBottomBracketDimensions from '../Component/table-bb-threaded-dimensions';
import TablePFdimensions from '../Component/table-bb-pf-dimensions';



const paragraphs = [
    <div>
    Suport jest jedną z tych części roweru do których przywiązuje się wyjątkowo mało uwagi i to zarówno na etapie sprzedaży sklepowej jak i na etapie 
    użytkowania. Z suportem jest trochę jak ze zdrowiem - doceniamy, jego bezproblemowe działanie dopiero w momencie kiedy zaczyna działaź źle. Jest to element
    kluczowy w aspekcie sztywności napędu a jego kolejne postacie na drodze rozwoju potrafiły prowadzić w rewolucji w aspekcie konstruowania ram.
    </div>,
    <TableThreadedBottomBracketDimensions/>,
    <TablePFdimensions/>,
    <ContentTile
    imageSource = {ImageSquare}
    name = "Kwadrat"
    content = {<div>
      Najpopularniejszy standard w rowerach do 4000 PLN. Wysoka waga sięgająca ok. 300 gramów. Jest też mało uniwersalny, dlatego
      że nawet w obrębie korb tej samej firmy, każdy model wymaga specjalnej długości osi. Dodatkowo jest to najmniej sztywny system
      z tutaj prezentowanych. Mimo wszystkich tych wad jest to bez wątpienia niezastąpiony system w rowerach budżetowych z uwagi na 
      bardzo niską cenę oraz niską awaryjność. 
      Więcej informacji. 
      Jak dobrać korbę na kwadrat.
    </div>}/>,
    <ContentTile
      imageSource = {ImageOctalink}
      name = "Octalink"
      content = {<div>
    Typ bardzo zbliżony do kwadratu. Różnica polega w zasadzie wyłącznie na kształcie osi, co samo przez się oznacza wymóg stosowania innego systemu korbowego.
    Zamiast osi w kstałcie kwadratu mamy do czynienia z wałkiem o nieco większej średnicy z ośmioma wypustkami. Oznacza to, że korba ma oparcie na większej ilości punktów,
    a więc sztywność całej konstrukcji nieco wzrasta. Czy ten zysk uzasadnia jednak wprowadzenie nowego standardu o wyższej cenie? W swoim czasie, kiedy była to jedyna alternatywa - być może.
    Aktualnie jednak, kiedy na rynku system zintegrowane zadomowiły się na dobre, octalink nie ma żadnej racji bytu, a utrzymywanie dalej tego standardu powoduje wyłącznie więcej komplikacji.
    Więcej informacji. 
    Jak dobrać korbę na kwadrat.
    </div>}/>,
    <ContentTile
        imageSource = {ImageIntegratedThreaded}
        name = "Suport gwintowany zintegrowany"
        content = {<div>
          Po wielu latach prób zredefiniowania suportu i przemodelowywania systemów kartridżowych, zrobiono potrzebny krok w tył, aby dostrzec co było głównym czynnikiem blokującym rozwój
          branży. W tym systemie, punkt oparcia został przesunięty na zewnątrz ramy, co pozwoliło na zastosowanie większych niż dotychczas łożysk, a co za tym idzie także osi o większej średnicy.
          Dodatkowo punkt oparcia był szerzej rozstawiony niż dotychczas, co zaowocowało drastycznym skokiem sztywności napędu. Dodatkowo oś o tak dużej średnicy nie potrzebowała aż tak grubej warstwy
          metalu, czym zaoszczędzono sporo gramów. Jakie są zatem wady? Kilkukrotnie wyższa cena niż w przypadku kwadratu oraz większa awaryjność. 
    </div>}/>,
    <ContentTile
          imageSource = {ImagePressFit}
          name = "Press fit"
          content = {<div>
           Poprzednie rozwiązanie było zredefiniowaniem wkładu suportu, natomiast press-fit jest zredefiniowaniem mufy suportu. Filozofia jest podobna co w systemach gwintowanych - większe łożyska, szerzej
           rozstawione aniżeli w typach kartridżowych. Tak jak systemy gwintowane można stosować bez najmniejszego problemu w ramach przystosowanych do kartridży, tak suporty typu press-fit
           są kompatybilne wyłącznie w ramach o mufie bezgwintowej. Miski wciska się w ramę za pomocą specjalnej prasy. Różnica jest zatem zarówno we wkładzie suportu (który jest najczęściej plastikowyj dla niższej wagi) jak i mufie
           , która w tym systemie jest szersza i ma większą średnicą otworu. Rozwiązanie jeszcze bardziej zwiększa sztywność, jednak odbywa się to kosztem łatwości użytkowania - prasa do wymiany
           tego typu wkładów nie należy do najtańszych i najpowszechniej dostępnych, co niemal z całą pewności wyklucza zabieg wymiany w domu i skazuje użytkownika takiego roweru na regularne wizyty w 
           serwisie.
    </div>}/>
]

export default class Article extends React.Component {
  render() {
      return (
          <div>
              <ArticleBody
                  title="Wkład suportu"
                  paragraphs={paragraphs}
                  backButtonLink='/compatibility'
              />
          </div>
      );
  }
}