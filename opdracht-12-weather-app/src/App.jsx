import { useState, useEffect } from 'react';
import WeatherInfo from './components/weatherInfo';

const App = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("Toronto");
  const apiKey = "804330b75fed300abd6c6aeee6aa1b50"

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      console.log(data)
      setWeather(data);
    };

    fetchWeather();
  }, []);

  return (
    <ul>
 {weather ? (
      <WeatherInfo
        city={weather.name}
        temp={weather.main.temp}
        feels={weather.main.feels_like}
        humidity={weather.main.humidity}
        icon={weather.weather[0].icon}
        wind={weather.wind.speed}

      />
 ) : (
  <p>Het weer is aan het laden.</p>
 )}
    </ul>
  );
};

export default App;