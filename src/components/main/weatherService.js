const API_KEY = '5de27f425d76955a70dcde61b01a9569';
const getFormatterWeatherData = async(city, units="metric") => {
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}';

    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data);

    console.log(data);
}

export { getFormatterWeatherData };