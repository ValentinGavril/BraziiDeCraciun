function displayForecastWeather(city) {

  fetch(getForecastWeatherApi(city))
    .then(res => res.json())
    .then(res => {
      console.log(res);
      const { list } = res;

      const mapDays = {};

      list.forEach(item => {
        const dayOfWeek = getDayOfTheWeek(item.dt);

        if (mapDays[dayOfWeek]) {
          mapDays[dayOfWeek].push(item);
        } else {
          mapDays[dayOfWeek] = [item];
        }

      });

      console.log(mapDays);
    })
    .catch(err => {
      console.log(err);
    });

}
