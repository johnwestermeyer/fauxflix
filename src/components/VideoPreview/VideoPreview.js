import React from 'react';
import ReactPlayer from "react-player";
import Modal from 'react-modal'
import './VideoPreview.scss';
import StyledRating from '../StyledRating/StyledRating';

const VideoPreview = ({showPreview, setShowPreview, width}) => {
    const {title, overview, trailer, vote_average, release_date, genreNames} = showPreview;
    return (
        <Modal
            isOpen={showPreview ? true : false}
            onRequestClose={()=>setShowPreview(false)}
            className="videoPreview"
            overlayClassName="overlay"
            ariaHideApp={false}
            >
            <div className="videoPreview" style={{width: Math.max((width * 0.60) + 20, 290)}}>
                {trailer !== null ? <ReactPlayer 
                    url={`https://www.youtube.com/watch?v=${trailer}`}
                    playing={true}
                    controls={false}
                    width={Math.max(width * 0.60, 280)}
                    height={Math.max((width * 0.60) / 1.778, 157)}
                    className="videoFrame"
                    config={{
                        youtube: {
                          playerVars: { controls: 0, modestbranding: 1 },
                        },
                    }}
                /> :
                <div style={{width:Math.max(width * 0.60, 280),
                height:Math.max((width * 0.60) / 1.778, 157)}}/>}                
                <span className="title" style={{position: "relative", bottom:((width * 0.60) / 1.778)/3}}>{title}</span>
                <div className="overview">
                    <div className="summary">
                        <div className="description">
                            <StyledRating rating={vote_average}/>
                            <span>{release_date?.slice(0,4)}</span>
                        </div>
                        <span className="description">{overview}</span>
                    </div>
                    <div style={{width: "100%"}}>
                        <span className="description">Genres: {genreNames?.join(", ")}</span>
                    </div>
                </div>
            </div>
        </Modal>
    )

}

export default VideoPreview;