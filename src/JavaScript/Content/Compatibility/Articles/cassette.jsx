import '../../../Css/index.css';
import React from 'react';
import Page from '../../../Page/PageElements/article.jsx';

import ContentTile from '../../../Page/ContentComponents/contentTile';

import ImageShimanoFreeWheel from '../../../../resources/wheel/freewheelTypes/ShimanoFreewheel.jpeg';
import ImageCampagnoloFreeWheel from '../../../../resources/wheel/freewheelTypes/CampagnoloFreewheel.jpeg';
import ImageShimanoSplineFreeWheel from '../../../../resources/wheel/freewheelTypes/ShimanoSplineFreewheel.jpeg';
import ImageSramFreeWheel from '../../../../resources/wheel/freewheelTypes/SramFreewheel.jpg';


const TableCassetteDimensions = () => {
  return (
    <div>
    <table className="regularTable">
    <tr>
     <td>Typ</td>
     <td>Szerokość kasety</td>
     <td>Szerokość bębenka</td>
   </tr>
     <td>Shimano 11</td>
     <td></td>
     <td>36.75</td>
   <tr>
     <td>Shimano 10</td>
     <td>34.9</td>
     <td>37.2</td>
   </tr>
   <tr>
     <td>Shimano 9</td>
     <td>36.5</td>
     <td></td>
   </tr>
   <tr>
     <td>Shimano 8/7/6</td>
     <td>35.4</td>
     <td></td>
   </tr>
  </table>
  </div>
  );
}

const paragraphs = [
    <div>
    Kaseta to element kluczowy dla każdego napędu, w największej mierze wpływając na dostępne przełożenia. 
    Jednocześnie nie sposób jest omówić temat kaset, nie poruszając tematu istniejących standardów bębenków piast.
    Na rynku najpopularniejszym standardem jest oczywiście klasyczny typ shimano. W zasadzie w 90% przypadków rower będzie miał właśnie taki typ.
    W związku z coraz wyraźniejszą ekspansją SRAM, zwłaszcza za sprawą napędów typu Eagle, w ostatnich latach coraz łatwiej można spotkać także bębenki tej firmy.
    Wreszcie ostatnim typem, spotykanym bardzo rzadko i wyłącznie w rowerach z górnej półki, są bębenki Campagnolo.
    </div>,
    <TableCassetteDimensions/>, 
    <div><h2>Typy bębenków</h2></div>,
    <ContentTile
    imageSource = {ImageShimanoFreeWheel}
    name = "Shimano"
    content = {<div>
      typ shimano bębenka
      </div>}
    />,
    <ContentTile
    imageSource = {ImageSramFreeWheel}
    name = "Sram"
    content = {<div>
      typ sram bębenka
      </div>}
    />,
    <ContentTile
    imageSource = {ImageCampagnoloFreeWheel}
    name = "Campagnolo"
    content = {<div>
      typ campagnolo bębenka
      </div>}
    />,
    <ContentTile
    imageSource = {ImageShimanoSplineFreeWheel}
    name = "Shimano Spline"
    content = {<div>
      typ shimano spline bębenka
      </div>}
    />,
    <div>
    </div>
]

const CassetteArticle = () => {
    return (
        <div>
        <Page 
            menu1="serws"
            menu2="serws"
            menu3="serwis"

            title={"Kompendium wiedzy o kasetach rowerowych"}
            paragraphs={paragraphs}
        />
        </div>
    );
}
 

export default CassetteArticle;