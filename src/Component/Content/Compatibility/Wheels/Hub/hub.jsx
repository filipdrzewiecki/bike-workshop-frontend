import '../../../../Css/index.css';
import React from 'react';
import Page from '../../../../Page/page';

import ContentTile from '../../../../Page/contentTile';

import ImageHub from '../../../../../resources/wheel/hub/hub.png';


const TableHubDimensions = () => {
  return (
    <div>
    <table className="regularTable">
    <tr>
    <td>typ</td>
    <td>Szerokość</td>
    <td>Wymiar osi</td>
   </tr>
     <td>MTB</td>
     <td>135 mm</td>
     <td>9 mm</td>
   <tr>
      <td>MTB BOOST</td>
     <td>142 mm</td>
     <td>12 mm</td>
   </tr>
   <tr>
      <td>MTB super BOOST</td>
     <td>148 mm</td>
     <td>12 mm</td>
   </tr>
   <tr>
      <td>Szosa</td>
      <td>130 mm</td>
      <td>9 mm/12 mm</td>
   </tr>
   <tr>
      <td>MTB przód</td>
      <td>100 mm</td>
      <td>9 mm/ 15mm</td>
   </tr>
   <tr>
      <td>MTB przód BOOST</td>
      <td>110 mm</td>
      <td>15 mm</td>
   </tr>
  </table>
  </div>
  );
}

const paragraphs = [
    <div>
    Piasta piasta
    </div>,
    <TableHubDimensions/>, 
    <ContentTile
    imageSource = {ImageHub}
    name = "Piasta"
    content = {<div>
      typ shimano bębenka
      </div>}
    />,
    <div>
      <img src={ImageHub} alt="hub"></img>
    </div>
]

const HubCompatibilityArticle = () => {
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


export default HubCompatibilityArticle;