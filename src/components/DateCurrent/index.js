import React, { PureComponent } from 'react';
import moment from 'moment'
import PropTypes from 'prop-types';
import rAFTimeout from '../../_helpers/rAFTimeout';
import './index.css';

class DateCurrent extends PureComponent {
    constructor() {
      super();
      this.text = React.createRef();
    }
  
    animate() {
      rAFTimeout(() => this.text.current.classList.add('animate-in'), 400);
    }
  
    componentDidMount() {
      rAFTimeout(() => this.animate(), 350);
    }
  
    render() {
      return (
        <section className="date-current">
          <span ref={this.text} className="date-current__text">
            {moment(this.props.date).format('LLL')}
          </span>
        </section>
      )
    }
  }
  
  DateCurrent.propTypes = {
    date: PropTypes.string.isRequired
  };
  
  export default DateCurrent;