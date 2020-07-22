import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import rAFTimeout from '../../../_helpers/rAFTimeout';
import './index.css';


class ForecastDay extends PureComponent {
    constructor() {
      super();
      this.icon = React.createRef();
    }
  
    animate() {
      rAFTimeout(() => this.icon.current.classList.add('animate-in'), 350);
    }
  
    componentDidMount() {
      rAFTimeout(() => this.animate(), 350);
    }
  
    render() {
      return (
        <div key={`daily-${this.props.title}`} className="forecastItem swiper-slide">
            <p className="forecastItem__title">{this.props.title}</p>
            <img ref={this.icon} className="forecastItem__icon" src={this.props.icon} />
        </div>
      )
    }
  }
  
//   Forecast.propTypes = {
//     forecast: PropTypes.string.isRequired
//   };
  
  export default ForecastDay;