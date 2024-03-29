import React, {useState, useEffect} from "react";
import './BoxArt.scss';
import Icon from "../../assets/icon";


const BoxArt = ({iconStatus, setShowPreview, title, showPreview}) => {
    return (
        <button
            className="boxArtContainer"
            onClick={()=>setShowPreview(title)}
            >
            <div className={showPreview === false ? "boxArt" : "noHoverBoxArt"}> 
            <>
            {}
                <div className="iconOverlay">
                    {iconStatus && <Icon fill="#E50914"/>}
                </div>
                <img src={'https://image.tmdb.org/t/p/w500'+title.poster_path} className="posterImage"/>
            </>
            </div>
        </button>
    )
};

export default BoxArt;