import React from 'react';
import ReactDOM from 'react-dom';
import '../../Css/index.css';
import Page from '../../Page/page';


const paragraphs = ['aaa', 'bbb', 'ccc']

const About = () => {
    return (
        <div>
        <Page 
            menu1="serws"
            menu2="serws"
            menu3="serwis"

            title="Sekcja o nas"
            paragraphs={paragraphs}
        />
        </div>
    );
}
 
ReactDOM.render(
    <About/>,
    document.querySelector('#root')
);

export default About;