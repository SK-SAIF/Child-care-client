import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div className="col-md-12">
            <img style={{width:"300px" ,height:"300px"}} src={review.photo} alt=""/>
            <h1>{review.name}</h1>
            <p>{review.description}</p>
        </div>
    );
};

export default ReviewCard;