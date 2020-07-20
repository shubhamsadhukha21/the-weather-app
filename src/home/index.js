import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import GPSLocation from '../components/GPSLocation';

class Home extends PureComponent {
    constructor() {
        super();    
        this.state = {
        //   currentForecast: 'hourly',
        //   forecastIndex: ['hourly', 'daily'],
        };
    }

    componentDidMount() {}

    render = () => (
        <Fragment>
            <GPSLocation onGPSLocationClick={() => {}} />
        </Fragment>
    );
}

Home.propTypes = {
    // foreCastHourly: PropTypes.array,
    // foreCastDaily: PropTypes.array,
    // updating: PropTypes.bool,
    // lastUpdate: PropTypes.string,
    // currentCondition: PropTypes.object,
    onGPSLocationClick: PropTypes.func,
    // onInfoClick: PropTypes.func,
    // onInfoClose: PropTypes.func,
    // onRefreshClick: PropTypes.func
  };

export default Home;