import React from 'react';
import '../../../Css/index.css';
import Page from '../../../Page/page';
import PartialService from './partial';
import FullService from './full';
import Intro from './intro';

const paragraphs = [
    <Intro/>,
    <PartialService/>,
    <FullService/>
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