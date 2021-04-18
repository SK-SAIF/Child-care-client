import React from 'react';
import ladyTutor from '../../images/ladyTutor.jpg';
import './WhyChooseUs.css';
const WhyChooseUs = () => {
    return (
       <section className="row text-center whyChooseUs">
           
            <div className="col-md-6">
                <img style={{width:"100%"}} src={ladyTutor} alt=""/>
            </div>
            <div style={{border:"1px solid red",padding:"20px"}} className="col-md-6">
            <div style={{marginTop:"50px",marginBottom:"50px"}}><h1>whyChooseUs</h1></div>
                <ul>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                </ul>
                </div>
       </section>
    );
};

export default WhyChooseUs;