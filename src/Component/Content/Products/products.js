import React from 'react';
import ReactDOM from 'react-dom';
import '../../Css/index.css';
import Page from '../../Page/page';


const paragraphs = [
    'aaa', 
    <div>

    </div>, 
    'ccc']

const Products = () => {
    return (
        <div>
        <Page 
            menu1="serws"
            menu2="serws"
            menu3="serwis"

            title="Sekcja o produktach"
            paragraphs={paragraphs}
        />
        </div>
    );
}
 
ReactDOM.render(
    <Products/>,
    document.querySelector('#root')
);

export default Products;