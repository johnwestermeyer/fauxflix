import React from "react";
import './BoxArt.scss';
import Icon from "../../assets/icon";

const BoxArt = ({image, iconStatus, title, overview}) => {
    return (
        <div className="boxArt">
            <div className="iconOverlay">
                {iconStatus && <Icon fill="#E50914"/>}
            </div>
            <img src={'https://image.tmdb.org/t/p/w500'+image} className="posterImage"/>
        </div>
    )
};

export default BoxArt;