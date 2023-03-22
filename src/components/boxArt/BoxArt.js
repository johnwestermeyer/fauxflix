import React from "react";
import './BoxArt.css';

const BoxArt = ({imageURL}) => {
    return (
        <div>
            <image url={imageURL}/>
        </div>
    )
};

export default BoxArt;