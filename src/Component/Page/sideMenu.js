import React from 'react';
import '../Css/page.css';

const SideMenu = (props) => {
    return (
        <div className="pageSideMenu">
            <h4>{props.menu1}</h4>
            <h4>{props.menu2}</h4>
            <h4>{props.menu3}</h4>
        </div>
    );
}

export default SideMenu;