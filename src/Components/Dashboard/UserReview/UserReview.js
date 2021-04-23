import React, { useEffect, useState } from 'react';

const UserReview = () => {
    const [review, setReview] = useState({
        name: '',
        age:'',
        profession:'',
        reviewDescription: ''
    });

    const handleName = event => {
        const newData = { ...review };
        newData.name = event.target.value;
        setReview(newData);
    }
    const handleReviewDescription = event => {
        const newData = { ...review };
        newData.reviewDescription = event.target.value;
        setReview(newData);
    }
    const handleAge = event => {
        const newData = { ...review };
        newData.age = event.target.value;
        setReview(newData);
    }
    const handleProfession = event => {
        const newData = { ...review };
        newData.profession = event.target.value;
        setReview(newData);
    }

    const handleSubmitButton = () => {
        console.log(review);
        fetch('https://cryptic-wildwood-03747.herokuapp.com/addReview', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(result => {
                    if (result === true) {
                        alert("Your Review was confirmed")
                    }
                })
    }
    return (
        <div>
            <input type="text" name="name" onBlur={handleName} placeholder="Your Name" />
            <br />
            <input type="text" name="age" onBlur={handleAge} placeholder="Your Age" />
            <br/>
            <input type="text" name="profession" onBlur={handleProfession} placeholder="Your Profession" />
            <br/>
            <input type="text" name="review" onBlur={handleReviewDescription} placeholder="Review" />
            <br />
            <button onClick={handleSubmitButton}>Submit</button>
        </div>
    );
};

export default UserReview;