import '../../Css/index.css';
import React from 'react';

const SubPage = (props) => {
    return (
        <div className="section">
            {props.paragraphs.map((paragraph) => <div className="text-field">{paragraph}</div>)}
        </div>
    );
}

export default SubPage;