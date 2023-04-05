import React, {useState, useEffect} from "react";
import './BoxArt.scss';
import Icon from "../../assets/icon";


const BoxArt = ({image, iconStatus, setShowPreview, id, title, overview, trailer}) => {
    return (
        <button
            className="boxArtContainer"
            onClick={()=>setShowPreview({trailer, title, overview, id})}
            >
            <div className="boxArt"> 
            <>
            {}
                <div className="iconOverlay">
                    {iconStatus && <Icon fill="#E50914"/>}
                </div>
                <img src={'https://image.tmdb.org/t/p/w500'+image} className="posterImage"/>
            </>
            </div>
        </button>
    )
};

export default BoxArt;