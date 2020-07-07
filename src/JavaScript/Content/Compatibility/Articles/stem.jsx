import '../../../Css/index.css';
import React from 'react';
import Section from '../../../Page/PageElements/section.jsx';
import ArticleBody from '../../../Page/PageElements/article.jsx';
import StemDiameters from '../../../../resources/stem/stemDiameters.PNG';

const section1 = [
    <div>
        Wspornik kierownicy jest jednym z kluczowych komponentów w kwestii komfortu jazdy.
        Zdecydowaniej taniej i łatwiej jest wymienić mostek, zmieniając w ten sposób ułożenie ciała na rowerze, niż wymienić za dużą lub za małą ramę.
        Dodatkowo manipulując jego długością oraz kątem możemy w bardzo łatwo sposób wpłynąć na sposób prowadzenia roweru - krótszy mostek będzie powodował
        bardziej agresywne skręty, dłuższy natomiast zagwarantuje pewne trzymanie toru jazdy.
    </div>
]

const section2 = [
    <div>
        Aby dobrać mostek będziemy potrzebować dwa wymiary:
        <ol>
            <li>średnica rury sterowej widelca</li>
            <li>średnica zacisku kierownicy</li>
        </ol>
    </div>,
    <div>
        <img className="photo" src={StemDiameters} alt="diameters"></img>
    </div>,
    <div>
        Średnica rury sterowej (1) w przytłaczającej większości roweru będzie wynosiła 1 i 1/8 cala, czyli <b>28.6 mm</b>. Jest to obowiązujący powszechnie standard
        i o ile nie masz bardzo drogiego albo nietypowego roweru, to nie musisz nawet nic mierzyć.
    </div>,
    <div>
        Średnica zacisku kierownicy (2) ma natomiast kilka wciąż żywych standardów, aczkolwiek większość rowerów produkowanych w kilkunastu ostatnich latach
        ma w standardzie <b>31.8 mm</b> (1 1/4"). Resztę standardów znajdziesz wraz z opisem na końcu tego artykułu.
    </div>
]

const section3 = [
    <div>
        Długość mostka to wypadkowa kilku czynników:
        <ul>
            <li>Wielkość ramy</li>
            <li>Stosunek długości tułowia względem długości nóg</li>
            <li>Typ roweru</li>
            <li>Indywidualne preferencje</li>
        </ul>
    </div>,
    <div>
        Za podstawę warto więc wziąć pod uwagę mostek, który zostały zamontowany w rowerze fabrycznie a następnie zastosować korektę pod własne upodobania.
        Bardzo ogólnie rzecz ujmując:
        <ul>
            <li>50-70 mm - rowery górskie do agresywnej jazdy</li>
            <li>70-90 mm - MTB XC</li>
            <li>80-110 mm - trekking, cross, gravel</li>
            <li>90-120 mm - szosa</li>
        </ul>
        
    </div>
]

const StemStandardsHeadset = () => {
    return (
      <div>
        <table className="regularTable">
          <tr>
            <th>Rura sterowa</th>
            <th>Zastosowanie</th>
          </tr>
          <tr>
            <td>25.4 mm (1")</td>
            <td>Rowery górskie z lat 90</td>
          </tr>
          <tr>
            <td>28.6 mm (1 1/8")</td>
            <td>Najpopularniejszy standard obecny w większości rowerów</td>
          </tr>
          <tr>
            <td>31.8 (1 1/4")</td>
            <td>Nowoczesne rowery zjazdowe</td>
          </tr>
          <tr>
            <td>38.1 (1 1/2")</td>
            <td>Nowoczesne rowery zjazdowe</td>
          </tr>
        </table>
      </div>
    );
  }

  const StemStandardsHandlebar = () => {
    return (
      <div>
        <table className="regularTable">
          <tr>
            <th>Średnica kierownicy</th>
            <th>Zastosowanie</th>
          </tr>
          <tr>
            <td>28.6 mm (1 1/8")</td>
            <td>Rowery starsze, trekkingowe, dziecięce, miejskie</td>
          </tr>
          <tr>
            <td>31.8 (1 1/4")</td>
            <td>Większosć rowerów sportowych produkowanych w ostatnich latach</td>
          </tr>
          <tr>
            <td>38.1 (1 1/2")</td>
            <td>Rowery zjazdowe</td>
          </tr>
        </table>
      </div>
    );
  }

const section4 = [
    <div>
        <StemStandardsHeadset/>
    </div>,
    <div>
        <StemStandardsHandlebar/>
    </div>
]

const content = [
    <Section paragraphs={section1} />,
    <Section paragraphs={section2} title={'Jak dobrać mostek do mojego roweru'} />,
    <Section paragraphs={section3} title={'Jak dobrać długość wspornika kierownicy'} />,
    <Section paragraphs={section4} title={'Istniejące standardy'} />
]

export default class Article extends React.Component {
    render() {
        return (
                <ArticleBody
                    title="Mostek"
                    secondaryTitle="czyli wspornik kierownicy bez tajemnic"
                    paragraphs={content}
                    backButtonLink='/compatibility'
                />
        );
    }
}