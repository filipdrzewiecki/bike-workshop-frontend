import React from 'react';
import '../../../Css/index.css';
import Page from '../../../Page/PageElements/article.jsx';
import PartialService from './partialService';
import FullService from './fullService';
import Intro from './intro';
import SectionPanel from '../../../Page/ContentComponents/sectionPanel';

const paragraphs = [
    <Intro/>,
    <SectionPanel
            title="Serwis częściowy"
            content={<PartialService/>}
    />,
    <SectionPanel
            title="Pełen serwis"
            content={<FullService/>}
    />
]

const Headset = () => {
    return (
        <div>
        <Page 
            title="Wymiana sterów"
            paragraphs={paragraphs}
        />
        </div>
    );
}
 
export default Headset;