import React from "react";
import './BoxArt.scss';
import Icon from "../../assets/icon";

const BoxArt = ({imageURL, iconStatus}) => {
    return (
        <div className="boxArt">
            <div className="iconOverlay">
                {iconStatus && <Icon fill="#E50914"/>}
            </div>
            <img src={imageURL} className="posterImage"/>
        </div>
    )
};

export default BoxArt;