import React from 'react';
import './ReviewCard.css';
const ReviewCard = ({review}) => {
    return (
        <div className="text-center col-sm-12 col-md-12 col-lg-12 review-card mb-5">
            <h3>``{review.reviewDescription}``</h3>
            <br/>
            <h5 style={{color:"whiteSmoke"}}>------{review.name}------</h5>
            <p style={{color:"white"}}>{review.age} years old</p>
            <p style={{color:"white"}}>Profession:{review.profession}</p>
        </div>
    );
};

export default ReviewCard;