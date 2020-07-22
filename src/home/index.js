import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Location from '../components/Location';
import DateCurrent from '../components/DateCurrent';
import Overview from '../components/Overview';
import Forecast from '../components/Forecast';

class Home extends PureComponent {
    constructor() {
        super();    
        // this.state = {
        //   currentLocation: this.props.location,
        //   currentDate: (new Date()).toISOString(),
        // };
    }

    componentDidMount() {}

    render = () => (
        <Fragment>
            <Navbar />
            <Location location={this.props.location.name} />
            <DateCurrent date={this.props.location.localtime} />
            <Overview info={this.props.weather.condition.text} temperature={this.props.weather.temp_c} overviewIcon={this.props.weather.condition.icon}/>
            <section className="forecasts">
                <div className="swiper-wrapper">
                    <Forecast forecastDays={this.props.forecast.forecastday} />
                </div>
            </section>
            {/* <section className="forecasts">
                <Forecast forecastDays={this.props.forecast.forecastday} />
            </section> */}
            <div className="stretch"></div>
        </Fragment>
    );
}

Home.propTypes = {
    // foreCastHourly: PropTypes.array,
    // foreCastDaily: PropTypes.array,
    // updating: PropTypes.bool,
    // lastUpdate: PropTypes.string,
    location: PropTypes.object,
    weather: PropTypes.object,
    // onGPSLocationClick: PropTypes.func,
    // onInfoClick: PropTypes.func,
    // onInfoClose: PropTypes.func,
    // onRefreshClick: PropTypes.func
  };

export default Home;