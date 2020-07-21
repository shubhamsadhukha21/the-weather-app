export default class API {
  constructor() {
    this.BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL;
    this.API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    // this.API_URL = this.BASE_URL + "?key=" + this.API_KEY;
  }

  async _getCurrentWeather(locationIp) {
    fetch(this.BASE_URL + "current.json" + "?key=" + this.API_KEY + "&q=" + locationIp)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('RES =>> ', result);
          return result;
        },
        (error) => {
          console.log('ERROR =>> ', error);
          return { location: {}, current: {} };
        }
      )
      .catch((error) => {
        console.log('ERROR catch block =>> ', error);
        return { location: {}, current: {} };
      })
  }
}