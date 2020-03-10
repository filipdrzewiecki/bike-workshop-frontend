import React from 'react';
import '../Css/page.css';

const SideMenu = (props) => {
    return (
        <div className="pageSideMenu">
                {props.paragraphs.map((paragraph) => <h4>{paragraph}</h4>)}
        </div>
    );
}

export default SideMenu;