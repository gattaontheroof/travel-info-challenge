const kelvinToCelsius= (temp) => {
    const celsius = Math.round(temp-273.15);
    return  celsius + "°C"
}

export default kelvinToCelsius;