const WeatherInfo = ({ city, temp, feels, humidity, wind, icon }) => {
    return (
        <section>
            <h2>{city}</h2>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt={city} />
            <h3>Temperatuur: {Math.round(temp)} graden</h3>
            <h3>Gevoelstemperatuur: {Math.round(feels)}graden</h3>
            <h3>Luchtvochtigheid: {Math.round(humidity)}%</h3>
            <h3>Windsnelheid: {Math.round(wind)} m/s</h3>
        </section>
    );
}

export default WeatherInfo;