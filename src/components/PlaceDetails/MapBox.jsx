import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";





const MapBox= () => {
    return (
          <div className="container-fluid" id = "map-container">
            <div className="card text-bg-dark" id="todays-weather-card"></div>
              <p>Map</p>
              <img 
              src=" https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" 
              className="map-img" alt="map"/>
          </div>
  );
};

export default MapBox;