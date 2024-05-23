import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

import Header from "../components/PlaceDetails/Header";
import TodaysWeather from "../components/PlaceDetails/TodaysWeather";
import WeatherBoxList from "../components/PlaceDetails/WeatherBoxList";
import MapBox from "../components/PlaceDetails/MapBox";
import HotelCarousel from "../components/PlaceDetails/HotelsCarousel";

function PlaceDetails() {

    const { location, today, subsequentDays, hotels } = useLoaderData();
    const [favouriteLocations, setFavouriteLocations] = useLocalStorage("favouriteLocations", []);

    const addToFavourites = (locationToAdd) => {

        const updatedFavouriteLocations = [...favouriteLocations, locationToAdd];
     
        setFavouriteLocations(updatedFavouriteLocations);
    };

    return (
        <>
            <Header onBookmark={addToFavourites} favouriteLocations={favouriteLocations} location={location} />

            <TodaysWeather location={location} {...today} />
            
            <WeatherBoxList location={location} days={subsequentDays}/>
            
            <HotelCarousel hotels={hotels}/> 
            {/* 
            
            <MapBox/>
           
            

            <div className="container text-center">
                <p>Hotels</p>
            </div> 
            
            */}
    
        </>
    );
}

export default PlaceDetails;
