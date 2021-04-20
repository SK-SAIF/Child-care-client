import React from 'react';
import ladyTutor from '../../images/ladyTutor.jpg';
import './WhyChooseUs.css';
const WhyChooseUs = () => {
    return (
        <section className="text-center container whyChooseUs">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <img style={{ width: "100%", height: "100%",borderRadius:"40px",padding:"10px" }} src={ladyTutor} alt="" />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div style={{ marginTop: "50px", marginBottom: "50px" }}><h1>whyChooseUs</h1></div>
                    <ul>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;