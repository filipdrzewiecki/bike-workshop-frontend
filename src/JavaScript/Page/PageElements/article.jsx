import '../../Css/page.css';
import React from 'react';
import IconGoBack from '../../../resources/icon/go-back.png';

const Page = (props) => {
    return (
        <div className="page">
            <div className="page-title-container">
                <div className="page-title">
                    <p>{props.title}</p>
                </div>
                <div className="go-back-button">
                    <img src={IconGoBack} alt="GoBack" ></img>
                </div>

            </div>
            <div className="pageContent">
                {props.paragraphs.map((paragraph) => <div>{paragraph}</div>)}
            </div>
        </div>
    );
}

export default Page;