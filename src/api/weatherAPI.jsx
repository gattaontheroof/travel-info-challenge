import axios from 'axios';
import weatherData from '../../data/dummyWeatherData.json';


const searchWeatherData = async (location) => {

    // temporarily return json from file instead of API call
    //return weatherData.dublin;

    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
            params: {
                q: location,
                // units: 'metric',  // to return temperature in Celsius - commented out as converter will be used to calculated to Celsius
                appid: '03d9ee1eaed56b563904e0f452433b0a' // API key 
            }
        });

        return response.data; 
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null; 
    }
};

export default searchWeatherData;
