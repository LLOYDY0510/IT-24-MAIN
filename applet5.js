class WeatherApp {
  constructor(apiKey) {
      this.apiKey = apiKey;
      //Text Input
      this.cityInput = document.getElementById('cityInput');
      this.getWeatherBtn = document.getElementById('getWeatherBtn');

      this.getLocationBtn = document.getElementById('getLocationBtn');