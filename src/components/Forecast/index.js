import React, { PureComponent } from 'react';
import moment from 'moment';
import Swiper from 'swiper'
import PropTypes from 'prop-types';
import rAFTimeout from '../../_helpers/rAFTimeout';
import ForecastDay from './ForecastDay';
import 'swiper/swiper.scss';
import './index.css';


class Forecast extends PureComponent {
    constructor() {
      super();
      this.ForecastItems = [];
    //   this.forecastDays = [];
    //   this.icon = React.createRef();
    //   this.text = React.createRef();
      this.state = {
        currentForecastIndex: 0,
        currentForecast: {},
      }
      
      this.currentIndex = 0
      this.currentForecast = {};
    }
  
    animate() {
      rAFTimeout(() => this.prepareForecast(), 250);
      rAFTimeout(() => this.text.current.classList.add('animate-in'), 350);
    }
  
    componentDidMount() {
      // rAFTimeout(() => this.animate(), 350);
      this.initSwiper();
    
    }

    initSwiper() {
      this.ForecastItems = [...this.props.forecastDays];
      this.currentForecast = this.ForecastItems[this.currentIndex];
      console.log('INIT SWIPER => Current Forecast Item = ', this.currentForecast.day.condition.icon);

      // this.forecasts = [...document.querySelectorAll('.forecasts__period')];
      this.swiper = new Swiper('.swiper-container', {
          direction: 'horizontal',
          loop: false
      });
      this.swiper.on('slideChangeTransitionEnd', () => {
          // this.setState({ currentForecast: this.state.forecastIndex[this.swiper.activeIndex] });
          this.setState({
            currentForecastIndex: this.swiper.activeIndex,
            currentForecast: this.ForecastItems[this.swiper.activeIndex]
          });
          console.log('active index = ', this.swiper.activeIndex);
          this.currentIndex = this.swiper.activeIndex;
          this.currentForecast = this.ForecastItems[this.currentIndex];
      });
    }
  
    render() {
      // return (
      //   <div className="forecastItem">
      //     {
      //       this.props.forecastDays.map((item, index) => 
      //       <div className="forecast__item swiper-slide" key={`forecast-item-${index}`}>
      //         <ForecastDay
      //           key={`daily-${index}`}
      //           id={`daily-${index}`}
      //           title={moment(item.date).format('ddd')}
      //           icon={item.day.condition.icon}
      //           animationDelay={index}>
      //             {/* <div>
      //                 <ForeCastTemperature temperature={item.temperature.max} />
      //                 <ForeCastTemperature temperature={item.temperature.min} />
      //             </div>
      //             <RainProbability probability={item.rainProbability} /> */}
      //         </ForecastDay>
      //       </div>
      //       )
      //     }
      //   </div>
      // )
      return (
        <div className="forecast__item swiper-container">
          <ForecastDay
            title={moment(this.currentForecast.date).format('ddd')}
            icon={this.currentForecast.day && this.currentForecast.day.condition.icon}
            >
              {/* <div>
                  <ForeCastTemperature temperature={item.temperature.max} />
                  <ForeCastTemperature temperature={item.temperature.min} />
              </div>
              <RainProbability probability={item.rainProbability} /> */}
          </ForecastDay>
        </div>
      )
    }
  }
  
//   Forecast.propTypes = {
//     forecast: PropTypes.string.isRequired
//   };
  
  export default Forecast;