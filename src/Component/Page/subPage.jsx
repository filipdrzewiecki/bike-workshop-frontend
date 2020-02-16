import React from 'react';
import '../Css/index.css';
import Content from './content';

const SubPage = (props) => {
    return (
        <div className="page">
            <Content 
            title = {props.title}
            paragraphs = {props.paragraphs}
            />
        </div>
    );
}

export default SubPage;