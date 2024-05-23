import { describe, test, expect } from 'vitest';
import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherBoxList from "../../src/components/PlaceDetails/WeatherBoxList";

describe("WeatherBoxList", () => {
    test("renders WeatherBox components for each day", () => {
      const location = "New York";
      const days = [
        { date: "2024-03-10", temp: 15, weather_desc: "Sunny", icon: "01" },
        { date: "2024-03-11", temp: 18, weather_desc: "Cloudy", icon: "02" },
        { date: "2024-03-12", temp: 20, weather_desc: "Rainy", icon: "03" },
      ];
  
      render(<WeatherBoxList location={location} days={days} />);
  
      days.forEach((day) => {
        const weatherDescriptionHeader = screen.getByText(day.weather_desc);
        expect(weatherDescriptionHeader).toBeInTheDocument();
      });
    });
  });
  
