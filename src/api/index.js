export default class API {
    constructor() {
        this.BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL;
        console.log('API>>BASE URL => ', this.BASE_URL);
      }
}