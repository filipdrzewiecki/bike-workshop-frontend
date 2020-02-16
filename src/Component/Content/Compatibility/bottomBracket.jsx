import React from 'react';
import '../../Css/index.css';
import Page from '../../Page/page';


const TableBottomBracketDimensions = () => {
  return (
    <div>
    <table className="regularTable">
    <tr>
     <td>Tyre mm</td>
     <td>Rim width in mm</td>
   </tr>
     <td></td>
     <td></td>
     <td></td>
   <tr>

   </tr>
  </table>
  </div>
  );
}

const paragraphs = [
    <div>
    W tym artykule kompletnie pomijam aspekt związany z bieżnikiem, sensem instalowania pewnego rodzaju opon w różnych typach roweru, oraz jakie są najlepsze modele i marki.
    Na warsztat weźmiemy zatem wyłącznie aspekt techniczny, czyli jaki jest dopuszczalny i optymalny rozmiar opony w stosunku do obręczy i ramy. 
    Dla wszystkich, którzy są zieloni w kwestiach obowiązujących na rynku oznaczeniach szerokości pozostawiam poniższe tabelki.
    </div>,
    <TableBottomBracketDimensions/>, 
    <div>
    </div>
]

const BottomBracketArticle = () => {
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
 

export default BottomBracketArticle;