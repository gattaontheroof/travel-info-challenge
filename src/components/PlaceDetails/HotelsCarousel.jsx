import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselItem from './CarouselItem';

const HotelCarousel = ({hotels}) => {

  const renderedCarouselItems = hotels.map((hotel, index) => {
    return <CarouselItem {...hotel} active={index==0 ? true : false} key={hotel.title} />
  });

  return (

        <div className="container" id="hotel_carousel">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {renderedCarouselItems}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> 
    
  );
};

export default HotelCarousel;