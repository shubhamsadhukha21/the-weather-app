import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Location from '../components/Location';
import DateCurrent from '../components/DateCurrent';

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
            <div className="stretch"></div>
        </Fragment>
    );
}

Home.propTypes = {
    // foreCastHourly: PropTypes.array,
    // foreCastDaily: PropTypes.array,
    // updating: PropTypes.bool,
    // lastUpdate: PropTypes.string,
    // currentCondition: PropTypes.object,
    // onGPSLocationClick: PropTypes.func,
    // onInfoClick: PropTypes.func,
    // onInfoClose: PropTypes.func,
    // onRefreshClick: PropTypes.func
  };

export default Home;