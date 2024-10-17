const key = 'e2ef82eb100b427fbe7101411240908';

const getCity = async (city) => {

    const base = "http://api.weatherapi.com/v1/current.json";
    const query = `?key=${key}&q=${city}&aqi=no`;
    const response = await fetch(base+query);
    const data = await response.json();
    return {
            'isDay' : data.current.is_day,
            'weatherText' : data.current.condition.text,
            'degreesC' : data.current.temp_c,
            'iconLink' : data.current.condition.icon
        };
}