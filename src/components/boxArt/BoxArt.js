import React, {useState, useEffect} from "react";
import './BoxArt.scss';
import Icon from "../../assets/icon";

const BoxArt = ({image, iconStatus, title, overview, id}) => {
    const videoURL = "https://api.themoviedb.org/3/movie/"+id+"/videos?api_key="+process.env.REACT_APP_TMDB_API_KEY+"&language=en-US"
    const [video, setVideo] = useState(null);
    const [hoverStatus, setHoverStatus] = useState(false);

    const videoFetch = async () => {
        const vr = await fetch(videoURL);
        const results = await vr.json();
        const trailer = results.results.find(v => v.type === "Trailer");
        setVideo(trailer);
        setHoverStatus(true);
    };

    const hoverAction = () => {
        if(video === null){
            videoFetch();
        } else {
            setHoverStatus(true);
        }
    }

    const noHoverAction = () => {
        setHoverStatus(false);
    }

    const TrailerEmbed = ({id}) => {
        return(
            <div className="video">
                <iframe
                src={`https://www.youtube.com/embed/${id}`}
                border="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                autoplay="true"
                />
            </div>
        );}

    return (
        <button
            onMouseEnter={()=> hoverAction()}
            onMouseLeave={()=> noHoverAction()}
            >
            <div className="boxArt">
                <div className="iconOverlay">
                    {iconStatus && <Icon fill="#E50914"/>}
                </div>
                <img src={'https://image.tmdb.org/t/p/w500'+image} className="posterImage"/>
            </div>
        </button>
    )
};

export default BoxArt;