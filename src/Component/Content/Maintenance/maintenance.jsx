import React from 'react';
import ReactDOM from 'react-dom';
import '../../Css/index.css';
import Page from '../../Page/PageElements/article.jsx';

 
const paragraphs = ['aaa', 'bbb', 'ccc']

const Maintenance = () => {
    return (
        <div>
        <Page 
            menu1="serws"
            menu2="serws"
            menu3="serwis"

            title="Sekcja o serwisowaniu"
            paragraphs={paragraphs}
        />
        </div>
    );
}
 
ReactDOM.render(
    <Maintenance/>,
    document.querySelector('#root')
);

export default Maintenance;