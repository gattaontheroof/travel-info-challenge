import React from "react";
import formatDate from "../../utils/dateFormatter";
import kelvinToCelsius from "../../utils/temperatureFormatter";

function WeatherBox({location, date, icon, weather_desc, temp}) {
    const formattedDate = formatDate(date);
    const {day, month, dayOfWeek, monthName} = formattedDate;
    
    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12" id="weather-box"> 
        <div className="card" id="weather-card">
        <h5 className="card-header">{`${dayOfWeek}`}</h5>
            <img src={`/assets/weather-icons/${icon}.svg`} />

            <div className="card-body">
                <h3 className="card-text">{location}</h3>
                <h3 className="card-text">{kelvinToCelsius(temp)}</h3>
                <h5 className="card-text">{weather_desc}</h5>
            </div>
        </div>
    </div>
    );
  }
  
  export default WeatherBox;