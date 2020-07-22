export default class API {
  constructor() {
    this.BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL;
    this.API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    // this.API_URL = this.BASE_URL + "?key=" + this.API_KEY;
    this.lastWeather = {};
    this.forecast = {};
  }

  async _getCurrentWeather(locationIp) {
    try {
      const response = await fetch(this.BASE_URL + "current.json" + "?key=" + this.API_KEY + "&q=" + locationIp);
      const result = await response.json();
      this.lastWeather = result;
      console.log('API::_getCurrentWeather::RES =>> ', this.lastWeather);
    } catch (error) {
      throw new Error(`API::_getCurrentWeather::Error : ${error.message}`);
    }
  }

  async _getForecast(lat = 0, long = 0, days = 7) {
    try {
      const response = await fetch(this.BASE_URL + "forecast.json" + "?key=" + this.API_KEY + "&q=" + lat + "," + long + "&days=" + days);
      const result = await response.json();
      this.forecast = result;
      console.log('API::_getForecast::RES =>> ', this.forecast);
    } catch (error) {
      throw new Error(`API::_getForecast::Error : ${error.message}`);
    }
  }
}