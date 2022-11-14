const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = '2298cca3c8d778d213c0a1a2dc3be3af';

const IMG_URL = 'http://openweathermap.org/img/wn';

function getCurrentWeatherApi(city){ 
    return `${API_URL}?q=${city}&lang=ro&units=metrics&appid=${API_KEY}`;
}

function getForecastWeatherApi(city) {
    return `${API_URL}/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
  }
  