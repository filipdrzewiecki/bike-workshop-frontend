import React from 'react';
import '../Css/page.css';

const SubPage = (props) => {
    return (
        <div className="section">
            {props.paragraphs.map((paragraph) => <div className="text-field">{paragraph}</div>)}
        </div>
    );
}

export default SubPage;