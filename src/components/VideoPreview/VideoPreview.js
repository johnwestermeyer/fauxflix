import React from 'react';
import ReactPlayer from "react-player";
import Modal from 'react-modal'
import './VideoPreview.scss';

const VideoPreview = ({trailer, title, overview, showPreview, setShowPreview}) => {
    return (
        <Modal
            isOpen={showPreview}
            onRequestClose={()=>setShowPreview(false)}
            className="videoPreview"
            >
            <div className="videoPreview">
                {trailer !== null && <ReactPlayer 
                    url={`https://www.youtube.com/watch?v=${trailer}`}
                    playing={true}
                />}
                <p>{title}</p>
                <p>{overview}</p>
            </div>
        </Modal>
    )

}

export default VideoPreview;