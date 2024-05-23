import React from "react";
import WeatherBox from "./WeatherBox";

function WeatherBoxList({ location, days }) {

    const renderedDays = days.map((day) => {
        return <WeatherBox {...day} location={location} key={new Date(day.date).getDay()} />
    });
  
    return (
        <div className="container text-center">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {renderedDays}
            </div>
        </div>
    );
  }
  
  export default WeatherBoxList;