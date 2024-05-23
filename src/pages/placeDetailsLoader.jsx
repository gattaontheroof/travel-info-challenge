import searchWeatherData from '../api/weatherAPI';
import parseWeatherData from "../utils/weatherDataParser";
import searchHotelsData from '../api/hotelsAPI';
import parseHotelsData from '../utils/hotelsDataParser';

export async function placeDetailsLoader({request}) {

    // get the location from the query string
    const { searchParams } = new URL(request.url);
    const location = searchParams.get("location");

    // calling weatherAPI
    const weatherData = await searchWeatherData(location);
    console.log(weatherData);
    const days = parseWeatherData(weatherData);

    const today = days[0];
    days.shift(); // remove first element from the array
    
     // calling hotelsAPI
    const hotelsData = await searchHotelsData(location);
    console.log(hotelsData);
    const hotels = parseHotelsData(hotelsData)
    //console.log(hotels);

    return {
        location: location,
        today: today,
        subsequentDays: days,
        hotels: hotels
    }
}