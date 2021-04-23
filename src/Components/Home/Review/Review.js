import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [reviewData,setReviewData]=useState([]);
    useEffect(()=>{
        fetch('https://cryptic-wildwood-03747.herokuapp.com/allReview')
        .then(res=>res.json())
        .then(data=>setReviewData(data))
    },[]);
    return (
        <section className="container mt-5 mb-5">
            <h1 style={{color:"tomato",backgroundColor:"snow"}} className="text-center">WHAT OUR PARENTS SAY:</h1>
            <div className="row justify-content-md-center mt-5">
                {
                    reviewData.map(review=><ReviewCard review={review}></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Review;