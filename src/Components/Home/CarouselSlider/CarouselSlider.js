
import carousel from '../../../images/carousel-5.png';
import carouse2 from '../../../images/carousel-3.png';
import carouse3 from '../../../images/carousel-4.png';
import carouse4 from '../../../images/carousel-1.png';
import carouse5 from '../../../images/carousel-2.png';
import React from 'react';
import ReactDOM from 'react-dom';
import './CarouselSlider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselSlider = () => {
    return (

        <section className="carousel-main container">
            <h1 className="text-white my-5">Here are some of <span style={{ color: '#7AB259' }}>our works</span></h1>
            <Carousel className='w-75 mx-auto'>

                <div className="carousel-inner-style">
                    <img src={carousel} alt=""/>
                </div>
                <div className="carousel-inner-style">
                    <img src={carouse2} alt=""/>
                </div>
                <div className="carousel-inner-style">
                    <img src={carouse3} alt=""/>
                </div>
                <div className="carousel-inner-style">
                    <img src={carouse4} alt=""/>
                </div>
                <div className="carousel-inner-style">
                    <img src={carouse5} alt=""/>
                </div>

            </Carousel>
        </section>


    );
};

export default CarouselSlider;
