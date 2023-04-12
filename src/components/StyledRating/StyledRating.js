import React from 'react';

const StyledRating = ({rating}) => {
    let style = {color: "red", marginRight: "5px"};
    if(rating > 4.9 && rating < 6.9){
        style.color = "orange";
    } else if (rating > 6.9){
        style.color = "green";
    }


    return (
        <span style={style}>{rating * 10}% Rating</span>
    )
}

export default StyledRating;