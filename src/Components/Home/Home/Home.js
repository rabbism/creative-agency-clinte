import React from 'react';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import Contact from '../Contact/Contact';
import FeedBack from '../Feedback/FeedBack';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <CarouselSlider></CarouselSlider>
            <FeedBack></FeedBack>
            <Contact></Contact>
        </div>
    );
};

export default Home;