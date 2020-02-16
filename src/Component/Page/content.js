import React from 'react';
import '../Css/index.css';

const Content = (props) => {
    return (
        <div className="mainContent">
            <p style={{fontSize: '30px', textAlign: 'left', marginLeft: '50px', fontFamily: "'Poppins', 'sans-serif'"}}>{props.title}</p>
            {props.paragraphs.map((paragraph) => <div className="text-field">{paragraph}</div>)}
        </div>
    );
}



export default Content;