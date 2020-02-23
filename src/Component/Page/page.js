import React from 'react';
import '../Css/index.css';

const Page = (props) => {
    return (
        <div className="page">
            <div className="pageTitle">
                <p>{props.title}</p>
            </div>
            <div className="pageContent">
                {props.paragraphs.map((paragraph) => <div>{paragraph}</div>)}
            </div>
        </div>
    );
}

export default Page;