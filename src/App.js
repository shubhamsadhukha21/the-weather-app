import React, { Component } from 'react';
import Loader from './components/Loader';
import Home from './home';
import API from './api';
import Error from './components/Error';
import rAFTimeout from './_helpers/rAFTimeout';
import IpFetcher from './_helpers/ip_fetch';
import './App.css';

require('dotenv').config();


class App extends Component {
  constructor() {
    super();
    this.api = new API();
    this.ipFetcher = new IpFetcher();
    this.loader = <h1>Loading...</h1>;
    // this.loader = React.createRef();
    // this.onInfoClick = this.onInfoClick.bind(this);
    // this.onInfoClose = this.onInfoClose.bind(this);
    // this.onRefreshClick = this.onRefreshClick.bind(this);
    // this.onGPSLocationClick = this.onGPSLocationClick.bind(this);

    // this.storage = new Storage(process.env.REACT_APP_DARK_SKY_API_CODE);
    this.state = { ip: "", currentLocation: {}, currentWeather: {} };
  }

  componentDidMount() {
    this.init();
  }

  async init() {
    // rAFTimeout(() => this.loader.current.animateIn(), 100);

    await this.updateIP();
    await this.getCurrentWeather();
    rAFTimeout(() => {
      // this.loader.current.animateOut();

      rAFTimeout(() => this.updatedState(), 600);
    }, 1000);
  }

  updatedState() {
    if (this.state.ip !== "" && this.state.currentWeather && this.state.currentWeather.location) {
      this.setState({
        error: "",
        dataLoaded: true,
      });
    } else {
      this.setState({
        showInfo: false,
        dataLoaded: true,
        updating: false,
      });
    }
  }

  async updateIP() {
    if (localStorage.getItem('ip')) {
      this.ipFetcher.ip = localStorage.getItem('ip');
    } else {
      await this.ipFetcher.fetch();
      localStorage.setItem('ip', this.ipFetcher.ip);
    }
    this.setState({
      ip: this.ipFetcher.ip
    });
  }

  async getCurrentWeather() {
    if (localStorage.getItem('lastWeather')) {
      try {
        this.api.lastWeather = JSON.parse(localStorage.getItem('lastWeather'));
      } catch (error) {
        throw new Error(`JSON parse error: ${error.message}`);
      }
    } else {
      await this.api._getCurrentWeather(this.state.ip)
      localStorage.setItem('lastWeather', JSON.stringify(this.api.lastWeather));
    }
    this.setState({
      currentWeather: this.api.lastWeather.current,
      currentLocation: this.api.lastWeather.location,
    });
    console.log('APP STATE => ', this.state);
  }

  display() {
    // return (this.state.error ? this.errorReachLimit() : this.displayHome());
    return (this.displayHome());
  }

  errorReachLimit() {
    return <Error/>
  }

  displayHome() {
    return (
      <Home location={this.state.currentLocation}></Home>
    )
  }

  render = () => (
    <div className="App">
        {
          !this.state.dataLoaded ? this.loader : this.display()
        }
    </div>
  )
}

export default App
