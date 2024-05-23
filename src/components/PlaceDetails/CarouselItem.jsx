import React from "react";

function CarouselItem({title, image, primaryInfo, secondaryInfo, provider, active}) {
    
    return (
        <div className={`${active ? 'carousel-item active' : 'carousel-item'}`}>
            <h5>{title}</h5>
            <p>{primaryInfo}, {secondaryInfo},  Book with:   {provider}</p>
            <img src={image} className="d-block w-100" alt="..."/>
        </div>
    );
  }
  
  export default CarouselItem;