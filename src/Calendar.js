import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import createDateObjects from './createDateObjects';

export default class Calendar extends Component {
  static propTypes = {
    /** Week offset*/
    weekOffset: PropTypes.number.isRequired,
    /** The current date as a moment object */
    date: PropTypes.object,
    /** Function to render a day cell */
    renderDay: PropTypes.func,
    /** Called on next month click */
    onNextMonth: PropTypes.func,
    /** Called on prev month click */
    onPrevMonth: PropTypes.func,
    /** Called when some of the navigation controls are clicked */
    onChangeMonth: PropTypes.func,
    /** Called when a date is clicked */
    onPickDate: PropTypes.func
  };

  static defaultProps = {
    weekOffset: 0,
    renderDay: day => day.format('YYYY-MM-D')
  };

  constructor() {
    super();
    this.state = {};
  };

  componentWillMount() {
    this.componentWillReceiveProps(this.props);
  };

  componentWillReceiveProps (nextProps) {
    this.setDate(nextProps.date || moment());
  };

  setDate (date) {
    this.setState(state => Object.assign(state, { date }));
  };

  handleNextMonth = () => {
    const { onNextMonth, onChangeMonth } = this.props;

    if (onNextMonth) {
      return onNextMonth();
    }

    if (onChangeMonth) {
      onChangeMonth(this.state.date.clone().add(1, 'months'));
    }

    if (!onNextMonth && !onChangeMonth) {
      this.setDate(this.state.date.clone().add(1, 'months'));
    }
  };

  handlePrevMonth = () => {
    const { onPrevMonth, onChangeMonth } = this.props;

    if (onPrevMonth) {
      return onPrevMonth();
    }

    if (onChangeMonth) {
      onChangeMonth(this.state.date.clone().subtract(1, 'months'));
    }

    if (!onPrevMonth && !onChangeMonth) {
      this.setDate(this.state.date.clone().subtract(1, 'months'));
    }
  };

  render() {
    const {
      weekOffset,
      renderDay,
      onNextMonth,
      onPrevMonth,
      onPickDate,
      onChange
    } = this.props;

    const date = this.state.date;

    return (
      <div className="Calendar">
        <div className="Calendar-header">
          <button onClick={this.handlePrevMonth}>«</button>
          <div className="Calendar-header-currentDate">
            {date.format('MMMM YYYY')}
          </div>
          <button onClick={this.handleNextMonth}>»</button>
        </div>
        <div className="Calendar-grid">
          {createDateObjects(date, weekOffset).map((day, i) => (
            <div
              key={`day-${i}`}
              className={`Calendar-grid-item ${day.classNames || ''}`}
              onClick={e => onPickDate && onPickDate(day.day)}
            >
              {renderDay(day.day)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
