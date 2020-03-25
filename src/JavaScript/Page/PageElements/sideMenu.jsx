import '../../Css/index.css';
import React from 'react';

const SideMenu = (props) => {
    return (
        <div className="pageSideMenu">
                {props.paragraphs.map((paragraph) => <h4>{paragraph}</h4>)}
        </div>
    );
}

export default SideMenu;