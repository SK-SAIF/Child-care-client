import React from 'react';
import p1 from '../../../images/parent1.jpg';
import p2 from '../../../images/parent2.jpg';
import p3 from '../../../images/parent3.jpg';
import ReviewCard from '../ReviewCard/ReviewCard';
const reviewData=[
    {
        name:'Alison',
        description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nobis doloremque quisquam totam fuga. Dicta facere dolores quam nesciunt accusantium.`,
        photo:`${p1}`
    },
    {
        name:'Maria',
        description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nobis doloremque quisquam totam fuga. Dicta facere dolores quam nesciunt accusantium.`,
        photo:`${p2}`
    },
    {
        name:'Kelly',
        description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nobis doloremque quisquam totam fuga. Dicta facere dolores quam nesciunt accusantium.`,
        photo:`${p3}`
    }
]
const Review = () => {
    return (
        <section className="container">
            <h1>WHAT OUR PARENTS SAY:</h1>
            <div className="row">
                {
                    reviewData.map(review=><ReviewCard review={review}></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Review;