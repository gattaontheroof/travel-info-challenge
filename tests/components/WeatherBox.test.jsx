import { describe, test, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherBox from '../../src/components/PlaceDetails/WeatherBox';

describe('Tests for WeatherBox', () => {
    
    test("renders WeatherBox components for today", () => {
        const location = "New York";
        const today = { 
          date: "2024-03-10", 
          temp: 15, 
          weather_desc: "Sunny", 
          icon: "01" 
        };
    
        render(<WeatherBox location={location} date={today.date} icon={today.icon} weather_desc={today.weather_desc} temp={today.temp}/>);
    
        const weatherDescriptionHeaderElement = screen.getByText(today.weather_desc);
        expect(weatherDescriptionHeaderElement).toBeInTheDocument();

        const locationHeaderElement = screen.getByText(location);
        expect(locationHeaderElement).toBeInTheDocument();
      });
    });
    