import axios from 'axios';
import searchWeatherData from '../../src/api/weatherAPI.jsx'

// Mocking axios.get to return a predefined response
vi.mock('axios');

describe('searchWeatherData', () => {
  it('fetches weather data from the API', async () => {
    // Mock response data from the API
    const mockResponse = {
        data: {
          dublin: {
            cod: '200',
            message: 0,
            cnt: 40,
            list: [
              {
                dt: 1707501600,
                main: {
                  temp: 280.75,
                  feels_like: 280.75,
                  temp_min: 280.75,
                  temp_max: 281.63,
                  pressure: 1022,
                  sea_level: 1022,
                  ground_level: 1007,
                  humidity: 88,
                  temp_kf: -0.88,
                },
                weather: [
                  {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                  },
                ],
                clouds: {
                  all: 100,
                },
                wind: {
                  speed: 0.3,
                  deg: 17,
                  gust: 0.33,
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: 'd',
                },
                dt_txt: '2024-02-09 18:00:00',
              },
            ],
          },
        },
      };
      

    // Mock axios.get implementation to return mockResponse
    axios.get.mockResolvedValue(mockResponse);

    // Call the searchWeatherData function with a location
    const location = 'Dublin';
    const weatherData = await searchWeatherData(location);

    // Check if axios.get was called with the correct parameters
    expect(axios.get).toHaveBeenCalledWith('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
        q: location,
        appid: '03d9ee1eaed56b563904e0f452433b0a',
      },
    });

    // Check if the function returns the expected weather data
    expect(weatherData).toEqual(mockResponse.data);
  });

  it('handles errors when fetching weather data', async () => {
    // Mock axios.get to throw an error
    axios.get.mockRejectedValue(new Error('Network error'));

    // Call the searchWeatherData function with a location
    const location = 'Dublin';
    const weatherData = await searchWeatherData(location);

    // Check if the function returns null when an error occurs
    expect(weatherData).toBeNull();
  });
});
