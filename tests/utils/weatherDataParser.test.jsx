import { describe, test, expect } from 'vitest';
import parseWeatherData from "../../src/utils/weatherDataParser";

/* 
 * The Following Tests Were Generated using Copilot
 * This test is to check if the parseWeatherData function correctly parses the weather data
 * returned from the API
 */
describe('parseWeatherData', () => {
  it('should correctly parse weather data', () => {
    const data = {
      list: [
        {
          dt_txt: '2022-01-01 15:00',
          weather: [{ description: 'clear sky', icon: '01d' }],
          main: { temp: 273.15 },
        },
        {
          dt_txt: '2022-01-02 15:00',
          weather: [{ description: 'few clouds', icon: '02d' }],
          main: { temp: 274.15 },
        },
        {
          dt_txt: '2022-01-03 15:00',
          weather: [{ description: 'scattered clouds', icon: '03d' }],
          main: { temp: 275.15 },
        },
        {
          dt_txt: '2022-01-04 15:00',
          weather: [{ description: 'broken clouds', icon: '04d' }],
          main: { temp: 276.15 },
        },
        {
          dt_txt: '2022-01-05 15:00',
          weather: [{ description: 'shower rain', icon: '09d' }],
          main: { temp: 277.15 },
        },
      ],
    };
    const result = parseWeatherData(data);
    expect(result).toEqual([
      {
        date: '2022-01-01 15:00',
        weather_desc: 'clear sky',
        icon: '01d',
        temp: 273.15,
      },
      {
        date: '2022-01-02 15:00',
        weather_desc: 'few clouds',
        icon: '02d',
        temp: 274.15,
      },
      {
        date: '2022-01-03 15:00',
        weather_desc: 'scattered clouds',
        icon: '03d',
        temp: 275.15,
      },
      {
        date: '2022-01-04 15:00',
        weather_desc: 'broken clouds',
        icon: '04d',
        temp: 276.15,
      },
      {
        date: '2022-01-05 15:00',
        weather_desc: 'shower rain',
        icon: '09d',
        temp: 277.15,
      },
    ]);
  });
});