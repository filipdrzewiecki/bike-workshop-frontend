import React from 'react';
import '../Css/index.css';
import SideMenu from './sideMenu';
import Content from './content';

const Page = (props) => {
    return (
        <div className="page">
            <SideMenu 
            menu1 = {props.menu1}
            menu2 = {props.menu2}
            menu3 = {props.menu3}
            />
            <Content 
            title = {props.title}
            paragraphs = {props.paragraphs}
            />
            <SideMenu 
            menu1 = {props.menu1}
            menu2 = {props.menu2}
            menu3 = {props.menu3}
            />
        </div>
    );
}

export default Page;