import React from 'react';
import '../Css/index.css';

const ContentTile = (props) => {
    return (
        <div className="contentTile">
            
            <div className="contentTileImage">
                <img className="photo" src={props.imageSource} alt="thread"></img>
            </div>

            <div className="contentTileText">

                <div>
                    <h2>{props.name}</h2>
                </div>

                <div>
                    {props.content}
                </div>

            </div>
        </div>
    );
}

export default ContentTile;