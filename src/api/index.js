export default class API {
  constructor() {
    this.BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL;
    this.API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    // this.API_URL = this.BASE_URL + "?key=" + this.API_KEY;
    this.lastWeather = {};
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
}