import '../../../Css/index.css';
import React from 'react';
import Page from '../../../Page/PageElements/article.jsx';

import ContentTile from '../../../Page/ContentComponents/contentTile';

import ImageEC from '../../../../resources/headset/EC.jpg';
import ImageIS from '../../../../resources/headset/IS.jpg';
import ImageZS from '../../../../resources/headset/ZS.jpg';
import ImageThread from '../../../../resources/headset/Thread.jpg';

import TableHeadsetStandards from '../Component/table-headset-standard';
import TableHeadsetTypes from '../Component/table-headset-type';

const paragraphs = [
    <div>Ze sterami rowerowymi jest tak jak ze zdrowiem - tyle o tym wiemy, ile nas boli. Póki kierownica chodzi bez żadnych zgrzytów, a widelec nie ma żadnego luzu,
      nawet do głowy nikomu nie przyjdzie żeby je rozrkęcić i przeserwisować. Rzadko, ale czasem jednak zdarzy się, że coś pójdzie nie tak i trzeba je wymienić. Wtedy
      natomiast warto wiedzieć jaki dokładnie typ jest w naszej maszynie. Poniżej kompendium wiedzy, które z pewnością pomoże ci w krytycznej sytuacji. Dodatkowo polecam artykuł
      o praktycznym zastosowaniu informacji znalezionych tutaj, czyli <a href="/service/headset/1">kompletny serwis sterów.</a>
    </div>,
    <TableHeadsetTypes/>,
    <TableHeadsetStandards/>, 
    <ContentTile
    imageSource = {ImageThread}
    name = "Threaded"
    content = {<div>
      Ewolucyjnie najstarszy system z tutaj prezentowanych. 
      Wciąż dostępny na rynku w wielu rowerach - najczęściej miejskich i trekkingowych.
      Praktycznie zawsze występuje w standardzie dla widelców 1" - wyjątkiem będą jedynie rowery górskie z lat dziewięćdziesiątych, 
      którym montowane gwintowane widelec 1 i 1/8 cala.

      </div>}
    />,
    <ContentTile
    imageSource = {ImageEC}
    name = "EC - external cup"
    content = {<div>
      Kolejne stadium rozwoju sterów. Najczęściej występująca nazwa dla tego typu to A-HEAD.
      Standardem jest stosowanie razem z widelcami 1 i 1/8 cala.
      Wciąż dostępny na rynku w wielu rowerach - najczęściej miejskich i trekkingowych.
      
      </div>}
    />,
    <ContentTile
    imageSource = {ImageZS}
    name = "ZS - zero stack"
    content = {<div>
      Inaczej stery półzintegrowane. 
      Mocowanie misek sterów, a więc rónież i cała główka ramy są znacznie szersze niż w przypadku EC.
      Same łożyska też, mimo, że wciąż osadzone we wciskanych zewnętrznych miskach, to nie znajdują się już na zewnątrz samej ramy, ale wewnątrz niej.
      Dzięki temu osiągnięto większą sztywność całęj konstrukcji i poprawiono szczelność.
      Przy tym typie sterów też oprócz standardowych widelców 1 i 1/8 można też spotkać widelce taperowane, czyli poszerzane w koronie do 1 i 1/2.
      [Artykuł o widelcach taperowanych]
      
      </div>}
    />,
    <ContentTile
    imageSource = {ImageIS}
    name = "IS - integrated headset"
    content = {<div>
      Czyli stery zintegrowane. Konstrukcyjnie z jednej strony bardzo zbliżone do półzintegrowanych - posiadają najczęściej te same wymiary łożysk.
      Jest jednak jedna zasadnicza różnica między tymi dwoma typami - zaintegrowane mają miski wbudowane w ramę. Oznacza to, że przy wymianie sterów, w zasadzie jedyne, co
      podmieniamy to łożyska. Nie trzeba więc bawić się z wciskarkami misek. Minusem takiego rozwiązania jest "jednorazowy" charakter takich misek - jeśli z jakiegoś powodu
      się złamią, trzeba wymieniać całą ramę. Boli...
      Najczęściej występują w ramach karbonowych i wysokich modelach alu.
    
      </div>}
    />,
    
    
    <div></div>,
]

const HeadsetType = () => {
    return (
        <div>
        <Page 
            title={"Stery - rodzaje i charakterystyka"}
            paragraphs={paragraphs}
        />
        </div>
    );
}
 

export default HeadsetType;