import '../../Css/page.css';
import React from 'react';
import IconGoBack from '../../../resources/icon/go-back.png';
import { Link } from "react-router-dom";

function RenderGoBack(props) {
    if (props.back) {
        return (
            <div className="go-back-button">
                <Link to={props.link}><img src={IconGoBack} alt="GoBack" ></img></Link>
            </div>
        );
    }
    return null;
}

export default class Page extends React.Component {
    render() {
        return (
            <div className="page">
            <div className="page-title-container">
                <div className="page-title">
                    <p>{this.props.title}</p>
                </div>
                <RenderGoBack back={this.props.back} link={this.props.link}/>
            </div>
            <div className="pageContent">
                {this.props.paragraphs.map((paragraph) => <div>{paragraph}</div>)}
            </div>
        </div>
        );
    }
}