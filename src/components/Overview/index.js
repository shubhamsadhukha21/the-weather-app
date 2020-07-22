import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import rAFTimeout from '../../_helpers/rAFTimeout';
import './index.css';


class Overview extends PureComponent {
    constructor() {
      super();
      this.status = React.createRef();
      this.value = React.createRef();
      this.unit = React.createRef();
      this.icon = React.createRef();
    }
  
    animate() {
        rAFTimeout(() => this.icon.current.classList.add('animate-in'), 150);
        rAFTimeout(() => this.status.current.classList.add('animate-in'), 150);
        rAFTimeout(() => this.value.current.classList.add('animate-in'), 250);
        rAFTimeout(() => this.unit.current.classList.add('animate-in'), 300);
    }
  
    componentDidMount() {
      rAFTimeout(() => this.animate(), 350);
    }
  
    render() {
      return (
        <div className="overview">
            <img ref={this.icon} className="overview__icon" src={this.props.overviewIcon} />
            <span ref={this.status} className="temperature__status">{this.props.info}</span>
            <div className="temperature">
                <span ref={this.value} className="temperature__value">{this.props.temperature}</span>
                <div ref={this.unit} className="temperature__unit">
                    <span className="temperature__unit-dot"></span>
                    <span className="temperature__unit-letter">c</span>
                </div>
            </div>
            {/* <span ref={this.temperature} className="overview__temperature">{this.props.temperature}</span> */}
        </div>
      )
    }
  }
  
  Overview.propTypes = {
    info: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    overviewIcon: PropTypes.string.isRequired,
  };
  
  export default Overview;