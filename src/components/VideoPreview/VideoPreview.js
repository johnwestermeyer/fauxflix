import React from 'react';
import ReactPlayer from "react-player";
import Modal from 'react-modal'
import './VideoPreview.scss';

const VideoPreview = ({trailer, title, overview, showPreview, setShowPreview, width}) => {

    return (
        <Modal
            isOpen={showPreview ? true : false}
            onRequestClose={()=>setShowPreview(false)}
            className="videoPreview"
            overlayClassName="overlay"
            ariaHideApp={false}
            >
            <div className="videoPreview">
                {trailer !== null && <ReactPlayer 
                    url={`https://www.youtube.com/watch?v=${trailer}`}
                    playing={true}
                    controls={false}
                    width={width * 0.60}
                    height={(width * 0.60) / 1.778}
                    className="videoFrame"
                    config={{
                        youtube: {
                          playerVars: { controls: 0, modestbranding: 1 },
                        },
                    }}
                />}                
                <span className="title" style={{position: "relative", bottom:((width * 0.60) / 1.778)/3}}>{title}</span>
                <div className="descBox">
                    <p className="overview">{overview}</p>
                </div>
                <div class="bottomFiller">
                </div>
            </div>
        </Modal>
    )

}

export default VideoPreview;