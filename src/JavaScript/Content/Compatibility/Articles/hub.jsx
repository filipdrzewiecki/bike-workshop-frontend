import '../../../Css/index.css';
import React from 'react';
import ArticleBody from '../../../Page/PageElements/article.jsx';
import TableHubDimensions from '../Component/table-hub-dimensions.jsx'
import Section from '../../../Page/PageElements/section.jsx';

import ImageHub from '../../../../resources/wheel/hub/hub.png';

const section1 = [
  <div>
    Piasta jest elementem roweru, który mało nas interesuje, jeżeli jeździmy budżetowym rowerem, albo który jest naszym koszmarem, w przypadku
    rowerów z wyższej półki. Jest tak za sprawą istnej eksplozji standardów jaka zalała rynek w ostatnich latach. 
    </div>
]

const section2 = [
    <div>
    Najpopularniejszym standardem na rynku dla piasty tylnej jest 135x9 (130x9 dla szosy) oraz 100x9 dla przedniej. Ktoś jednak dość słusznie stwierdził,
    że konstrukcja będzie sztywniejsza, jeżeli zastosuje się sztywną oś o wymiarze 12 mm. Dalej poszło z górki - skoro 12 mm to dlaczego by nie 15. Skoro 
    grubsza oś, to dlaczego by nie dłuższa. 
    </div>,
    <div>
    I tak wylądowaliśmy w realiach w których dobranie piasty w przedziale rowerów powyżej 8 tys. to prawdziwy dramat.
    Wspominałem o różnych standardach szprych i kilku wersjach tej samej piasty z różnymi ilościami otworów? Polecam mocno się skupić, przy zamawianiu 
    piasty z internetu <span role="img" aria-label="wink">&#128517;</span>
    </div>,
    <div>
    Poniżej tabela najpopularniejszych wymiarów piast wraz z komentarzem.
    </div>,
    <TableHubDimensions/>
]

const section3 = [
  <div>Poza samymi wymiarami piasty trzeba uwzględnić jeszcze kilka atrybutów. 
    <ul>
      <li><b>Typ hamulca tarczowego</b> - 6 śrub / center-lock</li>
      <li><b>Szerokość bębenka</b> - jaką kasetę z jaką ilością biegów da się zamontować</li>
      <li><b>Typ bębenka</b> - Shimano/Sram/Campagnolo</li>
      <li><b>Ilość otworów na szprychy</b> - musi się pokrywać z wybraną obręczą</li>
    </ul>
  </div>, 
  <div>
      <img className="photo-horizontal-long" src={ImageHub} alt="hub"></img>
  </div>
]

const content = [
  <Section paragraphs={section1} />,
  <Section paragraphs={section2} title={'Gdzie piasty dwie tam sto standardów'}/>,
  <Section paragraphs={section3} title={'Na co uważać przy wyborze piasty?'} />,
]

export default class Article extends React.Component {
  render() {
      return (
              <ArticleBody
                  title="Piasta"
                  paragraphs={content}
                  backButtonLink='/compatibility'
              />
      );
  }
}