import React, { Component } from 'react';
import Loader from './components/Loader';
import Home from './home';
import API from './api';
import Error from './components/Error';
import rAFTimeout from './_helpers/rAFTimeout';
import './App.css';

require('dotenv').config();
console.log('App.js>>>BASE URL => ', process.env.REACT_APP_WEATHER_API_BASE_URL);


class App extends Component {
  constructor() {
    super();
    this.api = new API();
    this.loader = <h1>Loading...</h1>;
    // this.loader = React.createRef();
    // this.onInfoClick = this.onInfoClick.bind(this);
    // this.onInfoClose = this.onInfoClose.bind(this);
    // this.onRefreshClick = this.onRefreshClick.bind(this);
    // this.onGPSLocationClick = this.onGPSLocationClick.bind(this);

    // this.storage = new Storage(process.env.REACT_APP_DARK_SKY_API_CODE);
    // this.state = { ...this.storage.data };
  }

  async init() {
    rAFTimeout(() => this.loader.current.animateIn(), 100);

    await this.storage.fetch();

    rAFTimeout(() => {
      this.loader.current.animateOut();

      rAFTimeout(() => this.updatedState(this.storage), 600);
    }, 1000);
  }

  updatedState({ ipGeoLocation, data }) {
    if (ipGeoLocation.data && ipGeoLocation.data.error) {
      this.setState({
        error: ipGeoLocation.data.error,
        dataLoaded: true,
      });
    } else {
      this.setState({
        ...data,
        showInfo: false,
        dataLoaded: true,
        updating: false,
      });
    }
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
      <Home></Home>
    )
  }

  render = () => (
    // <div className="App">
    //     {
    //       !this.state.dataLoaded ? <Loader ref={this.loader} /> : this.display()
    //     }
    // </div>
    <div className="App">
        {
          this.display()
        }
    </div>
  )
}

export default App
