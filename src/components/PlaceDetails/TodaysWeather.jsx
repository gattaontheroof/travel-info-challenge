import React from "react";
import formatDate from "../../utils/dateFormatter";
import kelvinToCelsius from "../../utils/temperatureFormatter";


const TodaysWeather = ({ location, date, icon, weather_desc, temp }) => {
  const formattedDate = formatDate(date);
  const {day, month, dayOfWeek, monthName} = formattedDate;

  return (
    <div className="card mb-3 mx-auto" id="todays-weather-box">
      <div className="row g-0">
      <h5 className="card-header">Today's weather:</h5>
        <div className="col-md-4">
          <img
            src={`/assets/weather-icons/${icon}.svg`}
            className="card-img"
            id="placeholder"
            alt="todays_weather_forecast"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">{location}</h1>
          
            <p>Click to add to favourites </p>
            <h3 className="card-text">{`${dayOfWeek} ${day} ${monthName}`}</h3>
            <h4 className="card-text">{kelvinToCelsius(temp)}</h4>
            <h5 className="card-text">{weather_desc}</h5>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodaysWeather;
