import React from 'react';
import Footer from '../../Footer/Footer';
import PaymentCard from '../../Payment/PaymentCard/PaymentCard';
import Teachers from '../../Teachers/Teachers';
import WhyChooseUs from '../../WhyChooseUs/WhyChooseUs';
import FrontBanner from '../frontBanner/FrontBanner';
import Navbar from '../Navbar/Navbar';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    
    return (
        <div>
            
            <Navbar></Navbar>
            <FrontBanner></FrontBanner>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <Teachers></Teachers>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;